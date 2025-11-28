import React from 'react';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Projects from './components/Projects';
import Writing from './components/Writing';
import Footer from './components/Footer';
import About from './components/About';
import Navbar from './components/Navbar';
import './index.css';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <About />
      <Journey />
      <Projects />
      <Writing />
      <Footer />
    </div>
  );
};

export default App;
