// Login.jsx

import React, { useState } from "react";
import logoImage from "../assets/LogImage.svg"; // Import your image file
import "../pages-css/SignUp.css";

function SignUp() {
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
    <div className="inpage" id="login">
      <div className="pic">
        <img src={logoImage} alt="Logo" />
      </div>

      <div className="formf">
        <h2 className="createAcc">Create Account</h2>
        <h1 className="OneAcc">One account for all</h1>
        <hr></hr>
        <form onSubmit={handleRegister}>
          <div>
            {/*<label htmlFor="username">Username:</label>*/}
            <input
              type="text"
              id="username"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{
                width: "368px",
                height: "46.76px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            {/*<label htmlFor="password">Password:</label>*/}
            <input
              type="password"
              id="password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{
                width: "368px",
                height: "46.76px",
                borderRadius: "10px",
              }}
            />
          </div>
          <div>
            {/*<label htmlFor="password">Password:</label>*/}
            <input
              type="password"
              id="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={{
                width: "368px",
                height: "46.76px",
                borderRadius: "10px",
              }}
            />
          </div>

          <button type="Sign Up">Sign Up</button>

          <h1 className="dy">
            <br></br>Already have an account?
          </h1>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
