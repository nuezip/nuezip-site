# Unterstützte Formate

NueZip unterstützt eine breite Palette von Archivformaten sowohl zum Lesen als auch zum Schreiben. Im Folgenden finden Sie die vollständige Formatkompatibilitätsmatrix.

## Formatmatrix

| Format | Lesen | Schreiben (Komprimieren) | Verschlüsselung | Multi-Volume |
|--------|:----:|:-----------------:|:----------:|:------------:|
| **ZIP** | ✅ | ✅ | AES-256 | ✅ |
| **7-Zip (.7z)** | ✅ | ✅ | AES-256 (LZMA2) | ✅ |
| **TAR** | ✅ | ✅ | — | ✅ |
| **GZIP (.gz)** | ✅ | ✅ | — | — |
| **BZIP2 (.bz2)** | ✅ | ✅ | — | — |
| **XZ** | ✅ | ✅ | — | — |
| **Zstandard (.zst)** | ✅ | ✅ | — | — |
| **RAR** | ✅ | ❌ | ✅ (lesen) | ✅ (lesen) |

> **Hinweis**: Die RAR-Komprimierung wird aufgrund von Lizenzbeschränkungen nicht unterstützt. NueZip kann RAR-Archive lesen, einschließlich Multi-Volume- und verschlüsselter RAR-Archive.

## Formatdetails

### ZIP
- **Komprimierung**: Store, Deflate, Deflate64, BZIP2, LZMA, PPMd
- **Verschlüsselung**: AES-256 (empfohlen), ZipCrypto (veraltet)
- **Volume-Unterstützung**: Multi-Volume-Split-Archive (`.zip.001`, `.zip.002`, ...)
- **Am besten für**: Universelle Kompatibilität plattformübergreifend

### 7-Zip
- **Komprimierung**: LZMA2 (Standard), LZMA, PPMd, BZIP2, Deflate
- **Verschlüsselung**: AES-256
- **Volume-Unterstützung**: Multi-Volume-Split-Archive
- **Am besten für**: Maximales Kompressionsverhältnis

### TAR
- **Komprimierung**: Unkomprimiert oder kombiniert mit GZIP/BZIP2/XZ/Zstandard
- **Am besten für**: Unix/Linux-Archive, Bewahrung von Dateiberechtigungen

### GZIP / BZIP2 / XZ / Zstandard
- **Eigenständige** Kompressionsformate (einzelne Datei, kein Archivbündel)
- Oft in Kombination mit TAR verwendet (`.tar.gz`, `.tar.xz`, `.tar.zst`)

### RAR
- **Leseunterstützung**: RAR4, RAR5, Multi-Volume, verschlüsselt
- **Reparatur**: Wiederherstellungsdatensatz und Rekonstruktion
- **Schreiben**: Nicht unterstützt

## Tipps

- **Zum Teilen mit anderen**: Verwenden Sie **ZIP** — es ist das am weitesten kompatible Format
- **Für persönliche Archivierung**: Verwenden Sie **7-Zip** — beste Kompressionsverhältnisse, spart Speicherplatz
- **Für große Dateien**: Verwenden Sie **Split ZIP** oder **Split 7-Zip**, um sie in handliche Volumes aufzuteilen
- **Für sensible Daten**: Aktivieren Sie stets **AES-256-Verschlüsselung** mit einem starken Passwort
