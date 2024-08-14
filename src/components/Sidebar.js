import React, { useState } from 'react';

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <div className="relative h-full">
      <button
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
        className="text-xl p-2 focus:outline-none md:hidden"
      >
        &#9776; {/* Menu Icon (3 lines) */}
      </button>

      <div
        className={`fixed inset-y-0 left-0 h-full transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } bg-gray-800 text-white w-64 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 md:h-full`}
      >
        <h2 className="text-2xl font-bold p-4 border-b border-gray-700">
          DecentraBox
        </h2>
        <ul className="p-4 space-y-2">
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            Dashboard
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            All Files
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            Recent
          </li>
          <li
            className="hover:bg-gray-700 p-2 rounded cursor-pointer"
            onClick={() => setIsSidebarOpen(false)}
          >
            Recycle Bin
          </li>
        </ul>
        <div className="p-4 mt-auto border-t border-gray-700">
          <p className="mb-2">64.0 GB / 1 TB</p>
          <button className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded">
            Upgrade to Premium for More Space
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
