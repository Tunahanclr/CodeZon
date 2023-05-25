import React, { useState, useEffect } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Todo from "./Todo";

export default function Form({
  setİnputText,
  inputText,
  setTodos,
  setStatus,
  todos,
  filteredTodos,
}) {
  const submitTodoHandle = (e) => {
    e.preventDefault();
    if (inputText.length < 3) {
      toast.error("Todo must be at least 3 characters long");
    } else {
      setTodos([
        {
          text: inputText,
          completed: false,
          id: Math.random(),
        },
        ...todos,
      ]);
      setİnputText("");
    }
  };

  return (
    <div className="flex justify-center container mx-auto items-center flex-col">
      <div className="mt-10">
        <form action="" onSubmit={submitTodoHandle} className="flex gap-10">
          <input
            type="text"
            onChange={(e) => setİnputText(e.target.value)}
            value={inputText}
            className="w-full md:w-[500px] rounded outline-blue-400 text-white h-12 bg-gray-700"
            placeholder="Add..."
          />
          <button type="submit" className="rounded bg-blue-400 w-32">
            Add
          </button>
        </form>
      </div>
      <div className="mt-4">
        <select
          name=""
          id=""
          onChange={(e) => setStatus(e.target.value)}
          className="bg-blue-400 rounded outline-none h-10 w-36"
        >
          <option value="all" className="text-white">
            All
          </option>
          <option value="completed" className="text-white">
            Completed
          </option>
          <option value="uncompleted" className="text-white">
            Uncompleted
          </option>
        </select>
      </div>
      {filteredTodos.map((todo) => (
        <Todo
          {...todo}
          todos={todos}
          key={todo.id}
          todo={todo}
          setTodos={setTodos}
        />
      ))}
      <ToastContainer /> {/* ToastContainer bileşeni */}
    </div>
  );
}