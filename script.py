import os
import glob
import xml.etree.ElementTree as ET

input_dir = input("Por favor, introduce el directorio de entrada: ")
output_dir = input("Por favor, introduce el directorio de salida: ")
tag_to_remove ='Addenda'

namespaces = {'': 'http://www.sat.gob.mx/cfd/4', 
              'cfdi': 'http://www.sat.gob.mx/cfd/4', 
              'tfd': 'http://www.sat.gob.mx/TimbreFiscalDigital'}

# Registramos los espacios de nombres
for prefix, uri in namespaces.items():
    ET.register_namespace(prefix, uri)

for xml_file in glob.glob(os.path.join(input_dir, '*.xml')):
    tree = ET.parse(xml_file)
    root = tree.getroot()

    for elem in root.iter():
        if elem.tag.endswith(tag_to_remove):
            parent = root.find('.')
            parent.remove(elem)

    tree.write(os.path.join(output_dir, os.path.basename(xml_file)), xml_declaration=True, encoding='utf-8')
