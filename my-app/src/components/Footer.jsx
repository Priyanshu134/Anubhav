import React from 'react';
import './Footer.css'; // Importing CSS file for stylings
import { Link } from 'react-router-dom';

import Xlogo from './twitter.png';
import instagramlogo from './instagram.png'
import facebooklogo from './facebook.png'
import linkedinlogo from './linkedin.png'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="contact-info">
              <h3>Contact Us</h3>
              <p>Email: contact@example.com</p>
              <p>Phone: +1 123-456-7890</p>
              <p>Address: 123 Main Street, City, Country</p>
            </div>
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><Link to="/privacypolicy">Privacy Policy</Link></li>
                <li><Link to="/termsofuse">Terms Of Use</Link></li>
                <li><Link to="/fraudalert">Fraud Alert</Link></li>
                <li><Link to="/helpsection">Help Section</Link></li>
              </ul>
            </div>
            <div className="social-icons">
              <h3>Follow Us</h3>
              <div className="icons">
                <div className="social-link">
                  <a href="https://twitter.com/?lang=en">
                  
                    <img src={Xlogo} alt="X" />
                    <span></span>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.instagram.com">
                    <img src={instagramlogo} alt="Instagram" />
                    
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.linkedin.com">
                    <img src={linkedinlogo} alt="LinkedIn" />
                    <span></span>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.facebook.com">
                    <img src={facebooklogo} alt="Facebook" />
                    <span></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;