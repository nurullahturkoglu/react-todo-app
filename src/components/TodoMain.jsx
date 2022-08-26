import React, { useState } from "react";
import Todo from "../components/Todo";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, newTodoList } from "../app/features/todo/todoSlicer";

function TodoMain() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos);

  useState(() => {
    if (localStorage.getItem("todos")) {
      const todos = JSON.parse(localStorage.getItem("todos"));
      todos.forEach((todo) => {
        dispatch(addTodo(todo));
      });
    }
  }, []);

  const markAllTodos = () => {
    const setNewTodos = [];
    todos.find((todo) => !todo.isCompleted)
      ? todos.forEach((todo) =>
          setNewTodos.push({ name: todo.name, isCompleted: true })
        )
      : todos.forEach((todo) =>
          setNewTodos.push({ name: todo.name, isCompleted: false })
        );

    dispatch(newTodoList(setNewTodos));
    localStorage.setItem("todos", JSON.stringify(setNewTodos));
  };
  return (
    <section className="main">
      <form>
        <input className="toggle-all" type="checkbox" />
        <label onClick={markAllTodos} htmlFor="toggle-all">
          Mark all as completes
        </label>
      </form>

      <ul className="todo-list">
        {todos.map((todo, index) => {
          return (
            <Todo
              key={index}
              todoIndex={index}
              completed={todo.isCompleted}
              text={todo.name}
            />
          );
        })}
      </ul>
    </section>
  );
}

export default TodoMain;
