import React from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { videos } from '../components/VideoGrid';

const History = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Watch History</h1>
        <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear History
        </button>
      </div>
      
      <div className="space-y-4">
        {videos.map((video) => (
          <div key={video.id} className="flex gap-4 bg-white p-4 rounded-lg hover:bg-gray-50">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-40 h-24 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="font-semibold">{video.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
              <div className="flex items-center text-sm text-gray-500 mt-1">
                <Clock className="w-4 h-4 mr-1" />
                <span>Watched {video.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;