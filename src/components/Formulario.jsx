import React, {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import "./Formulario.css"

const Formulario = (props) => {

    const [input, setInput] = useState("")

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e) => {  
        e.preventDefault();   

        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva)

    }

    return (
    <form 
    className='tarea-formulario'
    onSubmit={handleSubmit}>
        <input 
        type="text"
        className='tarea-input'
        placeholder='Ingresá tu tarea' 
        name='texto'  
        onChange={handleChange}       
        />
        <button className='tarea-boton'>
        Agregar Tarea
        </button>
    </form>
    )
}

export default Formulario