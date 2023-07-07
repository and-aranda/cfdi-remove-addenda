const fs = require('fs');
const xml2js = require('xml2js');
const parser = new xml2js.Parser();
const builder = new xml2js.Builder();

const inputDirectory = '/ruta/directorio/entrada/';
const outputDirectory = '/ruta/directorio/salida/';

// Lee todos los archivos en el directorio de entrada
fs.readdir(inputDirectory, (err, files) => {
    if (err) throw err;
    
    // Itera sobre cada archivo
    for (const file of files) {
        // Solo procesa archivos .xml
        if (file.endsWith('.xml')) {
            // Lee el contenido del archivo XML
            fs.readFile(inputDirectory + file, (err, data) => {
                if (err) throw err;
                // Convierte el contenido del archivo XML a un objeto JavaScript
                parser.parseString(data, (err, result) => {
                    if (err) throw err;

                    // Si existe, elimina el nodo "cfdi:Addenda"
                    if (result['cfdi:Comprobante']['cfdi:Addenda']) {
                        delete result['cfdi:Comprobante']['cfdi:Addenda'];
                    }

                    // Convierte el objeto JavaScript de nuevo a XML
                    const xml = builder.buildObject(result);

                    // Escribe el contenido de nuevo a un archivo XML en el directorio de salida
                    fs.writeFile(outputDirectory + file, xml, (err) => {
                        if (err) throw err;
                    });
                });
            });
        }
    }
});
