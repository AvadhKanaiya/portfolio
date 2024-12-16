import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md px-8 sm:px-6 md:px-32 xl:px-60">
      <div className="container mx-auto p-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold font-heading">
          <Link to="/">Avadh</Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button className="block md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center md:space-x-6 absolute md:static w-full md:w-auto md:bg-transparent transition-all duration-300 ${
            isOpen ? "top-16 text-center" : "top-[-400px] text-center"
          }`}
        >
          <li className="font-heading hover:bg-blue-500 rounded-lg transition duration-300 px-4 py-2">
            <Link to="/education" onClick={() => setIsOpen(false)}>
              Education
            </Link>
          </li>
          <li className="font-heading hover:bg-blue-500 rounded-lg transition duration-300 px-4 py-2">
            <Link to="/experience" onClick={() => setIsOpen(false)}>
              Experience
            </Link>
          </li>
          <li className="font-heading hover:bg-blue-500 rounded-lg transition duration-300 px-4 py-2">
            <Link to="/skills" onClick={() => setIsOpen(false)}>
              Skills
            </Link>
          </li>
          <li className="font-heading hover:bg-blue-500 rounded-lg transition duration-300 px-4 py-2">
            <Link to="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
