const express = require('express')
const router = express.Router()
const { getLibros, getDetalleLibro, crearLibro, borrarLibro, actualizarLibro } = require('../controllers/libros')

router.get('/', getLibros)
router.get('/:id', getDetalleLibro)
router.post('/', crearLibro)
router.delete('/:id', borrarLibro)
router.put('/:id', actualizarLibro)

module.exports = router
