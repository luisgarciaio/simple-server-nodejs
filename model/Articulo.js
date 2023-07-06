// Vamos a definir las constantes
// Desestructurar Schema, model
// Con model podemos manejar lo que tenemos en la base de datos
const {Schema, model} = require('mongoose')

// Vamos a crear la estructura de nuestra bd de nuestra collection
const ArticuloSchema = Schema({
    titulo: {
        type: String,
        required: true
    },
    contenido: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now()
    },
    imagen: {
        type: String,
        default: "default.png"
    },
})
// Podemos definir a que coleccion pertenece para tenerlo claro o el nombre quede muy diferenciado
module.exports = model('Articulo', ArticuloSchema, 'articulos') 