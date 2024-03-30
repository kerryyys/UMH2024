import React, { useState } from "react";
import logoImage from "../assets/Log2.svg"; // Import your image file
import "../pages-css/LogIn.css";
import { Link } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent form submission for now
    if (!isEmailValid) {
      alert("Please enter a valid email address.");
      return;
    }
    // Here you can add your login logic, like making an API call to authenticate the user
    console.log("Logging in with:", username, password);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsEmailValid(emailPattern.test(email));
  };

  const handleUsernameChange = (e) => {
    const inputUsername = e.target.value;
    setUsername(inputUsername);
    validateEmail(inputUsername);
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
            <input
              type="email"
              id="username"
              placeholder="Email Address"
              value={username}
              onChange={handleUsernameChange}
              style={{
                width: "368px",
                height: "46.76px",
                borderRadius: "10px",
                borderColor: isEmailValid ? "" : "red",
              }}
            />
            {!isEmailValid && (
              <p style={{ color: "red" }}>
                Please enter a valid email address.
              </p>
            )}
          </div>
          <div>
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
          <button type="submit">Sign in</button>

          <Link to="/SignUp" className="dy">
            Do you have an account?
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
