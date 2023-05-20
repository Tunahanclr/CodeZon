import React from "react";
import { MdOutlineQuiz } from "react-icons/md";
import { FcTodoList } from "react-icons/fc";
import { FaBlog } from "react-icons/fa";
export default function Features() {
  return (
    <div id="features" className="mt-24 container mx-auto">
      <h2 className="text-center text-4xl font-bold">Code Zone Features</h2>
      <p className="text-center mt-4 text-lg text-gray-500">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        <br />
        Fuga quos quaerat sapiente nam, id vero.
      </p>
      <div className="flex flex-wrap mt-16 justify-center gap-8">
        <div className=" features-container bg-gray-200 hover:text-white  hover:bg-blue-600 transition-all hover:-translate-y-4 h-56 w-[370px] flex flex-col items-center justify-center rounded-md">
          <div>
            <div className="flex justify-center">
              <MdOutlineQuiz className="text-6xl icon text-blue-500 " />
            </div>
            <h3 className="text-center mt-3 text-2xl">Quiz app</h3>
            <p className="text-sm text-center mt-4 text-gray-500 px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti provident suscipit commodi laboriosam tempore
              blanditiis odit nulla quasi deserunt.
            </p>
          </div>
        </div>
        <div className=" features-container bg-gray-200 hover:text-white  hover:bg-blue-600 transition-all hover:-translate-y-4 h-56 w-[370px] flex flex-col items-center justify-center rounded-md">
          <div>
            <div className="flex justify-center">
              <FcTodoList className="text-6xl icon text-blue-500 te" />
            </div>
            <h3 className="text-center mt-3 text-2xl">Todo</h3>
            <p className="text-sm text-center mt-4 text-gray-500 px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti provident suscipit commodi laboriosam tempore
              blanditiis odit nulla quasi deserunt.
            </p>
          </div>
        </div>
        <div className=" features-container bg-gray-200 hover:text-white  hover:bg-blue-600 transition-all hover:-translate-y-4 h-56 w-[370px] flex flex-col items-center justify-center rounded-md">
          <div>
            <div className="flex justify-center">
              <FaBlog className="text-6xl icon text-blue-500 " />
            </div>
            <h3 className="text-center mt-3 text-2xl">Blog</h3>
            <p className="text-sm text-center mt-4 text-gray-500 px-4">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Accusantium corrupti provident suscipit commodi laboriosam tempore
              blanditiis odit nulla quasi deserunt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
