local game_started_commands = {
    "lact cli profile set Gaming",
    "caelestia shell gameMode enable",
    "sudo /usr/bin/scxctl switch --sched lavd",
    "echo 'Game Started' | cortana notify"
}

local game_ended_commands = {
    "lact cli profile set Default",
    "caelestia shell gameMode disable",
    "sudo /usr/bin/scxctl restore",
    "echo 'Game Stopped' | cortana notify"
}

local end_delay_ms = 2500

local process_patterns = {
    "^steam_app_%d+$",
    "^gamescope$",
}

local max_parent_depth = 12

local function run_hooks(commands)
    for _, command in ipairs(commands) do
        if command:match("%S") then
            hl.exec_cmd(command)
        end
    end
end

local function matches_process_name(name)
    if not name then return false end

    for _, pattern in ipairs(process_patterns) do
        if name:match(pattern) then
            return true
        end
    end

    return false
end

local function read_process_name(pid)
    local file = io.open("/proc/" .. pid .. "/comm", "r")
    if not file then return nil end

    local name = file:read("*l")
    file:close()
    return name
end

local function read_parent_pid(pid)
    local file = io.open("/proc/" .. pid .. "/status", "r")
    if not file then return nil end

    local parent_pid
    for line in file:lines() do
        parent_pid = line:match("^PPid:%s*(%d+)")
        if parent_pid then break end
    end
    file:close()

    return tonumber(parent_pid)
end

local function is_game_window(win)
    if matches_process_name(win.class) or matches_process_name(win.initial_class) then
        return true
    end

    local pid = tonumber(win.pid)
    local seen = {}

    for _ = 1, max_parent_depth do
        if not pid or pid <= 1 or seen[pid] then break end
        seen[pid] = true

        if matches_process_name(read_process_name(pid)) then
            return true
        end

        pid = read_parent_pid(pid)
    end

    return false
end

local function window_key(win)
    return win.stable_id or win.address or win.pid
end

local tracked_windows = {}
local game_active = false
local end_timer

local function cancel_pending_end()
    if end_timer then
        end_timer:set_enabled(false)
    end
end

local function schedule_end()
    if not game_active then return end
    end_timer:set_enabled(true)
end

end_timer = hl.timer(function()
    end_timer:set_enabled(false)

    if not game_active or next(tracked_windows) ~= nil then
        return
    end

    game_active = false
    run_hooks(game_ended_commands)
end, { timeout = end_delay_ms, type = "oneshot" })
end_timer:set_enabled(false)

local function track_window(win)
    if not is_game_window(win) then return end

    local key = window_key(win)
    if key == nil or tracked_windows[key] then return end

    tracked_windows[key] = true
    cancel_pending_end()

    if not game_active then
        game_active = true
        run_hooks(game_started_commands)
    end
end

local function untrack_window(win)
    local key = window_key(win)
    if key == nil or not tracked_windows[key] then return end

    tracked_windows[key] = nil
    if next(tracked_windows) == nil then
        schedule_end()
    end
end

for _, win in ipairs(hl.get_windows()) do
    if is_game_window(win) then
        local key = window_key(win)
        if key ~= nil then tracked_windows[key] = true end
    end
end
game_active = next(tracked_windows) ~= nil

hl.on("window.open", track_window)
hl.on("window.close", untrack_window)