import React, { useState } from 'react';

function RightPanel() {
  const [isVisible, setIsVisible] = useState(true);
  const [messages, setMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const togglePanel = () => {
    setIsVisible(!isVisible);
  };

  const sendMessage = () => {
    if (currentMessage.trim()) {
      setMessages([...messages, currentMessage]);
      setCurrentMessage('');
    }
  };

  return (
    <div className="right-panel">
      <button onClick={togglePanel} className="toggle-btn">
        {isVisible ? 'Hide Panel' : 'Show Panel'}
      </button>
      {isVisible && (
        <>
          <div className="buttons">
            <button>Offline Data Access</button>
            <button>Network Optimization</button>
          </div>
          <div className="message-history">
            {messages.map((msg, index) => (
              <p key={index}>{msg}</p>
            ))}
          </div>
          <div className="message-box">
            <input
              type="text"
              placeholder="Type a message"
              value={currentMessage}
              onChange={e => setCurrentMessage(e.target.value)}
            />
            <button className="send-btn" onClick={sendMessage}>Send</button>
          </div>
        </>
      )}
    </div>
  );
}

export default RightPanel;
