import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import HomePage from "./HomePage";
import MissionPage from "./MissionPage";
import Navbar from "./Navbar";
import WhatPeopleSay from "./WhatPeopleSay";
import DietPlanForm from "./DietPlanForm"; // Import the new form page

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar is always visible */}
      <Routes>
        {/* Render all sections on the home page */}
        <Route
          path="/"
          element={
            <>
              <HomePage />
              <MissionPage />
              <WhatPeopleSay />
            </>
          }
        />
        {/* Separate route for the "Join Us Now" page */}
        <Route path="/diet-plan" element={<DietPlanForm />} />
      </Routes>
      <Footer /> {/* Footer is always visible */}
    </Router>
  );
}

export default App;
