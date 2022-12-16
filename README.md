# mock2firestore

Este Paquete NPM sirve para cargar de forma automática la información de un array de objetos (mock) a una base de datos de Firestore.

### Ejemplo #1: Creación de documentos con ID automáticos (generados por Firestore)
Creación de una colección de nombre 'products' con los datos de un array de objetos.
Los documentos tendrán un ID automático
```
const { mock2firestore } = require('mock2firestore')
//db representa la conexión con la Base de datos de Firestore creada en el archivo firebaseConfig.js
const { db } = require('./firebaseConfig');
//mockData representa el array con los datos a llevar a la Base de Datos
const { mockData } = require('./mockData.js');

//'products' es el nombre de la colección
//Con 3 argumentos, la función crea los documentos con ID automáticos (generados por Firestore)
mock2firestore(mockData, db, 'products')
```
### Ejemplo #2: Creación de documentos con ID personalizados
Creación de una colección de nombre 'products' con los datos de un array de objetos.
Los documentos tendrán el ID indicado en cada objeto del array
```
const { mock2firestore } = require('mock2firestore')
//db representa la conexión con la Base de datos de Firestore creada en el archivo firebaseConfig.js
const { db } = require('./firebaseConfig');
//mockData representa el array con los datos a llevar a la Base de Datos
const { mockData } = require('./mockData.js');

//'products' es el nombre de la colección
//Con el 4to argumento la función crea los documentos con ID personalizados
mock2firestore(mockData, db, 'products', true)
```
---
## Construido con 🛠️

* [Javascript](https://developer.mozilla.org/es/docs/Web/JavaScript)

## Autor ✒️

* **Alex Marin Mendez** - *FullStack Javascript Developer*, 16 de diciembre de 2022 - [alexmarinmendez](https://github.com/alexmarinmendez)

## Licencia 📄

Eres libre de analizar/estudiar/forkear/copiar/mejorar este paquete. Se agradecerá citar esta fuente cuando lo uses.

## Expresiones de Gratitud 🎁

* Comenta a tod@s sobre este paquete 📢
* Da las gracias públicamente 🤓.



---
⌨️ Hecho por [alexmarinmendez](https://github.com/alexmarinmendez) 😊
