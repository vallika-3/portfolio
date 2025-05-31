import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <p>© {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" aria-label="GitHub">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            LinkedIn
          </a>
          <a href="mailto:youremail@example.com" aria-label="Email">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
