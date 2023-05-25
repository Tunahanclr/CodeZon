import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { BrowserRouter, NavLink,Routes,Route, useNavigate } from "react-router-dom";
import Navbar from "../components/Home/Navbar";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    const auth = getAuth();

    try {
      await signOut(auth);
      setIsLoggedIn(false);
      navigate("/login"); // Çıkış yapıldıktan sonra login sayfasına yönlendirme
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gray-200 h-screen">
      {isLoggedIn ? (
        <>
            <Navbar handleLogout={handleLogout} isLoggedIn={isLoggedIn}/>
        </>
      ) : (
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
      )}
    </div>
  );
}
