import React from 'react';
import Hack1 from '../assets/hack1.jpg'; 
import Hack2 from '../assets/hack2.jpg';

const Hackathon = ({ isDarkMode }) => {
  // Define hackathon details
  const hackathons = [
    {
      title: 'OneAPI LLM Challenge-2023',
      sponsor: 'Intel',
      problemStatement: 'Empower legal professionals with cutting-edge Generative AI technology. Participants are tasked with fine tuning an innovative Legal Practice Platform powered by Large Language Models (LLM) tailored to meet the specific needs and challenges faced by legal professionals.',
      leftImage: Hack1, 
      rightImage: Hack2,
    },
  ];

  return (
    <section id="hackathons" className={`py-12 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-4">
        <h2 className={`text-3xl font-bold text-center mb-8 ${isDarkMode ? 'text-white' : 'text-black'}`}>Hackathon</h2>
        <div className="grid grid-cols-1 gap-8">
          {hackathons.map((hackathon, index) => (
            <div key={index} className={`bg-white rounded-lg shadow-lg p-6 flex items-center ${isDarkMode ? 'bg-white text-black' : 'bg-white text-black'}`}>
              {/* Left Image */}
              <div className="flex-shrink-0 w-1/4 mr-4">
                <img
                  src={hackathon.leftImage}
                  alt="Team Left"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
              
              {/* Description */}
              <div className="flex-1 text-center">
                <h3 className="text-xl font-bold mb-4">{hackathon.title}</h3>
                <p className="mb-4"><strong>Sponsor:</strong> {hackathon.sponsor}</p>
                <p><strong>Problem Statement:</strong> {hackathon.problemStatement}</p>
              </div>

              {/* Right Image */}
              <div className="flex-shrink-0 w-1/4 ml-4">
                <img
                  src={hackathon.rightImage}
                  alt="Team Right"
                  className="w-full h-auto object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hackathon;
