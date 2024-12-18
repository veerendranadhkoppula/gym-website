import React from "react";
import "./HomePage.css";
import peopleIcon from "./assets/profile.jpeg"; // Replace with the actual path to your icon

const HomePage = () => {
  return (
    <div className="home-page">
      {/* Background Section */}
      <div className="background">
        <div className="trusted">
          <img src={peopleIcon} alt="People Icon" className="icon"  style={{ color: "red" }}/>
          <p>Trusted by 3 million+ people</p>
        </div>
        <h1 className="heading"style={{ color: "red" }}>Track Your Fitness Journey</h1> {/* Ensure this has the heading class */}
        <p className="description">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay motivated and
          achieve your goals with ease.
        </p>
      </div>
    </div>
  );
};

export default HomePage;
