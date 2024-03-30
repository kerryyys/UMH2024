import React, { useState } from 'react';
import logoImage from '../assets/LogImage.svg'; // Import your image file
import "../pages-css/SignUp.css";
import { Link } from 'react-router-dom'; 

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault();

    // Email validation regular expression
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(username)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Proceed with sign up logic
    console.log('Signing up with:', username, password);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      const response = await fetch("http://127.0.0.1:8000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        alert("Registration successful");
        window.location.href = "/home";
      } else if (response.status === 400) {
        const data = await response.json();
        alert(data.detail);
      } else {
        alert("Registration failed");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='inpage' id='login'>
      <div className='pic'>
        <img src={logoImage} alt="Logo" />
      </div>

      <div className="formf">
        <h2 className="createAcc">Create Account</h2>
        <h1 className="OneAcc">One account for all</h1>
        <hr></hr>
        <form onSubmit={handleSignUp}>
          <div>
        <form onSubmit={handleRegister}>
          <div>
            {/*<label htmlFor="username">Username:</label>*/}
            <input
              type="email"
              id="username"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '368px', height: '46.76px', borderRadius: '10px' }}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '368px', height: '46.76px', borderRadius: '10px' }}
              minLength={6}
              required
            />
          </div>
          <div>
            <input
              type="password"
              id="confirmPassword"
              placeholder='Confirm your password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{ width: '368px', height: '46.76px', borderRadius: '10px' }}
              minLength={6}
              required
            />
          </div>
          <button type="submit">Sign Up</button>
           
          <Link to="/Login" className='dy'>
              already have an account?
        </Link>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
