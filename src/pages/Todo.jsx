import React, { useEffect, useState } from 'react';
import Navbar from '../ui/Navbar';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { NavLink } from 'react-router-dom';

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
          <h2>Lütfen giriş yapın.</h2>
          <NavLink to={'/login'}>Giriş Sayfasına Git</NavLink>
        </>
      ) : (
        <>
  sadsa
      </>
      )}
    </div>
  );
  }
