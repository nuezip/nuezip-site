# Troubleshooting

This page collects common problems for NueZip on macOS and how to resolve them.

## Application won't start or crashes on launch

Symptoms: NueZip does not open, crashes immediately, or shows an unexpected error.

Steps to try:

1. Ensure your macOS version meets the minimum requirements (macOS 14 Sonoma+).
2. Quit and relaunch the app.
3. Reboot your Mac.
4. If the app was downloaded from GitHub Releases, try downloading the latest build or the notarized version.
5. If problems persist, collect logs (see below) and open an issue.

## Cannot open a RAR archive

Symptoms: NueZip fails to open a `.rar` file, or shows an error.

Checklist:

1. Ensure the RAR file is not corrupted. Try opening it with another tool like The Unarchiver.
2. Multi-volume RAR archives must have all parts present (`.part1.rar`, `.part2.rar`, etc.).
3. Password-protected RAR archives require the correct password.
4. RAR5 format is supported. If you have an older RAR format, please report it.

## Extraction fails with password error

Symptoms: Extraction fails with "Wrong password" or decryption error.

Checklist:

1. Verify the password is correct — passwords are case-sensitive.
2. Ensure the correct encryption type is supported (AES-256 for ZIP).
3. Try re-entering the password from the password manager.

## Finder Extension not showing

Symptoms: Right-clicking an archive in Finder shows no NueZip options.

Checklist:

1. Enable the extension: System Settings → Privacy & Security → Extensions → Finder Extensions → Enable **NueZip**.
2. Restart Finder: Right-click Finder in Activity Monitor → Relaunch, or run `killall Finder` in Terminal.
3. Reinstall the app if the extension still doesn't appear.

## License / purchase not showing

Symptoms: You purchased NueZip but it still shows as trial.

Checklist:

1. Ensure you are signed in to the same Apple ID used for the purchase.
2. Restore purchases: NueZip → Settings → License → Restore Purchases.
3. Contact support if the issue persists.

## How to collect debug logs

To help diagnose issues, collect debug logs from NueZip:

```bash
# Copy logs to Desktop for sharing
cp -r ~/Library/Containers/com.w3cub.nuezip/Data/Library/Application\ Support/com.w3cub.nuezip/Logs ~/Desktop/NueZip-Logs
```

Then open an issue on [GitHub Issues](https://github.com/nuezip/nuezip/issues) and attach the logs.

Fixes:

1. Ensure you're signed into the same Apple ID used for purchase.
2. Go to **Pets** tab and tap **Restore Purchases**.
3. If still missing, try restarting the app.
4. Contact support if the issue persists — include your purchase receipt.

## Permission-related issues

If a feature prompts for permission but doesn't work after granting it:

1. Quit the app and reopen it after granting the permission.
2. If needed, reset the permission prompt with `tccutil` (see the [Permissions guide](./permissions.md)).

## Performance issues

If the app is slow or the pet animation is laggy:

1. Close other heavy applications.
2. Reduce animation quality in Settings → Pet.
3. Disable sound effects if they cause stutter.

## View logs

To troubleshoot crashes or issues, application logs are the most useful artifact. In sandboxed (App Store) builds, check:

```
~/Library/Containers/com.w3cub.reminder/Data/Library/Logs/reminder/reminder.log
```

When running a development build, logs may be in the project directory (`./src-tauri/reminder.log`) or printed to the console.

## Resetting the app

To reset settings and clear local data:

1. Quit PetReminder
2. Remove the container (be careful—this deletes all reminders and settings):

```bash
rm -rf ~/Library/Containers/com.w3cub.reminder
```

3. Reopen PetReminder and reconfigure.

## Report an issue

When opening an issue, include:

- macOS version (Apple menu → About This Mac)
- PetReminder version (PetReminder → About)
- Steps to reproduce
- Logs (attach `reminder.log` if available)

This helps maintainers identify and fix the problem faster.