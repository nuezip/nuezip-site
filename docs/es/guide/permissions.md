# Permisos de macOS

NueZip puede solicitar algunos permisos de macOS para ofrecer la mejor experiencia. Esta página explica para qué sirve cada permiso y cómo gestionarlos.

## Archivos y carpetas

Para acceder a archivos en cualquier parte de tu sistema, NueZip necesita permiso de acceso a archivos.

**Para qué se usa**: Leer archivos comprimidos, extraer contenidos y crear nuevos archivos.

**Gestionar**: Configuración del sistema → **Privacidad y seguridad** → **Archivos y carpetas**

Concede acceso cuando se te solicite durante el primer inicio. Puedes gestionar o revocar el acceso en cualquier momento.

## Extensión de Finder

NueZip incluye una extensión de Finder que añade opciones de menú contextual con clic derecho.

**Para qué se usa**: Haz clic derecho en archivos comprimidos para extraer, comprimir o abrir con NueZip directamente desde Finder.

**Habilitar**: Configuración del sistema → **Privacidad y seguridad** → **Extensiones** → **Extensiones de Finder** → Habilita **NueZip**

## Notificaciones

NueZip puede mostrar notificaciones para operaciones de larga duración (extracción por lotes, compresión de archivos grandes).

**Para qué se usa**: Avisarte cuando se completa una operación en segundo plano.

**Gestionar**: Configuración del sistema → **Notificaciones** → **NueZip**

## Acceso total al disco (opcional)

Para extraer archivos a ubicaciones protegidas del sistema, NueZip puede solicitar Acceso total al disco.

**Para qué se usa**: Escribir archivos extraídos en ubicaciones fuera de tu carpeta de usuario.

**Gestionar**: Configuración del sistema → **Privacidad y seguridad** → **Acceso total al disco**

Este permiso es opcional y solo es necesario si trabajas con ubicaciones de todo el sistema.

## Restablecer un permiso con Terminal

Si se descartó un cuadro de diálogo de permiso o el estado es incoherente, puedes restablecer los avisos de permiso de macOS usando `tccutil`:

```bash
# Restablecer permisos para NueZip
tccutil reset All com.w3cub.nuezip
```

Tras ejecutar `tccutil`, reinicia la app y vuelve a activar la función para que se te solicite de nuevo.

## Solución de problemas

- Si no aparecen las notificaciones, comprueba que el permiso de **Notificaciones** esté concedido.
- Tras cambiar los permisos, cierra y vuelve a abrir NueZip siempre para que los cambios surtan efecto.

Para obtener más ayuda, visita la [guía de solución de problemas](./troubleshooting.md).
