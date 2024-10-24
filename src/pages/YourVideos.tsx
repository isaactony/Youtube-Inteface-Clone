import React from 'react';
import { Upload, Settings } from 'lucide-react';

const YourVideos = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Your Videos</h1>
        <div className="flex gap-2">
          <button className="flex items-center px-4 py-2 text-sm bg-gray-100 hover:bg-gray-200 rounded-lg">
            <Settings className="w-4 h-4 mr-2" />
            Channel Settings
          </button>
          <button className="flex items-center px-4 py-2 text-sm text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
            <Upload className="w-4 h-4 mr-2" />
            Upload Video
          </button>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center h-[60vh] bg-white rounded-lg">
        <Upload className="w-16 h-16 text-gray-400 mb-4" />
        <h2 className="text-xl font-semibold mb-2">No videos uploaded yet</h2>
        <p className="text-gray-600 mb-4">Your uploaded videos will appear here</p>
        <button className="px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg">
          Upload Your First Video
        </button>
      </div>
    </div>
  );
};

export default YourVideos;