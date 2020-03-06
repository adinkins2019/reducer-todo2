import React, {useState} from 'react'

export default function TodoForm({addTodo, clearCompleted}) {
    const [input, setInput] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents page refreshing 
        addTodo(input);         // adds value of input into todo list
        setInput('')            //sets value of input back to an empty string
    }
    const clearAll = (event) => {
        evemt.preventDefault();
        clearCompleted();
    }
    return (
        <div>
            <form onSubmit={(e)=> handleSubmit(e)}>
                <input type="text" 
                       name="todo"
                       placeholder="New Todo Task"
                       value={input}
                       onChange={e => setInput(e.target.value)}
                />
                <button type="submit">Submit</button>
                <button onClick={e => clearAll(e)}>Clear Completed</button>
            </form>
        </div>
    )
}
