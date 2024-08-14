import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 ">
      <input
        type="file"
        placeholder="Search in DecentraBox"
        className="p-2 border border-gray-300 rounded flex-1 max-w-lg lg:mt-32"
      />
      <button className="ml-3 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 lg:mt-32">
        Upload
      </button>
    </div>
  );
};

export default Header;
