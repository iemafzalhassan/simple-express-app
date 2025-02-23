import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>TrainWithShubham</h4>
          <p>Empowering the next generation of DevOps engineers</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#events">Events</a></li>
            <li><a href="#resources">Resources</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Connect With Us</h4>
          <div className="social-links">
            <a href="#linkedin">LinkedIn</a>
            <a href="#discord">Discord</a>
            <a href="#twitter">Twitter</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 TrainWithShubham. All rights reserved.</p>
        <p className="creator-credit">
          Made with <span className="black-heart">❤</span> by{' '}
          <a 
            href="https://iemafzalhassan.tech" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            Md. Afzal Hassan Ehsani
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;