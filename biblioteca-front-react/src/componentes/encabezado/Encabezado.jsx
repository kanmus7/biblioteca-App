import React from 'react'
import {Navbar, Container, Nav } from 'react-bootstrap'
import '../../estilos/Encabezado.css'

const Encabezado = ({ children }) => {
    return (
        <header>
            <Navbar bg="light" variant="light">
                <Container className="d-flex justify-content-around">
                <h1>Biblioteca personal</h1>
                    <Nav >
                        {children}
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}

export default Encabezado
