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
export default const TodoReducer = (state=initialState, action) => {
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
        case "CLEAR_COMPLETED":
        default:
            return state;
    }
}