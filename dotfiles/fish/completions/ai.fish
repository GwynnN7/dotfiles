# Install as ~/.config/fish/completions/ai.fish
complete -c ai -e
complete -c ai -n '__fish_use_subcommand' -f -a 'lms llamacpp llamacpp-hip comfyui sdcpp transcribe status help'
complete -c ai -n '__fish_seen_subcommand_from lms; and test (count (commandline -opc)) -eq 2' -f -a 'start stop status chat get ls load unload ps import server runtime log daemon link'
complete -c ai -n '__fish_seen_subcommand_from llamacpp llamacpp-hip; and test (count (commandline -opc)) -eq 2' -f -a 'start stop status chat prompt cli'
complete -c ai -n '__fish_seen_subcommand_from sdcpp; and test (count (commandline -opc)) -eq 2' -f -a 'start stop status gen cli'
complete -c ai -n '__fish_seen_subcommand_from comfyui; and test (count (commandline -opc)) -eq 2' -f -a 'start stop status'
complete -c ai -n '__fish_seen_subcommand_from sdcpp; and __fish_seen_subcommand_from gen; and test (count (commandline -opc)) -eq 3' -f -a 'dreamshaper sd15 sdxl anima zimage'
complete -c ai -n '__fish_seen_subcommand_from transcribe' -l model -r -f -a 'small medium turbo'
complete -c ai -n '__fish_seen_subcommand_from transcribe' -l language -r -f -a 'auto en it fr de es'
complete -c ai -n '__fish_seen_subcommand_from transcribe' -l backend -r -f -a 'vulkan cpu'
