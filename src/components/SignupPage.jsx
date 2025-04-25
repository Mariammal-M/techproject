import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/signup.css';
import bg from '../image/bg.png'; // Ensure the image exists in the correct folder

function SignupPage() {
  const navigate = useNavigate(); // Initialize the navigate function
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // You can add validation here before navigating
    if (password === confirmPassword) {
      // Navigate to the employee page if the passwords match
      navigate('/employee');
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="signup-container">
      {/* Left Side - Full Image Cover */}
      <div className="signup-image">
        <div className="welcome-message">
          {/* You can add a welcome message or image here */}
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="signup-form">
        <h2>Welcome Back!</h2>
        <h3 className="signup-heading">Sign up to</h3>
        <p>Lorem Ipsum is simply</p>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Username</label>
            <input 
              type="text" 
              name="username" 
              placeholder="Enter your username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input 
              type="password" 
              name="password" 
              placeholder="Enter your password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} 
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input 
              type="password" 
              name="confirmPassword" 
              placeholder="Confirm your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)} 
            />
          </div>
          <button type="submit" className="signup-button">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
