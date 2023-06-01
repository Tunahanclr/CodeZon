import React from "react";
import { NavLink } from "react-router-dom";

export default function Hero() {
  return (
    <div className="  mx-auto max-w-6xl">
      <div className="flex flex-col-reverse md:flex-row  justify-between items-center  ">
        <div>
          <h1 className="text-center text-xl  sm:text-5xl font-semibold">
          follow the news, plan your day and share what you know        </h1>
          <p className="text-center text-sm mt-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
      <NavLink to={'/login'}>
      <button class="w-36 mt-4 h-11 rounded-full bg-blue-500 shadow-md shadow-blue-400 hover:-translate-y-1 transition-all text-white">
            Get Started
          </button>
      </NavLink>
        </div>
        <div>
          <img
            className="  w-[480px] sm:w-[700px] object-cover md:w-[1750px]"
            src="https://preview.colorlib.com/theme/imagine/images/undraw_investing_7u74.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
