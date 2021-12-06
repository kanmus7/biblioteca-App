import React from 'react'
import '../../estilos/Libros.css'

const MostrarLibros = (props) => {
    let libros = props.libros

    if (props.buscarGenero.click) {
        libros = BuscarGenero(libros)
    }
    libros = BuscarLibro(libros)

    function BuscarGenero(libros) {
        if (props.buscarGenero.click && props.buscarGenero.genero !== 'Todos') { return libros.filter((libro) => { return libro.Genero === props.buscarGenero.genero }) }
        if (props.buscarGenero.genero === 'Todos') { return libros }
    }

    function BuscarLibro(libros) {
        return libros.filter((libro) => libro.Titulo.toLowerCase().indexOf(props.buscarLibro) > -1 ||
            libro.Autor.toLowerCase().indexOf(props.buscarLibro) > -1)
    }

    return (
        <section className="libros-container">
            {libros.map(libro => props.render(libro))}
        </section>
    )
}

export default MostrarLibros
