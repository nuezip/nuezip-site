# Cómo contribuir

¡Agradecemos las contribuciones para mejorar NueZip! Ya sea que estés corrigiendo un error, añadiendo una función, traduciendo o mejorando la documentación, tu ayuda es apreciada.

## Formas de contribuir

### Informes de errores
- Revisa primero los [issues](https://github.com/nuezip/nuezip/issues) existentes
- Incluye la versión de macOS, la versión de NueZip y los pasos para reproducir el problema
- Adjunta archivos de ejemplo si es posible (de tamaño mínimo)

### Solicitudes de funciones
- Describe la función y el caso de uso
- Explica por qué beneficiaría a los usuarios de NueZip
- Comprueba si se alinea con la filosofía nativa de macOS y centrada en el uso sin conexión

### Traducciones
- NueZip admite varios idiomas. Para la app de macOS, consulta `NueZip/Resources/i18n/` para ver las traducciones existentes.
- Para este sitio de documentación, traduce el markdown dentro de `docs/` — cada idioma vive en su propia carpeta de locale (por ejemplo, `docs/zh-CN/`, `docs/es/`).
- Mantén los nombres de marca y de formatos (NueZip, macOS, ZIP, RAR, 7-Zip, Finder, App Store, AES-256) en su forma original.

### Contribuciones de código
- El proyecto está escrito en **Swift 6 + SwiftUI**
- Haz un fork del repositorio y envía una pull request
- Sigue los patrones de Clean Architecture utilizados en la base de código

## Primeros pasos

### Requisitos previos
- Node.js 18 o posterior (para el sitio)
- Gestor de paquetes pnpm (para el sitio)
- Xcode 16+ (para el desarrollo de la app)
- macOS 14 Sonoma o posterior

### Configuración de desarrollo

1. **Haz un fork del repositorio** en GitHub
2. **Clona tu fork**:
   ```bash
   git clone https://github.com/nuezip/nuezip.git
   cd nuezip-site
   ```
3. **Instala las dependencias**:
   ```bash
   pnpm install
   ```
4. **Inicia el servidor de desarrollo**:
   ```bash
   pnpm docs:dev
   ```
5. **Abre** `http://localhost:5173` en tu navegador

### Realizar cambios

1. Crea una nueva rama para tus cambios:
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Realiza tus cambios en los archivos de documentación en `docs/`
3. Prueba tus cambios compilando el sitio:
   ```bash
   pnpm docs:build
   ```
4. Haz commit de tus cambios:
   ```bash
   git add .
   git commit -m "Description of your changes"
   ```

### Enviar cambios

1. **Sube tu rama** a tu fork:
   ```bash
   git push origin feature/your-feature-name
   ```
2. **Crea una Pull Request** en GitHub
3. **Espera la revisión** y responde a cualquier comentario

## Directrices

### Estilo de redacción
- Usa un lenguaje claro y conciso
- Escribe en voz activa cuando sea posible
- Sé inclusivo y acogedor
- Usa un formato coherente
- Incluye capturas de pantalla cuando sean útiles

### Estructura de archivos
- Las páginas de documentación van en `docs/`
- Las guías van en `docs/guide/`
- Usa nombres de archivo en minúsculas con guiones: `my-new-guide.md`
- El frontmatter no es obligatorio, pero puede usarse para metadatos

### Enlaces
- Usa enlaces relativos para la documentación interna
- Enlaza a recursos externos cuando sea útil
- Asegúrate de que todos los enlaces funcionen

### Imágenes y recursos
- Coloca las imágenes en `docs/public/` o en subdirectorios
- Usa nombres de archivo descriptivos
- Optimiza las imágenes para la web (menos de 500KB preferiblemente)

## Código de conducta

Este proyecto sigue un código de conducta. Al participar, aceptas:
- Ser respetuoso e inclusivo
- Centrarte en comentarios constructivos
- Aceptar la responsabilidad de tus errores

Consulta [CODE_OF_CONDUCT.md](https://github.com/nuezip/nuezip/blob/main/CODE_OF_CONDUCT.md) para más detalles.

## ¿Preguntas?

Si tienes dudas sobre cómo contribuir:
- Revisa los [issues](https://github.com/nuezip/nuezip/issues) y [discussions](https://github.com/nuezip/nuezip/discussions) existentes
- Crea un nuevo issue si es necesario
- Contacta a los encargados del mantenimiento

¡Gracias por ayudar a mejorar la documentación de NueZip!
