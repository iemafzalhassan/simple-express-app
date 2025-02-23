import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Community from './components/Community';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Community />
      <Footer />
    </div>
  );
}

export default App;
