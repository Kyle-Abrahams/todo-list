import React, { useState } from "react";
import checkmark from "../images/icon-check.svg";
import cancel from "../images/icon-cross.svg";
import { useGlobalContext } from "../context";

const Todo = ({ text, id, isComplete }) => {
  const { isDarkMode, handleRemove, toggleComplete } = useGlobalContext();
  const [isCompleted, setIsCompleted] = useState(false);
  return (
    <article key={id} className={`todo ${isDarkMode ? "" : "todo--lightmode"}`}>
      <div className="todo__text">
        <div
          className={`text__img-container ${
            isDarkMode ? "" : "text__img-container--lightmode"
          } ${isCompleted ? "completed" : ""}`}
          onClick={() => {
            toggleComplete(id);
            setIsCompleted(!isCompleted);
          }}
        >
          <img src={checkmark} alt="!" className={`todo-img__hover `} />
        </div>
        <p className={isCompleted ? "text-completed" : ""}>{text}</p>
      </div>
      <div className="img-container">
        <img src={cancel} alt="!" onClick={() => handleRemove(id)} />
      </div>
    </article>
  );
};

export default Todo;
