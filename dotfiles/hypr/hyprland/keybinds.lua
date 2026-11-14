local vars = require("variables")
local fn   = require("utils.functions")
local smw  = require("utils.workspaces")

require("utils.keybinds")

-- Kill/restart
create_bind(vars.kbKillRestart, hl.dsp.exec_cmd("systemctl --user stop desktop-shell"))
create_bind(
    vars.kbKillRestart,
    hl.dsp.exec_cmd("systemctl --user restart desktop-shell"),
    hold
)

-- Monitor
create_bind(combine(vars.kbFocus, "TAB"), hl.dsp.focus({ monitor = "+1" }))
create_bind(combine(vars.kbMove, "TAB"), hl.dsp.window.move({ monitor = "+1" }))
create_bind(combine(vars.kbFocus, "CTRL + TAB"), fn.swap_monitor_windows)

-- Workspace and Windows
for i = 1, smw.get_amount_of_workspaces() do
    local key = tostring(i)
    create_bind(combine(vars.kbFocus, key), smw.workspace(i), repeating_unless_mouse)
    create_bind(combine(vars.kbMove, key), smw.move_to_workspace(i), repeating_unless_mouse)
end

for _, key in ipairs({ "mouse_up", "up", "W", }) do
    create_bind(combine(vars.kbFocus, key), fn.focus_workspace("-1"), repeating_unless_mouse)
    create_bind(combine(vars.kbMove, key), smw.move_to_workspace("-1"), repeating_unless_mouse)
    create_bind(combine(vars.kbMoveWin, key), hl.dsp.window.move({ direction = "up" }), repeating_unless_mouse)
end

for _, key in ipairs({ "mouse_down", "down", "S" }) do
    create_bind(combine(vars.kbFocus, key), fn.focus_workspace("+1"), repeating_unless_mouse)
    create_bind(combine(vars.kbMove, key), smw.move_to_workspace("+1"), repeating_unless_mouse)
    create_bind(combine(vars.kbMoveWin, key), hl.dsp.window.move({ direction = "down" }), repeating_unless_mouse)
end

for _, key in ipairs({ "left", "right", "up", "down" }) do
    create_bind(combine(vars.kbFocusWin, key), hl.dsp.focus({ direction = key }), repeating_unless_mouse)
    if key == "up" or key == "down" then
        create_bind(combine(vars.kbMoveWin, key), hl.dsp.window.move({ direction = key }), repeating_unless_mouse)
    elseif key == "left" or key == "right" then
        local abbr = key == "left" and "l" or "r"
        create_bind(combine(vars.kbFocus, key), hl.dsp.layout("focus " .. abbr), repeating_unless_mouse)
        create_bind(combine(vars.kbMove, key), hl.dsp.layout("swapcol " .. abbr), repeating_unless_mouse)
        local direction = key == "left" and "prev" or "next"
        create_bind(combine(vars.kbMoveWin, key), hl.dsp.layout("consume_or_expel " .. direction), repeating_unless_mouse)
    end
end

create_bind(vars.kbAltTab, hl.dsp.focus({ direction = "right" }), repeating_unless_mouse)

for _, key in ipairs({ "W", "A", "S", "D" }) do
    local direction = key == "W" and "up" or key == "S" and "down" or key == "A" and "left" or "right"
    create_bind(combine(vars.kbFocusWin, key), hl.dsp.focus({ direction = direction }), repeating_unless_mouse)

    if key == "A" or key == "D" then
        local abbr = key == "A" and "l" or "r"
        create_bind(combine(vars.kbFocus, key), hl.dsp.layout("focus " .. abbr), repeating_unless_mouse)
        create_bind(combine(vars.kbMove, key), hl.dsp.layout("swapcol " .. abbr), repeating_unless_mouse)
        local direction = key == "A" and "prev" or "next"
        create_bind(combine(vars.kbMoveWin, key), hl.dsp.layout("consume_or_expel " .. direction), repeating_unless_mouse)
    end
end

-- Special workspace toggles
create_bind(vars.kbScratchpad, fn.toggle("specialws"))
create_bind(combine("SHIFT", vars.kbScratchpad),smw.move_to_workspace_silent("special:special"))
create_bind(vars.kbSystemMonitorWs, fn.toggle("sysmon"))
create_bind(vars.kbSpecialWs, fn.toggle("music"), hold)
create_bind(vars.kbSpecialWs, fn.toggle("communication"))
create_bind(combine("SHIFT", vars.kbCloseWindow), smw.move_to_workspace("e+0"))

-- Resize and drag
create_bind(vars.kbResizeColShrink, hl.dsp.layout("colresize -0.15"))
create_bind(vars.kbResizeColGrow, hl.dsp.layout("colresize +0.15"))
create_bind(vars.kbResizeColShrinkConf, hl.dsp.layout("colresize -conf"))
create_bind(vars.kbResizeColGrowConf, hl.dsp.layout("colresize +conf"))
create_bind(vars.kbResizeWinShrink, fn.resize_active_window(-5, 0), repeating_unless_mouse)
create_bind(vars.kbResizeWinGrow, fn.resize_active_window(5, 0), repeating_unless_mouse)
create_bind("SUPER + mouse:272", hl.dsp.window.drag(), mouse)
create_bind("SUPER + mouse:273", hl.dsp.window.resize(), mouse)

-- Window utility
create_bind(vars.kbPinWindow, hl.dsp.window.pin())
create_bind(vars.kbFullscreen, hl.dsp.window.fullscreen({ mode = "fullscreen" }))
create_bind(vars.kbBorderless, hl.dsp.window.fullscreen({ mode = "maximized" }))
create_bind(vars.kbCloseWindow, hl.dsp.window.close())
create_bind(vars.kbFloating, hl.dsp.window.float())

create_bind(vars.kbCenter, function()
    local win = hl.get_active_window()
    if not win then return end

    if win.floating then
        hl.dispatch(hl.dsp.window.resize(fn.resize_by_screen(55, 70)))
        hl.dispatch(hl.dsp.window.center())
    else
        hl.dispatch(hl.dsp.layout("fit expand"))
    end
end)

create_bind(vars.kbCenter, function()
    local win = hl.get_active_window()
    if win.floating then
       local pip = fn.move_actions(win) or {}
       table.insert(pip, hl.dsp.window.pin({ action = "on", window = "address:" .. a.address }))
       for _, action in ipairs(pip) do
           hl.dispatch(action)
       end
    else
        hl.config({
            scrolling = {
                focus_fit_method = (hl.get_config("scrolling.focus_fit_method") == 0)
            }
        }) 
    end
end, hold)

-- Apps
create_bind(vars.kbTerminal, hl.dsp.exec_cmd(vars.launchWrapper .. vars.terminal))
create_bind(vars.kbBrowser, hl.dsp.exec_cmd(vars.launchWrapper .. vars.browser))
create_bind(vars.kbFileExplorer, hl.dsp.exec_cmd(vars.launchWrapper .. vars.fileExplorer))
create_bind(vars.kbYazi, hl.dsp.exec_cmd(vars.launchWrapper .. vars.terminal .. ' fish -C "y"'))
create_bind(vars.kbAudioSettings, hl.dsp.exec_cmd(vars.launchWrapper .. vars.audioSettings))

-- Media
create_bind("SUPER + Page_Up", fn.media_volume("+"), locked_repeating)
create_bind("SUPER + Page_Down", fn.media_volume("-"), locked_repeating)

-- Volume
create_bind({"XF86AudioMicMute", "F13"}, hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SOURCE@ toggle"), locked)
create_bind("XF86AudioMute", hl.dsp.exec_cmd("wpctl set-mute @DEFAULT_AUDIO_SINK@ toggle"), locked)
create_bind(
    "XF86AudioRaiseVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume -l " ..
        (vars.volumeMax / 100) .. " @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%+"
    ),
    locked_repeating
)
create_bind(
    "XF86AudioLowerVolume",
    hl.dsp.exec_cmd(
        "wpctl set-mute @DEFAULT_AUDIO_SINK@ 0; wpctl set-volume @DEFAULT_AUDIO_SINK@ " .. vars.volumeStep .. "%-"
    ),
    locked_repeating
)

-- Cortana API
create_bind("SUPER + F1", hl.dsp.exec_cmd("cortana api devices/lamp -act on | cortana notify"), locked)
create_bind("SUPER + F2", hl.dsp.exec_cmd("cortana api devices/lamp -act off | cortana notify"), locked)
create_bind("SUPER + F5", hl.dsp.exec_cmd("cortana api automation -act off | cortana notify"), locked)
create_bind("SUPER + F6", hl.dsp.exec_cmd("cortana api automation -act on | cortana notify"), locked)

-- Submaps
create_bind(vars.kbSubmap, hl.dsp.submap("passthru"))
hl.define_submap("passthru", function()
    create_bind(vars.kbFullscreen, hl.dsp.window.fullscreen({ mode = "fullscreen" }))
    create_bind(vars.kbTerminal, hl.dsp.exec_cmd(vars.launchWrapper .. vars.terminal))

    create_bind(vars.kbSubmap, hl.dsp.submap("reset"))
end)

-- Gestures
hl.config({
    gestures = {
        workspace_swipe_distance                 = 500,
        workspace_swipe_cancel_ratio             = 0.15,
        workspace_swipe_min_speed_to_force       = 4,
        workspace_swipe_direction_lock           = true,
        workspace_swipe_direction_lock_threshold = 10,
        workspace_swipe_create_new               = true,
    },
})

hl.gesture({ fingers = vars.gestureFingers, direction = "up", action = fn.focus_workspace("+1") })
hl.gesture({ fingers = vars.gestureFingers, direction = "down", action = fn.focus_workspace("-1") })
hl.gesture({ fingers = vars.gestureFingers, direction = "left", action = function() hl.dispatch(hl.dsp.layout("focus r")) end })
hl.gesture({ fingers = vars.gestureFingers, direction = "right", action = function() hl.dispatch(hl.dsp.layout("focus l")) end })

hl.gesture({ fingers = vars.gestureFingersMore, direction = "up", action = "fullscreen"})
hl.gesture({ fingers = vars.gestureFingersMore, direction = "down", action = "fullscreen", mode = "maximize"})

require("hyprland.shell_keybinds")
