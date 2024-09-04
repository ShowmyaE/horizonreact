import React from 'react';
import './live.css';
import { useState ,useEffect} from 'react';
// Sample live event data
// const liveEvents = [
//   { title: 'Live Soccer Match', image: 'soccer_match.jpg', description: 'Watch the live broadcast of an exciting soccer match between top teams.' },
//   { title: 'Music Concert', image: 'music_concert.jpg', description: 'Enjoy a live concert performance from your favorite band.' },
//   { title: 'News Broadcast', image: 'news_broadcast.jpg', description: 'Stay updated with the latest news happening around the world.' },
//   { title: 'E-Sports Tournament', image: 'esports_tournament.jpg', description: 'Tune in to watch the thrilling e-sports tournament live.' },
// ];

function Live() {
    const [live, setlive] = useState([]);

    useEffect( () => {
        getlive()
    },[]);

    async function getlive() {
        const url = 'http://localhost:5000/live'
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