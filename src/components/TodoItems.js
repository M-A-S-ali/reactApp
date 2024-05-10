import React from 'react'

export const TodoItems=({todo , onDelete})=> {
  return (
    <div>
      <h4>{todo.slNo}. {todo.Job}</h4>
      <h5>{todo.Discription}</h5>
      <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
    </div>
  )
}
