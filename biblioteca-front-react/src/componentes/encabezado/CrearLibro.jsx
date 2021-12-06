import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { IoIosUndo } from "react-icons/io";
import { Form, Button } from 'react-bootstrap';
import { crearLibro } from '../../httpRequest';
import swal from 'sweetalert'

const CrearLibro = () => {
    const navegar = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [mensajeCreado, setMensajeCreado] = useState('')

    const onSubmit = (data) => {
        crearLibro(data, setMensajeCreado)       
    }
    if (mensajeCreado) {
        swal({
            text: `${mensajeCreado}`,
            icon: "success",
            timer: "2000",
        })
        setTimeout(() => {
            navegar('/')
        }, 1000);
    }

    return (
        <>
            <Link to="/" className='volver'><IoIosUndo /> Volver </Link>
            <h1 className='crearLibro-titulo'>Crear  libro</h1>
            <section className='crearLibro-section'>
                <img className='libroCrear-img' src='https://www.nicepng.com/png/detail/344-3446862_reglas-libro-en-blanco-abierto-png.png' alt='libroImg' />
                <Form className='formulario-creacion' onSubmit={handleSubmit(onSubmit)} >
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control name='Titulo' {...register('Titulo', { required: 'Titulo requerido' },)} size='lg' type="text" placeholder="título del libro" />
                        {errors.Titulo && <p className='mensaje-error'>{errors.Titulo.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Imagen</Form.Label>
                        <Form.Control name='img' {...register('img', { required: 'link requerido' })} size='lg' type="url" placeholder="link de la imagen" />
                        {errors.img && <p className='mensaje-error'>{errors.img.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control name='Autor' {...register('Autor', { required: 'Autor requerido' })} size='lg' type="text" placeholder="autor del libro" />
                        {errors.Autor && <p className='mensaje-error'>{errors.Autor.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Año</Form.Label>
                        <Form.Control name='Año' {...register('Año', { required: 'Año requerido' })} size='lg' type="number" placeholder="año de publicación del libro" />
                        {errors.Año && <p className='mensaje-error'>{errors.Año.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Género</Form.Label>
                        <Form.Control name='Genero' {...register('Genero', { required: 'Genero requerido' })} size='lg' type="text" placeholder="género del libro" />
                        {errors.Genero && <p className='mensaje-error'>{errors.Genero.message}</p>}
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Descripción</Form.Label>
                        <Form.Control name='Descripcion' {...register('Descripcion', { required: 'Descripción requerida' })} as='textarea' rows={3} placeholder="descripción del libro" />
                        {errors.Descripcion && <p className='mensaje-error'>{errors.Descripcion.message}</p>}
                    </Form.Group>
                    <Button className='boton-crear' type="submit">Crear libro!</Button>
                </Form>
            </section>
        </>
    )
}

export default CrearLibro