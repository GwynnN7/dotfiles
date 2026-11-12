-- Desktop: existing DP-1 display and optional HDMI screen.
hl.monitor({ output = "DP-1", mode = "1920x1080@165", position = "0x0", scale = 1 })
hl.monitor({ output = "HDMI-A-1", mode = "1920x1080@60", position = "1920x0", scale = 1 })
return { priority = { "DP-1", "HDMI-A-1" } }
