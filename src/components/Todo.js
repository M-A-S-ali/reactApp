import React from 'react'
import { TodoItems } from './TodoItems'

export const Todo=(props)=>{
  return (
    <div className='container'>
      <h4 className="text-center">ToDo List</h4>
      {props.todos.length===0? "No ToDo to Display":
      props.todos.map((todo)=>{
        return(<> <TodoItems todo = {todo} key = {todo.slNo} onDelete ={props.onDelete}/><hr/></>)
      })}
    </div>
  )
}
