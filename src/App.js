import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import React from 'react';
import Resume from './components/Resume';
import Banner from './components/Banner';
import Projects from './components/Projects';
import Contact from './components/Contact';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hackathon from './components/Hackathon';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner />
      <Projects />
      <Hackathon />
      <Contact />
    </div>
  );
}

export default App;