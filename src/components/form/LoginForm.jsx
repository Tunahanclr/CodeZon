import React from "react";

export default function LoginForm() {
  return (
    <div className="">
      <form action="" className="flex flex-col gap-4 ">
        <input
          type="email"
          placeholder="E-mail Address"
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-gray-100 w-72 rounded-md h-10 outline-blue-500"
        />
            <div className="mr-52">
            <button type="submit" className="w-24 h-9 text-white text-sm bg-blue-500 rounded-md hover:shadow-md hover:shadow-blue-300 transition-all">Login</button>
            </div>
                <div className="flex items-center gap-4">
            <span className="text-xs">Or login with</span> <span className="font-bold  text-sm cursor-pointer hover:underline">Google</span>
                </div>
      </form>
    </div>
  );
}
