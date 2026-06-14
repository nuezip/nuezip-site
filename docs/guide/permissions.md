# macOS Permissions

PetReminder may request a few macOS permissions to provide the best experience. This page explains what each permission is for and how to manage them.

## Notifications

When a reminder fires, PetReminder displays a notification. macOS will prompt you to allow notifications the first time a reminder triggers.

**What it's used for**: Showing reminder alerts and pet appearance notifications.

**Manage**: System Settings → **Notifications** → **PetReminder**

You can customize:
- Alert style (banners, alerts, or none)
- Show on lock screen
- Show in Notification Center
- Sound

## Files and Folders

PetReminder stores your reminders, settings, and downloaded pet data locally.

**What it's used for**: Saving reminder data on your Mac and storing purchased pet files.

**Manage**: System Settings → **Privacy & Security** → **Files and Folders**

Grant access when prompted during first launch for the best experience.

## Accessibility (Optional)

Some pet interaction features may request Accessibility permission in future updates (for example, click-through pet behavior).

**What it's used for**: Allowing pets to receive mouse events on your desktop.

**Manage**: System Settings → **Privacy & Security** → **Accessibility**

This permission is optional and only needed if you enable related features.

## Resetting a Permission with Terminal

If a permission dialog was dismissed or the state is inconsistent, you can reset macOS permission prompts using `tccutil`:

```bash
# Reset Notifications prompts for PetReminder
tccutil reset Accessibility com.w3cub.reminder

# To see what was reset
tccutil reset All com.w3cub.reminder
```

After running `tccutil`, restart the app and trigger the feature again to be reprompted.

## Troubleshooting

- If pets don't appear on reminders, check **Notifications** permission is granted.
- If purchased pets aren't downloading, check **Files and Folders** permission.
- After changing permissions, always quit and reopen PetReminder for changes to take effect.

For more help, visit the [Troubleshooting guide](./troubleshooting.md).
