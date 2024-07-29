import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll'; // Import Link for smooth scrolling

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300 ${isScrolled ? 'bg-gray-800 text-white shadow-md' : 'bg-gray-200 text-gray-900'}`}>
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <a className="text-2xl font-bold" href="#page-top">
          {/* Add your logo or brand name here */}
          <span></span>
        </a>

        {/* Toggle button for mobile menu */}
        <button
          className="lg:hidden px-2 py-1 text-gray-900"
          onClick={toggleMenu}
        >
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current mb-1"></span>
          <span className="block w-6 h-0.5 bg-current"></span>
        </button>

        {/* Navigation menu */}
        <div className={`lg:flex lg:items-center lg:space-x-4 ${isOpen ? 'block' : 'hidden'} transition-all duration-300 ease-in-out`}>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 px-4 py-2"
            onClick={closeMenu}
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 px-4 py-2"
            onClick={closeMenu}
          >
            Projects
          </Link>
          <a
            href="https://drive.google.com/file/d/1CzMdtfwqJ9tr2UbJbnl6dhm-s3MfCBii/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 px-4 py-2"
            onClick={closeMenu}
          >
            Resume
          </a>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-blue-500 px-4 py-2"
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
