import React, { useState } from "react";
import "../components-css/ChatSideBar.css";
import { Link } from "react-router-dom";

function ChatSideBar() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
  <div className="sidebar-content">
    <div className="logo-container">
      <Link to="/Home" className="logo">
        ShariahMetric
      </Link>
    </div>
    <div className="sidebar-header">
      <h2>Chats</h2>
      <input
        type="text"
        placeholder="Search"
        value={searchQuery}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
    <div className="contact-list">
      <ContactItem name="John Doe" />
      <ContactItem name="Jane Smith" />
      <ContactItem name="Alice Johnson" />
      {/* Add more ContactItem components here */}
    </div>
  </div>
);
  }

function ContactItem({ name }) {
  return (
    <div className="contact-item">
      <div className="profile-picture"></div>
      <div className="contact-details">
        <h3>{name}</h3>
        {/* Add more details like last message, time etc. if needed */}
      </div>
    </div>
  );
}

export default ChatSideBar;
