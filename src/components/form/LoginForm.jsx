import React,{useState} from "react";
import { useFormik } from "formik";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const navigate = useNavigate();
  const handleSubmit=async(e)=>{
    setEmail('')
    setPassword('')
    e.preventDefault()
    await signInWithEmailAndPassword(auth,email,password).then(result=>{
        navigate('/home')
    })
    .catch(err=>console.log(err))
  }
  return (
    <div className="">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
          placeholder="E-mail Address"
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500"
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500" 
        />

        <div className="mr-52">
          <button
            type="submit"
            className="w-24 h-9 text-white text-sm bg-blue-500 rounded-md hover:shadow-md hover:shadow-blue-300 transition-all"
          >
            Login
          </button>
        </div>
        
        <div className="flex items-center gap-4">
          <span className="text-xs">Or login with</span>{" "}
          <span className="font-bold text-sm cursor-pointer hover:underline">
            Google
          </span>
        </div>
      </form>
    </div>
  );
}
