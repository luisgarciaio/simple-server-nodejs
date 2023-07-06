
// Vamos a crear una constante que requiera mongoose
const mongoose = require("mongoose");

// Crear una conexion que es una funcion asincrona 'async' 'await'
const conexion = async()=>{
    // Vamos a crear un try catch para intentar conectar y atrapar errores
    try{
        // Primer parametro es la direccion de la conexion de mongoDB
        // Como segundo parametro podriamos pasar dentro del objeto, 
        // Pero no es necesario si la conexion es exitosa
        // Ej. 
        // useNewUrlParser: true
        //  useUnifiedTopology: true
        // useCreateIndex: true

        // Vamos a usar await para completar la funcion asincrona
        await mongoose.connect("mongodb://127.0.0.1:27017/mi_blog")
        // El string de conexion podria funcionar con localhost
        // 127.0.0.1
        // 

        // Vamos a testear con console.log
        console.log("Conectado correctamente")
    }catch(error){
        console.log(error)
        throw new Error ('No se ha podido conectar a la base de datos MongoDB')
    }
}

// Vamos a exportar para usar en otro archivo
module.exports = {
    conexion
}
