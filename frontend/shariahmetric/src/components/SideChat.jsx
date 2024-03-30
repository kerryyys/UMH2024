import React, { useState } from "react";
import "../components-css/SideChat.css";

function SideChat() {
  const [messages, setMessages] = useState([]); // State to store chat messages
  const [inputMessage, setInputMessage] = useState(""); // State to store user input message
  const [isInstructionShown, setIsInstructionShown] = useState(true); // State to track if instruction is shown

  // Function to handle sending a message
  const sendMessage = () => {
    if (inputMessage.trim() !== "") {
      // Only send non-empty messages
      const newMessage = { sender: "user", content: inputMessage };
      setMessages([...messages, newMessage]);
      setInputMessage(""); // Clear input after sending message
    }
  };

  // Function to handle input message change
  const handleInputChange = (e) => {
    setInputMessage(e.target.value);
    // Hide instruction when user starts typing
    setIsInstructionShown(false);
  };

  return (
    <div className="side-chat-container">
      <div className="chat-messages">
        {/* Display chat messages */}
        {isInstructionShown && (
          <div className="instruction">
            <h2>Improve Answer Accuracy:</h2>
            <p>1. Provide clear and specific details.</p>
            <p>2. Use concise language.</p>
            <p>3. Avoid ambiguity.</p>

            <span>e.g. What are the company's total assets?</span>
          </div>
        )}
        {messages.map((message, index) => (
          <div
            key={index}
            className={`message ${
              message.sender === "user" ? "sent" : "received"
            }`}
          >
            {message.content}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          placeholder="Send a message"
          value={inputMessage}
          onChange={handleInputChange}
        />
        <button onClick={sendMessage}></button>
      </div>
    </div>
  );
}

export default SideChat;
