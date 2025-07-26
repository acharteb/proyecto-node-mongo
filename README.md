# proyecto-node-mongo
Modulo VI
Informe del Proyecto: Integración de Node.js con MongoDB
¿Qué se aprendió sobre MongoDB y Mongoose?
El proyecto me permitió adquirir un conocimiento basico sobre cómo funciona una base de datos NoSQL y las herramientas que facilitan su integración en un ecosistema JavaScript.

MongoDB es una Base de Datos NoSQL Orientada a Documentos: Se aprendió que, a diferencia de las bases de datos SQL tradicionales que usan tablas y filas, MongoDB almacena los datos en documentos flexibles con un formato similar a JSON (llamado BSON) que se agrupan en colecciones. Una de las mayores ventajas observadas es que no se requiere una estructura rígida y predefinida. Se pueden añadir o quitar campos de los documentos sin necesidad de alterar toda la colección, lo que facilita la adaptación a cambios durante el desarrollo.
Se observó la utilidad de usar un servicio en la nube como MongoDB Atlas. Simplifica enormemente la configuración, el mantenimiento, la seguridad (gestión de usuarios y acceso por IP) y la escalabilidad de la base de datos, permitiendo a un desarrollador centrarse en la lógica de la aplicación.

Mongoose no es una base de datos, sino una librería para Node.js que actúa como un traductor o intermediario entre nuestra aplicación y MongoDB. Proporciona una capa de abstracción que simplifica las operaciones. Se aprendió a definir un Schema, que es la estructura que nuestros documentos deberían tener. Aunque MongoDB es flexible, los esquemas de Mongoose nos permiten imponer un orden, definir tipos de datos, campos obligatorios (required), valores únicos (unique), etc. Un modelo es la herramienta principal para interactuar con una colección. Se crea a partir de un esquema y proporciona los métodos para realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar).

¿Por qué MongoDB es una buena opción en ciertos proyectos?
Se pudo conocer por qué MongoDB es una elección popular en el desarrollo web moderno, por su sinergia con JavaScript/Node.js al utilizar un formato de datos similar a JSON, la integración con Node.js es muy natural. Los objetos de JavaScript se pueden mapear casi directamente a los documentos de MongoDB.
Tiene una flexibilidad en su esquema, es util para proyectos donde los requisitos cambian constantemente. Por lo que se puede conocer, es particularmente eficiente para aplicaciones que manejan grandes volúmenes de datos, datos no estructurados o semi-estructurados.

¿Qué retos se pudieron haber presentado y cómo se pudieron solucionar?
Durante el desarrollo, surgieron retos comunes que, creo que son representativos de los problemas que un desarrollador puede enfrentar en un proyecto real.
Reto 1: Errores de Conexión a la Base de Datos. La aplicación no lograba conectarse a la base de datos, mostrando errores como The 'uri' parameter ... must be a string, got "undefined". La cadena de conexión no estaba siendo leída correctamente desde el archivo .env.
Reto 2: El Proceso de Node.js no Finaliza. Al ejecutar el script inicial desde la consola, este realizaba sus operaciones pero la terminal se quedaba "pegada" sin volver al prompt. La conexión de Mongoose a la base de datos mantiene el proceso de Node.js activo por defecto.
Reto 3: Seguridad de las Credenciales. Subir accidentalmente el archivo .env con la contraseña de la base de datos a un repositorio público en GitHub.
Solución Preventiva: Crear un archivo .gitignore desde el inicio del proyecto y añadir las entradas node_modules/ y, fundamentalmente, .env. Esta es una práctica de seguridad esencial para proteger información sensible.