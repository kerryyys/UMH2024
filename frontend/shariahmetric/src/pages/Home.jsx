import React from "react";
import CustomButton from "../components/CustomButton";
import "../pages-css/Home.css";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Home() {
  return (

      <div>
        <NavBar />
        <div className="main">
          <div className="contentH">
            <div className="sc">
              <em>
                <span>Streamline</span>
              </em>
              <h1>Shariah Compliance</h1>
              <div className="precise">with Precision &amp; Expertise</div>
            </div>
            

            <div className="buttons">
              <Link to="/SignUp">
                <CustomButton variant="primary">Sign Up</CustomButton>
              </Link>
              <Link to="/LogIn">
                <CustomButton variant="secondary">Log In</CustomButton>
              </Link>
            </div>
          </div>
          <div className="sideimage"></div>
        </div>
      </div>
    
      
  );
}

export default Home;
