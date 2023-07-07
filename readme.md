# CFDI-Remove

CFDI-Remove es una pequeña utilidad escrita en Python para eliminar elementos específicos de archivos XML CFDI.

## Pre-requisitos

Para ejecutar esta utilidad, necesitarás Python instalado en tu máquina. Esta utilidad ha sido probada con Python 3.11, aunque versiones anteriores también deberían funcionar.

Si aún no tienes Python instalado, puedes obtenerlo desde la [página oficial de descargas de Python](https://www.python.org/downloads/).

## Instalación

Para usar esta utilidad, simplemente clona este repositorio en tu máquina local:

\`\`\`bash
git clone https://github.com/tu-usuario/cfdi-remove.git
cd cfdi-remove
\`\`\`

## Uso

Para usar esta utilidad, ejecuta el script `script.py` en tu terminal y sigue las instrucciones:

\`\`\`bash
python script.py
\`\`\`

El script te pedirá que introduzcas tres cosas:

1. El directorio de entrada: este es el directorio donde están ubicados tus archivos XML.
2. El directorio de salida: este es el directorio donde se guardarán los archivos XML modificados.
3. El elemento a eliminar: el nombre del elemento XML que quieres eliminar de los archivos.

## Ejemplo

\`\`\`bash
Por favor, introduce el directorio de entrada: C:/Users/a.aranda/Desktop/cfdi-remove/xml/
Por favor, introduce el directorio de salida: C:/Users/a.aranda/Desktop/cfdi-remove/xml-remove/
Por favor, introduce el elemento a eliminar (sin espacio de nombres): Addenda
\`\`\`

## Construir un ejecutable

Si quieres construir un archivo ejecutable `.exe` a partir de este script, puedes hacerlo utilizando `pyinstaller`. Primero, instálalo en tu entorno con el comando:

\`\`\`bash
pip install pyinstaller
\`\`\`

Luego, puedes construir el archivo `.exe` con el siguiente comando:

\`\`\`bash
pyinstaller --onefile script.py
\`\`\`

El archivo ejecutable estará ubicado en la carpeta `dist`.

## Licencia

Este proyecto está bajo la licencia MIT.
