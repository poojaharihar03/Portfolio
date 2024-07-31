import React, { useEffect, useState } from 'react';
import './Projects.css'; // Import the CSS file for custom animations

const Projects = ({ isDarkMode }) => {
  const [inView, setInView] = useState([]);

  const projects = [
    {
      title: 'Senor Legal Advisor',
      link: 'https://senor-fcoi.vercel.app/#',
      description: 'An innovative chat application designed to centralize Indian legal resources. Seamlessly access comprehensive information on Indian laws and court cases—all in one place. Simplify your legal inquiries and stay informed with ease',
      techStack: ['Python', 'LangChain', 'Llama3', 'Streamlit', 'React'],
    },
    {
      title: 'Emo-Music',
      link: 'https://emo-music.streamlit.app/',
      description: 'App helps analyze your mood and recommend songs based on how you are feeling, making it easier to find the perfect music for any emotion. Utilizes the YouTube Data API to fetch and display relevant music videos. Users can select their preferred language for recommendations and sort the suggested songs based on criteria like relevance, view count, rating, or date.',
      techStack: ['Streamlit', 'PyPDF2', 'Bert'],
    },
    {
      title: 'Basket Prediction',
      link: 'https://github.com/poojaharihar03/BigBasket_Cart_Prediction',
      description: 'This project delves into applying the Apriori algorithm and sequential pattern mining to extract valuable insights from transactional data. By identifying frequent itemsets and sequential patterns, we aim to uncover hidden associations and trends that can inform business strategies and decision-making processes',
      techStack: ['Python', 'Data Mining', 'Apriori Algorithm'],
    },
    {
      title: 'Weather App',
      link: 'https://github.com/poojaharihar03/WeatherApp',
      description: 'An application that provides real-time weather updates and forecasts to keep you informed about weather conditions anywhere.',
      techStack: ['Java', 'Android'],
    },
    {
      title: 'Talent Boost - HR Application',
      link: 'https://github.com/poojaharihar03/WeatherApp',
      description: 'A web app for efficient candidate evaluation. Candidates submit resumes for instant assessment based on predefined criteria. Recruiters receive immediate feedback on qualifications and skills. Automating assessments and communication.',
      techStack: ['OpenAPI', 'Python', 'Flask', 'Langchain', 'Yagmail'],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.project-item');
      elements.forEach((element, index) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setInView(prev => [...prev, index]);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="projects" className={`py-40 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-black'}`}>My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className={`relative rounded-lg shadow-xl p-8 transition-transform duration-500 transform ${inView.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-50'} project-item ${isDarkMode ? 'bg-gray-800 text-white hover:bg-pink-500' : 'bg-white text-black hover:bg-pink-00'}`}
              style={{
                width: '430px', // Fixed width
                height: '430px', // Fixed height to make it square
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <h3 className="text-2xl text-center font-bold mb-6">
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`hover:underline ${isDarkMode ? 'text-blue-400' : 'text-blue-600'}`}>
                  {project.title}
                </a>
              </h3>
              <p className={`mb-6 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} text-justify text-base`}>{project.description}</p>
              <div className="flex flex-wrap">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="mr-4 mb-2 text-xs">{tech}</span>
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