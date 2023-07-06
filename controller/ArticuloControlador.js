const validator = require('validator');
const Articulo = require('../model/Articulo');

const prueba = (req, res) => {
  return res.status(200).json({
    mensaje: 'Controlador de prueba',
  });
};

const info = (req, res) => {
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
};

const crear = async (req, res) => {
  try {
    // Obtener datos desde el cuerpo de la solicitud
    const { titulo, contenido } = req.body;

    // Validar datos
    if (!titulo || !contenido) {
      throw new Error('Faltan datos');
    }

    // Crear nuevo objeto Articulo
    const articulo = new Articulo({ titulo, contenido });

    // Guardar en la base de datos
    const articuloGuardado = await articulo.save();

    return res.status(200).json({
      status: 'success',
      Articulo: articuloGuardado,
      mensaje: 'Articulo creado exitosamente',
    });
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      mensaje: 'No se ha guardado el articulo: ' + error.message,
    });
  }
};

const getArticulos = (req, res) => {
  // Podemos agregar y ser mas especificos con find
  Articulo.find({})
    .sort({ fecha: -1 }) // Ordenar por campo de fecha en orden descendente
    .limit(10) // Limitar la cantidad de artículos a 10
    .then((articulos) => {
      if (!articulos || articulos.length === 0) {
        return res.status(404).json({
          status: 'error',
          mensaje: 'No se ha encontrado artículos',
        });
      }
      return res.status(200).json({
        status: 'success',
        parametro_url: req.params.ultimos,
        articulos,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: 'error',
        mensaje: 'Ocurrió un error al obtener los artículos',
        error,
      });
    });
};
const uno = (req, res) => {
  // Obtener el ID de la URL
  let id = req.params.id;

  Articulo.findOne({ _id: id })
    .then((articulo) => {
      if (!articulo) {
        return res.status(404).json({
          status: 'error',
          mensaje: 'No se ha encontrado el artículo',
        });
      }

      return res.status(200).json({
        status: 'success',
        articulo,
      });
    })
    .catch((error) => {
      return res.status(500).json({
        status: 'error',
        mensaje: 'Error al buscar el artículo',
        error: error.message,
      });
    });
};

const eliminar = (req, res) => {
  // Obtener el ID del artículo a eliminar desde la URL
  let id = req.params.id;

  // Buscar y eliminar el artículo por su ID utilizando el método findByIdAndDelete()
  Articulo.findByIdAndDelete({ _id: id })
    .then((articuloEliminado) => {
      if (!articuloEliminado) {
        // Si no se encuentra el artículo a eliminar, devolver una respuesta con estado 404
        return res.status(404).json({
          status: 'error',
          mensaje: 'No se ha encontrado el artículo a eliminar',
        });
      }

      // Si se elimina el artículo correctamente, devolver una respuesta con estado 200 y el artículo eliminado
      return res.status(200).json({
        status: 'success',
        mensaje: 'Artículo eliminado correctamente',
        articulo: articuloEliminado,
      });
    })
    .catch((error) => {
      // Si ocurre un error durante la eliminación, devolver una respuesta con estado 500 y mostrar el mensaje de error
      return res.status(500).json({
        status: 'error',
        mensaje: 'Error al eliminar el artículo',
        error: error.message,
      });
    });
};

const validarArticulo = (res, parametros) => {
  try {
    let validar_titulo = !validator.isEmpty(parametros.titulo) &&
      validator.isLength(parametros.titulo, { min: 5, max: undefined });
    let validar_contenido = !validator.isEmpty(parametros.contenido);
    if (!validar_titulo || !validar_contenido) {
      throw new Error('No se ha validado, verificar información');
    }
  } catch (error) {
    return res.status(400).json({
      status: 'error',
      mensaje: 'Faltan datos por enviar o la información no es válida',
      error: error.message,
    });
  }
};

const actualizar = (req, res) => {
  // Obtener el ID del artículo a actualizar desde la URL
  let id = req.params.id;

  // Obtener los datos actualizados del artículo desde el cuerpo de la solicitud
  let datosActualizados = req.body;

  // Validar datos
  validarArticulo(res, datosActualizados);

  // Buscar y actualizar el artículo por su ID utilizando el método findByIdAndUpdate()
  Articulo.findByIdAndUpdate(id, datosActualizados, { new: true })
    .then((articuloActualizado) => {
      if (!articuloActualizado) {
        // Si no se encuentra el artículo a actualizar, devolver una respuesta con estado 404
        return res.status(404).json({
          status: 'error',
          mensaje: 'No se ha encontrado el artículo a actualizar',
        });
      }

      // Si se actualiza el artículo correctamente, devolver una respuesta con estado 200 y el artículo actualizado
      return res.status(200).json({
        status: 'success',
        mensaje: 'Artículo actualizado correctamente',
        articulo: articuloActualizado,
      });
    })
    .catch((error) => {
      // Si ocurre un error durante la actualización, devolver una respuesta con estado 500 y mostrar el mensaje de error
      return res.status(500).json({
        status: 'error',
        mensaje: 'Error al actualizar el artículo',
        error: error.message,
      });
    });
};




module.exports = {
  prueba,
  info,
  crear,
  getArticulos,
  uno,
  eliminar,
  actualizar
};
