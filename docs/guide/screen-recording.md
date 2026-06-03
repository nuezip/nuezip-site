# macOS Permissions Guide

Gomoku may request a small set of macOS permissions for specific features. This page explains what they are and how to manage them.

## Local Network (required for LAN play)

When you first host or join a LAN game, macOS will prompt to allow Local Network access. Granting this permission lets Gomoku discover and communicate with peers on the same Wi‑Fi network.

Manage it at: **System Settings → Privacy & Security → Local Network**

If you accidentally denied the permission, toggle it on in the settings and restart Gomoku.

## Files and Folders (read/write game records)

Gomoku asks for Files & Folders access when you open or save game records (SGF) or export logs. Grant access to the directories you want Gomoku to read.

Manage it at: **System Settings → Privacy & Security → Files and Folders**

## Screen Recording / Accessibility (optional)

Some auxiliary features (for example, overlay helpers or advanced capture tools) may request Screen Recording or Accessibility permissions. These are optional and only needed if you enable the related feature in the app.

Manage them at:

- **Screen Recording**: System Settings → Privacy & Security → Screen Recording
- **Accessibility**: System Settings → Privacy & Security → Accessibility

### Resetting a permission with Terminal

If a permission dialog was dismissed or the state is inconsistent, you can reset macOS permission prompts for an app using `tccutil`. Replace the bundle id if different:

```bash
# Reset ScreenCapture prompts for Gomoku
tccutil reset ScreenCapture com.w3cub.gomoku

# Reset Local Network prompts (resets all local network prompts)
tccutil reset LocalNetwork
```

After running `tccutil`, restart the app and trigger the feature again to reprompt.

## Troubleshooting

- If LAN games are not discovered, ensure Local Network permission is allowed and that devices are on the same network (no AP/client isolation).
- If saving/opening SGF files fails, check Files & Folders permission and try saving to `Documents` first.
- If the app still behaves unexpectedly after changing permissions, try quitting and reopening Gomoku.

If you need help locating where logs or application data are stored, see `docs/macos-sandbox-paths.md` in the project documentation.