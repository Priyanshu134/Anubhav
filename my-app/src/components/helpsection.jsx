import React from 'react';
import './helpsection.css';

const HelpSection = () => {
    return (
      <div className="help-section">
        <h2 className="help-title">Help & FAQs</h2>
  
        <div className="faq-section">
          <h3 className="faq-heading">Common Questions</h3>
          <div className="faq-list">
            <div className="faq-item">
              <h4 className="faq-question">How do I sign up for Anubhav?</h4>
              <p className="faq-answer">
                To sign up for Anubhav, click on the "Sign Up" button on the homepage and follow the instructions to create your account.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">Can I change my career interests after signing up?</h4>
              <p className="faq-answer">
                Yes, you can update your career interests at any time by visiting your profile settings.
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">How do I schedule an experience with a professional?</h4>
              <p className="faq-answer">
                To schedule an experience, go to the profile of the professional you're interested in and click on the "Schedule Experience" button.
                Follow the prompts to choose a date and time that works for you.
              </p>
            </div>
            {/* Add more FAQ items as needed */}
          </div>
        </div>
  
        <div className="troubleshooting-section">
          <h3 className="troubleshooting-heading">Troubleshooting</h3>
          <div className="troubleshooting-content">
            <p className="troubleshooting-text">
              If you encounter any issues while using Anubhav, please check our troubleshooting guide below for solutions to common problems.
            </p>
            <p className="troubleshooting-text">
              If you still need assistance, feel free to contact our support team at support@anubhav.com.
            </p>
            <h4 className="troubleshooting-subheading">Troubleshooting Guide:</h4>
            <ul className="troubleshooting-list">
              <li className="troubleshooting-item">
                <strong>Problem:</strong> Unable to log in to my account.
                <br />
                <strong>Solution:</strong> Make sure you're using the correct email and password. If you forgot your password, you can reset it using the "Forgot Password" link on the login page.
              </li>
              <li className="troubleshooting-item">
                <strong>Problem:</strong> Experience scheduling page is not loading properly.
                <br />
                <strong>Solution:</strong> Try clearing your browser cache and cookies, or try accessing the page using a different browser.
              </li>
              {/* Add more troubleshooting items as needed */}
            </ul>
          </div>
        </div>
      </div>
    );
  };
  
  export default HelpSection;