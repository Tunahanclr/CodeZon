import React from "react";
import { GiConfirmed } from "react-icons/gi";

export default function Todo({ todos, setTodos, todo, text, completed }) {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };

  const completedHandle = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };

  return (
    <div className="mt-4">
      <ul className="flex space-x-7">
        <li
          className={`bg-gray-500 min-w-[300px] gap-6 h-11 justify-between flex items-center rounded ${
            completed ? "line-through opacity-60 transition-all" : ""
          }`}
        >
          <p className="flex">{text}</p>
          <button onClick={completedHandle}>
            <GiConfirmed className="text-green-400 text-3xl" />
          </button>
        </li>
        <button
          onClick={deleteHandler}
          className="bg-red-500 w-24 hover:bg-red-700 transition-all rounded"
        >
          Delete
        </button>
      </ul>
    </div>
  );
}
