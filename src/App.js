import React from 'react';
import Sidebar from './components/Sidebar';
import LeftPanel from './components/LeftPanel';
import Header from './components/Header';

function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <div className="flex flex-col md:flex-row h-full">
          {/* First Split - Header */}
          <div className="w-full md:w-2/4 p-4">
            <Header />
          </div>
          {/* Second Split - LeftPanel */}
          <div className="w-full md:w-2/3 p-4 flex flex-col justify-between">
            <LeftPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
