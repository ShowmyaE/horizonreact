import React from 'react';
import './movies.css';

import { useState ,useEffect} from 'react';

function Movies(){
const [movies, setmovies] = useState([]);

    useEffect( () => {
        getmovies()
    },[]);

    async function getmovies() {
        const url = 'https://horizonbackend-zd8q.onrender.com/movies'
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("DATA", data)
        if (response.ok === true) {
            setmovies(data)
        }
    }

  return (
    <div className="movies">
      <h1>Movies</h1>
      <div className="movies-list">
        {movies.map((movie, index) => (
          <div className="movie-item" key={index}>
            <img src={`images/${movie.poster}`} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
              <h2 className="movie-title">{movie.title}</h2>
              <p className="movie-description">{movie.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movies;