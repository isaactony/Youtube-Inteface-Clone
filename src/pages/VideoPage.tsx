import React from 'react';
import { useParams } from 'react-router-dom';
import { videos } from '../components/VideoGrid';
import { ThumbsUp, ThumbsDown, Share2, Save, MoreVertical } from 'lucide-react';

const VideoPage = () => {
  const { id } = useParams();
  const video = videos.find(v => v.id === id);

  if (!video) {
    return <div className="p-6">Video not found</div>;
  }

  return (
    <div className="p-6">
      <div className="max-w-[1280px] mx-auto">
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="mt-4">
          <h1 className="text-xl font-bold">{video.title}</h1>
          
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200"></div>
              <div className="ml-3">
                <h3 className="font-medium">{video.channel}</h3>
                <p className="text-sm text-gray-600">1.2M subscribers</p>
              </div>
              <button className="ml-6 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800">
                Subscribe
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <ThumbsUp className="w-5 h-5 mr-2" />
                <span>123K</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <ThumbsDown className="w-5 h-5" />
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <Share2 className="w-5 h-5 mr-2" />
                <span>Share</span>
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-100 rounded-full hover:bg-gray-200">
                <Save className="w-5 h-5 mr-2" />
                <span>Save</span>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-full">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-gray-100 rounded-xl">
            <div className="flex items-center text-sm text-gray-600">
              <span>{video.views}</span>
              <span className="mx-1">•</span>
              <span>{video.timestamp}</span>
            </div>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPage;