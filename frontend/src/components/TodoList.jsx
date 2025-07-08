import React, { useEffect, useState } from 'react'
import deleteIcon from '../assets/delete.png';
import editIcon from '../assets/edit.png';

const TodoList = ({ todos, ToggleTodo, deleteTodo, startEditing }) => {
  if (todos.length === 0) {
    return <p className="text-gray-500 text-center">No todos yet! Add some tasks.</p>
  }

  return (
    <div className='bg-[#ecedf6] p-4 rounded-xl'>
        <ul>
        {todos.map((todo) => (
            <div key={todo.id} className='bg-white mb-4 p-5 flex justify-between'>
              <div className='flex gap-4'>
                <input type="checkbox" checked={todo.completed} onChange={() => { ToggleTodo(todo.id) }} className="h-5 w-5 accent-[#646ff0] rounded border-gray-300 cursor-pointer"  />
                <li className={todo.completed ? 'line-through' : ''}>{todo.task}</li>
              </div>
              <div className='flex gap-4'>
                <img src={editIcon} alt="edit button" className='w-6 h-auto cursor-pointer' onClick={() => { startEditing(todo) }} />
                <img src={deleteIcon} alt="delete button" className='w-6 h-auto cursor-pointer' onClick={() => { deleteTodo(todo.id) }}  />
              </div>
            </div>
          ))
        }
      </ul>
    </div>
  )
}

export default TodoList
