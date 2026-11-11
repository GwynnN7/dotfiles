local vars = require("variables")
local fn   = require("utils.functions")

hl.on("hyprland.start", function()
    -- KDE Connect
    hl.exec_cmd("kdeconnectd")
    hl.exec_cmd("kdeconnect-indicator")
end)