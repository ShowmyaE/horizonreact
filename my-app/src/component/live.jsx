import React from 'react';
import './live.css';
import { useState ,useEffect} from 'react';

function Live() {
    const [live, setlive] = useState([]);

    useEffect( () => {
        getlive()
    },[]);

    async function getlive() {
        const url = 'https://horizonbackend-zd8q.onrender.com/live'
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("DATA", data)
        if (response.ok === true) {
            setlive(data)
        }
    }
  return (
    <div className="live">
      <h1>Live Events</h1>
      <div className="live-list">
        {live.map((event, index) => (
          <div className="live-item" key={index}>
            <img src={`images/${event.image}`} alt={event.title} className="live-image" />
            <div className="live-info">
              <h2 className="live-title">{event.title}</h2>
              <p className="live-description">{event.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Live;