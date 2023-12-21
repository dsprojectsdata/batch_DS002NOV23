// import React, { useState } from "react";
import { useState, useEffect } from "react";
import "./App.css";
import AddTodo from "./Pages/AddTodo";
import UserContext from "./context/userContext";
import TodoList from "./Pages/TodoList";

let taskId = 1;

function App() {
  const [user, setUser] = useState({ todos: [] });

  const addTodo = (task) => {
    // const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
    // const newTodos = [...existingTodos, userData];
    // localStorage.setItem("todos", JSON.stringify(newTodos));

    const todoObj = {
      id: taskId,
      task: task
    };
    const newTodos = {
      todos: [...user.todos, todoObj]
    };

    setUser(newTodos);

    localStorage.setItem("todos", JSON.stringify(newTodos.todos))
    taskId++;
  }

  useEffect(() => {
    const localTodos = JSON.parse(localStorage.getItem("todos"))
    setUser({ todos: localTodos })
  }, [])

  return (
    <UserContext.Provider value={{ user, addTodo }}>
      <AddTodo />
      <TodoList />
    </UserContext.Provider>
  );
}

export default App;
