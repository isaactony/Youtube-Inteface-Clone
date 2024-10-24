import React from 'react';
import { ThumbsUp } from 'lucide-react';
import { videos } from '../components/VideoGrid';

const LikedVideos = () => {
  return (
    <div className="p-6">
      <div className="flex items-center mb-6">
        <h1 className="text-2xl font-bold">Liked Videos</h1>
        <span className="ml-4 px-3 py-1 bg-gray-100 rounded-full text-sm">
          {videos.length} videos
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4">
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
                <ThumbsUp className="w-4 h-4 mr-1" />
                <span>Liked {video.timestamp}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedVideos;