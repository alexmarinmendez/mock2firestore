import { collection, addDoc, setDoc, doc, Firestore } from "firebase/firestore"; 

/**
 * Lee un array de objetos y crea documentos en la colección (colName) con todas propiedades de los objetos
 * @param {Object[]} data - Array de objetos con los datos
 * @param {Firestore} db - Objeto Firestore con la conexión a la Base de Datos
 * @param {string} colName - Nombre de la colección
 * @param {boolean} [customId=false] - Opcional. Por defecto es FALSE en cuyo caso se asignará, a cada documento, un ID automático generado por Firestore. En caso de ser TRUE, se creará el documento con la ID indicado en el objeto del array
 */
export const mock2firestore = (data, db, colName, customId=false) => {
    data.forEach(async(item) => {
        let result = {};
        for (let clave in item){
            if (clave !== 'id') result[clave] = item[clave]
        }
        try {
            if (!customId) {
                const docRef = await addDoc(collection(db, colName), result);
                console.log("Documento creado con ID: ", docRef.id);
            } else {
                await setDoc(doc(db, colName, item.id.toString()), result);
                console.log("Documento creado con ID: ", item.id);
            }
        } catch (e) {
            console.error("Error agregando el documento: ", e);
        }
      });
}