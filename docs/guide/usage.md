# Usage Guide

## Opening Archives

### Double-Click to Open

NueZip registers itself as the default handler for all supported archive formats. Simply double-click any archive file (`.zip`, `.rar`, `.7z`, `.tar`, `.gz`, `.bz2`, `.xz`, `.zst`) to open it in NueZip's main window.

### Open with NueZip (Finder Context Menu)

Right-click any archive file and select **Open with NueZip** from the context menu. The Finder extension also provides quick actions:

- **Extract Here** — Extract archive contents to the current folder
- **Extract to "FolderName/"** — Extract to a named subfolder
- **Compress to ZIP** — Compress selected files/folders to a ZIP archive
- **Open with NueZip** — Open in the main browser window

### Drag & Drop to Tray

Drag any archive file onto the NueZip menu bar icon to quickly open it in the drop panel for instant access. You can also drag files onto the tray icon to compress them.

## Extracting Archives

### Basic Extraction

1. Open an archive in NueZip
2. Click the **Extract** button in the toolbar
3. Choose a destination folder
4. Click **Extract**

### Quick Extract from Finder

Right-click an archive in Finder and select one of the quick actions:
- **Extract Here** — Extracts directly to the current folder
- **Extract to "[ArchiveName]/"** — Extracts to a named subfolder for clean organization

### Extract with Password

For password-protected archives, NueZip will prompt for the password. The built-in password manager can store credentials securely in your local keychain for future use.

## Compressing Archives

### Create a New Archive

1. Select files or folders in NueZip's main window
2. Click the **Compress** button in the toolbar
3. Choose the archive format (ZIP, 7z, TAR, GZIP, etc.)
4. Configure compression settings (level, encryption method)
5. Click **Compress**

### Compress from Finder

Right-click files/folders in Finder and select **Compress with NueZip**:
- **Compress to ZIP** — Quick ZIP archive creation
- **Compress with Options** — Opens NueZip with advanced settings

### Compress via Drag & Drop

Drag files onto the NueZip menu bar tray icon to quickly create a ZIP archive.

## Batch Operations

### Batch Compress

1. Select multiple items in NueZip
2. Choose **Batch Compress** from the toolbar or File menu
3. Each item will be compressed into a separate archive

### Batch Extract

1. Select multiple archives in NueZip
2. Choose **Batch Extract** from the toolbar or File menu
3. All archives will be extracted simultaneously

### Batch Convert

1. Select one or more archives
2. Choose **Convert** → select target format
3. NueZip will recompress each archive into the chosen format

### Batch Encrypt

1. Select multiple ZIP archives
2. Choose **Batch Encrypt**
3. Set a password — all selected archives will be password-protected

## Format Conversion

Convert archives between any supported formats:

1. Open an archive
2. Click **Convert** in the toolbar
3. Select the target format (e.g., RAR → ZIP, 7z → TAR.GZ)
4. Choose output location
5. Click **Convert**

## Archive Repair

For corrupted RAR or ZIP archives:

1. Open the corrupted archive
2. Click **Repair** in the toolbar
3. NueZip will attempt to reconstruct the archive data
4. The repaired archive is saved as a new file

## Archive Search

Find specific files within archives:

1. Click the **Search** button in the toolbar
2. Enter a filename pattern
3. NueZip searches through all entries in the open archive
4. Results are displayed with full paths for quick navigation

## Performance Benchmark

Test your system's compression performance:

1. Go to **Tools → Benchmark**
2. NueZip runs compression tests using various formats and settings
3. Results show compression speed (MB/s) and ratio for each format
4. Use this to compare performance across different compression methods

## Multi-Volume (Split) Archives

Create split archives for large data:

1. During compression, enable **Split into volumes**
2. Choose volume size (e.g., 100 MB, 650 MB, 4.7 GB, or custom)
3. NueZip creates numbered part files (`.zip.001`, `.zip.002`, etc.)
4. To extract, open the first part file — NueZip automatically loads the rest

- **Password**: Provide a password for encrypted archives
- **Wrap in Folder**: Automatically create a root folder if the archive has no single root directory
- **Open After**: Reveal the extracted files in Finder upon completion
- **Keep Broken Files**: Preserve any files extracted before an error (for partial recovery)
- **Update Mode**: Choose how to handle existing files (overwrite, skip, rename)

### Batch Extraction

1. Go to **Tools → Batch Extract**
2. Click **Add Files...** to select archive files
3. Choose a destination folder
4. Optionally enable **Delete source files after extraction**
5. Click **Start**

## Creating Archives

### Compress Files

1. Click the **Compress** button in the toolbar
2. Select files to compress (or drag and drop them into the window)
3. Choose **Archive Format**: ZIP, 7Z, TAR, GZIP, BZIP2
4. Configure **Compression Method** and level
5. Set **Save Location** and archive name
6. Optionally set a **Password** for encryption
7. Optionally set **Split Size** for multi-volume archives
8. Click **Compress**

### Add Files to Existing Archive

1. Open an existing archive in NueZip
2. Click **Add Files** in the toolbar
3. Select files to add
4. Click **Add**

## Batch Operations

### Batch Compress

1. Go to **Tools → Batch Compress**
2. Click **Select Files/Folders...** to choose items
3. Each selected item will become a separate archive
4. Configure output **Format**, **Save Location**, and file naming prefix
5. Click **Start**

### Batch Convert Format

1. Go to **Tools → Batch Convert Format**
2. Click **Add Files...** to select source archives
3. Choose **Target Format**
4. Optionally enable **Delete source files after conversion**
5. Click **Start**

### Batch Encrypt

1. Go to **Tools → Batch Encrypt**
2. Click **Add Files...** to select archives
3. Enter a **Password**
4. Click **Encrypt**

## Advanced Features

### Archive Repair

Repair corrupted or damaged archives:

1. Select the damaged archive
2. Go to **Tools → Repair Archive**
3. NueZip will scan the header, rebuild the directory, and fix data blocks
4. Review the repair result

### Format Conversion

Convert archives between formats:

1. Open an archive or select a file
2. Go to **File → Convert Format**
3. Choose the target format and compression level
4. Optionally delete the original file
5. Click **Convert**

### Password Manager

NueZip securely stores archive passwords in your local keychain:

1. Go to **Tools → Password Manager**
2. View all saved passwords
3. Add, edit, or delete entries
4. Passwords are automatically applied when opening matching encrypted archives

### Performance Benchmark

Test your system's compression performance:

1. Go to **Tools → Performance Benchmark**
2. Select a test file (or use the default)
3. Click **Test**
4. View results including compress/decompress speed and rating

### Archive Search

Find files within archives:

1. Open an archive
2. Press `Cmd+F` or click the search icon
3. Enter a filename, optionally matching case or whole word
4. Browse search results and click to navigate

## Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Cmd+O` | Open archive |
| `Cmd+N` | New archive |
| `Cmd+E` | Extract |
| `Cmd+F` | Find in archive |
| `Cmd+,` | Open settings |
| `Cmd+W` | Close window |
| `Cmd+Q` | Quit application |
| `Cmd+↑` | Go up one level |
| `Cmd+→` | Go forward |

## Settings

Access settings through **NueZip → Settings** or press `Cmd+,`:

- **General**: Language, launch at login, appearance theme
- **Compression**: Default format, compression level, split size
- **Extraction**: Default destination, wrap behavior, conflict resolution
- **Folder Access**: Manage folder permissions and bookmarks
- **Advanced**: Hardware acceleration, thread count, temporary directory
- **Privacy**: Data collection preferences