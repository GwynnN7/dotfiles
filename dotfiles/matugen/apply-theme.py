#!/usr/bin/env python3
import fcntl
import functools
import json
import os
import re
import shutil
import subprocess
import tempfile
import traceback
import zipfile
from pathlib import Path

HOME = Path.home()
config_dir = Path(os.environ.get("XDG_CONFIG_HOME", HOME / ".config"))
data_dir = Path(os.environ.get("XDG_DATA_HOME", HOME / ".local/share"))
base_state_dir = Path(os.environ.get("XDG_STATE_HOME", HOME / ".local/state"))
state_dir = base_state_dir / "matugen"
serpantinum_state_dir = base_state_dir / "serpantinum"
templates_dir = config_dir / "matugen/theme-templates"
palette_file = state_dir / "palette.json"


def log_exception(func):
    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        try:
            return func(*args, **kwargs)
        except Exception:
            traceback.print_exc()
    return wrapper


def atomic_write(dest: Path, content: str) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    with tempfile.NamedTemporaryFile("w", dir=dest.parent, delete=False) as tf:
        tf.write(content)
        tmp_path = Path(tf.name)
    tmp_path.replace(dest)


def gen_lua(colours: dict[str, str]) -> str:
    lua = "return {\n"
    for name, colour in colours.items():
        lua += f'  {name} = "{colour}",\n'
    lua += "}"
    return lua


def gen_scss(colours: dict[str, str]) -> str:
    scss = ""
    for name, colour in colours.items():
        scss += f"${name}: #{colour};\n"
    return scss


def gen_replace(colours: dict[str, str], template: Path, hash: bool = False) -> str:
    new_template = template.read_text()
    for name, colour in colours.items():
        new_template = new_template.replace(f"{{{{ ${name} }}}}", f"#{colour}" if hash else colour)
    return new_template


def gen_replace_dynamic(colours: dict[str, str], template: Path, mode: str) -> str:
    def fill_colour(match: re.Match) -> str:
        data = match.group(1).strip().split(".")
        if len(data) != 2:
            return match.group()
        col, form = data
        if col in colours and form == "hex":
            return colours[col]
        return match.group()

    dotField = r"\{\{((?:(?!\{\{|\}\}).)*)\}\}"
    modeField = r"\{\{\s*mode\s*\}\}"

    template_content = template.read_text()
    template_filled = re.sub(dotField, fill_colour, template_content)
    template_filled = re.sub(modeField, mode, template_filled)

    return template_filled


def hex_to_ansi(c: str, *i: int) -> str:
    return f"\x1b]{';'.join(map(str, i))};rgb:{c[0:2]}/{c[2:4]}/{c[4:6]}\x1b\\"


def gen_sequences(colours: dict[str, str]) -> str:
    return (
        hex_to_ansi(colours["onSurface"], 10)
        + hex_to_ansi(colours["surface"], 11)
        + hex_to_ansi(colours["secondary"], 12)
        + hex_to_ansi(colours["secondary"], 17)
        + hex_to_ansi(colours["term0"], 4, 0)
        + hex_to_ansi(colours["term1"], 4, 1)
        + hex_to_ansi(colours["term2"], 4, 2)
        + hex_to_ansi(colours["term3"], 4, 3)
        + hex_to_ansi(colours["term4"], 4, 4)
        + hex_to_ansi(colours["term5"], 4, 5)
        + hex_to_ansi(colours["term6"], 4, 6)
        + hex_to_ansi(colours["term7"], 4, 7)
        + hex_to_ansi(colours["term8"], 4, 8)
        + hex_to_ansi(colours["term9"], 4, 9)
        + hex_to_ansi(colours["term10"], 4, 10)
        + hex_to_ansi(colours["term11"], 4, 11)
        + hex_to_ansi(colours["term12"], 4, 12)
        + hex_to_ansi(colours["term13"], 4, 13)
        + hex_to_ansi(colours["term14"], 4, 14)
        + hex_to_ansi(colours["term15"], 4, 15)
        + hex_to_ansi(colours["primary"], 4, 16)
        + hex_to_ansi(colours["secondary"], 4, 17)
        + hex_to_ansi(colours["tertiary"], 4, 18)
    )


@log_exception
def apply_terms(sequences: str) -> None:
    state = serpantinum_state_dir / "sequences.txt"
    state.parent.mkdir(parents=True, exist_ok=True)
    state.write_text(sequences)

    pts_path = Path("/dev/pts")
    for pt in pts_path.iterdir():
        if pt.name.isdigit():
            try:
                fd = os.open(str(pt), os.O_WRONLY | os.O_NONBLOCK | os.O_NOCTTY)
                try:
                    os.write(fd, sequences.encode())
                finally:
                    os.close(fd)
            except (PermissionError, OSError, BlockingIOError):
                pass


@log_exception
def apply_hypr(conf: str) -> None:
    atomic_write(config_dir / "hypr/scheme/current.lua", conf)


@log_exception
def apply_discord(scss: str) -> None:
    with tempfile.TemporaryDirectory("w") as tmp_dir:
        (Path(tmp_dir) / "_colours.scss").write_text(scss)
        conf = subprocess.check_output(["sass", "-I", tmp_dir, templates_dir / "discord.scss"], text=True)

    for client in ["equibop"]:
        atomic_write(config_dir / client / "themes/caelestia.theme.css", conf)


@log_exception
def apply_telegram(colours: dict[str, str], wallpaper: str | None) -> None:
    template = gen_replace(colours, templates_dir / "telegram.theme", hash=True)

    theme_path = config_dir / "telegram/caelestia.tdesktop-theme"
    theme_path.parent.mkdir(parents=True, exist_ok=True)

    with tempfile.NamedTemporaryFile("wb", delete=False) as f:
        with zipfile.ZipFile(f, "w", zipfile.ZIP_DEFLATED) as zf:
            zf.writestr("colors.tdesktop-theme", template)
            if wallpaper and wallpaper != "Null" and Path(wallpaper).is_file():
                zf.write(wallpaper, "background.jpg")
        tmp_name = f.name

    shutil.move(tmp_name, theme_path)


@log_exception
def apply_pandora(colours: dict[str, str], mode: str) -> None:
    template = gen_replace(colours, templates_dir / "pandora.json", hash=True)
    template = template.replace("{{ $mode }}", mode)
    atomic_write(data_dir / "PandoraLauncher/themes/caelestia.json", template)


@log_exception
def apply_spicetify(colours: dict[str, str], mode: str) -> None:
    template = gen_replace(colours, templates_dir / f"spicetify-{mode}.ini")
    atomic_write(config_dir / "spicetify/Themes/caelestia/color.ini", template)


@log_exception
def apply_fuzzel(colours: dict[str, str]) -> None:
    template = gen_replace(colours, templates_dir / "fuzzel.ini")
    atomic_write(config_dir / "fuzzel/fuzzel.ini", template)


@log_exception
def apply_btop(colours: dict[str, str]) -> None:
    template = gen_replace(colours, templates_dir / "btop.theme", hash=True)
    atomic_write(config_dir / "btop/themes/caelestia.theme", template)
    subprocess.run(["killall", "-USR2", "btop"], stderr=subprocess.DEVNULL)


@log_exception
def apply_nvtop(colours: dict[str, str]) -> None:
    template = gen_replace(colours, templates_dir / "nvtop.colors", hash=True)
    atomic_write(config_dir / "nvtop/nvtop.colors", template)


@log_exception
def apply_htop(colours: dict[str, str]) -> None:
    template = gen_replace(colours, templates_dir / "htop.theme", hash=True)
    atomic_write(config_dir / "htop/htoprc", template)
    subprocess.run(["killall", "-USR2", "htop"], stderr=subprocess.DEVNULL)


def sync_papirus_colors(hex_color: str) -> None:
    try:
        result = subprocess.run(["which", "papirus-folders"], capture_output=True, check=False)
        if result.returncode != 0:
            return
    except Exception:
        return

    papirus_paths = [
        Path("/usr/share/icons/Papirus"),
        Path("/usr/share/icons/Papirus-Dark"),
        Path.home() / ".local/share/icons/Papirus",
        Path.home() / ".icons/Papirus",
    ]

    if not any(p.exists() for p in papirus_paths):
        return

    r = int(hex_color[0:2], 16)
    g = int(hex_color[2:4], 16)
    b = int(hex_color[4:6], 16)

    max_val = max(r, g, b)
    min_val = min(r, g, b)
    brightness = max_val
    saturation = 0 if max_val == 0 else ((max_val - min_val) * 100) // max_val

    if saturation < 20:
        if brightness < 85:
            color = "black"
        elif brightness < 170:
            color = "grey"
        else:
            color = "white"
    elif saturation < 60 and brightness > 180:
        color = _determine_hue_color(r, g, b, brightness, True)
    else:
        color = _determine_hue_color(r, g, b, brightness, False)

    try:
        subprocess.Popen(
            ["sudo", "-n", "papirus-folders", "-C", color, "-u"],
            stderr=subprocess.DEVNULL,
            stdout=subprocess.DEVNULL,
            start_new_session=True,
        )
    except Exception:
        pass


def _determine_hue_color(r: int, g: int, b: int, brightness: int, use_pale: bool) -> str:
    if b > r and b > g:
        r_ratio = (r * 100) // b if b > 0 else 0
        g_ratio = (g * 100) // b if b > 0 else 0
        rg_diff = abs(r - g)

        if r_ratio > 70 and g_ratio > 70:
            if rg_diff < 15:
                return "blue"
            elif r > g:
                return "violet"
            else:
                return "cyan"
        elif r_ratio > 60 and r > g:
            return "violet"
        elif g_ratio > 60 and g > r:
            return "cyan"
        else:
            return "blue"
    elif r > g and r > b:
        if g > b + 30:
            rg_ratio = (g * 100) // r if r > 0 else 0
            if use_pale:
                if rg_ratio > 70 and brightness < 220:
                    return "palebrown"
                else:
                    return "paleorange"
            else:
                if rg_ratio > 70 and brightness < 180:
                    return "brown"
                else:
                    return "orange"
        elif b > g + 20:
            return "pink"
        else:
            return "pink" if use_pale else "red"
    elif g > r and g > b:
        if r > b + 30:
            return "yellow"
        else:
            return "green"
    else:
        return "grey"


@log_exception
def apply_gtk(colours: dict[str, str], mode: str) -> None:
    gtk_template = gen_replace(colours, templates_dir / "gtk.css", hash=True)
    thunar_template = gen_replace(colours, templates_dir / "thunar.css", hash=True)

    for gtk_version in ["gtk-3.0", "gtk-4.0"]:
        gtk_config_dir = config_dir / gtk_version
        atomic_write(gtk_config_dir / "gtk.css", gtk_template)
        atomic_write(gtk_config_dir / "thunar.css", thunar_template)

    subprocess.run(["dconf", "write", "/org/gnome/desktop/interface/gtk-theme", "'Adwaita'"])
    subprocess.run(["dconf", "write", "/org/gnome/desktop/interface/gtk-theme", "'adw-gtk3-dark'"])
    subprocess.run(["dconf", "write", "/org/gnome/desktop/interface/color-scheme", f"'prefer-{mode}'"])
    subprocess.run(["dconf", "write", "/org/gnome/desktop/interface/icon-theme", f"'Papirus-{mode.capitalize()}'"])

    sync_papirus_colors(colours["primary"])


@log_exception
def apply_qt(colours: dict[str, str], mode: str) -> None:
    colours_str = gen_replace(colours, templates_dir / f"qt{mode}.colors", hash=True)
    atomic_write(config_dir / "qtengine/caelestia.colors", colours_str)

    config = (templates_dir / "qtengine.json").read_text()
    config = config.replace("{{ $mode }}", mode.capitalize())
    atomic_write(config_dir / "qtengine/config.json", config)


@log_exception
def apply_warp(colours: dict[str, str], mode: str) -> None:
    warp_mode = "darker" if mode == "dark" else "lighter"

    template = gen_replace(colours, templates_dir / "warp.yaml", hash=True)
    template = template.replace("{{ $warp_mode }}", warp_mode)
    atomic_write(data_dir / "warp-terminal/themes/caelestia.yaml", template)


@log_exception
def apply_chromium(colours: dict[str, str]) -> None:
    theme_color = f"#{colours['surface']}"
    browsers = [
        ("chromium", Path("/etc/chromium/policies/managed")),
        ("brave", Path("/etc/brave/policies/managed")),
        ("google-chrome-stable", Path("/etc/opt/chrome/policies/managed")),
    ]

    for cmd, policy_dir in browsers:
        if shutil.which(cmd) is None:
            continue
        if not policy_dir.is_dir():
            subprocess.run(["sudo", "-n", "mkdir", "-p", str(policy_dir)], stderr=subprocess.DEVNULL)
        if not policy_dir.is_dir():
            continue

        subprocess.run(
            ["sudo", "-n", "tee", str(policy_dir / "caelestia.json")],
            input=json.dumps({"BrowserThemeColor": theme_color, "BrowserColorScheme": "device"}),
            text=True,
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )
        subprocess.run(
            [cmd, "--refresh-platform-policy", "--no-startup-window"],
            stdout=subprocess.DEVNULL,
            stderr=subprocess.DEVNULL,
        )


@log_exception
def apply_zed(colours: dict[str, str], mode: str) -> None:
    theme_path = config_dir / "zed/themes/caelestia.json"
    if theme_path.is_symlink():
        theme_path.unlink()

    content = gen_replace_dynamic(colours, templates_dir / "zed.json", mode)
    atomic_write(theme_path, content)


@log_exception
def apply_cava(colours: dict[str, str]) -> None:
    template = gen_replace(colours, templates_dir / "cava.conf", hash=True)
    atomic_write(config_dir / "cava/config", template)
    subprocess.run(["killall", "-USR2", "cava"], stderr=subprocess.DEVNULL)


def apply_all() -> None:
    if not palette_file.exists():
        return

    data = json.loads(palette_file.read_text())
    colours: dict[str, str] = data["colours"]
    mode: str = data.get("mode", "dark")
    wallpaper: str | None = data.get("wallpaper")

    apply_terms(gen_sequences(colours))
    apply_hypr(gen_lua(colours))
    apply_discord(gen_scss(colours))
    apply_telegram(colours, wallpaper)
    apply_spicetify(colours, mode)
    apply_pandora(colours, mode)
    apply_fuzzel(colours)
    apply_btop(colours)
    apply_nvtop(colours)
    apply_htop(colours)
    apply_gtk(colours, mode)
    apply_qt(colours, mode)
    apply_warp(colours, mode)
    apply_chromium(colours)
    apply_zed(colours, mode)
    apply_cava(colours)


if __name__ == "__main__":
    state_dir.mkdir(parents=True, exist_ok=True)
    with open(state_dir / "theme.lock", "w") as lock_fd:
        try:
            fcntl.flock(lock_fd.fileno(), fcntl.LOCK_EX | fcntl.LOCK_NB)
            apply_all()
        except BlockingIOError:
            pass