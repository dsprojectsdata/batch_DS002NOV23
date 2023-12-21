import React, { useState, useContext } from "react";
import UserContext from "../context/userContext";
import AddButton from "./AddButton";

const AddTodo = () => {
  // const [userData, setUserData] = useState({
  //   task: "",
  // });

  const [input, setInput] = useState();

  const { addTodo } = useContext(UserContext);

  // const addTodo = (e) => {
  //   setUserData({
  //     ...userData,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const submitTodo = () => {
  //   const existingTodos = JSON.parse(localStorage.getItem("todos")) || [];
  //   const newTodos = [...existingTodos, userData];
  //   localStorage.setItem("todos", JSON.stringify(newTodos));
  //   setUser(userData);
  //   // { task: "" }
  //   // { todos: [{},{}] }
  //   setUserData({ task: "" });
  // };

  return (
    <div>
      <input name="task" value={input} type="text" onChange={(e) => setInput(e.target.value)} />
      {/* <button onClick={() => addTodo(input)}>Add Todo</button> */}
      <AddButton addTodo={addTodo} input={input} />
    </div>
  );
};

export default AddTodo;
