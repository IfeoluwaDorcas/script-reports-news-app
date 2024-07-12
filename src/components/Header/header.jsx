import React from 'react';
import './header.css';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <header>
      <div className="left-section">
        <h1>#script-reports</h1>
      </div>
      <input
        type="text"
        placeholder="Search news..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
    </header>
  );
};

export default Header;
