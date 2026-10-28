# Formats pris en charge

NueZip prend en charge un large éventail de formats d'archives en lecture et en écriture. Voici la matrice complète de compatibilité des formats.

## Matrice des formats

| Format | Lecture | Écriture (Compression) | Chiffrement | Multi-volumes |
|--------|:----:|:-----------------:|:----------:|:------------:|
| **ZIP** | ✅ | ✅ | AES-256 | ✅ |
| **7-Zip (.7z)** | ✅ | ✅ | AES-256 (LZMA2) | ✅ |
| **TAR** | ✅ | ✅ | — | ✅ |
| **GZIP (.gz)** | ✅ | ✅ | — | — |
| **BZIP2 (.bz2)** | ✅ | ✅ | — | — |
| **XZ** | ✅ | ✅ | — | — |
| **Zstandard (.zst)** | ✅ | ✅ | — | — |
| **RAR** | ✅ | ❌ | ✅ (lecture) | ✅ (lecture) |

> **Remarque** : La compression RAR n'est pas prise en charge en raison de restrictions de licence. NueZip peut lire les archives RAR, y compris les archives RAR multi-volumes et chiffrées.

## Détails des formats

### ZIP
- **Compression** : Store, Deflate, Deflate64, BZIP2, LZMA, PPMd
- **Chiffrement** : AES-256 (recommandé), ZipCrypto (hérité)
- **Prise en charge des volumes** : Archives fractionnées multi-volumes (`.zip.001`, `.zip.002`, ...)
- **Idéal pour** : Compatibilité universelle entre plates-formes

### 7-Zip
- **Compression** : LZMA2 (par défaut), LZMA, PPMd, BZIP2, Deflate
- **Chiffrement** : AES-256
- **Prise en charge des volumes** : Archives fractionnées multi-volumes
- **Idéal pour** : Taux de compression maximal

### TAR
- **Compression** : Non compressé, ou combiné avec GZIP/BZIP2/XZ/Zstandard
- **Idéal pour** : Archives Unix/Linux, préservation des permissions de fichiers

### GZIP / BZIP2 / XZ / Zstandard
- Formats de compression **autonomes** (fichier unique, sans regroupement d'archive)
- Souvent utilisés en combinaison avec TAR (`.tar.gz`, `.tar.xz`, `.tar.zst`)

### RAR
- **Prise en charge en lecture** : RAR4, RAR5, multi-volumes, chiffré
- **Réparation** : Enregistrement de récupération et reconstruction
- **Écriture** : Non pris en charge

## Conseils

- **Pour partager avec d'autres** : Utilisez **ZIP** — c'est le format le plus largement compatible
- **Pour l'archivage personnel** : Utilisez **7-Zip** — meilleurs taux de compression, économise l'espace disque
- **Pour les fichiers volumineux** : Utilisez **Split ZIP** ou **Split 7-Zip** pour les diviser en volumes gérables
- **Pour les données sensibles** : Activez toujours le **chiffrement AES-256** avec un mot de passe robuste
