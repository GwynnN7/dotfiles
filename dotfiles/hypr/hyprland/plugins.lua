if hl.plugin.scrolloverview ~= nil then
	hl.config({
    	plugin = {
	    	scrolloverview = {
           		gesture_distance = 300,
             	scale = 0.5,
	             workspace_gap = 100,
	             layout = "vertical",
	             wallpaper = 0,
	             blur = false,

	             shadow = {
	                 enabled = false,
	             },
            }
		}
	})
end

local smw = require("utils.workspaces")
if smw ~= nil then
    smw.setup({
        workspace_count = 8,
        monitor_priority = require("hyprland.monitors").priority,
        keep_focused = true,
        restore_workspaces_on_monitor_reconnect = true,
        enable_notifications = false,
        enable_persistent_workspaces = true,
        enable_wrapping = false,
        link_monitors = false,
    })
end
