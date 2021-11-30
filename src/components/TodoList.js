import React from "react";
import Todo from "./Todo";
import { useGlobalContext } from "../context";

const TodoList = () => {
  const { todos, activeFilter, setActiveFilter, isDarkMode, handleClear } =
    useGlobalContext();
  return (
    <>
      <section
        className={`todo-list ${isDarkMode ? "" : "todo-list--lightmode"}`}
      >
        {todos
          .filter((todo) => {
            if (activeFilter === "completed") {
              return todo.isComplete === true;
            } else if (activeFilter === "active") {
              return todo.isComplete === false;
            } else {
              return todo;
            }
          })
          .map((item) => {
            const { name, id, isComplete } = item;
            return <Todo text={name} id={id} isComplete={isComplete} />;
          })}
        <div
          className={`${
            isDarkMode ? " todo-list__btns" : "todo-list__btns--lightmode"
          }`}
        >
          <p>{todos.filter((todo) => !todo.isComplete).length} items left</p>
          <p
            className={`clear ${isDarkMode ? "" : "clear--lightmode"}`}
            onClick={handleClear}
          >
            Clear Compeleted
          </p>
        </div>
      </section>
      <ul
        className={`${
          isDarkMode ? "todo-list__nav" : "todo-list__nav--lightmode"
        }`}
      >
        <li
          className={activeFilter === "all" && "active-filter"}
          onClick={() => setActiveFilter("all")}
        >
          All
        </li>
        <li
          className={activeFilter === "active" && "active-filter"}
          onClick={() => setActiveFilter("active")}
        >
          Active
        </li>
        <li
          className={activeFilter === "completed" && "active-filter"}
          onClick={() => setActiveFilter("completed")}
        >
          Completed
        </li>
      </ul>
    </>
  );
};

export default TodoList;
