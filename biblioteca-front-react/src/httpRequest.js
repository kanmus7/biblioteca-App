/* GET */
const getLibros = async (setLibros) => {
    try {
        let response = await fetch('http://localhost:3001/api/libros/')
        response = await response.json()
        setLibros(response.libros)
    } catch (error) {
        setLibros([])
    }
}

/* GET BY ID */
const getLibro = async (setLibro, id) => {
    try {
        let response = await fetch(`http://localhost:3001/api/libros/${id}`)
        response = await response.json()
        setLibro(response.libro)
    } catch (error) {
        setLibro([])
    }
}

/* DELETE */
const eliminarLibro = async (setLibroEliminado, id) => {
    try {
        let response = await fetch(`http://localhost:3001/api/libros/${id}`, {
            method: 'DELETE',
            'mode': 'cors',
            'headers': {
                'Access-Control-Allow-Origin': '*',
            }
        })
        response = await response.json()
        setLibroEliminado(response.message)
    } catch (error) {
        setLibroEliminado(`${error}`)
    }
}

/* POST */
const crearLibro = async (datosLibro, setMensajeCreado) => {
    try {
        let response = await fetch('http://localhost:3001/api/libros/', {
            method: 'POST',
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(datosLibro)
        })
        response = await response.json()
        setMensajeCreado(response.message)
    } catch (error) {
        setMensajeCreado('')
    }
}

/* PUT */
const editarLibro = async (setLibroActualizado, id, datosLibro) => {
    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(datosLibro)
    }
    try {
        let response = await fetch(`http://localhost:3001/api/libros/${id}`, requestOptions)
        response = await response.json()
        setLibroActualizado(response.message)

    } catch (error) {
        setLibroActualizado(`${error}`)
    }
}


export { getLibros, getLibro, eliminarLibro, crearLibro, editarLibro }