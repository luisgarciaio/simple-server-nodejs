const { conexion } = require('./database/connection');
const express = require('express');
const cors = require('cors');

console.log('App up');

conexion();

const app = express();
const puerto = 3900;

// Configurar CORS para permitir solicitudes desde cualquier origen
app.use(cors());

// Middleware para convertir el cuerpo de la solicitud a un objeto JavaScript
app.use(express.json()); // Para datos con Content-Type application/json
app.use(express.urlencoded({ extended: true })); // Para datos codificados en form-urlencoded

// Ruta de prueba
app.get('/probando', (req, res) => {
  console.log('Ejecución de prueba en consola');
  return res.status(200).json([
    {
      titulo: 'test',
      descr: 'testDescr',
      obj: 'testObj',
    },
    {
      titulo: 'test2',
      descr: 'testDescr2',
      obj: 'testObj2',
    },
  ]);
});

// Rutas de artículos
const rutasArticulo = require('./routes/ArticuloRuta');
app.use('/api', rutasArticulo); // Prefijo '/api' para las rutas de artículos

// Iniciar servidor y escuchar peticiones HTTP
app.listen(puerto, () => {
  console.log('Servidor en línea en el puerto: ' + puerto);
});
