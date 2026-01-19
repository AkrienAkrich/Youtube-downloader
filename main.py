import eel
import subprocess
import tkinter as tk
from tkinter import filedialog

eel.init("web")


@eel.expose
def get_formats(url):
    try:
        result = subprocess.run(
            ["yt-dlp", "--no-playlist", "-F", url],
            capture_output=True,
            text=True
        )
        return result.stdout if result.returncode == 0 else result.stderr
    except Exception as e:
        return str(e)


@eel.expose
def download_video(url, format_code, directory):
    try:
        result = subprocess.run(
            [
                "yt-dlp",
                "--no-playlist",
                "-f", format_code,
                url,
                "-o", f"{directory}/%(title)s.%(ext)s"
            ],
            capture_output=True,
            text=True
        )

        if result.stdout:
            return result.stdout
        return result.stderr or "Готово"

    except Exception as e:
        return str(e)


@eel.expose
def choose_directory():
    root = tk.Tk()
    root.withdraw()
    root.attributes("-topmost", True)

    directory = filedialog.askdirectory()

    root.destroy()
    return directory or ""


eel.start("index.html", size=(1000, 700))
