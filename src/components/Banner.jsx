import React from 'react';
import profileImage from '../assets/profile.gif';
import './Banner.css';

const Banner = ({ isDarkMode }) => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      className={`flex items-center justify-center min-h-screen ${
        isDarkMode ? 'banner-gradient text-white' : 'bg-white text-black'
      } transition-all duration-300`}
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 p-8 left_portion">
          <h1 className="text-4xl font-bold mb-4">Pooja Harihar</h1>
          <p className="text-lg mb-4">
            Hey there! Welcome to my corner of the internet. I'm Pooja Harihar, a code wizard by day and a beach lover by heart.
            I turn code into magic 🪄 and data into gold✨. Let's make some tech magic together!
          </p>
          <button
            className="bg-white text-black py-2 px-2 rounded border border-black hover:bg-gray-100 hover:text-gray-800"
            onClick={scrollToProjects}>
            Get Started
          </button>

        </div>
        <div className="md:w-1/2 p-8 right_portion">
          <img src={profileImage} alt="Pooja at the beach" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
