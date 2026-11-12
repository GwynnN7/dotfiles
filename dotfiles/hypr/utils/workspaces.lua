-- Prefer the optional split-monitor plugin; keep native bindings usable without it.
local ok, plugin = pcall(require, "plugins.split-monitor-workspaces")
if ok then return plugin end

return {
    setup = function() end,
    get_amount_of_workspaces = function() return 8 end,
    workspace = function(id) return hl.dsp.focus({ workspace = id }) end,
    move_to_workspace = function(id) return hl.dsp.window.move({ workspace = id }) end,
    move_to_workspace_silent = function(id)
        return hl.dsp.window.move({ workspace = id, follow = false })
    end,
}
