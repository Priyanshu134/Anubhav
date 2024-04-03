import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import SignInForm from './SignInForm.js';
import { GoogleLogin } from 'react-google-login';

const LandingPage = () => {
  const handleGoogleLoginSuccess = (response) => {
    console.log('Google login success:', response);
    // Handle the response here, such as sending it to your backend for authentication
  };

  const handleGoogleLoginFailure = (error) => {
    console.error('Google login error:', error);
    // Handle login failure here
  };

  return (
    <div className="landing-page">
      <h1>Welcome to Anubhav</h1>
      <div className="sign-in-section">
        <h2>Sign In</h2>
        <SignInForm />
        <p>Or sign in with:</p>
        {/* GoogleLogin component for Google sign-in */}
        <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com" // Replace with your actual Google Client ID
          buttonText="Sign in with Google"
          onSuccess={handleGoogleLoginSuccess}
          onFailure={handleGoogleLoginFailure}
          cookiePolicy={'single_host_origin'}
          className="google-btn"
        />
      </div>
      <div className="sign-up-section">
        <p>Don't have an account?</p>
        {/* Use Link component to navigate to the signup page */}
        <Link to="/signup">Sign Up</Link>
      </div>
    </div>
  );
};

export default LandingPage;