import React from 'react';
import './tvshows.css';

import { useState ,useEffect} from 'react';

function TVShows() {
  const [tvshows, settvshows] = useState([]);

    useEffect( () => {
        gettvshows()
    },[]);

    async function gettvshows() {
        const url = 'https://horizonbackend-zd8q.onrender.com/tvshows'
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("DATA", data)
        if (response.ok === true) {
            settvshows(data)
        }
    }

  return (
    <div className="tv-shows">
      <h1>TV Shows</h1>
      <div className="tv-shows-list">
        {tvshows.map((show, index) => (
          <div className="tv-show-item" key={index}>
            <img src={`images/${show.poster}`} alt={show.title} className="tv-show-poster" />
            <div className="tv-show-info">
              <h2 className="tv-show-title">{show.title}</h2>
              <p className="tv-show-description">{show.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TVShows;