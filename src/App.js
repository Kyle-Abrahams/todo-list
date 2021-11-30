import React from "react";
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
import { useGlobalContext } from "./context";

function App() {
  const { isDarkMode } = useGlobalContext();
  return (
    <main>
      <div className={`bg-img ${isDarkMode ? "" : "bg-img--lightmode"}`}></div>
      <div className="container">
        <TodoInput />
        <TodoList />
      </div>
    </main>
  );
}

export default App;
