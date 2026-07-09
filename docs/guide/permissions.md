# macOS Permissions

NueZip may request a few macOS permissions to provide the best experience. This page explains what each permission is for and how to manage them.

## Files and Folders

To access archives anywhere on your system, NueZip needs file access permission.

**What it's used for**: Reading archive files, extracting contents, and creating new archives.

**Manage**: System Settings → **Privacy & Security** → **Files and Folders**

Grant access when prompted during first launch. You can manage or revoke access at any time.

## Finder Extension

NueZip includes a Finder extension that adds right-click context menu options.

**What it's used for**: Right-click archive files to extract, compress, or open with NueZip directly from Finder.

**Enable**: System Settings → **Privacy & Security** → **Extensions** → **Finder Extensions** → Enable **NueZip**

## Notifications

NueZip may show notifications for long-running operations (batch extraction, large archive compression).

**What it's used for**: Alerting you when a background operation completes.

**Manage**: System Settings → **Notifications** → **NueZip**

## Full Disk Access (Optional)

For extracting archives to system-protected locations, NueZip may request Full Disk Access.

**What it's used for**: Writing extracted files to locations outside your user folder.

**Manage**: System Settings → **Privacy & Security** → **Full Disk Access**

This permission is optional and only needed if you work with system-wide locations.

## Resetting a Permission with Terminal

If a permission dialog was dismissed or the state is inconsistent, you can reset macOS permission prompts using `tccutil`:

```bash
# Reset permissions for NueZip
tccutil reset All com.nuezip.app
```

After running `tccutil`, restart the app and trigger the feature again to be reprompted.

## Troubleshooting

- If pets don't appear on reminders, check **Notifications** permission is granted.
- If purchased pets aren't downloading, check **Files and Folders** permission.
- After changing permissions, always quit and reopen PetReminder for changes to take effect.

For more help, visit the [Troubleshooting guide](./troubleshooting.md).
