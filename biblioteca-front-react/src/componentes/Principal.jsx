import React, { useState, useEffect } from 'react'
import { getLibros } from '../httpRequest'
import Encabezado from './encabezado/Encabezado'
import BuscarLibros from './encabezado/BuscarLibros'
import Generos from './encabezado/Generos'
import MostrarLibros from './mostrar libros/MostrarLibros'
import Libro from './mostrar libros/Libro'
import { Link } from 'react-router-dom'
import editarImg from '../resources/editar.png'

const Principal = ({ librosFavoritos, setLibrosFavotiros, libros, setLibros }) => {
    const [buscarLibro, setBuscarLibro] = useState([])
    const [buscarGenero, setBuscarGenero] = useState({ genero: '', click: false })

    useEffect(() => {
        getLibros(setLibros)
    }, [])
    return (
        <>
            <Encabezado>
                <Link className="favoritos" to="/Favoritos">Favoritos</Link>
                <Generos libros={libros} setBuscarGenero={setBuscarGenero} />
                <Link to="/CrearLibro" className="crearLibro">Crear libro <img src={editarImg} alt="imgEditar" /> </Link> {/* POST */}
            </Encabezado>
            <BuscarLibros buscarLibro={buscarLibro} setBuscarLibro={setBuscarLibro} />
            <MostrarLibros
                buscarGenero={buscarGenero}
                setBuscarGenero={setBuscarGenero}
                buscarLibro={buscarLibro}
                libros={libros}
                render={libro => (
                    <Libro
                        key={libros.id}
                        libro={libro}
                        librosFavoritos={librosFavoritos}
                        setLibrosFavotiros={setLibrosFavotiros}
                    />
                )}
            />
        </>
    )
}

export default Principal
