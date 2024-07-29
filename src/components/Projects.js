import React from 'react';
// Import tech stack icons
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg';
import { ReactComponent as JavaIcon } from '../assets/icons/java.svg';
import { ReactComponent as JSIcon } from '../assets/icons/js.svg';
import { ReactComponent as PythonIcon } from '../assets/icons/python.svg';
import { ReactComponent as FlaskIcon } from '../assets/icons/flask.svg';

const Projects = () => {
  // Define projects with details
  const projects = [
    {
      title: 'Senor Legal Advisor',
      link: 'https://senor-fcoi.vercel.app/#',
      description: 'An innovative chat application designed to centralize Indian legal resources. Seamlessly access comprehensive information on Indian laws and court cases—all in one place. Simplify your legal inquiries and stay informed with ease.',
      techStack: [
        { name: 'React', icon: <ReactIcon key="react" className="w-6 h-6 inline-block mx-1" title="React" /> },
        { name: 'JavaScript', icon: <JSIcon key="js" className="w-6 h-6 inline-block mx-1" title="JavaScript" /> },
        { name: 'LLM', icon: null },  // No icon for LLM
      ],
    },
    {
      title: 'Emo-Music',
      link: 'https://emo-music.streamlit.app/',
      description: 'This app helps analyze your mood and recommend songs based on how you are feeling, making it easier to find the perfect music for any emotion.',
      techStack: [
        { name: 'Python', icon: <PythonIcon key="python" className="w-6 h-6 inline-block mx-1" title="Python" /> },
        { name: 'LLM', icon: null },  // No icon for LLM
      ],
    },
    {
      title: 'Basket Prediction',
      link: 'https://github.com/poojaharihar03/BigBasket_Cart_Prediction',
      description: 'A tool for visualizing and analyzing large datasets to gain insights into basketball performance and trends.',
      techStack: [
        { name: 'Python', icon: <PythonIcon key="python" className="w-6 h-6 inline-block mx-1" title="Python" /> },
      ],
    },
    {
      title: 'Weather App',
      link: 'https://github.com/poojaharihar03/WeatherApp',
      description: 'An application that provides real-time weather updates and forecasts to keep you informed about weather conditions anywhere.',
      techStack: [
        { name: 'React', icon: <ReactIcon key="react" className="w-6 h-6 inline-block mx-1" title="React" /> },
      ],
    },
    {
      title: 'Talent Boost - HR Application',
      link: 'https://github.com/poojaharihar03/TalentBoost',
      description: 'An HR application designed to streamline employee management, performance tracking, and recruitment processes efficiently.',
      techStack: [
        { name: 'flask', icon: <ReactIcon key="react" className="w-6 h-6 inline-block mx-1" title="flask" /> },
        { name: 'python', icon: <JavaIcon key="java" className="w-6 h-6 inline-block mx-1" title="Python" /> },
      ],
    },
  ];

  return (
    <section id="projects" className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Projects Showcase</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-bold mb-4">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  {project.title}
                </a>
              </h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <div className="flex items-center mb-4 space-x-2">
                <span className="text-gray-700 font-semibold">Tech Stacks -</span>
                {project.techStack.map((tech, i) => (
                  <div key={i} className="flex items-center space-x-1">
                    {tech.icon}
                    <span className="text-gray-700">{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
