# FAQ

Q: What is NueZip?

A: NueZip is a professional archive manager for macOS, supporting compression and extraction of multiple archive formats including RAR, ZIP, 7-Zip, TAR, GZIP, and BZIP2.

Q: Which macOS versions are supported?

A: NueZip requires macOS 14 Sonoma or later, and is optimized for Apple Silicon (M-series) chips.

Q: How do I download and install NueZip?

A: Download from the [Mac App Store](https://apps.apple.com/app/id6785846417) (recommended) or grab the latest release from [GitHub Releases](https://github.com/nuezip/nuezip/releases).

Q: Is NueZip free?

A: NueZip offers a free trial with core features. A one-time purchase unlocks the full feature set including batch operations, archive repair, and advanced encryption.

Q: What formats are supported?

A: **Read**: RAR, ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
**Write (compress)**: ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
See [Introduction](/guide/introduction) for the full format matrix.

Q: Can NueZip create RAR archives?

A: No. NueZip can **read** RAR archives (including multi-volume and repaired archives), but RAR compression is not supported due to licensing restrictions.

Q: Is NueZip safe for confidential files?

A: Yes. NueZip operates entirely offline. All operations run locally on your Mac. AES-256 encryption is available for password-protected ZIP archives.

Q: Does NueZip upload my files to the cloud?

A: No. NueZip is a fully offline application. Your files are never uploaded anywhere. No internet connection is required for compression or extraction.

Q: How do I update the app?

A: Update through the Mac App Store (automatic) or download the latest release from GitHub Releases.

Q: How do I report bugs or request features?

A: Open an issue on the [GitHub repository](https://github.com/nuezip/nuezip/issues). Please include your macOS version, NueZip version, and steps to reproduce.

Q: Where are logs and data stored?

A: For sandboxed (App Store) builds:

```
~/Library/Containers/com.nuezip.app/Data/Library/Application Support/com.nuezip.app/
```

Development builds may log to the console or `src-tauri` directory.

If you need more answers, please open an issue in the repository or consult the full documentation.