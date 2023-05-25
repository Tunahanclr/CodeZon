import React, { useEffect, useState } from "react";
import Navbar from "../ui/Navbar";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { NavLink } from "react-router-dom";
import TodoList from "../components/Todo/TodoList";

export default function Todo() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="bg-gray-200 h-screen">
      <Navbar isLoggedIn={isLoggedIn} />
      {!isLoggedIn ? (
        <>
          <div className="text-center mt-10">
          <h1 className="text-blue-500 text-center cursor-pointer text-6xl md:text-3xl font-bold font-sans">
            CodeZone
          </h1>
          <h2 className="text-xl text-red-500">please login</h2>
          <div className="mt-4 ">
            <button className="w-64 text-xl bg-red-500 h-12  rounded  hover:bg-red-600">
          <NavLink className="" to={"/login"}>go to Login Page</NavLink>
            </button>
          </div>
          </div>
        </>
      ) : (
        <>
          <TodoList />
        </>
      )}
    </div>
  );
}
