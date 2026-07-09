# Supported Formats

NueZip supports a wide range of archive formats for both reading and writing. Below is the complete format compatibility matrix.

## Format Matrix

| Format | Read | Write (Compress) | Encryption | Multi-Volume |
|--------|:----:|:-----------------:|:----------:|:------------:|
| **ZIP** | ✅ | ✅ | AES-256 | ✅ |
| **7-Zip (.7z)** | ✅ | ✅ | AES-256 (LZMA2) | ✅ |
| **TAR** | ✅ | ✅ | — | ✅ |
| **GZIP (.gz)** | ✅ | ✅ | — | — |
| **BZIP2 (.bz2)** | ✅ | ✅ | — | — |
| **XZ** | ✅ | ✅ | — | — |
| **Zstandard (.zst)** | ✅ | ✅ | — | — |
| **RAR** | ✅ | ❌ | ✅ (read) | ✅ (read) |

> **Note**: RAR compression is not supported due to licensing restrictions. NueZip can read RAR archives including multi-volume and encrypted RAR archives.

## Format Details

### ZIP
- **Compression**: Store, Deflate, Deflate64, BZIP2, LZMA, PPMd
- **Encryption**: AES-256 (recommended), ZipCrypto (legacy)
- **Volume support**: Multi-volume split archives (`.zip.001`, `.zip.002`, ...)
- **Best for**: Universal compatibility across platforms

### 7-Zip
- **Compression**: LZMA2 (default), LZMA, PPMd, BZIP2, Deflate
- **Encryption**: AES-256
- **Volume support**: Multi-volume split archives
- **Best for**: Maximum compression ratio

### TAR
- **Compression**: Uncompressed, or combined with GZIP/BZIP2/XZ/Zstandard
- **Best for**: Unix/Linux archives, preserving file permissions

### GZIP / BZIP2 / XZ / Zstandard
- **Standalone** compression formats (single file, no archive bundling)
- Often used in combination with TAR (`.tar.gz`, `.tar.xz`, `.tar.zst`)

### RAR
- **Read support**: RAR4, RAR5, multi-volume, encrypted
- **Repair**: Recovery record and reconstruction
- **Write**: Not supported

## Tips

- **For sharing with others**: Use **ZIP** — it's the most widely compatible format
- **For personal archiving**: Use **7-Zip** — best compression ratios, save disk space
- **For large files**: Use **Split ZIP** or **Split 7-Zip** to break into manageable volumes
- **For sensitive data**: Always enable **AES-256 encryption** with a strong password
- Distinctive round face with big eyes

