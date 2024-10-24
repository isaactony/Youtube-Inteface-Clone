import React from 'react';
import { History, Clock, ThumbsUp, PlaySquare } from 'lucide-react';

const sections = [
  {
    id: 'history',
    icon: History,
    title: 'History',
    description: 'Videos you have watched',
    count: 150
  },
  {
    id: 'watchLater',
    icon: Clock,
    title: 'Watch Later',
    description: 'Videos you saved for later',
    count: 45
  },
  {
    id: 'likedVideos',
    icon: ThumbsUp,
    title: 'Liked Videos',
    description: 'Videos you have liked',
    count: 89
  },
  {
    id: 'yourVideos',
    icon: PlaySquare,
    title: 'Your Videos',
    description: 'Videos you have uploaded',
    count: 12
  }
];

const Library = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Library</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {sections.map((section) => (
          <div key={section.id} className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center">
              <section.icon className="w-8 h-8 text-gray-700" />
              <div className="ml-3">
                <h2 className="text-lg font-semibold">{section.title}</h2>
                <p className="text-sm text-gray-600">{section.description}</p>
              </div>
              <div className="ml-auto">
                <span className="text-sm font-medium text-gray-500">{section.count} videos</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Library;