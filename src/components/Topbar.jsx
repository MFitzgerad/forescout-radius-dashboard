import React from 'react';
import './Topbar.css';

const Topbar = () => {
  const handleExport = () => {
    alert('Export functionality would be implemented here');
  };

  return (
    <header className="topbar">
      <div className="brand">
        <div className="brand-mark">F</div>
        <span>Forescout RADIUS</span>
      </div>

      <div className="toolbar">
        <span className="date-pill">Last 24 Hours</span>
        <button className="button" onClick={handleExport}>
          Export
        </button>
      </div>
    </header>
  );
};

export default Topbar;
