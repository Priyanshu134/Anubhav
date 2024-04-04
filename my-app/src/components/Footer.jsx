import React from 'react';
import './Footer.css'; // Importing CSS file for stylings
import youtubeicon from './youtube.jpeg';
import instagramlogo from './instagram.jpeg'
import facebooklogo from './facebook.jpeg'
import linkedinlogo from './linkedin.jpeg'

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
                <li><a href="/privacy-policy">Privacy Policy</a></li>
                <li><a href="/terms-of-use">Terms of Use</a></li>
                <li><a href="/sitemap">Sitemap</a></li>
                <li><a href="/help">Help</a></li>
              </ul>
            </div>
            <div className="social-icons">
              <h3>Follow Us</h3>
              <div className="icons">
                <div className="social-link">
                  <a href="https://www.youtube.com">
                    <img src={youtubeicon} alt="YouTube" />
                    <span>YouTube</span>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.instagram.com">
                    <img src={instagramlogo} alt="Instagram" />
                    <span>Instagram</span>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.linkedin.com">
                    <img src={linkedinlogo} alt="LinkedIn" />
                    <span>LinkedIn</span>
                  </a>
                </div>
                <div className="social-link">
                  <a href="https://www.facebook.com">
                    <img src={facebooklogo} alt="Facebook" />
                    <span>Facebook</span>
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