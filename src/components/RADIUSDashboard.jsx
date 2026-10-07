import React, { useState } from 'react';
import './RADIUSDashboard.css';
import Topbar from './Topbar';
import Filters from './Filters';
import SummaryGrid from './SummaryGrid';
import MainGrid from './MainGrid';
import FailureReasons from './FailureReasons';

const RADIUSDashboard = () => {
  const [filters, setFilters] = useState({
    timeRange: 'last-24h',
    nas: 'all',
    authMethod: 'all',
    outcome: 'all',
  });

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="app">
      <Topbar />
      <Filters filters={filters} onFilterChange={handleFilterChange} />
      <SummaryGrid />
      <MainGrid />
      <FailureReasons />
    </div>
  );
};

export default RADIUSDashboard;
