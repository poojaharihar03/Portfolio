import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handle scroll event to change navbar style
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the scroll position threshold as needed
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDarkMode);
    document.body.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${scrolled ? 'bg-opacity-70' : 'bg-opacity-100'} ${isDarkMode ? 'navbar dark-mode' : 'navbar'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a className="text-2xl font-bold" href="#page-top">
          <span>{""}</span>
          <span>{""}</span>
        </a>

        <div className="flex items-center space-x-4">
          <button
            className="lg:hidden px-4 py-1"
            onClick={toggleMenu}
          >
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current mb-1"></span>
            <span className="block w-6 h-0.5 bg-current"></span>
          </button>

          <button
            onClick={toggleTheme}
            className="bg-gray-200 dark:bg-gray-700 p-2 rounded-full"
          >
            {isDarkMode ? '🌙' : '🌞'}
          </button>
        </div>

        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="navbar-button hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors duration-300"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="navbar-button hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors duration-300"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1CzMdtfwqJ9tr2UbJbnl6dhm-s3MfCBii/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar-button hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors duration-300"
            onClick={closeMenu}
          >
            Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="navbar-button hover:bg-blue-500 hover:text-white px-4 py-2 rounded transition-colors duration-300"
            onClick={closeMenu}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;