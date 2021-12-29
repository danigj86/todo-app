import React from 'react'

export const TodoList = ({ todos, marcar, borrar }) => {
    return (
        <>
            <h2>Lista de tareas</h2>
            <br />
            <ul className='list-group list-group-flush'>

                {

                    todos.length > 0 ?

                        todos.map((tarea, i) => {
                            return <li key={tarea.id} className='list-group-item'>
                                <p className={`${tarea.done && 'marcado'}`} onClick={() => marcar(tarea.id)}> {i + 1}- {tarea.desc}</p>
                                <button onClick={() => borrar(tarea.id)} className="btn btn-danger">Borrar</button>
                            </li>
                        })


                        :
                        <div className='list-group-item'>
                            <p>No hay tareas por hacer. Puedes añadir varias.</p>
                            <img src="https://img.icons8.com/color/48/000000/happy--v1.png"/>
                        </div>


                }
            </ul>
        </>
    )
}
