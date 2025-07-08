import { useState } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const[ todos, setTodos ] = useState([])
  const [editingTodo, setEditingTodo] = useState(null)

const addTodo = async (task) => { 
  try {
    const response = await fetch('http://localhost:3000/todos/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task })
    });
    if (!response.ok) throw new Error('Failed to add todo');
    const newTodo = await response.json();
    setTodos([...todos, newTodo]);
  } catch (error) {
    console.error(error);
    // Optionally show error to user
  }
}

  const ToggleTodo = (id) => { 
    const newTodo = todos.map((todo) => ( todo.id === id ? { ...todo, completed: !todo.completed } : todo));
    setTodos(newTodo);
   }

   const deleteTodo = (id) => { 
    const updatedTodo = todos.filter((todo) => ( todo.id !== id ));
    setTodos(updatedTodo);
    }

    const startEditing = (todo) => { 
      setEditingTodo(todo);
     }

     const editTodo = (id,task) => { 
      const updatedTodo = todos.map((todo) => (todo.id === id? {...todo,task: task} : todo))
      setTodos(updatedTodo);
      setEditingTodo(null);
      }

  return (
    <>
      <div className='max-w-1/2 h-auto mx-auto my-15'>
      <h2 className='text-zinc-500 text-4xl font-bold text-center'>TODO List</h2>
      <TodoForm addTodo={addTodo} editingTodo={editingTodo} editTodo={editTodo} />
      <TodoList todos={todos} ToggleTodo={ToggleTodo} deleteTodo={deleteTodo} startEditing={startEditing} />
      </div>
    </>
  )
}

export default App
