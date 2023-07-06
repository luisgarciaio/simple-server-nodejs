# Proyecto de Blog

Este proyecto es una API para administrar un blog. Permite crear nuevos artículos, obtener una lista de todos los artículos, actualizar artículos y eliminar artículos.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Ejecuta `npm install` para instalar las dependencias.

## Configuración

1. Asegúrate de tener una instancia de MongoDB en ejecución.
2. Abre el archivo `./database/connection.js` y actualiza la URL de conexión a tu instancia de MongoDB si es necesario.

## Uso

1. Ejecuta `npm start` para iniciar el servidor.
2. Accede a `http://localhost:3900` en tu navegador o utiliza herramientas como Postman para realizar solicitudes a la API.

## Estructura del Proyecto

- `./app.js`: Archivo principal que configura el servidor y las rutas.
- `./database/connection.js`: Configuración de la conexión a la base de datos MongoDB.
- `./model/Articulo.js`: Definición del modelo de datos para los artículos.
- `./controller/ArticuloControlador.js`: Controladores para las diferentes operaciones relacionadas con los artículos.
- `./routes/ArticuloRuta.js`: Definición de las rutas relacionadas con los artículos.

## Controladores y Rutas

- `prueba`: Controlador para una ruta de prueba que devuelve un mensaje de prueba.
- `info`: Controlador para una ruta de información que muestra un mensaje en la consola y devuelve una respuesta en formato JSON.
- `crear`: Controlador para la creación de un nuevo artículo. Valida los datos recibidos, crea un nuevo objeto Articulo y lo guarda en la base de datos.
- `getArticulos`: Controlador para obtener todos los artículos existentes en la base de datos.
- `actualizar`: Controlador para actualizar un artículo existente por su ID.
- `eliminar`: Controlador para eliminar un artículo existente por su ID.

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de hacer un fork y enviar tus pull requests.
