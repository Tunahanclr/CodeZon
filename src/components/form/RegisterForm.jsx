import React, { useState } from "react";
import { auth, db } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, Timestamp } from "firebase/firestore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      ).then((result) => {
        const ref = doc(db, "users", result.user.uid);
        toast.success("Registration successful!"); // Başarılı kayıt mesajı
          navigate('/login') // Login sayfasına yönlendirme
        const docRef = setDoc(ref, {
          email,
          password,
          created: Timestamp.now(),
        });
        setDoc(doc(db, "posts", result.user.uid), { posts: [] });
        return user;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          placeholder="E-mail Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500 "
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500 "
        />

        <div className="mr-52">
          <button
            type="submit"
            className="w-24 h-9 text-white text-sm bg-blue-500 rounded-md hover:shadow-md hover:shadow-blue-300 transition-all"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
}
