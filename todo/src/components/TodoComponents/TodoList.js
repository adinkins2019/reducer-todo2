import React from 'react'
import Todo from './Todo'


export default function TodoList({toggleCompleted, todos}) {
    return (
        <div>
            <ul>
                {/*Map our todos into Todo component */}
                {todos.map(todo => <Todo key = {todo.id}
                                        toggleCompleted={toggleCompleted}
                                         todo={todo}/>)}
            </ul>
        </div>
    )
}
