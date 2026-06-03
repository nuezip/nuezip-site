# Troubleshooting (Gomoku on macOS)

This page collects common problems for macOS users and how to resolve them.

## Application won't start or crashes on launch

Symptoms: Gomoku does not open, crashes immediately, or shows an unexpected error.

Steps to try:

1. Ensure your macOS version meets the minimum requirements (Monterey 12+ recommended).
2. Quit and relaunch the app.
3. Reboot your Mac.
4. If the app was downloaded from Releases, try downloading a newer build or the signed/notarized build.
5. If problems persist, collect logs (see below) and open an issue on the project repository.

## LAN / Matchmaking issues

Symptoms: You cannot discover or join LAN games.

Checklist:

1. Confirm **Local Network** permission is granted (System Settings → Privacy & Security → Local Network).
2. Ensure all devices are connected to the same Wi‑Fi network; router client/AP isolation will block discovery.
3. Disable or configure firewall rules to allow Gomoku traffic.

## Saving / Opening game records (SGF) fails

Symptoms: Export or import of `.sgf` files fails or prompts for permission.

Fixes:

1. Check **Files and Folders** permission (System Settings → Privacy & Security → Files and Folders).
2. Try saving to `Documents` or `Downloads` first to verify write access.
3. Ensure the target path is not on an external drive with restrictive permissions.

## Permission-related issues

If a feature prompts for permission but doesn't work after granting it:

1. Quit the app and reopen it after granting the permission.
2. If needed, reset the permission prompt with `tccutil` (see the Permissions guide).

## Performance issues

If the game is laggy or slow:

1. Close other heavy applications.
2. Prefer a wired connection for LAN play when possible.
3. Reduce background processes that consume CPU or network bandwidth.

## View logs

To troubleshoot crashes or network issues, application logs are the most useful artifact. In sandboxed (App Store) builds, check:

```
~/Library/Containers/com.w3cub.gomoku/Data/Library/Logs/gomoku/gomoku.log
```

When running a development build, logs may be in the project directory (`./src-tauri/gomoku.log`) or printed to the console.

## Resetting the app

To reset settings and clear local data:

1. Quit Gomoku
2. Remove the container or support data (be careful—this deletes saved games and settings):

```bash
rm -rf ~/Library/Containers/com.w3cub.gomoku
```

3. Reopen Gomoku and reconfigure.

## Report an issue

When opening an issue, include:

- macOS version (Apple menu → About This Mac)
- Gomoku version (Gomoku → About Gomoku)
- Steps to reproduce
- Logs (attach `gomoku.log` if available)

This helps maintainers identify and fix the problem faster.