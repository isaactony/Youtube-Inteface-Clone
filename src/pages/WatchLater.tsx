import React from 'react';
import { Clock, Trash2 } from 'lucide-react';
import { videos } from '../components/VideoGrid';

const WatchLater = () => {
  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Watch Later</h1>
        <button className="flex items-center px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
          <Trash2 className="w-4 h-4 mr-2" />
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {videos.slice(0, 3).map((video) => (
          <div key={video.id} className="bg-white rounded-lg overflow-hidden hover:shadow-md transition-shadow">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover"
            />
            <div className="p-4">
              <h3 className="font-semibold line-clamp-2">{video.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{video.channel}</p>
              <div className="flex items-center text-sm text-gray-500 mt-2">
                <Clock className="w-4 h-4 mr-1" />
                <span>Added {video.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WatchLater;