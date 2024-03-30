import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Extracto from "./pages/Extracto";
import Chatbot from "./pages/Chatbot";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login"
import SignUp from "./pages/SignUp";
 

 
 
function App() {
  return (
    <Router>
      <NavBar />
       
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Extracto" element={<Extracto />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        </Routes>
        </Router>
     
  );
}

export default App;