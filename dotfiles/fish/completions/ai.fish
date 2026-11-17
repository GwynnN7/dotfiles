complete -c ai -f
complete -c ai -n '__fish_use_subcommand' \
  -a 'install chat model comfyui sdcpp llamacpp llamacpp-hip whispercpp env models models-xl training status help' \
  -d 'Local AI command'
complete -c ai -n '__fish_seen_subcommand_from install' \
  -a 'env models models-xl comfyui sdcpp llamacpp llamacpp-hip whispercpp training all' \
  -d 'Install component'

function __ai_gguf_names
    set -l root "$HOME/Projects/AI/models/llm"
    if set -q AI_HOME
        set root "$AI_HOME/models/llm"
    end
    if test -d "$root"
        for path in (find "$root" -type f -name '*.gguf')
            basename "$path"
        end
    end
end
complete -c ai -n '__fish_seen_subcommand_from chat model' -a '(__ai_gguf_names)'
complete -c ai -n '__fish_seen_subcommand_from model' -a 'reset'
