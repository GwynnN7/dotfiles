local vars = require("variables")
local scheme = require("scheme.current")

hl.config({
    general = {
        layout          = "scrolling",

        allow_tearing   = false,

        gaps_workspaces = vars.workspaceGaps,
        gaps_in         = vars.windowGapsIn,
        gaps_out        = vars.windowGapsOut,
        border_size     = vars.windowBorderSize,

        col             = {
            active_border   = vars.activeWindowBorderColour,
            inactive_border = vars.inactiveWindowBorderColour,
        },
    },

    dwindle = {
        preserve_split = true,
        smart_split    = false,
        smart_resizing = true,
    },

    scrolling = {
        fullscreen_on_one_column = true,
        focus_fit_method         = 1,
        column_width             = 0.5,
        follow_focus             = 2,
        follow_min_visible       = 0.5,
        explicit_column_widths   = "0.35, 0.5, 0.65, 1.0",
        wrap_focus               = false,
    },

    input = {
        kb_layout = "it",
        kb_variant = "us",
        kb_options = "lv3:ralt_switch",
        kb_options = "fkeys:basic_13-24",
        numlock_by_default = false,
        repeat_delay       = 250,
        repeat_rate        = 35,
        focus_on_close     = 1,

        touchpad           = {
            natural_scroll       = true,
            disable_while_typing = vars.touchpadDisableTyping,
            scroll_factor        = vars.touchpadScrollFactor,
        },
    },

    binds = {
        scroll_event_delay = 0,
        hide_special_on_workspace_change = true
    },

    cursor = {
        hotspot_padding = 1,
    },

    misc = {
        vrr = 2,

        animate_manual_resizes       = false,
        animate_mouse_windowdragging = false,

        disable_hyprland_logo        = true,
        force_default_wallpaper      = 0,

        on_focus_under_fullscreen    = 1,
        allow_session_lock_restore   = true,
        middle_click_paste           = false,
        focus_on_activate            = false,
        session_lock_xray            = true,

        mouse_move_enables_dpms      = true,
        key_press_enables_dpms       = true,

        background_color             = "rgb(" .. scheme.surfaceContainer .. ")",
    },

    group = {
        col = {
            border_active          = vars.activeWindowBorderColour,
            border_inactive        = vars.inactiveWindowBorderColour,
            border_locked_active   = vars.activeWindowBorderColour,
            border_locked_inactive = vars.inactiveWindowBorderColour,
        },
        groupbar = {
            font_family               = "JetBrains Mono NF",
            font_size                 = 15,
            gradients                 = true,
            gradient_round_only_edges = false,
            gradient_rounding         = 5,
            height                    = 25,
            indicator_height          = 0,
            gaps_in                   = 3,
            gaps_out                  = 3,
            text_color                = "rgb(" .. scheme.onPrimary .. ")",
            col                       = {
                active          = "rgba(" .. scheme.primary .. "d4)",
                inactive        = "rgba(" .. scheme.outline .. "d4)",
                locked_active   = "rgba(" .. scheme.primary .. "d4)",
                locked_inactive = "rgba(" .. scheme.secondary .. "d4)",
            },
        },
    },

    debug = {
        error_position = 1,
        suppress_errors = false,
    }
})