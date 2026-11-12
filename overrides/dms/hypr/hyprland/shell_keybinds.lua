local vars = require("variables")
require("utils.keybinds")

create_bind(vars.kbLauncher, hl.dsp.exec_cmd("dms ipc call spotlight toggle"))
create_bind(vars.kbLock, hl.dsp.exec_cmd("dms ipc call lock lock"))
