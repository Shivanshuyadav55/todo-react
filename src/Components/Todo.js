import React from 'react'

export const TodoItem = ({todo, onDelete}) => {
  return (
    <div className='container mt-1'>
    
      <h4>{todo.title}</h4>
      <p>{todo.desc}</p>
      <button className='btn ml-2 btn-sm btn-danger' onClick={()=>onDelete(todo)}>Delete</button>
    </div>
  )
}
