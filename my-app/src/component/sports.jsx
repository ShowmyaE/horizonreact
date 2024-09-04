import React from 'react';
import './sports.css';
import { useState ,useEffect} from 'react';
// Sample sports data
// const sports = [
//   { title: 'Football', image: 'football.jpg', description: 'A team sport played with a round ball that may not be touched with the hands or arms during play.' },
//   { title: 'Basketball', image: 'basketball.jpg', description: 'A team sport in which two teams of five players each try to score points by throwing a ball through the opponent’s hoop.' },
//   { title: 'Tennis', image: 'tennis.jpg', description: 'A sport played between two players or two teams of two players each, who use rackets to strike a ball over a net.' },
//   { title: 'Cricket', image: 'cricket.jpg', description: 'A bat-and-ball game played between two teams of eleven players each on a circular field.' },
// ];

function Sports() {
    const [sports, setsports] = useState([]);

    useEffect( () => {
        getsports()
    },[]);

    async function getsports() {
        const url = 'http://localhost:5000/sports'
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