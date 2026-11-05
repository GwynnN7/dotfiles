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

-- Plugins
local smw = require("plugins.split-monitor-workspaces")
smw.setup({
    workspace_count = 8,
    monitor_priority = { "DP-1", "HDMI-A-1" },
    keep_focused = true,
    restore_workspaces_on_monitor_reconnect = true,
    enable_notifications = false,
    enable_persistent_workspaces = true,
    enable_wrapping = false,
    link_monitors = false,
})

if hl.plugin.hymission ~= nil then
    hl.config({
        plugin = {
            hymission = {
                outer_padding_top = 24,
                outer_padding_right = 32,
                outer_padding_bottom = 32,
                outer_padding_left = 24,
                row_spacing = 28,
                column_spacing = 28,
                layout_engine = "grid",

                overview_focus_follows_mouse = 1,
                multi_workspace_sort_recent_first = 0,
                toggle_switch_mode = 0,
                one_workspace_per_row = 1,
                only_active_workspace = 1,

                workspace_strip_anchor = "top",
                workspace_strip_thickness = 140,
                workspace_strip_gap = 0,
            },
        }
    })
end
