import React from 'react';
import { Link } from 'react-router-dom';
import './homepage.css'
// Sample featured content data
const featuredContent = [
  { title: 'Latest Movies', image: 'latest_movies.jpg', description: 'Check out the latest movies available to watch now.' },
  { title: 'Top TV Shows', image: 'top_tv_shows.jpg', description: 'Explore the top-rated TV shows you don\'t want to miss.' },
  { title: 'Live Events', image: 'live_events.jpg', description: 'Catch all the exciting live events happening around the world.' },
  { title: 'Sports Highlights', image: 'sports_highlights.jpg', description: 'Watch the best highlights from your favorite sports.' },
];

function Home() {
  return (
    <div className="home">
      <h1>Welcome to Your Media Hub</h1>
      <p>Your one-stop destination for the latest movies, TV shows, live events, and sports highlights.</p>
      <div className="featured-content">
        {featuredContent.map((content, index) => (
          <div className="featured-item" key={index}>
            <img src={`images/${content.image}`} alt={content.title} className="featured-image" />
            <div className="featured-info">
              <h2 className="featured-title">{content.title}</h2>
              <p className="featured-description">{content.description}</p>
              <Link to={`/${content.title.replace(/\s+/g, '').toLowerCase()}`} className="featured-link">Explore</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;