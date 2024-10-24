import React from 'react';
import { useNavigate } from 'react-router-dom';

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
}

const videos: Video[] = [
  {
    id: '1',
    title: 'Building a Modern Web Application',
    thumbnail: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=360',
    channel: 'Tech Academy',
    views: '120K views',
    timestamp: '2 days ago',
    duration: '10:30'
  },
  {
    id: '2',
    title: 'Amazing Nature Documentary 2024',
    thumbnail: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=360',
    channel: 'Nature Channel',
    views: '500K views',
    timestamp: '1 week ago',
    duration: '15:45'
  },
  {
    id: '3',
    title: 'Professional Cooking Tips',
    thumbnail: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=360',
    channel: 'Cooking Master',
    views: '750K views',
    timestamp: '3 days ago',
    duration: '8:20'
  },
  {
    id: '4',
    title: 'Travel Vlog: Hidden Gems',
    thumbnail: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=360',
    channel: 'Travel With Me',
    views: '250K views',
    timestamp: '5 days ago',
    duration: '12:15'
  },
];

export { videos };

const VideoGrid = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-6">
      {videos.map((video) => (
        <div 
          key={video.id} 
          className="flex flex-col cursor-pointer"
          onClick={() => navigate(`/video/${video.id}`)}
        >
          <div className="relative">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full aspect-video object-cover rounded-lg hover:opacity-90 transition-opacity"
            />
            <div className="absolute bottom-2 right-2 bg-black text-white text-xs px-2 py-1 rounded">
              {video.duration}
            </div>
          </div>
          <div className="flex mt-3">
            <div className="flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-gray-200"></div>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-semibold line-clamp-2 hover:text-blue-600">{video.title}</h3>
              <p className="text-sm text-gray-600 mt-1 hover:text-gray-900">{video.channel}</p>
              <div className="text-sm text-gray-600">
                <span>{video.views}</span>
                <span className="mx-1">•</span>
                <span>{video.timestamp}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideoGrid;