import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Navbar({ handleLogout }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="h-20">
      <div className={`bg-black fixed w-full h-full top-0 left-0 z-50 transition-opacity duration-300 ${isOpen ? "opacity-80" : "opacity-0 pointer-events-none"}`}></div>
      <div className="bg-black/80 h-full text-white">
        <div className="flex items-center h-full container mx-auto justify-between">
          <div className="">
            <NavLink
              to={"/Home"}
              className="text-blue-500 cursor-pointer text-xl md:text-3xl font-bold font-sans"
            >
              Code Zone
            </NavLink>
          </div>
          <div className="flex items-center">
            <ul className="hidden font-semibold lg:flex gap-8 text-base items-center">
              <li>
                <NavLink to={'/todo'} className="">
                  Todo
                </NavLink>
              </li>
              <li>
                <NavLink to={'/blog'} className="">
                  Blog
                </NavLink>
              </li>
              <NavLink to={'/home'}>
                <button className="bg-white hover:bg-white/80 transition-all text-black w-32 h-11 rounded-md">
                  Home Page
                </button>
              </NavLink>
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
      </div>
      <div className={`fixed z-50 top-0 right-0 h-screen w-64 bg-gray-500 text-white transition-transform duration-300 transform ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
        <ul className="text-center  pt-20">
          <li>
            <a href="" className="text-white text-lg hover:text-blue-400">
              Todo
            </a>
          </li>
          <li>
            <a href="" className="text-white  text-lg hover:text-blue-400">
              Blog
            </a>
          </li>
          <button className="bg-white hover:bg-white/80 transition-all  text-lg hover:text-blue-500 text-black w-32 h-11 rounded-md">
            Home Page
          </button>
        </ul>
        <button className="absolute top-5 right-5 text-white" onClick={handleCloseMenu}>
          <FaTimes className="text-xl" />
        </button>
      </div>
    </div>
  );
}
