import React, { useState } from 'react';
import { Search, Menu, Bell, Video, User, Mic } from 'lucide-react';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-50">
      <div className="flex items-center justify-between h-full px-4">
        <div className="flex items-center">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Menu className="w-6 h-6" />
          </button>
          <div className="flex items-center ml-4">
            <Video className="w-8 h-8 text-red-600" />
            <span className="ml-1 text-xl font-semibold">YouTube</span>
          </div>
        </div>

        <div className="flex items-center flex-1 max-w-2xl mx-4">
          <div className="flex items-center w-full">
            <div className="flex items-center flex-1 border border-gray-300 rounded-l-full">
              <input
                type="text"
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded-l-full focus:outline-none"
              />
            </div>
            <button className="px-6 py-2 bg-gray-100 border border-l-0 border-gray-300 rounded-r-full hover:bg-gray-200">
              <Search className="w-5 h-5 text-gray-600" />
            </button>
            <button className="p-2 ml-2 hover:bg-gray-100 rounded-full">
              <Mic className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Video className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <User className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;