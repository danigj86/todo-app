

export const todoReducer = (state = [], action) => {

    switch (action.type) {

        case 'add':
            console.log('se añadio un todo');
            return [...state, action.payload];


        case 'completar':
            console.log('se ha completado tarea');
            return state.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done
                    }
                } else {
                    return todo;
                }
            })

        case 'delete':
            console.log('se ha borrado un todo');
            return state.filter( todo => todo.id !== action.payload);

        default:
            return state;
    }

}