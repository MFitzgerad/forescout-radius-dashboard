import React from 'react';
import RecentActivity from './RecentActivity';
import ServiceStatus from './ServiceStatus';
import './MainGrid.css';

const MainGrid = () => {
  return (
    <section className="main-grid">
      <RecentActivity />
      <ServiceStatus />
    </section>
  );
};

export default MainGrid;
