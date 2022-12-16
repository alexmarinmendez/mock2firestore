# mock2firestore

Este Paquete NPM sirve para cargar de forma automática la información de un array de objetos (mock) a una base de datos de Firestore.

### Ejemplo #1: Creación de documentos con ID automáticos (generados por Firestore)
Creación de una colección de nombre 'products' con los datos de un array de objetos. Los documentos tendrán un ID automático.

* Crea un archivo Javascript con el siguiente código (deberás tener configurado tu package.json de tipo "module" - ver imágen adjuta bajo el código)
```
//importación de la dependencia
import { mock2firestore } from 'mock2firestore';
//db representa la conexión con la Base de datos de Firestore, creada aquí, en el archivo firebaseConfig.js
import { db } from './firebaseConfig.js';
//mockData representa el array con los datos a llevar a la Base de Datos
import { mockData } from './mockData.js';

//'products' es el nombre de la colección
//Con 3 argumentos, la función crea los documentos con ID automáticos (generados por Firestore)
mock2firestore(mockData, db, 'products')
```

![package.json Screenshot](https://i.imgur.com/EIk0XvY.jpg)

* Ejecuta el archivo (por ejemplo, aquí se llama 'test.js')
```
node test.js 
```
* Espera a que termine la ejecución por completo (la consola debe mostrarte el prompt)

![running-script Screenshot](https://i.imgur.com/Y7NDFAH.jpg)

Aquí, en la imagen de arriba, la ejecución aún no ha terminado.


### Ejemplo #2: Creación de documentos con ID personalizados
Creación de una colección de nombre 'products' con los datos de un array de objetos. Los documentos tendrán el ID indicado en cada objeto del array.

* Crea un archivo Javascript con el siguiente código (deberás tener configurado tu package.json de tipo "module" - ver imágen adjuta bajo el código)

```
//importación de la dependencia
import { mock2firestore } from 'mock2firestore';
//db representa la conexión con la Base de datos de Firestore, creada aquí, en el archivo firebaseConfig.js
import { db } from './firebaseConfig.js';
//mockData representa el array con los datos a llevar a la Base de Datos
import { mockData } from './mockData.js';

//'products' es el nombre de la colección
//Con el 4to argumento la función crea los documentos con ID personalizados
mock2firestore(mockData, db, 'products', true)
```

![package.json Screenshot](https://i.imgur.com/EIk0XvY.jpg)

* Ejecuta el archivo (por ejemplo, aquí se llama 'test.js')
```
node test.js 
```
* Espera a que termine la ejecución por completo (la consola debe mostrarte el prompt)

![running-script Screenshot](https://i.imgur.com/v6R9koI.jpg)

Aquí, en la imagen de arriba, la ejecución aún no ha terminado.


## Ejemplo de mock data
¿Cómo debe ser el archivo que contienen el array con los datos? Aquí te dejo un ejemplo:

![Mock Data Example Screenshot](https://i.imgur.com/j8KdwSo.jpg)

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
