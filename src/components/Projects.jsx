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
      techStack: ['Streamlit', 'PyPDF2', 'Bert','Youtube'],
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
    {
      title: 'Food Delivery Time Prediciton',
      link: 'https://github.com/poojaharihar03/Food-delivery-time-Prediciton',
      description: 'Food-delivery-Time-Prediciton Predicting the delivery time of your order is a challenging task for every food delivery service like Zomato and Swiggy. Food Delivery services like Zomato and Swiggy need to show the accurate time to the user on the approx time it will take to deliver your order to keep transparency.',
      techStack: ['Machine Learning', 'Python', 'Jupyter Notebook'],
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
    <section id="projects" className={`py-20 ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className="container mx-auto px-6">
        <h2 className={`text-3xl font-bold text-center mb-16 ${isDarkMode ? 'text-white' : 'text-black'}`}>My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`relative rounded-lg shadow-lg p-6 transition-transform duration-500 transform ${inView.includes(index) ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-50'} project-item ${isDarkMode ? 'bg-gray-800 text-white hover:bg-pink-500' : 'bg-white text-black light-mode hover:bg-gray-500 hover:text-white custom-hover'}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <h3 className="text-2xl text-center font-bold mb-4 project-title" style={{ textDecoration: 'none' }}>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className={`${isDarkMode ? 'text-white' : 'text-black'}`}>
                  {project.title}
                </a>
              </h3>
              <p className={`mb-4 ${isDarkMode ? 'text-white' : 'text-gray-700'} text-justify`}>{project.description}</p>
              <div className="flex flex-wrap">
                {project.techStack.map((tech, i) => (
                  <span key={i} className="mr-2 mb-2 text-xs px-2 py-1 bg-white-200 rounded-full">{tech}</span>
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
