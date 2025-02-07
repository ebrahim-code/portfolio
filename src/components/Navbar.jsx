import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-lg z-50"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-xl font-bold dark:text-white">My Portfolio</div>
        <div className="flex items-center space-x-4">
          <div className={`md:flex md:space-x-4 ${isOpen ? "block" : "hidden"} md:block`}>
            <a
              href="#about"
              className="block mt-4 md:inline-block md:mt-0 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            >
              About
            </a>
            <a
              href="#projects"
              className="block mt-4 md:inline-block md:mt-0 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="block mt-4 md:inline-block md:mt-0 text-gray-800 dark:text-white hover:text-gray-600 dark:hover:text-gray-400"
            >
              Contact
            </a>
          </div>
          <ThemeToggle />
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 dark:text-white focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;