local vars = require("variables")

require("utils.keybinds")

-- Launcher
local launcher_default = normalise_keybind("SUPER + SUPER_L")
create_bind(
    vars.kbLauncher,
    hl.dsp.global("caelestia:launcher"),
    function(key)
        return normalise_keybind(key) == launcher_default and release or nil
    end
)

-- Misc
create_bind(vars.kbSession, hl.dsp.global("caelestia:session"))
create_bind(vars.kbShowSidebar, hl.dsp.global("caelestia:sidebar"))
create_bind(vars.kbClearNotifs, hl.dsp.global("caelestia:clearNotifs"), locked)
create_bind(vars.kbShowPanels, hl.dsp.global("caelestia:showall"))
create_bind(vars.kbLock, hl.dsp.global("caelestia:lock"))

-- Plugins
local smw = require("plugins.split-monitor-workspaces")
local has_scrolloverview = hl.plugin.scrolloverview ~= nil

if has_scrolloverview then
    create_bind(vars.kbOverview, function() hl.plugin.scrolloverview.overview("toggle") end)
else
    create_bind(vars.kbOverview, hl.dsp.global("caelestia:overview"))
end

-- Restore lock
create_bind(vars.kbRestoreLock, function()
    hl.dispatch(hl.dsp.exec_cmd("caelestia shell -d"))
    hl.dispatch(hl.dsp.global("caelestia:lock"))
end)

-- Utilities
create_bind(vars.kbScreenshot, hl.dsp.exec_cmd("caelestia screenshot"), locked)
create_bind(vars.kbScreenshotFreeze, hl.dsp.global("caelestia:screenshotFreeze"))
create_bind(vars.kbScreenshotRegion, hl.dsp.global("caelestia:screenshot"))
create_bind(vars.kbRecord, hl.dsp.exec_cmd("caelestia record"))
create_bind(vars.kbRecordSound, hl.dsp.exec_cmd("caelestia record -s"))
create_bind(vars.kbRecordRegion, hl.dsp.exec_cmd("caelestia record -r"))
create_bind(vars.kbColorPicker, hl.dsp.exec_cmd("hyprpicker -a"))

-- Utils
create_bind(vars.kbClipboard, hl.dsp.exec_cmd("stowaway -t"))
create_bind(vars.kbEmoji, hl.dsp.exec_cmd("stowaway -e"))
create_bind(vars.kbUtils, hl.dsp.global("caelestia:utilities"))
create_bind(vars.kbScrollLeft, hl.dsp.global("caelestia:notifPopoutOpenOrNextTab"))
create_bind(vars.kbScrollRight, hl.dsp.global("caelestia:notifPopoutOpenOrNextTab"))
create_bind(vars.kbWallpaper, hl.dsp.exec_cmd("caelestia wallpaper -r"))

-- Brightness
create_bind("XF86MonBrightnessUp", hl.dsp.global("caelestia:brightnessUp"), locked)
create_bind("XF86MonBrightnessDown", hl.dsp.global("caelestia:brightnessDown"), locked)

-- Media
create_bind({ "XF86AudioPlay", "XF86AudioPause" }, hl.dsp.global("caelestia:mediaToggle"), locked)
create_bind("XF86AudioNext", hl.dsp.global("caelestia:mediaNext"), locked)
create_bind("XF86AudioPrev", hl.dsp.global("caelestia:mediaPrev"), locked)
create_bind("XF86AudioStop", hl.dsp.global("caelestia:mediaStop"), locked)