import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ModeToggle } from "./components/mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="shadow-md dark:shadow-xl px-4 sm:px-6 md:px-32 xl:px-60">
      <div className="container mx-auto p-4 flex items-center justify-between relative">
        {/* Logo */}
        <div className="text-lg font-bold font-heading">
          <Link to="/" className="text-black dark:text-white">
            Avadh
          </Link>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle mobile menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-black dark:text-white"
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
        <div
          className={`
            absolute top-full right-0 mt-2 w-48 
            bg-white 
            dark:bg-zinc-800 md:dark:bg-transparent
            shadow-lg rounded-lg 
            md:static md:w-auto md:bg-transparent md:shadow-none 
            ${isOpen ? "block" : "hidden"} 
            md:block
            z-40
          `}
        >
          <ul
            className="
              flex flex-col md:flex-row 
              items-center 
              space-y-2 md:space-y-0 md:space-x-6
              p-4 md:p-0
            "
          >
            {["Education", "Experience", "Skills", "Projects"].map((item) => (
              <li
                key={item}
                className="
                  w-full md:w-auto text-center 
                  hover:bg-blue-500 hover:text-white 
                  rounded-lg transition duration-300 
                  px-4 py-2
                "
              >
                <Link
                  to={`/${item.toLowerCase()}`}
                  className="
                    block text-black dark:text-white
                    hover:text-white font-heading
                  "
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}

            {/* Mode Toggle */}
            <li className="w-full md:w-auto flex justify-center">
              <ModeToggle />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
