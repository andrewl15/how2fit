// DOESNT WORK, gotta fix
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

// check for 40% minimization if so adds a drop down menu instead of 
// displaying all lists (i.e Workouts, Meal Plans, About Us)

function RightSideOfBarCheck() {
    const [isMobile, setIsMobile] = useState(false);
  
    const handleResize = () => {
      setIsMobile(window.innerWidth < window.innerWidth * 0.4);
    };
  
    useEffect(() => {
      window.addEventListener('resize', handleResize);
      handleResize(); // Initial check
  
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  
    return (
      <nav>
        {isMobile ? (
          <div>
            <select>
              <option value="/workouts">Workouts</option>
              <option value="/meal-plans">Meal Plans</option>
              <option value="/about">About Us</option>
            </select>
          </div>
        ) : (
          <ul>
            <li>
              <Link to="/workouts">Workouts</Link>
            </li>
            <li>
              <Link to="/meal-plans">Meal Plans</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        )}
      </nav>
    );
  }
  
  export default RightSideOfBarCheck;