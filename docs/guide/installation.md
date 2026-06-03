# Installation

This page explains how to install Gomoku on macOS and covers common issues you may encounter.

## Download Options

- **Mac App Store** — If an App Store build is published, install from the App Store for automatic updates.
- **GitHub Releases** — Download the latest macOS build (.dmg or .zip) from the project's Releases page: `https://github.com/your-org/gomoku/releases`.

If you don't see an App Store entry yet, use the GitHub Releases download.

## Installing from a .dmg (recommended for most users)

1. Download the latest `.dmg` from the Releases page.
2. Double-click the downloaded `.dmg` to open it.
3. Drag the `Gomoku.app` icon into your `Applications` folder.
4. Eject the mounted image and open `Gomoku` from `Applications`.

If macOS prevents opening the app (Gatekeeper), open **System Settings → Privacy & Security** and click **Open Anyway** for Gomoku, or right-click the app and choose **Open**.

## First Launch

On first run Gomoku may request the following permissions:

- **Local Network** — required for LAN (局域网) play so other devices on your Wi‑Fi can discover and join games.
- **Files and Folders** — to save and open game records (SGF) and settings.
- **Accessibility / Screen Recording** — optional; only needed if you enable auxiliary features that capture the screen or use overlay helpers.

Grant permissions when prompted; you can change them later in **System Settings → Privacy & Security**.

## Updates

- If you installed from the **Mac App Store**, updates are handled automatically.
- If you use the **GitHub Releases** build, download the newer release and replace the app in `Applications`.

## Uninstall

To uninstall Gomoku:

1. Quit Gomoku
2. Drag `Gomoku.app` from `Applications` to the Trash
3. (Optional) Remove app data and logs:

```bash
rm -rf ~/Library/Containers/com.w3cub.gomoku
rm -rf ~/Library/Logs/gomoku
```

See `docs/macos-sandbox-paths.md` in the source project for details about sandboxed paths.

## System Requirements

- **macOS**: Monterey (12) or later recommended
- **CPU**: Apple Silicon (M-series) or Intel (64-bit)
- **Memory**: 4GB minimum, 8GB recommended
- **Storage**: ~200 MB (varies by build)

## Troubleshooting

- If macOS blocks the app at launch, open **System Settings → Privacy & Security** and allow Gomoku to open.
- For LAN issues, ensure all devices are on the same Wi‑Fi network and that **Local Network** permission was granted.
- If you see a notarization warning, download a signed/notarized build from Releases or the App Store.

If you need more help, see the Troubleshooting guide or open an issue on the project repository.