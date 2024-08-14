import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleMenuClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="menu-bar">
      <button onClick={handleMenuClick} className="menu-button">
        &#9776; {/* Menu Icon (3 lines) */}
      </button>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <h2>DecentraBox</h2>
        <ul>
          <li>Dashboard</li>
          <li>All Files</li>
          <li>Recent</li>
          <li>Recycle Bin</li>
        </ul>
        <div className="storage">
          <p>64.0 GB / 1 TB</p>
          <button>Upgrade to Premium for More Space</button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
