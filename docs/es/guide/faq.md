# Preguntas frecuentes

P: ¿Qué es NueZip?

R: NueZip es un gestor de archivos profesional para macOS, compatible con la compresión y extracción de múltiples formatos de archivo, incluyendo RAR, ZIP, 7-Zip, TAR, GZIP y BZIP2.

P: ¿Qué versiones de macOS son compatibles?

R: NueZip requiere macOS 14 Sonoma o posterior, y está optimizado para chips Apple Silicon (serie M).

P: ¿Cómo descargo e instalo NueZip?

R: Descarga desde la [Mac App Store](https://apps.apple.com/app/id6785846417) (recomendado) o obtén la última versión desde [GitHub Releases](https://github.com/nuezip/nuezip/releases).

P: ¿Es gratuito NueZip?

R: NueZip ofrece una versión de prueba gratuita con funciones básicas. Una compra única desbloquea el conjunto completo de funciones, incluyendo operaciones por lotes, reparación de archivos y cifrado avanzado.

P: ¿Qué formatos son compatibles?

R: **Lectura**: RAR, ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
**Escritura (comprimir)**: ZIP, 7-Zip, TAR, GZIP, BZIP2, XZ, Zstandard\
Consulta la [Introducción](/es/guide/introduction) para ver la matriz completa de formatos.

P: ¿Puede NueZip crear archivos RAR?

R: No. NueZip puede **leer** archivos RAR (incluidos los archivos multi-volumen y reparados), pero la compresión RAR no es compatible debido a restricciones de licencia.

P: ¿Es seguro NueZip para archivos confidenciales?

R: Sí. NueZip funciona totalmente sin conexión. Todas las operaciones se ejecutan localmente en tu Mac. El cifrado AES-256 está disponible para archivos ZIP protegidos con contraseña.

P: ¿Sube NueZip mis archivos a la nube?

R: No. NueZip es una aplicación totalmente sin conexión. Tus archivos nunca se suben a ningún lugar. No se requiere conexión a internet para comprimir o extraer.

P: ¿Cómo actualizo la app?

R: Actualiza a través de la Mac App Store (automático) o descarga la última versión desde GitHub Releases.

P: ¿Cómo informo de errores o solicito funciones?

R: Abre un issue en el [repositorio de GitHub](https://github.com/nuezip/nuezip/issues). Por favor incluye tu versión de macOS, versión de NueZip y los pasos para reproducir.

P: ¿Dónde se almacenan los registros y los datos?

R: Para compilaciones con sandbox (App Store):

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Application Support/com.w3cub.nuezip/
```

Las compilaciones de desarrollo pueden escribir registros en la consola.

Si necesitas más respuestas, por favor abre un issue en el repositorio o consulta la documentación completa.
