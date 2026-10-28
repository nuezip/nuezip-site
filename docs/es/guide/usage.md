# Guía de uso

## Apertura de archivos

### Doble clic para abrir

NueZip se registra como el manejador predeterminado para todos los formatos de archivo compatibles. Simplemente haz doble clic en cualquier archivo comprimido (`.zip`, `.rar`, `.7z`, `.tar`, `.gz`, `.bz2`, `.xz`, `.zst`) para abrirlo en la ventana principal de NueZip.

### Abrir con NueZip (menú contextual de Finder)

Haz clic derecho en cualquier archivo comprimido y selecciona **Abrir con NueZip** en el menú contextual. La extensión de Finder también ofrece acciones rápidas:

- **Extraer aquí** — Extrae el contenido del archivo a la carpeta actual
- **Extraer a "NombreCarpeta/"** — Extrae a una subcarpeta con nombre
- **Comprimir a ZIP** — Comprime los archivos/carpetas seleccionados a un archivo ZIP
- **Abrir con NueZip** — Abre en la ventana principal del explorador

### Arrastrar y soltar en la bandeja

Arrastra cualquier archivo comprimido sobre el icono de la barra de menú de NueZip para abrirlo rápidamente en el panel de desecho y acceder al instante. También puedes arrastrar archivos sobre el icono de la bandeja para comprimirlos.

## Extracción de archivos

### Extracción básica

1. Abre un archivo en NueZip
2. Haz clic en el botón **Extraer** de la barra de herramientas
3. Elige una carpeta de destino
4. Haz clic en **Extraer**

### Extracción rápida desde Finder

Haz clic derecho en un archivo en Finder y selecciona una de las acciones rápidas:
- **Extraer aquí** — Extrae directamente a la carpeta actual
- **Extraer a "[NombreArchivo]/"** — Extrae a una subcarpeta con nombre para una organización limpia

### Extraer con contraseña

Para archivos protegidos con contraseña, NueZip solicitará la contraseña. El gestor de contraseñas integrado puede almacenar las credenciales de forma segura en tu cadena de claves local para uso futuro.

## Compresión de archivos

### Crear un nuevo archivo

1. Selecciona archivos o carpetas en la ventana principal de NueZip
2. Haz clic en el botón **Comprimir** de la barra de herramientas
3. Elige el formato de archivo (ZIP, 7z, TAR, GZIP, etc.)
4. Configura los ajustes de compresión (nivel, método de cifrado)
5. Haz clic en **Comprimir**

### Comprimir desde Finder

Haz clic derecho en archivos/carpetas en Finder y selecciona **Comprimir con NueZip**:
- **Comprimir a ZIP** — Creación rápida de un archivo ZIP
- **Comprimir con opciones** — Abre NueZip con ajustes avanzados

### Comprimir mediante arrastrar y soltar

Arrastra archivos sobre el icono de la bandeja de la barra de menú de NueZip para crear rápidamente un archivo ZIP.

## Operaciones por lotes

### Compresión por lotes

1. Selecciona varios elementos en NueZip
2. Elige **Compresión por lotes** desde la barra de herramientas o el menú Archivo
3. Cada elemento se comprimirá en un archivo separado

### Extracción por lotes

1. Selecciona varios archivos en NueZip
2. Elige **Extracción por lotes** desde la barra de herramientas o el menú Archivo
3. Todos los archivos se extraerán simultáneamente

### Conversión por lotes

1. Selecciona uno o más archivos
2. Elige **Convertir** → selecciona el formato de destino
3. NueZip recomprimirá cada archivo en el formato elegido

### Cifrado por lotes

1. Selecciona varios archivos ZIP
2. Elige **Cifrado por lotes**
3. Establece una contraseña — todos los archivos seleccionados estarán protegidos con contraseña

## Conversión de formato

Convierte archivos entre cualquiera de los formatos compatibles:

1. Abre un archivo
2. Haz clic en **Convertir** en la barra de herramientas
3. Selecciona el formato de destino (por ejemplo, RAR → ZIP, 7z → TAR.GZ)
4. Elige la ubicación de salida
5. Haz clic en **Convertir**

## Reparación de archivos

Para archivos RAR o ZIP corruptos:

1. Abre el archivo corrupto
2. Haz clic en **Reparar** en la barra de herramientas
3. NueZip intentará reconstruir los datos del archivo
4. El archivo reparado se guarda como un nuevo archivo

## Búsqueda en archivos

Encuentra archivos específicos dentro de los archivos:

1. Haz clic en el botón **Buscar** en la barra de herramientas
2. Introduce un patrón de nombre de archivo
3. NueZip busca en todas las entradas del archivo abierto
4. Los resultados se muestran con rutas completas para una navegación rápida

## Prueba de rendimiento

Prueba el rendimiento de compresión de tu sistema:

1. Ve a **Herramientas → Prueba de rendimiento**
2. NueZip ejecuta pruebas de compresión usando varios formatos y ajustes
3. Los resultados muestran la velocidad de compresión (MB/s) y la relación para cada formato
4. Úsalo para comparar el rendimiento entre diferentes métodos de compresión

## Archivos multi-volumen (divididos)

Crea archivos divididos para datos grandes:

1. Durante la compresión, activa **Dividir en volúmenes**
2. Elige el tamaño del volumen (por ejemplo, 100 MB, 650 MB, 4,7 GB, o personalizado)
3. NueZip crea archivos de partes numerados (`.zip.001`, `.zip.002`, etc.)
4. Para extraer, abre el primer archivo de parte — NueZip carga automáticamente el resto

- **Contraseña**: Proporciona una contraseña para archivos cifrados
- **Envolver en carpeta**: Crea automáticamente una carpeta raíz si el archivo no tiene un único directorio raíz
- **Abrir después**: Muestra los archivos extraídos en Finder al finalizar
- **Conservar archivos dañados**: Preserva cualquier archivo extraído antes de un error (para recuperación parcial)
- **Modo de actualización**: Elige cómo manejar los archivos existentes (sobrescribir, omitir, renombrar)

### Extracción por lotes

1. Ve a **Herramientas → Extracción por lotes**
2. Haz clic en **Añadir archivos...** para seleccionar archivos comprimidos
3. Elige una carpeta de destino
4. Opcionalmente activa **Eliminar archivos de origen tras la extracción**
5. Haz clic en **Iniciar**

## Creación de archivos

### Comprimir archivos

1. Haz clic en el botón **Comprimir** de la barra de herramientas
2. Selecciona los archivos a comprimir (o arrástralos y suéltalos en la ventana)
3. Elige el **formato de archivo**: ZIP, 7Z, TAR, GZIP, BZIP2
4. Configura el **método de compresión** y el nivel
5. Establece la **ubicación de guardado** y el nombre del archivo
6. Opcionalmente establece una **contraseña** para el cifrado
7. Opcionalmente establece el **tamaño de división** para archivos multi-volumen
8. Haz clic en **Comprimir**

### Añadir archivos a un archivo existente

1. Abre un archivo existente en NueZip
2. Haz clic en **Añadir archivos** en la barra de herramientas
3. Selecciona los archivos a añadir
4. Haz clic en **Añadir**

## Operaciones por lotes

### Compresión por lotes

1. Ve a **Herramientas → Compresión por lotes**
2. Haz clic en **Seleccionar archivos/carpetas...** para elegir elementos
3. Cada elemento seleccionado se convertirá en un archivo separado
4. Configura el **formato**, la **ubicación de guardado** y el prefijo de nombre de archivo
5. Haz clic en **Iniciar**

### Conversión de formato por lotes

1. Ve a **Herramientas → Conversión de formato por lotes**
2. Haz clic en **Añadir archivos...** para seleccionar archivos de origen
3. Elige el **formato de destino**
4. Opcionalmente activa **Eliminar archivos de origen tras la conversión**
5. Haz clic en **Iniciar**

### Cifrado por lotes

1. Ve a **Herramientas → Cifrado por lotes**
2. Haz clic en **Añadir archivos...** para seleccionar archivos
3. Introduce una **contraseña**
4. Haz clic en **Cifrar**

## Funciones avanzadas

### Reparación de archivos

Repara archivos corruptos o dañados:

1. Selecciona el archivo dañado
2. Ve a **Herramientas → Reparar archivo**
3. NueZip escaneará la cabecera, reconstruirá el directorio y corregirá los bloques de datos
4. Revisa el resultado de la reparación

### Conversión de formato

Convierte archivos entre formatos:

1. Abre un archivo o selecciona un archivo
2. Ve a **Archivo → Convertir formato**
3. Elige el formato de destino y el nivel de compresión
4. Opcionalmente elimina el archivo original
5. Haz clic en **Convertir**

### Gestor de contraseñas

NueZip almacena de forma segura las contraseñas de archivos en tu cadena de claves local:

1. Ve a **Herramientas → Gestor de contraseñas**
2. Consulta todas las contraseñas guardadas
3. Añade, edita o elimina entradas
4. Las contraseñas se aplican automáticamente al abrir archivos cifrados coincidentes

### Prueba de rendimiento

Prueba el rendimiento de compresión de tu sistema:

1. Ve a **Herramientas → Prueba de rendimiento**
2. Selecciona un archivo de prueba (o usa el predeterminado)
3. Haz clic en **Probar**
4. Consulta los resultados, incluyendo velocidad de compresión/descompresión y calificación

### Búsqueda en archivos

Encuentra archivos dentro de los archivos:

1. Abre un archivo
2. Pulsa `Cmd+F` o haz clic en el icono de búsqueda
3. Introduce un nombre de archivo, opcionalmente coincidiendo mayúsculas o palabra completa
4. Explora los resultados de búsqueda y haz clic para navegar

## Atajos de teclado

| Atajo | Acción |
|----------|--------|
| `Cmd+O` | Abrir archivo |
| `Cmd+N` | Nuevo archivo |
| `Cmd+E` | Extraer |
| `Cmd+F` | Buscar en el archivo |
| `Cmd+,` | Abrir ajustes |
| `Cmd+W` | Cerrar ventana |
| `Cmd+Q` | Salir de la aplicación |
| `Cmd+↑` | Subir un nivel |
| `Cmd+→` | Avanzar |

## Ajustes

Accede a los ajustes a través de **NueZip → Ajustes** o pulsa `Cmd+,`:

- **General**: Idioma, iniciar al iniciar sesión, tema de apariencia
- **Compresión**: Formato predeterminado, nivel de compresión, tamaño de división
- **Extracción**: Destino predeterminado, comportamiento de envoltura, resolución de conflictos
- **Acceso a carpetas**: Gestiona los permisos de carpetas y los marcadores
- **Avanzado**: Aceleración por hardware, número de hilos, directorio temporal
- **Privacidad**: Preferencias de recopilación de datos
