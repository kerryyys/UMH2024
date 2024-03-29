import { useState } from "react";
// Right now this page is using App.css
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Extracto from "./pages/Extracto";
import Chatbot from "./pages/Chatbot";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Extracto" element={<Extracto />} />
        <Route path="/Chatbot" element={<Chatbot />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;

