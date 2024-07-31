import React from 'react';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg'; 
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg'; 
import { ReactComponent as XIcon } from '../assets/icons/X.svg'; 

const Contact = ({ isDarkMode }) => {
  return (
    <footer className={`py-2 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Copyright  */}
        <div className={`text-xs ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
          <p>&copy; {new Date().getFullYear()} Pooja Harihar</p>
        </div>
        {/* Connect with Me Icons */}
        <div className="flex space-x-4">
          {/* GitHub */}
          <a
            href="https://github.com/poojaharihar03"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-300 hover:text-white ${isDarkMode ? 'hover:text-gray-100' : 'hover:text-gray-800'}`}
          >
            <GitHubIcon className="w-5 h-5" />
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/poojaharihar"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-300 hover:text-white ${isDarkMode ? 'hover:text-gray-100' : 'hover:text-gray-800'}`}
          >
            <LinkedInIcon className="w-5 h-5" />
          </a>
          {/* X (formerly Twitter) */}
          <a
            href="https://x.com/Pooja_0305"
            target="_blank"
            rel="noopener noreferrer"
            className={`text-gray-300 hover:text-white ${isDarkMode ? 'hover:text-gray-100' : 'hover:text-gray-800'}`}
          >
            <XIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
