import React from 'react';
import { NavLink } from 'react-router-dom';
import FormImage from '../components/form/FormImage';
import LoginForm from '../components/form/LoginForm';

export default function Login() {
  return (
    <>
      <div className="flex items-center h-screen ">
        <div className=" md:block hidden bg-gray-100 w-[750px] h-full">
        <FormImage/>
        </div>
        <div className="flex flex-col mx-auto bg-white w-full items-center">
        <div className='flex justify-center flex-col items-center'>
    <h2 className=" sm:text-2xl font-bold text-center w-[400px]">
        Improve yourself every day with the Code Zone platform
      </h2>
      <p className="text-black w-[300px] font-light mt-1">
        Access to the most powerful tool in the entire design and web industry.
      </p>
      <div className="flex gap-5 mt-4">
        <NavLink to={'/login'} className="border-b-2 border-gray-500 text-xl">
          Login
        </NavLink>
        <NavLink to={'/register'} className="border-b-2 border-blue-500 text-xl">
          Register
        </NavLink>
      </div>
      <div className="mt-6  ml-3">
            <LoginForm/>
          </div>
    </div>        
          <div className="absolute top-2 right-6 p-4">
            <NavLink to={'/'} className="text-blue-500 text-xl md:text-3xl font-bold font-sans">Code Zone</NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
