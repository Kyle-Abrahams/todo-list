import React, { useState, useContext, useEffect } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [activeFilter, setActiveFilter] = useState("all");

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputValue;
    if (name === "") return;
    setTodos((prevTodos) => {
      return [...prevTodos, { id: name, name: name, isComplete: false }];
    });
    setInputValue("");
  };

  const handleClear = () => {
    const newTodos = [...todos];
    const activeTodos = newTodos.filter((todo) => todo.isComplete === false);
    setTodos(activeTodos);
  };

  const handleRemove = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };

  const toggleComplete = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((todo) => todo.id === id);
    console.log(todo);
    todo.isComplete = !todo.isComplete;
  };

  return (
    <AppContext.Provider
      value={{
        inputValue,
        setInputValue,
        todos,
        setTodos,
        isDarkMode,
        setIsDarkMode,
        handleClear,
        handleSubmit,
        activeFilter,
        setActiveFilter,
        toggleComplete,
        handleRemove,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
