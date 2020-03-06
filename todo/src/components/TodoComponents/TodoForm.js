import React, {useState} from 'react'

export default function TodoForm({addTodo, clearCompleted}) {
    const [input, setInput] = useState('');
    return (
        <div>
            <form onSubmit={addTodo}>
                <input type="text" 
                       name="todo"
                       placeholder="New Todo Task"
                       value={input}
                       onChange={e => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
                <button onClick={clearCompleted}>Clear Completed</button>
            </form>
        </div>
    )
}
