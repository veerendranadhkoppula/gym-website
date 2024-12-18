import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link
import "./Navbar.css";
import gymIcon from "./assets/gym-icon-.png";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdown = () => {
    setDropdown(!dropdown);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <img src={gymIcon} alt="GymFluencer Logo" className="logo-icon" />
        <span className="logo-text" style={{ color: "red" }}>GymFluencer</span>
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/mission">About</Link></li>
        <li className="dropdown">
          <a href="#our-services" onClick={toggleDropdown} style={{ color: "red" }}>Our Services</a>
          {dropdown && (
            <ul className="dropdown-menu">
              <li><Link to="/services">Gym List</Link></li>
              <li><a href="#benefits">Benefits</a></li>
            </ul>
          )}
        </li>
        <li><a href="#blogs">Blogs</a></li>
        <li><a href="#contact">Contact</a></li>
        <li>
          <Link to="/diet-plan" className="join-btn">Join Us Now</Link> {/* Updated with Link */}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
