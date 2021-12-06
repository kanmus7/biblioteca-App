import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosUndo } from "react-icons/io";
import '../../estilos/Error.css'
import libroTriste from '../../resources/libroTriste.png'

const Error404 = ({ mensajeError }) => {
    const mensajePorDefecto = '404 Pagina no encontrada'
    return (
        <div className="contenedor-error">
            <div className="tituloError">
                {mensajeError ?
                <>
                 <h2>{mensajeError}</h2>
                 <img src={libroTriste} alt='libroTristeImg' />
                 </>
                  : (
                    <>
                        <Link to="/" className='volver'><IoIosUndo /> Volver </Link>
                        <div className="tituloError">
                        <h2>{mensajePorDefecto}</h2>                        
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default Error404
