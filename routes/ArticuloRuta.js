const { Router } = require('express');
const router = Router();

// Importar controlador de artículos
const ArticuloControlador = require('../controller/ArticuloControlador');

// Rutas para probar y obtener información
router.get('/test-route', ArticuloControlador.prueba); // Ruta de prueba
router.get('/test-route-info', ArticuloControlador.info); // Ruta para obtener información

// Rutas para crear y obtener artículos
router.post('/crear', ArticuloControlador.crear); // Ruta para guardar un nuevo artículo en la base de datos
router.get('/articulos/:ultimos?', ArticuloControlador.getArticulos); // Ruta para obtener todos los artículos
router.get('/articulo/:id', ArticuloControlador.uno); // Ruta para obtener todos los artículos
router.delete('/articulo/:id', ArticuloControlador.eliminar); // Ruta para obtener todos los artículos
router.put('/articulo/:id', ArticuloControlador.actualizar); // Ruta para obtener todos los artículos

module.exports = router;
