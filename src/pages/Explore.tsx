import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { Flame, Music2, Gamepad2, Trophy, Newspaper } from 'lucide-react';

const categories = [
  { id: 'trending', icon: Flame, label: 'Trending', color: 'text-red-500' },
  { id: 'music', icon: Music2, label: 'Music', color: 'text-purple-500' },
  { id: 'gaming', icon: Gamepad2, label: 'Gaming', color: 'text-blue-500' },
  { id: 'sports', icon: Trophy, label: 'Sports', color: 'text-green-500' },
  { id: 'news', icon: Newspaper, label: 'News', color: 'text-gray-500' },
];

const Explore = () => {
  const [searchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'trending';

  return (
    <div className="p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`p-6 bg-white rounded-xl shadow-sm border-2 ${
              activeCategory === category.id ? 'border-blue-500' : 'border-transparent'
            } hover:border-blue-500 transition-colors`}
          >
            <div className="flex items-center">
              <category.icon className={`w-8 h-8 ${category.color}`} />
              <h2 className="ml-3 text-lg font-semibold">{category.label}</h2>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Discover the most popular {category.label.toLowerCase()} content
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;