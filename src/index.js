import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import RADIUSDashboard from './components/RADIUSDashboard';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RADIUSDashboard />
  </React.StrictMode>
);
