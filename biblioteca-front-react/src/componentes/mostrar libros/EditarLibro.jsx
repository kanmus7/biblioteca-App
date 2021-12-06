import React, { useEffect, useState } from 'react'
import { useParams, useNavigate, Link } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form'
import { getLibro } from '../../httpRequest';
import { IoIosUndo } from "react-icons/io";
import { editarLibro } from '../../httpRequest';
import { FcCheckmark } from "react-icons/fc";
import swal from 'sweetalert'


const EditarLibro = () => {
    const navegar = useNavigate()
    const [libro, setLibro] = useState([])
    const [libroActualizado, setLibroActualizado] = useState('')
    let params = useParams()
    let { id } = params
    const { register, handleSubmit, formState: { errors } } = useForm()

    function cambiarValor(e) {
        setLibro([e.target.value])
    }

    useEffect(() => {
        getLibro(setLibro, id)
    }, [])

    const onSubmit = (datosLibro) => {
        editarLibro(setLibroActualizado, id, datosLibro)
    }

    if (libroActualizado) {
        swal({
            text: `${libroActualizado}`,
            icon: "success",
            timer: "2000",
        })
        setTimeout(() => {
            navegar('/')
        }, 1000);
    }

    return (
        <section className='editarLibro-seccion'>
            <Link to="/" className='volver'><IoIosUndo /> Volver </Link>
            <Form className='formulario-edicion' onSubmit={handleSubmit(onSubmit)}>
                <h1>Editar Libro</h1>
                <Form.Group className="mb-3" controlId="formGroupEmail" >
                    <Form.Label>Título</Form.Label>
                    <Form.Control name='Titulo' {...register('Titulo', { required: ' ' })} value={libro.Titulo} size='lg' type="text" placeholder="título del libro" readOnly />
                    {errors.Titulo && <FcCheckmark size='40' />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control name='img' {...register('img', { required: 'link requerido' })} onChange={(e) => cambiarValor(e)} value={libro.img} size='lg' type="url" placeholder="link de la imagen" />
                    {errors.img && <p className='mensaje-error'>{errors.img.message}</p>}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>Autor</Form.Label>
                    <Form.Control name='Autor' {...register('Autor', { required: ' ' })} value={libro.Autor} size='lg' type="text" placeholder="autor del libro" readOnly />
                    {errors.Autor && <FcCheckmark size='40' />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>Año</Form.Label>
                    <Form.Control name='Año' {...register('Año', { required: ' ' })} value={libro.Año} size='lg' type="number" placeholder="año de publicación del libro" readOnly />
                    {errors.Año && <FcCheckmark size='40' />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>Género</Form.Label>
                    <Form.Control name='Genero' {...register('Genero', { required: ' ' })} value={libro.Genero} size='lg' type="text" placeholder="género del libro" readOnly />
                    {errors.Genero && <FcCheckmark size='40' />}
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroup">
                    <Form.Label>Descripción</Form.Label>
                    <Form.Control name='Descripcion' {...register('Descripcion', { required: 'Descripción requerida' })} onChange={(e) => cambiarValor(e)} value={libro.Descripcion} as='textarea' rows={4} placeholder="descripción del libro" />
                    {errors.Descripcion && <p className='mensaje-error'>{errors.Descripcion.message}</p>}
                </Form.Group>
                <Button className='boton-editar' type="submit">Editar libro!</Button>
            </Form>
        </section>
    )
}

export default EditarLibro
