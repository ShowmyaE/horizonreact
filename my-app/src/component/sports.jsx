import React from 'react';
import './sports.css';
import { useState ,useEffect} from 'react';

function Sports() {
    const [sports, setsports] = useState([]);

    useEffect( () => {
        getsports()
    },[]);

    async function getsports() {
        const url = 'https://horizonbackend-zd8q.onrender.com/sports'
        const options = {
            method: 'GET'
        }
        const response = await fetch(url, options)
        const data = await response.json()
        console.log("DATA", data)
        if (response.ok === true) {
            setsports(data)
        }
    }
  return (
    <div className="sports">
      <h1>Sports</h1>
      <div className="sports-list">
        {sports.map((sport, index) => (
          <div className="sport-item" key={index}>
            <img src={`images/${sport.image}`} alt={sport.title} className="sport-image" />
            <div className="sport-info">
              <h2 className="sport-title">{sport.title}</h2>
              <p className="sport-description">{sport.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sports;