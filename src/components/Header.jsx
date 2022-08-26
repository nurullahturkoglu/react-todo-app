import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../app/features/todo/todoSlicer";

function Header() {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    const newTodo = { name: event.target[0].value, isCompleted: false };

    if (localStorage.getItem("todos")) {
      const newTodoList = JSON.parse(localStorage.getItem("todos"));
      newTodoList.push(newTodo);
      localStorage.setItem("todos", JSON.stringify(newTodoList));
    } else {
      localStorage.setItem("todos", JSON.stringify([newTodo]));
    }

    dispatch(addTodo(newTodo));

    event.target[0].value = "";
    event.preventDefault();
  };
  return (
    <header className="header">
      <h1>todos</h1>
      <form onSubmit={handleSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          spellCheck="false"
          autoFocus
          type="text"
        />
      </form>
    </header>
  );
}

export default Header;
