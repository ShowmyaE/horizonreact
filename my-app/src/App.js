import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Menu from './component/menu';
import Settings from './component/settings';
import Movies from './component/Movies';
import TVShows from './component/tvshows';
import Sports from './component/sports';
import Live from './component/live';
// Import other components as needed

function App() {
  const [language, setLanguage] = React.useState('English');

  return (
    <Router>
      <div>
        <Settings language={language} setLanguage={setLanguage} />
        <Menu language={language} />
        <Routes>
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;