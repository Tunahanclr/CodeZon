import React from 'react';
import { FaGithub, FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';

function Footer() {
  return (
    <footer id='contact' className="bg-white h-[198px] mt-12 py-4">
      <div className="flex justify-center">
        <a href="https://github.com/Tunahanclr" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-2">
          <FaGithub size={24} />
        </a>
        <a href="https://www.linkedin.com/in/tunahan-%C3%A7eler-05a7a5249/" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-2">
          <FaLinkedinIn size={24} />
        </a>
        <a href="https://www.instagram.com/tunahanclr/" target="_blank" rel="noopener noreferrer" className="text-blue-500 mx-2">
          <FaInstagram size={24} />
        </a>
      </div>
      <p className='text-center mt-12 flex justify-center items-center text-lg text-gray-500 tracking-wide'>
        Copyright ©2023 All rights reserved | This template is made with 
        <AiFillHeart className='text-red-500' /> by 
        <a className='text-blue-500 cursor-pointer'>Tunahan Çeler</a>
      </p>
    </footer>
  );
}

export default Footer;
