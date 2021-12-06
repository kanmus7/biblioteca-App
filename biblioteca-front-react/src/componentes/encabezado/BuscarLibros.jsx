import React from 'react'
import { Form, FormControl } from "react-bootstrap"

const BuscarLibros = ({setBuscarLibro, buscarLibro}) => {
    return (
        <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Buscar libro"
                className="form-control-lg"
                aria-label="Search"
                value={buscarLibro}
                onChange = {(e)=> setBuscarLibro(e.target.value)}
            />
        </Form>
    )
}

export default BuscarLibros
