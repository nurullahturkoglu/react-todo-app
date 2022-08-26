import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTodoList } from "../app/features/todo/todoSlicer";

function Todo({ completed, text, todoIndex }) {
  const dispatch = useDispatch();
  let todos = useSelector((state) => state.todo.todos);
  const [isClickedText, setIsClicketText] = useState(false);

  const handleDestroy = () => {
    // REMOVE TODO
    let createNewTodoList = [];
    todos.forEach((todo, index) => {
      index !== todoIndex && createNewTodoList.push(todo);
    });
    // UPDATE THE STATE
    dispatch(newTodoList(createNewTodoList));

    // UPDATE THE LOCAL STORAGE
    localStorage.setItem("todos", JSON.stringify(createNewTodoList));
  };

  const handleCompleted = () => {
    // FLIP CHANGE TODOS
    let createNewTodoList = [];
    todos.forEach((todo, index) => {
      if (index === todoIndex) {
        createNewTodoList.push({
          name: todo.name,
          isCompleted: !todo.isCompleted,
        });
      } else {
        createNewTodoList.push(todo);
      }
    });
    dispatch(newTodoList(createNewTodoList));
    localStorage.setItem("todos", JSON.stringify(createNewTodoList));
  };

  const setText = (event) => {
    let createNewTodoList = [];
    todos.forEach((todo, index) => {
      if (index === todoIndex) {
        createNewTodoList.push({
          name: event.target[0].value,
          isCompleted: todo.isCompleted,
        });
      } else {
        createNewTodoList.push(todo);
      }
    });
    dispatch(newTodoList(createNewTodoList));
    localStorage.setItem("todos", JSON.stringify(createNewTodoList));
    setIsClicketText((prevValue) => !prevValue);
  };

  return (
    <li className={completed ? "completed" : undefined}>
      <div className="view">
        <input
          onChange={handleCompleted}
          className="toggle"
          type="checkbox"
          checked={completed}
        />
        {isClickedText ? (
          <form onSubmit={setText}>
            <input
              className="set-text"
              type="text"
              defaultValue={text}
              autoFocus
            ></input>
          </form>
        ) : (
          <>
            <label onClick={() => setIsClicketText((prevValue) => !prevValue)}>
              {text}
            </label>
            <button onClick={handleDestroy} className="destroy"></button>
          </>
        )}
      </div>
    </li>
  );
}

export default Todo;
