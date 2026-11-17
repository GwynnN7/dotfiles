# Fish completion for the standalone Bash `ai` runtime.
# Install with: install -Dm644 ai.fish ~/.config/fish/completions/ai.fish
complete -c ai -f
complete -c ai -n '__fish_use_subcommand' \
  -a 'ask start stop llamacpp llamacpp-hip sdcpp comfyui whispercpp model models env training status help' \
  -d 'Local AI runtime'
complete -c ai -n '__fish_seen_subcommand_from start' \
  -a 'llamacpp llamacpp-hip comfyui sdcpp' -d 'Start local server'
complete -c ai -n '__fish_seen_subcommand_from stop' \
  -a 'llamacpp llamacpp-hip comfyui sdcpp' -d 'Stop managed server'
function __ai_gguf_names
    set -l home "$HOME/Projects/AI"
    if set -q AI_HOME
        set home "$AI_HOME"
    end
    if test -d "$home/models/llm"
        for path in (find "$home/models/llm" -type f -iname '*.gguf')
            basename "$path"
        end
    end
end
complete -c ai -n '__fish_seen_subcommand_from model' -a '(__ai_gguf_names) reset'

# Import downloaded llama.cpp HF-cache snapshots into the shared GGUF directory.
complete -c ai -n '__fish_seen_subcommand_from models' -a 'import-cache' -d 'Hard-link cached models without copying'
