# FAQ

Q: What is Gomoku?

A: Gomoku is a macOS-first board game app for five-in-a-row play. It supports human vs human, human vs AI, LAN play, and local saving of game records (`.sgf`).

Q: Which macOS versions are supported?

A: Gomoku runs on modern macOS releases; Monterey (12) and later are recommended.

Q: How do I download and install Gomoku?

A: Download the signed release from the project Releases page or install from the Mac App Store (if available). See the repository README for developer builds.

Q: How do I play over LAN?

A: Open the "Online / LAN" page in the app, create a room or join a visible room. Ensure Local Network permission is granted and all devices are on the same Wi‑Fi network.

Q: How do I save or export games?

A: Use the in-app Save or Export to create `.sgf` files. Choose the folder when exporting.

Q: How do I set Gomoku as the default app for `.sgf` files?

A: See the "Set Gomoku as the default SGF viewer" guide for Finder instructions (Get Info → Open with → Change All).

Q: Does Gomoku upload my data?

A: Gomoku is offline-first and does not upload personal data by default. LAN play transmits game data only to peers on your local network. See the Privacy Policy for details.

Q: How do I update the app?

A: Download the latest release or update through the Mac App Store (if you installed via the App Store).

Q: How do I report bugs or request features?

A: Open an issue in the project repository and include your macOS version, Gomoku version, reproduction steps, and logs if available.

Q: Where are logs and saved games stored?

A: For sandboxed (App Store) builds:

```
~/Library/Containers/com.w3cub.gomoku/Data/Library/Application Support/com.w3cub.gomoku/
```

Development builds may log to the console or `src-tauri` directory.

Q: Can I play against an AI?

A: Yes. Gomoku includes an AI opponent with multiple difficulty levels available in the game setup.

If you need more answers, please open an issue in the repository or consult the full documentation.