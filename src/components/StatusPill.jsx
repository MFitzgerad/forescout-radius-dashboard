import React from 'react';
import './StatusPill.css';

const StatusPill = ({ status }) => {
  const statusLabels = {
    healthy: 'Healthy',
    degraded: 'Degraded',
    unavailable: 'Unavailable',
  };

  return <span className={`status-pill ${status}`}>{statusLabels[status]}</span>;
};

export default StatusPill;
