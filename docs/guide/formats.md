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

### Shiba Inu
**¥299**

![Shiba Inu](/pets/shibainu_500.png)

Playful and lively, the Shiba Inu brings energy to your desktop. Full of personality and charm, it's always ready to brighten your day.

- Unique animations: zoomies, head tilt, playful bark
- Energetic sound effects
- Expressive face with iconic Shiba smile

### Corgi
**¥299**

![Corgi](/pets/corgi_500.png)

Energetic with short little legs, the Corgi is pure joy in a small package. Watch its stubby legs waddle across your screen!

- Unique animations: sploot, waddle run, tail wag
- Cheerful barking sounds
- Adorable short legs and fluffy bottom

### Husky
**¥399**

![Husky](/pets/husky_500.png)

Expressive and handsome, the Husky brings the drama. Known for its "talking" behavior, this breed will make you smile with its quirky personality.

- Unique animations: howling, talking, dramatic flop
- Vocal sound effects (Husky "talking")
- Stunning coat and striking blue eyes

### Tugou (Free)
![Tugou](/pets/tugou_500.png)

Loyal and spirited, Tugou is the free default pet that comes with PetReminder. A faithful companion that's always ready to keep you company.

- Unique animations: tail wag, happy jump, head tilt
- Friendly bark sounds
- Loyal and affectionate personality

## Bundles

### 🐱 Full Cat Bundle
**¥25** (Save ¥5)

Unlock both **Ragdoll Cat** + **British Shorthair Cat** at a discounted price. Perfect for cat lovers who want both!

## How to Purchase

1. Open PetReminder
2. Go to the **Pets** tab
3. Browse available pets and tap **Purchase** on any premium pet
4. Confirm the in-app purchase
5. The pet will be unlocked and ready to use immediately

### Restore Purchases

If you've purchased pets on a different device or after reinstalling:

1. Open PetReminder → **Pets** tab
2. Tap **Restore Purchases**
3. Your previously purchased pets will be restored

## Download & Storage

Premium pet files (`.catpet`) are downloaded directly through the Mac App Store. Once downloaded, they are stored locally on your Mac — no internet connection needed for the pet to appear.

## More Coming Soon

We're constantly working on new pet breeds, including more cats, dogs, and maybe even some surprise animals! Stay tuned for updates.
