import React from 'react';
import './Community.css';

function Community() {
  return (
    <section className="community">
      <h2>Our Community Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Weekly Community Calls</h3>
          <p>Join our Sunday community calls where we discuss DevOps challenges and solutions.</p>
        </div>
        <div className="feature-card">
          <h3>Expert Guidance</h3>
          <p>Get support from experienced DevOps engineers and community leads.</p>
        </div>
        <div className="feature-card">
          <h3>Problem Solving</h3>
          <p>Debug issues and find simplified solutions for complex topics.</p>
        </div>
        <div className="feature-card">
          <h3>Networking</h3>
          <p>Connect with like-minded individuals and grow your professional network.</p>
        </div>
      </div>
    </section>
  );
}

export default Community;