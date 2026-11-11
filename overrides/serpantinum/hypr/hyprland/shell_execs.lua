hl.on("hyprland.start", function()
    -- KDE Connect
    hl.exec_cmd("kdeconnectd")
    hl.exec_cmd("kdeconnect-indicator")
end)