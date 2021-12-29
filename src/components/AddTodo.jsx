import React, { useState } from 'react'

export const AddTodo = ({onSubmit, formState, cambiaInput}) => {


 
    return (
        <div>
            <h2>Añade tarea</h2>
            <br />
            <form onSubmit={onSubmit}>
                <input className='form-control' type="text" name='description' placeholder="Añadir tarea..."
                value={formState.description} 
                onChange={cambiaInput}/>
                <button type='submit' className='btn btn-primary mt-3 btn-block'>Agregar</button>
            </form>
        </div>
    )
}
