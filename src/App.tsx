import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Library from './pages/Library';
import History from './pages/History';
import YourVideos from './pages/YourVideos';
import WatchLater from './pages/WatchLater';
import LikedVideos from './pages/LikedVideos';
import VideoPage from './pages/VideoPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex pt-16">
          <Sidebar />
          <main className="flex-1 ml-64">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/explore" element={<Explore />} />
              <Route path="/library" element={<Library />} />
              <Route path="/history" element={<History />} />
              <Route path="/your-videos" element={<YourVideos />} />
              <Route path="/watch-later" element={<WatchLater />} />
              <Route path="/liked-videos" element={<LikedVideos />} />
              <Route path="/video/:id" element={<VideoPage />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;