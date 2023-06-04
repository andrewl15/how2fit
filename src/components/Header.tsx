import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import AboutUs from '../pages/About';
import HomePage from '../pages/Home';
import '../App.css';
import React, { useState } from 'react';

function Header() {
  const [isHovered, setIsHovered] = useState(false);

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <Router>
      <div className="Header">
        <div className={`top-menu ${isHovered ? 'hovered' : ''}`}>
          <div className="container">
            <Link to="/" className="logo">
              H2F
            </Link>
            <nav>
              <ul className="hoverable-list">
                <li onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                  <Link to="/workouts">Workouts</Link>
                  <ul className="sub-list">
                    <li>
                      <Link to="/workouts/cardio">Cardio</Link>
                    </li>
                    <li>
                      <Link to="/workouts/strength">Strength</Link>
                    </li>
                    <li>
                      <Link to="/workouts/stretching">Stretching</Link>
                    </li>
                  </ul>
                </li>
                <li onMouseEnter={handleHover} onMouseLeave={handleLeave}>
                  <Link to="/meal-plans">Meal Plans</Link>
                  <ul className="sub-list">
                    <li>
                      <Link to="/meal-plans/vegetarian">Vegetarian</Link>
                    </li>
                    <li>
                      <Link to="/meal-plans/vegan">Vegan</Link>
                    </li>
                    <li>
                      <Link to="/meal-plans/keto">Keto</Link>
                    </li>
                  </ul>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default Header;
