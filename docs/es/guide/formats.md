# Formatos compatibles

NueZip es compatible con una amplia gama de formatos de archivo tanto para lectura como para escritura. A continuación se muestra la matriz completa de compatibilidad de formatos.

## Matriz de formatos

| Formato | Lectura | Escritura (comprimir) | Cifrado | Multi-volumen |
|--------|:----:|:-----------------:|:----------:|:------------:|
| **ZIP** | ✅ | ✅ | AES-256 | ✅ |
| **7-Zip (.7z)** | ✅ | ✅ | AES-256 (LZMA2) | ✅ |
| **TAR** | ✅ | ✅ | — | ✅ |
| **GZIP (.gz)** | ✅ | ✅ | — | — |
| **BZIP2 (.bz2)** | ✅ | ✅ | — | — |
| **XZ** | ✅ | ✅ | — | — |
| **Zstandard (.zst)** | ✅ | ✅ | — | — |
| **RAR** | ✅ | ❌ | ✅ (lectura) | ✅ (lectura) |

> **Nota**: La compresión RAR no es compatible debido a restricciones de licencia. NueZip puede leer archivos RAR, incluidos los archivos RAR multi-volumen y cifrados.

## Detalles de formatos

### ZIP
- **Compresión**: Store, Deflate, Deflate64, BZIP2, LZMA, PPMd
- **Cifrado**: AES-256 (recomendado), ZipCrypto (heredado)
- **Soporte de volúmenes**: Archivos divididos multi-volumen (`.zip.001`, `.zip.002`, ...)
- **Ideal para**: Compatibilidad universal entre plataformas

### 7-Zip
- **Compresión**: LZMA2 (predeterminado), LZMA, PPMd, BZIP2, Deflate
- **Cifrado**: AES-256
- **Soporte de volúmenes**: Archivos divididos multi-volumen
- **Ideal para**: Máxima relación de compresión

### TAR
- **Compresión**: Sin comprimir, o combinado con GZIP/BZIP2/XZ/Zstandard
- **Ideal para**: Archivos de Unix/Linux, preservando permisos de archivos

### GZIP / BZIP2 / XZ / Zstandard
- Formatos de compresión **independientes** (un solo archivo, sin agrupación en archivo)
- A menudo se usan en combinación con TAR (`.tar.gz`, `.tar.xz`, `.tar.zst`)

### RAR
- **Soporte de lectura**: RAR4, RAR5, multi-volumen, cifrado
- **Reparación**: Registro de recuperación y reconstrucción
- **Escritura**: No compatible

## Consejos

- **Para compartir con otros**: Usa **ZIP** — es el formato más ampliamente compatible
- **Para archivo personal**: Usa **7-Zip** — mejores relaciones de compresión, ahorra espacio en disco
- **Para archivos grandes**: Usa **ZIP dividido** o **7-Zip dividido** para dividir en volúmenes manejables
- **Para datos sensibles**: Activa siempre el **cifrado AES-256** con una contraseña robusta
