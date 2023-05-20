import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo.png";
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container mx-auto max-w-[1120px]">
      <div className="h-[77px] flex justify-between items-center">
        <div>
          <img className=" w-40 sm:w-44 md:w-48" src={Logo} alt="" />
        </div>
        <div className="flex items-center">
          <ul className="hidden lg:flex space-x-10 text-lg items-center">
            <li>
              <a className="hover:text-blue-500 transition-all" href="">
                Home
              </a>
            </li>
            <li>
              <a  hclassName="hover:text-blue-500 transition-all" href="#features">
                Features
              </a>
            </li>
            <li>
              <a className="hover:text-blue-500 transition-all" href="#about">
                About
              </a>
            </li>
            <li>
              <a  className="hover:text-blue-500 transition-all" href="#contact">
                Contact
              </a>
            </li>
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
      <ul
        className={`lg:hidden text-center text-xl sm:text-2xl mt-4 transition-all ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <a className="hover:text-blue-500 transition-all" href="">
            Home
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500 transition-all" href="#features">
            Features
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500 transition-all" href="#about">
            About
          </a>
        </li>
        <li>
          <a className="hover:text-blue-500 transition-all" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}
