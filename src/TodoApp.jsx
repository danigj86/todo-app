import React, { useEffect, useReducer } from 'react'
import { AddTodo } from './components/AddTodo'
import { TodoList } from './components/TodoList'
import { todoReducer } from './components/todoReducer'
import { useForm } from './hooks/useForm'

const init = () => {

    //inicia con la carga de los toDos; si no existen, se carga un array vacio
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, [], init);
    

    const [formState, cambiaInput, reset] = useForm({
        description: ''
    })

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


//añade nueva tarea del formulario
    const onSubmit = (e) => {
        e.preventDefault();

        const newTodo ={
            id: new Date().getTime(),
            desc: formState.description,
            done: false
        }

        const action = {
            type: 'add',
            payload: newTodo
        }

        if (formState.description === '') {
            alert('No dejes un campo vacío');
            return false
        }

        dispatch(action);
        reset();

    }
//marca una tarea
    const marcar = (id) =>{

        const action = {
            type: 'completar',
            payload: id
        }

        dispatch(action);
    }
//borra tarea
    const borrar = (id) =>{

        const action = {
            type: 'delete',
            payload: id
        }

        dispatch(action);
    }



    return (
        <div className="container">

            <div className="row  title glassmorphism">
            <h1 >ToDo App</h1>
            
            </div>
           <br /><br /><br />

            <div className="row">

                <div className="glassmorphism col-md-7 ">
                    
                    <TodoList todos={todos}
                      marcar={marcar}
                      borrar={borrar}
                       />
                </div>

                <div className="glassmorphism col-md-5 ">
                    <AddTodo onSubmit={onSubmit}
                        formState={formState}
                        cambiaInput={cambiaInput}
                      />
                </div>

            </div>

        </div>
    )
}
