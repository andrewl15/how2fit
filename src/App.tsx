import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/about'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/" element={<div><h1>Home Page</h1><p>Welcome to our home page!</p></div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
