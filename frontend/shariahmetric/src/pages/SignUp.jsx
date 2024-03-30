// Login.jsx

import React, { useState } from 'react';
import logoImage from '../assets/LogImage.svg'; // Import your image file
import "../pages-css/SignUp.css";

function SignUp() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLogin = () => {
    // Here you can add your login logic, like making an API call to authenticate the user
    console.log('Logging in with:', username, password);
  };

  return (
    <div className='inpage' id='login'>
      <div className='pic'>
        <img src={logoImage} alt="Logo" />
      </div>
      
      <div className='formf'>
        <h2 className='createAcc'>Create Account</h2>
        <h1 className='OneAcc'>One account for all</h1>
        <hr></hr>
        <form onSubmit={handleLogin}>
          <div >
            {/*<label htmlFor="username">Username:</label>*/}
            <input
              type="text"
              id="username"
              placeholder='Email Address'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '368px', height: '46.76px', borderRadius: '10px' }}

            />
          </div>
          <div>
            {/*<label htmlFor="password">Password:</label>*/}
            <input
              type="password"
              id="password"
              placeholder='Create a password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '368px', height: '46.76px', borderRadius: '10px' }}
            />
          </div>
          <div>
            {/*<label htmlFor="password">Password:</label>*/}
            <input
              type="password"
              id="password"
              placeholder='Confirm your password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '368px', height: '46.76px', borderRadius: '10px' }}
            />
          </div>

         
          <button type="Sign Up" >Sign Up</button>
           
          <h1 className='dy'><br></br>Already have an account?</h1>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
