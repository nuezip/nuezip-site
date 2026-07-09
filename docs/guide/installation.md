# Installation

NueZip is available for macOS through the Mac App Store.

## Download Options

### Mac App Store (Recommended)

- **Download**: [NueZip on the Mac App Store](https://apps.apple.com/app/nuezip)

The Mac App Store version provides automatic updates and seamless integration with macOS.

### GitHub Releases (Alternative)

If you prefer to download directly, you can get the app from [GitHub Releases](https://github.com/nuezip/nuezip/releases). Note that this version does not receive automatic updates.

## Installation Steps

### Mac App Store

1. Click the download link above or search for "NueZip" in the Mac App Store
2. Click "Get" to download the app
3. The app will automatically download and install
4. Launch NueZip from your Applications folder or Launchpad

### GitHub Releases

1. Download the latest `.dmg` from the Releases page
2. Double-click the downloaded `.dmg` to open it
3. Drag the `NueZip.app` icon into your `Applications` folder
4. Eject the mounted image and open `NueZip` from `Applications`

If macOS prevents opening the app (Gatekeeper), open **System Settings → Privacy & Security** and click **Open Anyway** for NueZip, or right-click the app and choose **Open**.

## First Launch

When you launch NueZip for the first time, you will be guided through an onboarding flow to:

- **Grant Folder Access**: Allow NueZip to access common directories (Downloads, Documents, Desktop)
- **Enable Finder Extension**: Activate the right-click context menu for quick archive operations

Grant permissions when prompted. You can modify these at any time in **System Settings → Privacy & Security**.

## Updates

- **Mac App Store version**: Updates are handled automatically by the App Store
- **GitHub Releases version**: Download the newer release and replace the app in `Applications`

## Uninstall

To uninstall NueZip:

1. Quit NueZip
2. Drag `NueZip.app` from `Applications` to the Trash
3. (Optional) Remove app data and logs:

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
rm -rf ~/Library/Logs/nuezip
```

## System Requirements

- **macOS**: Sonoma (14) or later recommended
- **CPU**: Apple Silicon (M-series) or Intel (64-bit)
- **Memory**: 4GB minimum, 8GB recommended
- **Storage**: ~50 MB

## Troubleshooting

If you encounter issues during installation:

- **macOS blocks the app**: Open **System Settings → Privacy & Security** and click **Open Anyway** for NueZip
- **Notarization warning**: Download a signed/notarized build from the Mac App Store

For more help, visit the [Troubleshooting guide](./troubleshooting.md).