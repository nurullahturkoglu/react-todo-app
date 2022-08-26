import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { newTodoList } from "../app/features/todo/todoSlicer";

function TodoFooter() {
  const todos = useSelector((state) => state.todo.todos);
  const dispatch = useDispatch();

  const findTodosLenght = () => {
    let sumOfTodos = 0;
    todos.forEach((todo) => {
      !todo.isCompleted && sumOfTodos++;
    });
    return sumOfTodos;
  };

  const showAllTodos = () => {
    dispatch(newTodoList(JSON.parse(localStorage.getItem("todos"))));
  };

  const showActiveTodos = () => {
    const createNewTodoList = JSON.parse(localStorage.getItem("todos")).filter(
      (todo) => !todo.isCompleted
    );
    dispatch(newTodoList(createNewTodoList));
  };

  const showCompletedTodos = () => {
    const createNewTodoList = JSON.parse(localStorage.getItem("todos")).filter(
      (todo) => todo.isCompleted
    );
    dispatch(newTodoList(createNewTodoList));
  };

  const clearCompletedTodos = () => {
    const createNewTodoList = JSON.parse(localStorage.getItem("todos")).filter(
      (todo) => !todo.isCompleted
    );
    dispatch(newTodoList(createNewTodoList));
    localStorage.setItem("todos", JSON.stringify(createNewTodoList));
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{findTodosLenght()}</strong> items left
      </span>

      <ul className="filters">
        <li>
          <span onClick={showAllTodos} className="selected">
            All
          </span>
        </li>
        <li>
          <span onClick={showActiveTodos}>Active</span>
        </li>
        <li>
          <span onClick={showCompletedTodos}>Completed</span>
        </li>
      </ul>

      {todos.some((todo) => todo.isCompleted) && (
        <button onClick={clearCompletedTodos} className="clear-completed">
          Clear completed
        </button>
      )}
      
    </footer>
  );
}

export default TodoFooter;
