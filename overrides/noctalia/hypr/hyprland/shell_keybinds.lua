local vars = require("variables")
require("utils.keybinds")

create_bind(vars.kbLauncher, hl.dsp.exec_cmd("noctalia msg panel-toggle launcher"))
create_bind(vars.kbLock, hl.dsp.exec_cmd("noctalia msg session lock"))
