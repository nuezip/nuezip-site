# Installation

Gomoku is available for macOS through the Mac App Store. The app costs $4.99 and provides a one-time purchase for full access to all features.

## Download Options

- **Mac App Store**: [Download Gomoku](https://apps.apple.com/app/id6771268165) - $4.99

### Mac App Store (Recommended)

The Mac App Store version provides automatic updates and seamless integration with macOS.

- **Price**: $4.99 (one-time purchase)
- **App Store ID**: 6771268165
- **Link**: https://apps.apple.com/app/id6771268165

### GitHub Releases (Alternative)

If you prefer to download directly, you can get the app from GitHub Releases. Note that this version does not receive automatic updates.

## Installation Steps

### Mac App Store Installation (Recommended)

1. Click the "Download Gomoku" link above or search for "Gomoku" in the Mac App Store
2. Click "Get" or "Buy" to purchase the app ($4.99)
3. The app will automatically download and install
4. Launch Gomoku from your Applications folder or Launchpad

### GitHub Releases Installation

1. Download the latest `.dmg` from the Releases page
2. Double-click the downloaded `.dmg` to open it
3. Drag the `Gomoku.app` icon into your `Applications` folder
4. Eject the mounted image and open `Gomoku` from `Applications`

If macOS prevents opening the app (Gatekeeper), open **System Settings → Privacy & Security** and click **Open Anyway** for Gomoku, or right-click the app and choose **Open**.

## First Launch

When you launch Gomoku for the first time, you may be prompted to grant the following permissions:

- **Local Network**: Required for LAN play so other devices on your Wi‑Fi can discover and join games
- **Files and Folders**: To save and open game records (SGF) and settings
- **Accessibility / Screen Recording**: Optional; only needed if you enable auxiliary features that capture the screen or use overlay helpers

Grant permissions when prompted. You can modify these permissions at any time in **System Settings → Privacy & Security**.

## Updates

- **Mac App Store version**: Updates are handled automatically by the App Store
- **GitHub Releases version**: Download the newer release and replace the app in `Applications`

## Uninstall

To uninstall Gomoku:

1. Quit Gomoku
2. Drag `Gomoku.app` from `Applications` to the Trash
3. (Optional) Remove app data and logs:

```bash
rm -rf ~/Library/Containers/com.w3cub.gomoku
rm -rf ~/Library/Logs/gomoku
```


## System Requirements

- **macOS**: Monterey (12) or later recommended
- **CPU**: Apple Silicon (M-series) or Intel (64-bit)
- **Memory**: 4GB minimum, 8GB recommended
- **Storage**: ~200 MB (varies by build)

## Troubleshooting

If you encounter issues during installation:

- **macOS blocks the app**: Open **System Settings → Privacy & Security** and click **Open Anyway** for Gomoku
- **LAN issues**: Ensure all devices are on the same Wi‑Fi network and that **Local Network** permission was granted
- **Notarization warning**: Download a signed/notarized build from the Mac App Store or GitHub Releases

For more help, visit the [Troubleshooting guide](./troubleshooting.md) or open an issue on the project repository.