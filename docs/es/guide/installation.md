# Instalación

NueZip está disponible para macOS a través de la Mac App Store.

## Opciones de descarga

### Mac App Store (recomendado)

- **Descargar**: [NueZip en la Mac App Store](https://apps.apple.com/app/id6785846417)

La versión de la Mac App Store ofrece actualizaciones automáticas e integración perfecta con macOS.

### GitHub Releases (alternativa)

Si prefieres descargar directamente, puedes obtener la app desde [GitHub Releases](https://github.com/nuezip/nuezip/releases). Ten en cuenta que esta versión no recibe actualizaciones automáticas.

## Pasos de instalación

### Mac App Store

1. Haz clic en el enlace de descarga de arriba o busca "NueZip" en la Mac App Store
2. Haz clic en "Obtener" para descargar la app
3. La app se descargará e instalará automáticamente
4. Abre NueZip desde tu carpeta de Aplicaciones o el Launchpad

### GitHub Releases

1. Descarga el último `.dmg` desde la página de Releases
2. Haz doble clic en el `.dmg` descargado para abrirlo
3. Arrastra el icono de `NueZip.app` a tu carpeta de `Aplicaciones`
4. Expulsa la imagen montada y abre `NueZip` desde `Aplicaciones`

Si macOS impide abrir la app (Gatekeeper), abre **Configuración del sistema → Privacidad y seguridad** y haz clic en **Abrir de todos modos** para NueZip, o haz clic derecho en la app y elige **Abrir**.

## Primer inicio

Cuando abres NueZip por primera vez, se te guiará a través de un flujo de incorporación para:

- **Conceder acceso a carpetas**: Permite que NueZip acceda a directorios comunes (Descargas, Documentos, Escritorio)
- **Habilitar la extensión de Finder**: Activa el menú contextual con clic derecho para operaciones rápidas con archivos

Concede los permisos cuando se te soliciten. Puedes modificarlos en cualquier momento en **Configuración del sistema → Privacidad y seguridad**.

## Actualizaciones

- **Versión de la Mac App Store**: Las actualizaciones las gestiona automáticamente la App Store
- **Versión de GitHub Releases**: Descarga la versión más reciente y reemplaza la app en `Aplicaciones`

## Desinstalación

Para desinstalar NueZip:

1. Cierra NueZip
2. Arrastra `NueZip.app` desde `Aplicaciones` a la Papelera
3. (Opcional) Elimina los datos y registros de la app:

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
rm -rf ~/Library/Logs/nuezip
```

## Requisitos del sistema

- **macOS**: Sonoma (14) o posterior recomendado
- **CPU**: Apple Silicon (serie M) o Intel (64 bits)
- **Memoria**: 4 GB mínimo, 8 GB recomendado
- **Almacenamiento**: ~50 MB

## Solución de problemas

Si encuentras problemas durante la instalación:

- **macOS bloquea la app**: Abre **Configuración del sistema → Privacidad y seguridad** y haz clic en **Abrir de todos modos** para NueZip
- **Advertencia de notarización**: Descarga una compilación firmada y notarizada desde la Mac App Store

Para obtener más ayuda, visita la [guía de solución de problemas](./troubleshooting.md).
