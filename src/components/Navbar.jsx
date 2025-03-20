import { useState } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 backdrop-blur-md bg-opacity-90"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-extrabold dark:text-white tracking-tight">Ebrahim Worke</div>
        <div className="flex items-center space-x-6">
          <div className={`md:flex md:space-x-6 ${isOpen ? "block absolute top-16 left-0 w-full bg-white dark:bg-gray-900 p-4" : "hidden md:block"}`}>
            {["About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 md:inline-block text-gray-800 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <button
            onClick={toggleMenu}
            className="md:hidden text-gray-800 dark:text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;