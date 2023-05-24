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
        <h2>Lütfen giriş yapın.</h2>
        <NavLink to={'/login'}>Giriş Sayfasın Git</NavLink>
        </>
      )}
    </div>
  );
}
