import React from 'react';
import { FaCopyright, FaArrowUp } from 'react-icons/fa6';
import { Link } from 'react-scroll';

const Footer = () => {
  return (
    <>
      {/* Footer Text Section */}
      <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-6">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center px-4 text-center lg:text-left">
          <div className="flex items-center gap-2">
            <FaCopyright className="text-yellow-500 size-5" />
            <p className="text-sm md:text-base font-light">
              2025 &copy; <span className="font-semibold tracking-wide">LEGAL PILING & CONSTRUCTION</span>. All rights reserved.
            </p>
          </div>
          <p className="text-xs md:text-sm text-gray-400 mt-2 lg:mt-0">
            Built with 💛 by your trusted foundation experts.
          </p>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <div
        id="icon-box"
        className="bg-yellow-500 hover:bg-black text-black hover:text-white shadow-lg transition-all duration-300 ease-in-out p-3 rounded-full cursor-pointer fixed right-6 bottom-6 z-50 group"
      >
        <Link to="hero" spy={true} offset={-100} smooth={true}>
          <FaArrowUp className="size-5 md:size-6 group-hover:animate-bounce" />
        </Link>
      </div>
    </>
  );
};

export default Footer;
