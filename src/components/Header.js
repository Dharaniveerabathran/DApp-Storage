import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <input type="text" placeholder="Search in DecentraBox" />
      <button>Upload</button>
    </div>
  );
};

export default Header;
