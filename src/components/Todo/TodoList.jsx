import React, { useState, useEffect } from "react";
import Form from "./Form";

export default function TodoList() {
  const [inputText, setİnputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    getLocalTodos();
  }, []);

  useEffect(() => {
    filterHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };

  const saveLocalTodos = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalTodos = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      const localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  };
  return (
    <div className="max-w-[1024px] mx-auto container">
      <div className="flex flex-col mt-20 justify-center items-center">
        <h1 className="text-blue-400 text-5xl sm:text-6xl font-bold">
          Todo List
        </h1>
        <div>
          <Form
            filteredTodos={filteredTodos}
            setStatus={setStatus}
            todos={todos}
            setTodos={setTodos}
            setİnputText={setİnputText}
            inputText={inputText}
          />
        </div>
      </div>
    </div>
  );
}