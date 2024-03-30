import React, { useState, useEffect } from "react";
import Sidebar from "../components/ChatSideBar"; // Import the Sidebar component
import "../pages-css/Chatroom.css";

function Chatroom() {
  const [messages, setMessages] = useState([]);

  const handleMessageSend = (text) => {
    const newMessage = { text, sender: "user" };
    setMessages([...messages, newMessage]);
  };

  useEffect(() => {
    const lastMessage = messages[messages.length - 1];
    if (lastMessage && lastMessage.sender === "user") {
      const timer = setTimeout(() => {
        const replyMessage = { text: "This is a meesage from the PLT company.", sender: "bot" };
        setMessages([...messages, replyMessage]);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [messages]);

  return (
    <div className="chatroom-container">
      <div className="chat-sidebar">
        <Sidebar />
      </div>
      <div className="chat-main">
        <div className="chat-header">
          <h2>Chat</h2>
        </div>
        <div className="chat-messages">
          {messages.map((message, index) => (
            <Message key={index} message={message} />
          ))}
        </div>
        <div className="chat-input">
          <MessageInput onMessageSend={handleMessageSend} />
        </div>
      </div>
    </div>
  );
}

function Message({ message }) {
  return <div className={`message ${message.sender}`}>{message.text}</div>;
}

function MessageInput({ onMessageSend }) {
  const [inputValue, setInputValue] = useState("");

  const handleMessageSend = () => {
    if (inputValue.trim() !== "") {
      onMessageSend(inputValue);
      setInputValue("");
    }
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleMessageSend}>Send</button>
    </div>
  );
}

export default Chatroom;
