# LAN Play

## Overview

Gomoku supports playing against friends on the same local network. The LAN mode uses local network discovery or direct IP:port connections to let players find and join rooms.

Key features:

- Host a room (create a match) and advertise it on the local network
- Automatic LAN discovery of available rooms
- Join directly via IP and port
- Optional chat and spectating (if enabled)

## Hosting a Room (Host)

1. Open Gomoku and go to the "Online / LAN" page
2. Select "Create Room" or "Start Hosting"
3. Choose board size (e.g. 15x15 or 18x18) and match rules
4. Click "Start Hosting" — the app will show a port number (default chosen by the app)
5. Share the room name or your LAN IP with friends (example: `192.168.1.42`)

The application will run a local service and broadcast the room information so other devices on the same network can discover it.

## Joining a Room (Client)

Automatic discovery

1. On the "Online / LAN" page, refresh the room list
2. Select a discovered room and click "Join"

Manual join

1. Choose "Manual Join" or "Enter Address"
2. Enter the host's `IP:port` (for example `192.168.1.42:12345`)
3. Click "Join" and wait for the connection

## macOS Permissions & Network Notes

- Ensure Gomoku is allowed in **System Settings → Privacy & Security → Local Network** so it can be discovered and communicate with peers.
- Devices must be on the same Wi‑Fi network; some routers have client/AP isolation which prevents discovery.
- If a firewall is enabled, allow Gomoku's incoming and outgoing traffic or open the configured port.

## Troubleshooting

- Can't discover rooms: confirm Local Network permission and disable AP isolation on the router.
- Connection timed out joining a room: verify host IP/port and firewall settings.
- Lag or stutter: try a wired connection or switch to a less congested network; close other bandwidth‑heavy applications.

## Logs & Persistence

Room snapshots and service state are stored in the app data directory. In sandboxed builds the path example is:

```
~/Library/Containers/com.w3cub.gomoku/Data/Library/Application Support/com.w3cub.gomoku/
```

See the project documentation `docs/macos-sandbox-paths.md` for more details on locating logs.

---

If you want screenshots or a step‑by‑step walkthrough added to this guide, tell me and I will add them.
