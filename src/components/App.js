import logo from './logo.svg';
import './App.css';
import TodoList from './TodoList';
import { Todo } from './Todo';
import React, { useState, useEffect } from 'react';
import { AddTodo } from './AddTodo';

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("todos", JSON.stringify(todos));
  }
  const addTodo = (tittle, desc) => {
    let slNo;
    if (todos.length === 0) {
      slNo = 1;
    } else {
      slNo = todos[todos.length - 1].slNo + 1;
    }
    const myTodos = {
      slNo: slNo,
      Job: tittle,
      Discription: desc
    }
    setTodos([...todos, myTodos]);
  }
  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  return (
    <div classNameName="App">
      <TodoList tittle="My ToDo List" search={false} />
      <AddTodo addTodo={addTodo} />
      <Todo todos={todos} onDelete={onDelete} />
    </div>
  );
}

export default App;
