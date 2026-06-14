# FAQ

Q: What is PetReminder?

A: PetReminder is a macOS desktop app that shows cute pets on your screen when reminders are due. It helps you stay on top of important tasks with adorable animal companions.

Q: Which macOS versions are supported?

A: PetReminder runs on macOS Monterey (12) and later, optimized for Apple Silicon (M-series).

Q: How do I download and install PetReminder?

A: Download from the [Mac App Store](https://apps.apple.com/app/id6771268165) or grab the latest release from [GitHub Releases](https://github.com/reminder-app/reminder/releases).

Q: Is PetReminder free?

A: The base app is free to download. Some premium pets are available via in-app purchase.

Q: What pets are available?

A: Currently includes free default pet plus premium breeds: **Ragdoll Cat**, **British Shorthair Cat**, **Shiba Inu**, **Corgi**, and **Husky**. More coming soon!

Q: How do I purchase a premium pet?

A: Open PetReminder → **Pets** tab, browse available pets, and tap "Purchase" to unlock via in-app purchase.

Q: Does PetReminder work offline?

A: Yes. Reminders and pet animations work fully offline. Only pet downloads from IAP require an internet connection.

Q: Does PetReminder upload my data?

A: No. PetReminder is offline-first. All your reminders and settings are stored locally. No data is uploaded to external servers.

Q: How do I update the app?

A: Update through the Mac App Store (recommended) or download the latest release from GitHub.

Q: How do I report bugs or request features?

A: Open an issue in the [project repository](https://github.com/reminder-app/reminder) and include your macOS version, PetReminder version, reproduction steps, and logs if available.

Q: Where are logs and data stored?

A: For sandboxed (App Store) builds:

```
~/Library/Containers/com.w3cub.reminder/Data/Library/Application Support/com.w3cub.reminder/
```

Development builds may log to the console or `src-tauri` directory.

If you need more answers, please open an issue in the repository or consult the full documentation.