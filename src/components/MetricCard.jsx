import React from 'react';
import './MetricCard.css';

const MetricCard = ({ label, value, delta, deltaType }) => {
  return (
    <div className="card metric">
      <div className="label">{label}</div>
      <div className="value-row">
        <div className="value">{value}</div>
        <div className={`delta ${deltaType}`}>{delta}</div>
      </div>
      <div className="spark"></div>
    </div>
  );
};

export default MetricCard;
