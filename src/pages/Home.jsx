import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
    <div>
      {isLoggedIn ? (
        <>
          <h2>Hoşgeldiniz!</h2>
          <button onClick={handleLogout}>Çıkış Yap</button>
        </>
      ) : (
        <h2>Lütfen giriş yapın.</h2>
      )}
    </div>
  );
}
