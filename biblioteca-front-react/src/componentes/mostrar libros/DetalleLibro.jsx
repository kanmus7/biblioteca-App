import React, { useState, useEffect } from 'react'
import { eliminarLibro, getLibro } from '../../httpRequest'
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosUndo } from "react-icons/io";
import Error404 from '../errores/Error404';
import swal from 'sweetalert'

const DetalleLibro = () => {
    const navegar = useNavigate()
    const [libro, setLibro] = useState([])
    const [libroEliminado, setLibroEliminado] = useState([])
    let params = useParams()
    let { id } = params

    useEffect(() => {
        getLibro(setLibro, id)
    }, [])

    const eliminarAlerta = (id) => {
        swal({
            title: "¿Está seguro que desea eliminar el libro?",
            icon: "warning",
            buttons: ["Cancelar", "Eliminar"]
        }).then(respuesta => {
            if (respuesta) {
                eliminarLibro(setLibroEliminado, id)
                swal({
                    text: "Libro eliminado con éxito",
                    icon: "success",
                    timer: "2000"
                })
                if (libroEliminado) { navegar('/') }
            }
        })
    }


    return (
        <section className='detalleLibro-Section'>
            <Link to="/" className='volver'><IoIosUndo /> Volver </Link>
            {!libro ? <Error404 mensajeError='Libro no encontrado' />
                : (
                    <div className='libro-container'>
                        <div className='libro-info'>
                            <div className="imagen-container">
                                <img src={libro.img || " "} alt="imagenLibro" />
                            </div>
                            <div className="detalleLibro-container">
                                <ul className="detalleLibro">
                                    <li key={libro.Titulo} >{`Título: ${libro.Titulo}`}</li>
                                    <li key={libro.Autor}>{`Autor: ${libro.Autor}`}</li>
                                    <li key={libro.Año}>{`Año de publicación: ${libro.Año}`}</li>
                                    <li key={libro.Genero}>{`Género: ${libro.Genero}`}</li>
                                </ul>
                                <p key={libro.Descripcion} className='descripcionLibro'> {libro.Descripcion}</p>
                            </div>
                        </div>
                        <div className='btn-container'>
                            <Link className='editarLink' to={`/EditarLibro/${libro.id}`}> <button type='button' className='editarBtn'>Editar</button></Link>
                            <button type='button' onClick={() => eliminarAlerta(libro.id)} className='eliminarBtn'>Eliminar</button>
                        </div>
                    </div>
                )}
        </section>
    )
}

export default DetalleLibro
