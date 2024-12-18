import React from 'react';
import './Footer.css';

// Replace these with actual local file paths or URL if using externally hosted icons
const linkedinIcon = "/assets/download.png";
const instagramIcon = "/assets/download (2).png";
const twitterIcon = "/assets/download (1).png";
const gymIcon = "/assets/gym-icon-.png";  // Path to GymFluencer icon

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={gymIcon} alt="GymFluencer Icon" className="footer-icon" />
          <h2>GymFluencer</h2>
        </div>
        <p className="footer-description">
          Where fitness meets social connection
        </p>
        <p className="footer-email">
          <i className="footer-email-icon">📧</i> hello@gym.birlaventures.com
        </p>
        <div className="footer-links">
          <a href="/home" className="footer-link">Home</a>
          <a href="/diet-plans" className="footer-link">Diet Plans</a>
          <a href="/features" className="footer-link">Features</a>
          <a href="/faqs" className="footer-link">FAQs</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-rights">@ 2024 GymFluencer. All Rights Reserved.</p>
        <div className="footer-social">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn" className="social-icon" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
