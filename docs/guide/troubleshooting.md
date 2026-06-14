# Troubleshooting (PetReminder on macOS)

This page collects common problems for macOS users and how to resolve them.

## Application won't start or crashes on launch

Symptoms: PetReminder does not open, crashes immediately, or shows an unexpected error.

Steps to try:

1. Ensure your macOS version meets the minimum requirements (Monterey 12+ recommended).
2. Quit and relaunch the app.
3. Reboot your Mac.
4. If the app was downloaded from GitHub Releases, try downloading a newer build or the notarized build.
5. If problems persist, collect logs (see below) and open an issue on the project repository.

## Pet not appearing on reminders

Symptoms: Reminder fires but no pet appears.

Checklist:

1. Ensure **Notifications** permission is granted (System Settings → Privacy & Security → Notifications).
2. Check that a pet is selected in Settings → Pet.
3. Try restarting the app after changing pet settings.

## IAP purchase not showing

Symptoms: You purchased a pet but it's not available in the app.

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