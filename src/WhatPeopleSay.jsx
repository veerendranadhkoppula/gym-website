import React from 'react';
import './WhatPeopleSay.css';

const gyms = [
  {
    id: 1,
    name: 'Gym A',
    phone: '123-456-7890',
    location: 'New York, NY',
    image: '/assets/small.jpeg',
  },
  {
    id: 2,
    name: 'Gym B',
    phone: '987-654-3210',
    location: 'Los Angeles, CA',
    image: '/assets/small4.jpeg',
  },
  {
    id: 3,
    name: 'Gym C',
    phone: '555-123-4567',
    location: 'San Francisco, CA',
    image: '/assets/small2.jpeg',
  },
  {
    id: 4,
    name: 'Gym D',
    phone: '555-765-4321',
    location: 'Chicago, IL',
    image: '/assets/small3.jpeg',
  },
];

const WhatPeopleSay = () => {
  return (
    <div className="what-people-say" style={{ backgroundColor: "black" }}>
      {/* Heading Section */}
      <div className="heading-section">
        <h2 className="heading">WHAT PEOPLE SAY</h2>
      </div>

      {/* Cards Section */}
      <div className="cards-section" >
        <div className="card">
          <img src="/assets/people.jpeg" alt="Person 1" className="card-image" />
          <div className="card-content">
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="card-text" style={{ color: "white" }}>"Great gym with amazing trainers!"</p>
          </div>
        </div>
        <div className="card">
          <img src="/assets/people2.jpeg" alt="Person 2" className="card-image" />
          <div className="card-content">
            <div className="stars">
              <span>⭐⭐⭐⭐⭐</span>
            </div>
            <p className="card-text" style={{ color: "white" }}>"I love the facilities here, very friendly staff!"</p>
          </div>
        </div>
      </div>

      {/* Find Your Nearest Gym Section */}
      <div className="find-gym">
        <h3 className="find-gym-heading">FIND YOUR NEAREST GYM</h3>
        <p className="find-gym-description">
          Easily discover gyms near your location to kick start your fitness journey today!
        </p>

        <div className="gym-list">
          <div className="gym-cards">
            {gyms.map((gym) => (
              <div key={gym.id} className="gym-card">
                <img src={gym.image} alt={gym.name} className="gym-image" />
                <div className="gym-info">
                  <h4>{gym.name}</h4>
                  <p>{gym.phone}</p>
                  <p>{gym.location}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="map-container">
            <iframe
              src="https://maps.google.com/maps?q=New%20York%20NY&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="400"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatPeopleSay;
