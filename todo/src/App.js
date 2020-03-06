import React, {useReducer} from 'react';
import './App.css';
import TodoForm from './components/TodoComponents/TodoForm'
import TodoList from './components/TodoComponents/TodoList'
import TodoReducer, {initialState} from './reducers'

function App() {
  const [state, dispatch] = useReducer(TodoReducer, initialState);
  const addTodo = item => {
    dispatch({type: "ADD_TODO", payload: item})
  }
  const toggleCompleted = id => {
    dispatch({type: "TOGGLE_COMPLETED", payload: id})
  }
  const clearCompleted = () => {
    dispatch({type: "CLEAR_COMPLETED"})
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do App</h1>
      </header>
      {/* Add ToDoForm component functionality */}
      {/* Pass down addToDo function into TodoForm */}
      <TodoForm addTodo = {addTodo}
                clearCompleted = {clearCompleted}
      />

      {/*Display list of Todos */}
      <TodoList toggleCompleted = {toggleCompleted}
                todos = {state.todos}
      />
    </div>
  );
}

export default App;
