// src/components/Footer.js
import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>NSYSU GDSC {currentYear}</p>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
