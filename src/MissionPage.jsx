import React from 'react';
import './MissionPage.css';

const MissionPage = () => {
  return (
    <div className="mission-page">
      <h1 className="heading"style={{ color: "red" }}>YOUR FITNESS, OUR MISSION</h1>
      <p className="description">
        At GymFluencer, our mission is simple: to provide the tools and support you need to reach your fitness goals. We combine innovative technology with personalized guidance to make fitness easier, more accessible, and more motivating. Join us as we help you transform your fitness journey, one workout at a time.
      </p>

      <div className="stats">
        <div className="stat">
          <h2>422k+</h2>
          <p>Workouts logged and progress tracked every month</p>
        </div>
        <div className="stat">
          <h2>122k+</h2>
          <p>Fitness enthusiasts connected through our platform</p>
        </div>
        <div className="stat">
          <h2>2+</h2>
          <p>Countries where GymFluencer is making an impact</p>
        </div>
      </div>

      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/Yko3GMseY40?si=DMtmU7jdmIlb5tYQ" // Replace with actual video link
          title="GymFluencer Mission Video"
          className="video"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MissionPage;
