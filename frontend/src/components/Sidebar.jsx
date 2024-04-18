import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import '../App.css'; // Import the CSS file from the parent directory

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Check screen width on mount
    const screenWidth = window.innerWidth;
    if (screenWidth >= 768 && location.pathname !== '/vault') {
      setShowSidebar(true); // Show sidebar on laptops and large screens
    }
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div>
      <button className="toggle-btn" onClick={toggleSidebar}>
        ☰
      </button>
      <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/creds">Add Credentials</Link></li>
          <li><Link to="/vault">View Vault</Link></li>
          <li><Link to="/photos">Add Photos</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
