export const initialState = {
    todos: [
        {
            item: 'Learn About Reducers',
            completed: false,
            id: 3892987589
        }
    ],
    

}

/* "Actions" */

//ADD_TODO


//TOGGLE_COMPLETED


//CLEAR_COMPLETED


const TodoReducer = (state=initialState, action) => {
    switch(action.type){
        case "ADD_TODO":
            return {
                ...state,
                todos: [...state.todos,
                     {
                        item: action.payload,
                        completed: false,
                        id: Date.now()
                    }]
            }
        case "TOGGLE_COMPLETED":
            return {
                ...state,
                todos: [
                    state.todos.map(todo => {
                        todo.id === action.payload ? 
                        {...todo, completed: !todo.completed} :
                        todo
                    }),
                    
                ]
            }
        case "CLEAR_COMPLETED":
            return {
                ...state,
                todos: state.todos.filter(todo => !todo.completed)
                
            }
        default:
            return state;
    }
}

export default TodoReducer;