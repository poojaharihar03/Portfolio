import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hackathon from './components/Hackathon';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''}`}>
      <Navbar isDarkMode={isDarkMode} toggleDarkMode={() => setIsDarkMode(prevMode => !prevMode)} /> {/* Change here */}
      <Banner isDarkMode={isDarkMode}/>
      <Projects isDarkMode={isDarkMode}/>
      <Hackathon isDarkMode={isDarkMode} />
      <Contact isDarkMode={isDarkMode}/>
    </div>
  );
};

export default App;
