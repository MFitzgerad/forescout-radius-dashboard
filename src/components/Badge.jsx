import React from 'react';
import './Badge.css';

const Badge = ({ type, children }) => {
  return <span className={`badge ${type}`}>{children}</span>;
};

export default Badge;
