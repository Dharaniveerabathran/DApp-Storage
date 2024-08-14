import React, { useState } from 'react';

function MainContent() {
  const [files] = useState([
    { name: 'decentralized_network.pdf', time: '11:35 PM', sharedBy: 'Steve Rogers' },
    { name: 'blockchain_intro.ppt', time: '10:00 AM', sharedBy: 'Tony Stark' },
    { name: 'ai_future.docx', time: '09:15 AM', sharedBy: 'Bruce Banner' },
  ]);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredFiles = files.filter(file =>
    file.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="main-content">
      <input
        className="search-bar"
        type="text"
        placeholder="Search in DecentraBox"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button className="upload-btn">Upload</button>
      <div>
        {filteredFiles.map((file, index) => (
          <div key={index} className="file-item">
            <img src="avatar.png" alt="Avatar" />
            <div>
              <span>{file.sharedBy}</span>
              <span>{file.time}</span>
            </div>
            <p>Shared a file: {file.name}</p>
            <button className="file-action-btn">Open</button>
            <button className="file-action-btn">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainContent;
