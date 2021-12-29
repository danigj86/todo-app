import { useState } from "react";

//useFor recibe un objeto inicial, normalmente vacio
export const useForm = (initialState = {}) => {

    //Creamos un useState para manejar los cambios del form
    const [formState, setFormState] = useState(initialState)

    //limpia los campos
    const reset = ()=>{
        setFormState(initialState)
    }

    //Almacenamos los cambios de cada campo relacionados con el name
    const cambiaImput = ({ target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        })
    }

    return [
        formState,
        cambiaImput,
        reset
    ]
}
