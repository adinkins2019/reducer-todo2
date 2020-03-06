import React from 'react'
import "./Todo.css"

export default function Todo({todo, toggleCompleted}) {
    const handleClick = () => {
        toggleCompleted(todo.id)
    }
    return (
        <li 
            className = {todo.completed ?
                         "completed" :
                         ""   
                        }
            onClick={handleClick()}>
            {todo.item}
        </li>
    )
}
