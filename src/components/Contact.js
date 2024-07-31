import React from 'react';
import { ReactComponent as GitHubIcon } from '../assets/icons/github.svg'; // Adjust path if necessary
import { ReactComponent as LinkedInIcon } from '../assets/icons/linkedin.svg'; // Adjust path if necessary
import { ReactComponent as XIcon } from '../assets/icons/X.svg'; // Adjust path if necessary

const Contact = () => {
  return (
    <footer className="bg-gray-400 py-4">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-4">
          <h2 className="text-2xl font-bold mb-4">Connect with Me</h2>
          <div className="flex justify-center space-x-6">
            {/* GitHub */}
            <a
              href="https://github.com/poojaharihar03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <GitHubIcon className="w-8 h-8" />
            </a>
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/poojaharihar"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <LinkedInIcon className="w-8 h-8" />
            </a>
            {/* X (formerly Twitter) */}
            <a
              href="https://x.com/Pooja_0305"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white"
            >
              <XIcon className="w-8 h-8" />
            </a>
          </div>
        </div>
        <div className="text-center white-400">
          <p>&copy; {new Date().getFullYear()} Pooja Harihar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;