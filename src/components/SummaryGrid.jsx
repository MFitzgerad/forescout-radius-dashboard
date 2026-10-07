import React from 'react';
import MetricCard from './MetricCard';
import './SummaryGrid.css';

const SummaryGrid = () => {
  const metrics = [
    {
      label: 'Total Requests',
      value: '142,860',
      delta: '+8.4%',
      deltaType: 'up',
    },
    {
      label: 'Accepts',
      value: '117,330',
      delta: '+6.1%',
      deltaType: 'up',
    },
    {
      label: 'Rejects',
      value: '18,640',
      delta: '-3.8%',
      deltaType: 'down',
    },
    {
      label: 'Success Rate',
      value: '82.1%',
      delta: 'Target 85%',
      deltaType: 'neutral',
    },
  ];

  return (
    <section className="summary-grid">
      {metrics.map((metric, index) => (
        <MetricCard key={index} {...metric} />
      ))}
    </section>
  );
};

export default SummaryGrid;
