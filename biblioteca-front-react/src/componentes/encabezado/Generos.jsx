import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const Generos = ({ libros, setBuscarGenero }) => {

    const generos = libros.map((libro) => {
        return libro.Genero
    })

    const generosUnicos = generos.filter((genero, indice) => {
        return generos.indexOf(genero) === indice
    })
    return (
        <NavDropdown title="Generos" id="basic-nav-dropdown" className="generos">
            {generosUnicos.map((genero, id) => {
                return (
                    <>
                        <NavDropdown.Item id={id} key={id} onClick={(e) => { setBuscarGenero({ genero: e.target.innerText, click: true }) }} >{genero}</NavDropdown.Item>
                    </>
                )
            })}
            <NavDropdown.Item id='todosId' key="todosKey" onClick={(e) => { setBuscarGenero({ genero: e.target.innerText, click: true }) }}>Todos</NavDropdown.Item>
        </NavDropdown>
    )
}

export default Generos
