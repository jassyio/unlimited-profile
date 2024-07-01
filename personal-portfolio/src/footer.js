import React, { useContext } from 'react';
import './Footer.css';
import { Theme } from './theme'; // Ensure this is the correct path

const Footer = () => {
  const { theme } = useContext(Theme);

  return (
    <footer className={`footer ${theme}`}>
      <div className="social-icons">
        <div className="social-icon">
          <i className="fab fa-whatsapp"></i>
          <span>+1234567890</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-linkedin"></i>
          <span>linkedin.com/in/yourprofile</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-twitter"></i>
          <span>@yourprofile</span>
        </div>
        <div className="social-icon">
          <i className="fab fa-telegram"></i>
          <span>@yourprofile</span>
        </div>
        <div className="social-icon">
          <i className="fas fa-envelope"></i>
          <span>your.email@example.com</span>
        </div>
      </div>
      <div className="footer-text">
        &copy; 2024 Unlimited Developer. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
