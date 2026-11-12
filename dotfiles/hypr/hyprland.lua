local home   = os.getenv("HOME")
local config = os.getenv("XDG_CONFIG_HOME") or (home .. "/.config")
local hypr   = config .. "/hypr"
package.path = hypr .. "/?.lua;" .. hypr .. "/?/init.lua;" .. config .. "/caelestia/?.lua;" .. package.path

-- Copy src to dst, but only if dst doesn't already exist
local function maybe_copy(src, dst)
    local out = io.open(dst)
    if out then
        out:close()
        return
    end

    local input = io.open(src, "r")
    if not input then return end

    out = io.open(dst, "w")
    if out then
        out:write(input:read("*a"))
        out:close()
    end
    input:close()
end

-- Maybe set current colours to defaults
maybe_copy(hypr .. "/scheme/default.lua", hypr .. "/scheme/current.lua")

-- Device-specific monitor rules and workspace preference.
require("hyprland.monitors")

-- Configs
require("hyprland.env")
require("hyprland.general")
require("hyprland.plugins")
require("hyprland.decoration")
require("hyprland.execs")
require("hyprland.rules")
require("hyprland.keybinds")
require("hyprland.gaming")
