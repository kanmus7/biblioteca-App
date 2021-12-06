import React from 'react'
import { Link } from 'react-router-dom'
import { IoIosUndo } from "react-icons/io";

const Favoritos = ({ librosFavoritos }) => {
    return (
        <section className='favoritos-section'>
            <Link to="/" className='volver'><IoIosUndo /> Volver </Link>
            <h1 className='favoritos-titulo'>Libros Favoritos</h1>
            <div className={ librosFavoritos.length? 'favoritos-container': 'noFavoritos-container'}>
                {librosFavoritos.length ?
                    librosFavoritos.map((favorito, id) => (
                        <div className="libroFavorito" key={id} id={favorito.id}>
                            <div className="imgFavorito-contenedor">
                                <img className='imagenLibroFav' src={favorito.img || " "} alt="imagenLibro" />
                            </div>
                            <div className="infoLibroFavorito-contenedor">
                                <ul className="listaLibroFavorito">
                                    <li key={favorito.Titulo} >{`Título: ${favorito.Titulo}`}</li>
                                    <li key={favorito.Autor}>{`Autor: ${favorito.Autor}`}</li>
                                    <li key={favorito.Año}>{`Año de publicación: ${favorito.Año}`}</li>
                                    <li key={favorito.Genero}>{`Género: ${favorito.Genero}`}</li>
                                </ul>
                            </div>
                        </div>
                    )) :
                    <div className='noFavoritos-container'>
                        <p className='noFavoritos-Parrafo'>No tienes libros favoritos agregados</p>
                        <img className='noLibroImg' src='https://static.vecteezy.com/system/resources/previews/001/130/519/non_2x/blank-book-background-vector.jpg' alt='noLibroImg' />
                    </div>}
            </div>
        </section>
    )
}

export default Favoritos
