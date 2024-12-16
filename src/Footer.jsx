import React from "react";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="px-8 sm:px-6 md:px-32 xl:px-60"
      style={{ boxShadow: "0 -4px 6px rgba(0, 0, 0, 0.1)" }}
    >
      <div className="container mx-auto py-5 flex flex-col md:flex-row items-center justify-between">
        {/* Logo */}
        <div className="text-lg font-bold font-heading text-center md:text-left">
          <Link to="/">Avadh Kanaiya </Link>
        </div>

        {/* Contact Links */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://github.com/AvadhKanaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/avadh-kanaiya-61bb42197/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="https://twitter.com/AvadhKanaiya"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <Twitter className="h-6 w-6" />
          </a>
          <a
            href="mailto:avadhkanaiya@gmail.com"
            className="text-gray-600 dark:text-gray-300 hover:text-blue-500 transition duration-300"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
