import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import LeftPanel from './components/LeftPanel';
import Header from './components/Header';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-section">
        <Header />
        <LeftPanel />
        
      </div>
    </div>
  );
}

export default App;