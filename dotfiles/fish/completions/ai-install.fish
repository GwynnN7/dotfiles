# Install as ~/.config/fish/completions/ai-install.fish
complete -c ai-install -e
complete -c ai-install -n '__fish_use_subcommand' -f -a 'models lmcpp sdcpp comfyui rocm whisp help'
