// Login.jsx

import React, { useState } from "react";
import logoImage from "../assets/Log2.svg"; // Import your image file
import "../pages-css/LogIn.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:8000/login", {
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
        window.location.href = "/home";
      } else if (response.status === 400) {
        const data = await response.json();
        alert(data.detail);
      } else {
        alert("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="inpage" id="login">
      <div className="pic">
        <img src={logoImage} alt="Logo" />
      </div>

      <div className="formf">
        <h2 className="createAcc">Welcome Back !</h2>
        <h1 className="OneAcc">Log in to your account</h1>
        <hr></hr>
        <form onSubmit={handleLogin}>
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

          <button type="Sign Up">Log in</button>

          <h1 className="dy">
            <br></br>Do have an account?
          </h1>
        </form>
      </div>
    </div>
  );
}

export default Login;
