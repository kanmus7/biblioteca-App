let libros = require('../../public/libros.json')

//Get de todos los libros
const getLibros = async (req, res) => {
    return res.status(200).json({ libros })
}

//Get del libro que tenga la id
const getDetalleLibro = async (req, res) => {
    const id = req.params.id
    const libro = libros.find((libro) => libro.id == id)
    return res.status(libro ? 200 : 404).json({
        libro,
    })
}

//Post, crear libro
const crearLibro = async (req, res) => {

    const libro = {
        id: (libros.length + 1).toString(),
        ...req.body,
    }
    const librosActuales = libros.length
    libros.push(libro)
    if (libros.length === librosActuales) {
        return res.status(404).json({ message: 'Falló en crear el libro' })
    }
    return res.status(200).json({ message: 'Libro creado con éxito' })
}

//Delete, borrar libro
const borrarLibro = async (req, res) => {
    const id = req.params.id
    const librosActuales = libros.length
    libros = libros.filter((libro) => libro.id !== id)
    if (libros.length === librosActuales) {
        return res.status(404).json({ message: 'Libro no encontrado' })
    }
    return res.status(200).json({ message: 'Libro eliminado con éxito' })
}

//Put, actualizar libro
const actualizarLibro = async (req, res) => {
    const id = req.params.id
    let libro = libros.find((libro) => libro.id === id)
    if (!libro) {
        return res.status(404).json({ message: 'Libro no encontrado' })
    }
    libro = {
        ...libro,
        ...req.body,
    }
    const indiceLibro = libros.findIndex(libroData => libroData.id === id)
    libros[indiceLibro] = libro
    return res.status(200).json({ message: 'Libro actualizado con éxito' })
}

module.exports = {
    getLibros,
    getDetalleLibro,
    crearLibro,
    borrarLibro,
    actualizarLibro,
}