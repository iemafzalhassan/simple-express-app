import React from 'react';
import './Hero.css';

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to TrainWithShubham Community</h1>
        <p>Learn, Grow, and Connect with DevOps Enthusiasts</p>
        <button className="cta-button">Join Our Community</button>
      </div>
      <div className="hero-image">
        <img src="/community-illustration.svg" alt="Community Illustration" />
      </div>
    </section>
  );
}

export default Hero;