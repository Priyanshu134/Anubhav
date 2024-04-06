import React from 'react';
import './fraudalert.css';

const FraudAlert = () => {
    return (
      <div className="fraud-alert">
        <h2 className="fraud-alert-title">Fraud Alert</h2>
        <div className="fraud-alert-content">
          <p className="fraud-alert-text">
            Your safety and security are our top priorities. It's essential to stay vigilant and protect yourself from potential fraud and scams while using the Anubhav platform. Here are some additional tips and information to help you:
          </p>
          <ul className="fraud-alert-list">
            <li className="fraud-alert-item">
              <strong>Communication Channels:</strong> Use Anubhav's built-in messaging system for all communication with professionals. Avoid sharing personal contact information until you feel comfortable and trust the individual.
            </li>
            <li className="fraud-alert-item">
              <strong>Background Checks:</strong> Before engaging with a professional, conduct thorough research on their credentials, experience, and reputation. Look for reviews and recommendations from other users.
            </li>
            <li className="fraud-alert-item">
              <strong>Payment Security:</strong> Only make payments through Anubhav's secure payment gateway. Avoid wire transfers, cryptocurrency, or other unconventional payment methods that offer little recourse for dispute resolution.
            </li>
            <li className="fraud-alert-item">
              <strong>Sensitive Information:</strong> Be cautious about sharing sensitive information such as your social security number, banking details, or passwords. Anubhav will never ask for this information via email or direct message.
            </li>
            <li className="fraud-alert-item">
              <strong>Identity Verification:</strong> Verify the identity of professionals you interact with by requesting additional documentation or conducting video calls. Trust your instincts and report any suspicious behavior.
            </li>
            <li className="fraud-alert-item">
              <strong>Phishing Awareness:</strong> Be wary of phishing attempts disguised as legitimate communications from Anubhav. Check for misspellings, grammatical errors, and suspicious links before clicking.
            </li>
          </ul>
          <p className="fraud-alert-text">
            Remember, if something seems too good to be true or raises red flags, it's important to proceed with caution and seek assistance if needed. By staying informed and proactive, you can protect yourself and contribute to a safer community for everyone.
          </p>
        </div>
      </div>
    );
  };
  
  export default FraudAlert;