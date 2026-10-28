# Solución de problemas

Esta página recopila problemas comunes de NueZip en macOS y cómo resolverlos.

## La aplicación no arranca o se cierra al iniciar

Síntomas: NueZip no se abre, se cierra inmediatamente o muestra un error inesperado.

Pasos a probar:

1. Asegúrate de que tu versión de macOS cumple los requisitos mínimos (macOS 14 Sonoma+).
2. Cierra y vuelve a abrir la app.
3. Reinicia tu Mac.
4. Si la app se descargó desde GitHub Releases, prueba a descargar la compilación más reciente o la versión notarizada.
5. Si persisten los problemas, recopila los registros (ver abajo) y abre un issue.

## No se puede abrir un archivo RAR

Síntomas: NueZip falla al abrir un archivo `.rar`, o muestra un error.

Lista de comprobación:

1. Asegúrate de que el archivo RAR no esté corrupto. Prueba a abrirlo con otra herramienta como The Unarchiver.
2. Los archivos RAR multi-volumen deben tener todas las partes presentes (`.part1.rar`, `.part2.rar`, etc.).
3. Los archivos RAR protegidos con contraseña requieren la contraseña correcta.
4. El formato RAR5 es compatible. Si tienes un formato RAR más antiguo, por favor repórtalo.

## La extracción falla con error de contraseña

Síntomas: La extracción falla con "Contraseña incorrecta" o error de descifrado.

Lista de comprobación:

1. Verifica que la contraseña sea correcta — las contraseñas distinguen mayúsculas de minúsculas.
2. Asegúrate de que el tipo de cifrado admitido sea correcto (AES-256 para ZIP).
3. Prueba a volver a introducir la contraseña desde el gestor de contraseñas.

## La extensión de Finder no aparece

Síntomas: Al hacer clic derecho en un archivo en Finder no aparecen opciones de NueZip.

Lista de comprobación:

1. Habilita la extensión: Configuración del sistema → Privacidad y seguridad → Extensiones → Extensiones de Finder → Habilita **NueZip**.
2. Reinicia Finder: Haz clic derecho en Finder en Monitor de actividad → Relanzar, o ejecuta `killall Finder` en Terminal.
3. Reinstala la app si la extensión sigue sin aparecer.

## Licencia / compra no aparece

Síntomas: Compraste NueZip pero sigue mostrándose como versión de prueba.

Lista de comprobación:

1. Asegúrate de haber iniciado sesión con el mismo Apple ID usado para la compra.
2. Restaura las compras: NueZip → Ajustes → Licencia → Restaurar compras.
3. Contacta con soporte si el problema persiste.

## Cómo recopilar registros de depuración

Para ayudar a diagnosticar problemas, recopila los registros de depuración de NueZip:

```bash
# Copia los registros al Escritorio para compartirlos
cp ~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log ~/Desktop/NueZip-Logs
```

Luego abre un issue en [GitHub Issues](https://github.com/nuezip/nuezip/issues) y adjunta los registros.

## Problemas relacionados con permisos

Si una función solicita permiso pero no funciona tras concederlo:

1. Cierra la app y vuélvela a abrir tras conceder el permiso.
2. Si es necesario, restablece el aviso de permiso con `tccutil` (consulta la [guía de permisos](./permissions.md)).

## Problemas de rendimiento

Si la app es lenta o no responde:

1. Cierra otras aplicaciones pesadas.
2. Prueba a extraer un archivo más pequeño para aislar el problema.
3. Reinicia la app si el rendimiento empeora con el tiempo.

## Ver registros

Para solucionar cierres inesperados o problemas, los registros de la aplicación son el artefacto más útil. En compilaciones con sandbox (App Store), consulta:

```
~/Library/Containers/com.w3cub.nuezip/Data/Library/Logs/NueZip/nuezip.log
```

## Restablecer la app

Para restablecer los ajustes y borrar los datos locales:

1. Cierra NueZip
2. Elimina el contenedor (ten cuidado — esto borra todos los ajustes):

```bash
rm -rf ~/Library/Containers/com.w3cub.nuezip
```

3. Vuelve a abrir NueZip y reconfigúralo.

## Informar de un problema

Al abrir un issue, incluye:

- Versión de macOS (Menú Apple → Acerca de este Mac)
- Versión de NueZip (NueZip → Acerca de)
- Pasos para reproducir
- Registros (consulta la sección [Ver registros](#ver-registros) para saber cómo recopilarlos)

Esto ayuda a los encargados del mantenimiento a identificar y corregir el problema más rápido.
