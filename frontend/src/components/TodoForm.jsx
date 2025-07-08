import React, {useState, useEffect} from 'react'

const TodoForm = ({ addTodo, editingTodo, editTodo }) => {
    const [task, setTask] = useState('')

    useEffect(() => {
    if (editingTodo) {
      // The if (editingTodo) check is crucial because it:

// Prevents accessing properties on null
// Only updates the task state when there's actually a todo to edit
      setTask(editingTodo.task)
    }
    }, [editingTodo])
    

    const handleSubmit = (e) => { 
        e.preventDefault();
        if (task.trim()) {
            editingTodo? editTodo(editingTodo.id,task) : addTodo(task);
        }
        setTask('')
     }
  return (
    <div className='flex justify-center items-center w-full my-5'>
      <form onSubmit={handleSubmit} className='flex justify-center items-center w-full gap-5'>
        <input className='border-2 p-2 w-3/4 rounded-lg' type="text" placeholder='Enter Task' value={task} onChange={(e) => { setTask(e.target.value) }} />
        <button className='bg-[#646ff0] p-3 rounded-xl px-4 text-white hover:bg-[#535bc8] cursor-pointer' type='submit'>{editingTodo? 'Update':'Add'}</button>
      </form>
    </div>
  )
}

export default TodoForm
