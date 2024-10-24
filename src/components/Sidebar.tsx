import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Compass, Library, History, PlaySquare, Clock, ThumbsUp, Flame, Music2, Gamepad2, Trophy, Newspaper } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();

  const menuItems = [
    { icon: Home, label: 'Home', path: '/' },
    { icon: Compass, label: 'Explore', path: '/explore' },
    { icon: Library, label: 'Library', path: '/library' },
    { icon: History, label: 'History', path: '/history' },
    { icon: PlaySquare, label: 'Your Videos', path: '/your-videos' },
    { icon: Clock, label: 'Watch Later', path: '/watch-later' },
    { icon: ThumbsUp, label: 'Liked Videos', path: '/liked-videos' },
  ];

  const categories = [
    { icon: Flame, label: 'Trending', path: '/explore?category=trending' },
    { icon: Music2, label: 'Music', path: '/explore?category=music' },
    { icon: Gamepad2, label: 'Gaming', path: '/explore?category=gaming' },
    { icon: Trophy, label: 'Sports', path: '/explore?category=sports' },
    { icon: Newspaper, label: 'News', path: '/explore?category=news' },
  ];

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-white border-r border-gray-200 pt-16 overflow-y-auto">
      <div className="px-3 py-4">
        <div className="space-y-2">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
            >
              <item.icon className="w-5 h-5 mr-3" />
              <span className="text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200">
          <h3 className="px-3 text-sm font-semibold text-gray-500 mb-2">Explore</h3>
          <div className="space-y-2">
            {categories.map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                className="flex items-center w-full px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100"
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span className="text-sm font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;