import React, { useContext, useEffect } from "react";
import UserContext from "../context/userContext";

const TodoList = () => {
  const { user } = useContext(UserContext);

  // useEffect(() => {
  //   const getTodoData = JSON.parse(localStorage.getItem("todos")) || [];
  //   setUser({ todos: getTodoData });
  // }, [setUser]);

  // user = { todos: [{},{}] }

  return (
    <div>
      <h2>Todo List</h2>
      {user && user.todos && user.todos.length > 0 ? (
        <ul>
          {user.todos.map((todo, index) => (
            <li key={index}>{todo.task}</li>
          ))}
        </ul>
      ) : (
        <p>No todos found.</p>
      )}
    </div>
  );
};

export default TodoList;
