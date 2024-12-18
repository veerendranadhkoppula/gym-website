import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import HomePage from "./HomePage";
import MissionPage from "./MissionPage";
import Navbar from "./Navbar";
import OurServices from "./OurServices";
import WhatPeopleSay from "./WhatPeopleSay";
import DietPlanForm from "./DietPlanForm"; // Import the new form page

function App() {
  return (
    <Router>
      <Navbar />
      <HomePage />
      <MissionPage />
      <WhatPeopleSay />
      <Routes>
        <Route path="/mission" element={<MissionPage />} />
        <Route path="/services" element={<OurServices />} />
        <Route path="/testimonials" element={<WhatPeopleSay />} />
        <Route path="/diet-plan" element={<DietPlanForm />} /> {/* Route for the form page */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
