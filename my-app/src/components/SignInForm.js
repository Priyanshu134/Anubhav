import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/login', { email, password });
      console.log("Successfully LOGIN", response.data);
      localStorage.setItem('email', email); // Store email in localStorage
      localStorage.setItem('token', response.data.token); // Store token in localStorage
      // Redirect to the home page on successful login
      window.location.href = '/home';
    } catch (error) {
      console.error('Sign-in Error:', error.response.data.message);
      setError(error.response.data.message || 'Sign-in failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <div className="error-message">{error}</div>} {/* Display error message if exists */}
      <button type="submit">Sign In</button>
    </form>
  );
};

export default SignInForm;