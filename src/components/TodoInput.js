import React from "react";
import sun from "../images/icon-sun.svg";
import moon from "../images/icon-moon.svg";
import { useGlobalContext } from "../context";

const TodoInput = () => {
  const { isDarkMode, setIsDarkMode, inputValue, setInputValue, handleSubmit } =
    useGlobalContext();
  return (
    <section className="header">
      <header>
        <h1>TODO</h1>
        <div className="header__img-container">
          <img
            src={isDarkMode ? sun : moon}
            alt="!"
            onClick={() => {
              setIsDarkMode(!isDarkMode);
              document.body.style.backgroundColor = `${
                isDarkMode ? "hsl(0, 0%, 98%)" : ""
              }`;
            }}
          />
        </div>
      </header>
      <div
        className={`todo-input ${isDarkMode ? "" : "todo-input--lightmode"}`}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Create a new todo..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </form>
      </div>
    </section>
  );
};

export default TodoInput;
