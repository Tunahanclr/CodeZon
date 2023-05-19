import React from "react";

export default function Hero() {
  return (
    <div className="container  mx-auto max-w-6xl">
      <div className="flex flex-col-reverse md:flex-row  justify-between items-center  ">
        <div>
          <h1 className="text-center text-4xl font-extrabold">
            İncrease your Progress by Testing Yourself
          </h1>
          <p className="text-center mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            assumenda ea quo cupiditate facere deleniti fuga officia.
          </p>
         <button class="w-32 mt-4 h-10 rounded-xl bg-blue-500 shadow-md shadow-blue-400 hover:-translate-y-1 transition-all">
            start
          </button>
        </div>
        <div>
          <img
            className=" w-[500px] md:w-[1600px]"
            src="https://preview.colorlib.com/theme/imagine/images/undraw_investing_7u74.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
