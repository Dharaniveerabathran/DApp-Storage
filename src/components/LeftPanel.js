import React from 'react';

function LeftPanel() {
  return (
    <div className="flex flex-col h-full justify-between p-4">
      <div className='lg:mt-14'>
            <div className="decentra-box">
              <h2 className="text-2xl font-bold">DecentraBox</h2>
              <p>Your secure decentralized storage solution.</p>
            </div>

        <div className="button-layout flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4">
          <button className="network-optimization-btn bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full md:w-auto">
            Network Optimization
          </button>
          <button className="send-message-btn bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 w-full md:w-auto">
            Send Message
          </button>
        </div>
      </div>

      <div className="border-t border-gray-300 flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mt-4">
        <input
          type="text"
          placeholder="Type a message..."
          className="p-2 border border-gray-300 rounded flex-1"
        />
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full md:w-auto">
          Send
        </button>
      </div>
    </div>
  );
}

export default LeftPanel;
