import React from 'react';
import './OurServices.css';

// Importing images
import image1 from './assets/images.jpeg';
import image2 from './assets/images2.jpg';
import image3 from './assets/images3jpg.jpg';
import image4 from './assets/images4.jpeg';
import image5 from './assets/images5.jpeg';

const OurServices = () => {
  return (
    <div className="services-container">
      <h1 className="services-heading">Our Services</h1>
      <p className="services-description">
        GymFluencer offers 5 essential services to help you achieve your fitness goals with ease and flexibility.
      </p>
      <div className="services-images">
        <img src={image1} alt="Gym 1" className="gym-image" />
        <img src={image2} alt="Gym 2" className="gym-image" />
        <img src={image3} alt="Gym 3" className="gym-image" />
        <img src={image4} alt="Gym 4" className="gym-image" />
        <img src={image5} alt="Gym 5" className="gym-image" />
      </div>
    </div>
  );
};

export default OurServices;
