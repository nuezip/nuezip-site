# Installation

PetReminder is available for macOS through the Mac App Store.

## Download Options

### Mac App Store (Recommended)

- **Download**: [PetReminder on the Mac App Store](https://apps.apple.com/app/id6771268165)

The Mac App Store version provides automatic updates and seamless integration with macOS.

### GitHub Releases (Alternative)

If you prefer to download directly, you can get the app from [GitHub Releases](https://github.com/reminder-app/reminder/releases). Note that this version does not receive automatic updates.

## Installation Steps

### Mac App Store

1. Click the download link above or search for "PetReminder" in the Mac App Store
2. Click "Get" to download the app
3. The app will automatically download and install
4. Launch PetReminder from your Applications folder or Launchpad

### GitHub Releases

1. Download the latest `.dmg` from the Releases page
2. Double-click the downloaded `.dmg` to open it
3. Drag the `PetReminder.app` icon into your `Applications` folder
4. Eject the mounted image and open `PetReminder` from `Applications`

If macOS prevents opening the app (Gatekeeper), open **System Settings → Privacy & Security** and click **Open Anyway** for PetReminder, or right-click the app and choose **Open**.

## First Launch

When you launch PetReminder for the first time, you may be prompted to grant:

- **Notifications**: Required for reminder alerts
- **Files and Folders**: To save settings and purchased pet data

Grant permissions when prompted. You can modify these at any time in **System Settings → Privacy & Security**.

## Updates

- **Mac App Store version**: Updates are handled automatically by the App Store
- **GitHub Releases version**: Download the newer release and replace the app in `Applications`

## Uninstall

To uninstall PetReminder:

1. Quit PetReminder
2. Drag `PetReminder.app` from `Applications` to the Trash
3. (Optional) Remove app data and logs:

```bash
rm -rf ~/Library/Containers/com.w3cub.reminder
rm -rf ~/Library/Logs/reminder
```

## System Requirements

- **macOS**: Monterey (12) or later recommended
- **CPU**: Apple Silicon (M-series) or Intel (64-bit)
- **Memory**: 4GB minimum, 8GB recommended
- **Storage**: ~200 MB (varies by build)

## Troubleshooting

If you encounter issues during installation:

- **macOS blocks the app**: Open **System Settings → Privacy & Security** and click **Open Anyway** for PetReminder
- **Notarization warning**: Download a signed/notarized build from the Mac App Store

For more help, visit the [Troubleshooting guide](./troubleshooting.md).