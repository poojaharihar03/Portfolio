import React from 'react';
import profileImage from '../assets/profile.gif';

const Banner = () => {
  const scrollToProjects = () => {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="flex items-center justify-center min-h-screen bg-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left md:w-1/2 p-8">
          <h1 className="text-4xl font-bold mb-4">Pooja Harihar</h1>
          <p className="text-lg mb-4">
            Hey there! Welcome to my corner of the internet. I'm Pooja Harihar, a code wizard by day and a beach lover by heart. 
            I turn code into magic 🪄 and data into gold✨. Let's make some tech magic together!
          </p>
          <button
            className="bg-blue-500 text-white py-2 px-4 rounded"
            onClick={scrollToProjects}
          >
            Get Started
          </button>
        </div>
        <div className="md:w-1/2 p-8">
          <img src={profileImage} alt="Pooja at the beach" className="rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
  );
};

export default Banner;
