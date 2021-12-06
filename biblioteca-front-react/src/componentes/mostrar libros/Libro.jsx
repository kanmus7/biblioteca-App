import React, { useEffect } from 'react'
import { MdFavoriteBorder, MdFavorite } from "react-icons/md";
import useLocalStorage from '../../customHooks/useLocalStorage'
import { Link } from 'react-router-dom';


const Libro = ({ librosFavoritos, setLibrosFavotiros, libro, key }) => {
    const keyFavorito = `favorito-${libro.id}`
    const [favorito, setFavorito] = useLocalStorage(keyFavorito, false)
    const IconoFavorito = favorito ? MdFavorite : MdFavoriteBorder

    useEffect(() => {
        const validarLibroFavorito = librosFavoritos.some(  libroFav =>  libroFav.id === libro.id)
        favorito ?(!validarLibroFavorito? setLibrosFavotiros([...librosFavoritos, libro]): console.log('nada')): setLibrosFavotiros(librosFavoritos.filter(libroFav => { return libroFav.id !== libro.id }))
    }, [favorito])


    const DetalleLibro = ({ libro }) => (
        <div className="img-container">
            <p className="detalles">Mostrar detalle</p>
            <img className='imagenLibro' src={libro.img || " "} alt="imagenLibro" />
        </div>
    )

    return (
        <div className="libro" key={key} id={libro.id}>
            <Link to={`/DetalleLibro/${libro.id}`}>
                <DetalleLibro libro={libro} />
            </Link>
            <div className="infoLibro-container">
                <ul className="listaLibro">
                    <li key={libro.Titulo} >{`Título: ${libro.Titulo}`}</li>
                    <li key={libro.Autor}>{`Autor: ${libro.Autor}`}</li>
                    <li key={libro.Año}>{`Año de publicación: ${libro.Año}`}</li>
                    <li key={libro.Genero}>{`Género: ${libro.Genero}`}</li>
                </ul>
                <IconoFavorito size="32px" className='favorito' onClick={() => { setFavorito(!favorito) }} />
            </div>
        </div>
    )
}

export default Libro
