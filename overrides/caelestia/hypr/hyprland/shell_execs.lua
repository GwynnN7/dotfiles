local vars = require("variables")
local fn   = require("utils.functions")

hl.on("hyprland.start", function()
    hl.exec_cmd("kdeconnectd")
    hl.exec_cmd("kdeconnect-indicator")
end)