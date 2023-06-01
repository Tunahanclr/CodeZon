import React, { useState } from "react";
import News from "../News/News";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar({ handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <div className="relative bg-black/80 h-20 text-white">
        <div className="flex items-center h-full container mx-auto justify-between">
          <div className="">
            <NavLink
              to={"/Home"}
              className="text-blue-500 cursor-pointer text-xl md:text-3xl font-bold font-sans"
            >
              Code Zone
            </NavLink>
          </div>
          <div className="flex items-center ">
            <ul className="hidden font-semibold lg:flex  gap-8 text-base items-center">
              <li>
                <NavLink to={"/todo"} className="">
                  Todo
                </NavLink>
              </li>
              <li>
                <NavLink to={"/blog"} className="">
                  Blog
                </NavLink>
              </li>
              <li>
                <a href="" className="">
                  Quiz
                </a>
              </li>
              <button
                className="bg-white hover:bg-white/80 transition-all text-black w-28 h-10 rounded-md"
                onClick={handleLogout}
              >
                Log out
              </button>
            </ul>
            <button className="lg:hidden ml-4" onClick={handleMenuToggle}>
              <div className="mt-3 pr-4">
                {isOpen ? (
                  <FaTimes className="text-xl " />
                ) : (
                  <FaBars className=" text-xl" />
                )}
              </div>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="fixed top-0 left-0  w-screen h-screen bg-black z-50">
            <div className="flex justify-end p-4">
              <button
                className="text-white text-2xl focus:outline-none"
                onClick={closeMenu}
              >
                <FaTimes />
              </button>
            </div>
            <ul className="flex flex-col  items-center justify-center h-full">
              <li>
                <a
                  href=""
                  className="text-white hover:text-blue-400 text-3xl py-4"
                  onClick={closeMenu}
                >
                  Todo
                </a>
              </li>
              <li>
                <a
                  href=""
                  className="text-white hover:text-blue-400 text-3xl py-4"
                  onClick={closeMenu}
                >
                  Blog
                </a>
              </li>
              <button
                className="bg-white hover:bg-white/80 transition-all text-black mt-2 w-28 h-10 rounded-md"
                onClick={() => {
                  closeMenu();
                  handleLogout();
                }}
              >
                Log out
              </button>
            </ul>
          </div>
        )}
      </div>
      <News />
    </>
  );
}
