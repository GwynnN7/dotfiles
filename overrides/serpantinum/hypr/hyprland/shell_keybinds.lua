local vars = require("variables")
local fn   = require("utils.functions")

-- Launcher
local launcher_default = normalise_keybind("SUPER + SUPER_L")
create_bind(
    vars.kbLauncher,
    hl.dsp.exec_cmd("serpantinum msg toggle launcher"),
    function(key)
        return normalise_keybind(key) == launcher_default and release or nil
    end
)

-- Misc
create_bind(vars.kbSession, hl.dsp.exec_cmd("serpantinum msg toggle system"))
create_bind(vars.kbShowSidebar, hl.dsp.exec_cmd("serpantinum msg toggle calendar"))
create_bind(vars.kbClearNotifs, hl.dsp.exec_cmd("serpantinum msg toggle system"), locked)
create_bind(vars.kbShowPanels, hl.dsp.exec_cmd("serpantinum msg toggle autohide"))
create_bind(vars.kbLock, hl.dsp.exec_cmd("serpantinum lock"))

-- Plugins
local smw = require("plugins.split-monitor-workspaces")
local has_scrolloverview = hl.plugin.scrolloverview ~= nil

if has_scrolloverview then
    create_bind(vars.kbOverview, function() hl.plugin.scrolloverview.overview("toggle") end)
else
    create_bind(vars.kbOverview, hl.dsp.exec_cmd("serpantinum msg toggle launcher"))
end

-- Utilities
create_bind(vars.kbScreenshot, hl.dsp.exec_cmd("serpantinum screenshot --full"), locked)
create_bind(vars.kbScreenshotFreeze, hl.dsp.exec_cmd("serpantinum screenshot --edit"))
create_bind(vars.kbScreenshotRegion, hl.dsp.exec_cmd("serpantinum screenshot"))
create_bind(vars.kbColorPicker, hl.dsp.exec_cmd("hyprpicker -a"))

-- Utils
create_bind(vars.kbClipboard, hl.dsp.exec_cmd("serpantinum msg toggle clipboard"))
create_bind(vars.kbEmoji, hl.dsp.exec_cmd("serpantinum msg toggle emoji"))
create_bind(vars.kbUtils, hl.dsp.exec_cmd("serpantinum msg toggle system"))
create_bind(vars.kbScrollLeft, hl.dsp.exec_cmd("serpantinum msg toggle guide"))
create_bind(vars.kbScrollRight, hl.dsp.exec_cmd("serpantinum msg toggle launcher"))
create_bind(vars.kbWallpaper, hl.dsp.exec_cmd("serpantinum msg toggle wallpaper"))

-- Brightness
create_bind("XF86MonBrightnessUp", hl.dsp.exec_cmd("brightnessctl set 5%+"), locked)
create_bind("XF86MonBrightnessDown", hl.dsp.exec_cmd("brightnessctl set 5%-"), locked)

-- Media
create_bind({ "XF86AudioPlay", "XF86AudioPause" }, hl.dsp.exec_cmd("playerctl play-pause"), locked)
create_bind("XF86AudioNext", hl.dsp.exec_cmd("playerctl next"), locked)
create_bind("XF86AudioPrev", hl.dsp.exec_cmd("playerctl previous"), locked)
create_bind("XF86AudioStop", hl.dsp.exec_cmd("playerctl stop"), locked)