import React, { useState } from 'react';
import './LeftPanel.css';

function LeftPanel() {
  const [showDecentraBox, setShowDecentraBox] = useState(false);

  const handleMenuClick = () => {
    setShowDecentraBox(!showDecentraBox);
  };

  return (
    <div className="left-panel">
      <div className="menu-bar">
        <button onClick={handleMenuClick} className="menu-button">
          &#9776; {/* Menu Icon (3 lines) */}
        </button>
      </div>
      
      {showDecentraBox && (
        <div className="decentra-box">
          <h2>DecentraBox</h2>
          <p>Your secure decentralized storage solution.</p>
          {/* Add more DecentraBox content here */}
        </div>
      )}

      <div className="button-layout">
        <button className="network-optimization-btn">Network Optimization</button>
        <button className="send-message-btn">Send Message</button>
      </div>
    </div>
  );
}

export default LeftPanel;
