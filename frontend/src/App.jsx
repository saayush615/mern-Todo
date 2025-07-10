import { useState, useEffect } from 'react'
import './App.css'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

function App() {
  const[ todos, setTodos ] = useState([])
  const [editingTodo, setEditingTodo] = useState(null)

  // useEffect to fetch data when component mounts
  useEffect(() => {
    fetch('http://localhost:3000/todos/')
    .then(res => res.json())
    .then(data => {
      setTodos(data)
    })
    .catch(err => console.error('Failed to fetch task:',err));
  }, []) // <- empty dependency array means run once on mount
  

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
  }
}

  const ToggleTodo = async (id) => { 
    try {
      const todoToToggle = todos.find((todo) => todo._id === id);
      if(!todoToToggle) return;

      //Put request
      const response = await fetch(`http://localhost:3000/todos/${id}`,{
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ isCompleted: !todoToToggle.isCompleted})
      });

      if (!response.ok) throw new Error('Failed to update todo');
      const updatedTodo = await response.json();

      // Update local state
      const newTodos = todos.map((todo) =>
        todo._id === id ? updatedTodo : todo
      );
      setTodos(newTodos);
    } catch (error) {
      console.error(error);
    }
   }

   const deleteTodo = async (id) => { 
    try {
      const response = await fetch(`http://localhost:3000/todos/${id}`,{
        method: 'DELETE',
      });
      if(!response.ok) throw new Error('Failed to delete todo');

      const updatedTodo = todos.filter((todo) => ( todo._id !== id ));
      setTodos(updatedTodo);
    } catch (error) {
      console.error(error);
    }
    }

    const startEditing = (todo) => { 
      setEditingTodo(todo);
     }

    const editTodo = async (id, task) => { 
      try {
        const response = await fetch(`http://localhost:3000/todos/${id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ task }) // send updated task
        });
        if (!response.ok) throw new Error('Failed to edit');

        const updatedTodo = await response.json();
        const newTodos = todos.map((todo) =>
          todo._id === id ? updatedTodo : todo
        );
        setTodos(newTodos);
        setEditingTodo(null);
      } catch (error) {
        console.error(error);
      }
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
