import React from "react";
import "./DietPlanForm.css";

const DietPlanForm = () => {
  return (
    <div className="diet-plan-form">
      {/* Navbar */}
      <nav className="navbar">
        <h1>Diet Plan App</h1>
      </nav>

      {/* Form Section */}
      <form className="form-container">
        {/* Personalized Diet Plan Heading */}
        <h1 className="form-heading">Personalized Diet Plan</h1>

        {/* Basic Information Section */}
        <h2 className="section-heading">Basic Information</h2>
        <div className="input-group">
          <label>Age</label>
          <input type="number" placeholder="Enter your age" />
        </div>
        <div className="input-group">
          <label>Gender</label>
          <select>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="input-group">
          <label>Height</label>
          <input type="text" placeholder="Enter your height (e.g., 5'6)" />
        </div>
        <div className="input-group">
          <label>Weight</label>
          <input type="text" placeholder="Enter your weight (e.g., 70 kg)" />
        </div>
        <div className="input-group">
          <label>Activity Level</label>
          <select>
            <option value="">Select Activity Level</option>
            <option value="sedentary">Sedentary</option>
            <option value="moderate">Moderate</option>
            <option value="active">Active</option>
          </select>
        </div>

        {/* Diet Goals Section */}
        <h2 className="section-heading">Diet Goals</h2>
        <div className="input-group">
          <label>Goal</label>
          <select>
            <option value="">Select Goal</option>
            <option value="weight-loss">Weight Loss</option>
            <option value="weight-gain">Weight Gain</option>
            <option value="maintain">Maintain Weight</option>
          </select>
        </div>
        <div className="input-group">
          <label>Specific Goal</label>
          <input
            type="text"
            placeholder="Enter your specific goal (e.g., Lose 5 kg)"
          />
        </div>

        {/* Health Information Section */}
        <h2 className="section-heading">Health Information</h2>
        <div className="input-group">
          <label>Medical Conditions</label>
          <textarea placeholder="Describe any medical conditions"></textarea>
        </div>
        <div className="input-group">
          <label>Nutritional Needs</label>
          <textarea placeholder="Specify your nutritional needs"></textarea>
        </div>

        {/* Current Eating Habits Section */}
        <h2 className="section-heading">Current Eating Habits</h2>
        <div className="input-group">
          <label>Typical Daily Diet</label>
          <textarea placeholder="Describe your typical daily diet"></textarea>
        </div>
        <div className="input-group">
          <label>Frequency of Eating Out</label>
          <input
            type="text"
            placeholder="How often do you eat out? (e.g., 3 times a week)"
          />
        </div>

        {/* Submit Button */}
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2024 Diet Plan App. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DietPlanForm;
