import React, { useState } from 'react';
import './Filters.css';

const Filters = ({ filters, onFilterChange }) => {
  const [localFilters, setLocalFilters] = useState(filters);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updated = { ...localFilters, [name]: value };
    setLocalFilters(updated);
    onFilterChange(updated);
  };

  return (
    <section className="filters">
      <div className="filter-group">
        <label>Time Range</label>
        <select
          className="select"
          name="timeRange"
          value={localFilters.timeRange}
          onChange={handleChange}
        >
          <option value="last-24h">Last 24 hours</option>
          <option value="last-7d">Last 7 days</option>
          <option value="last-30d">Last 30 days</option>
          <option value="custom">Custom</option>
        </select>
      </div>

      <div className="filter-group">
        <label>NAS</label>
        <select
          className="select"
          name="nas"
          value={localFilters.nas}
          onChange={handleChange}
        >
          <option value="all">All NAS</option>
          <option value="access-edge-01">Access-Edge-01</option>
          <option value="switch-core-07">Switch-CORE-07</option>
          <option value="wifi-guest-ap">WiFi-Guest-AP</option>
          <option value="vpn-gateway-02">VPN-Gateway-02</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Auth Method</label>
        <select
          className="select"
          name="authMethod"
          value={localFilters.authMethod}
          onChange={handleChange}
        >
          <option value="all">All methods</option>
          <option value="eap-tls">EAP-TLS</option>
          <option value="peap-mschapv2">PEAP-MSCHAPv2</option>
          <option value="md5">MD5</option>
          <option value="token">Token</option>
        </select>
      </div>

      <div className="filter-group">
        <label>Outcome</label>
        <select
          className="select"
          name="outcome"
          value={localFilters.outcome}
          onChange={handleChange}
        >
          <option value="all">All outcomes</option>
          <option value="accept">Accept</option>
          <option value="reject">Reject</option>
          <option value="challenge">Challenge</option>
          <option value="timeout">Timeout</option>
        </select>
      </div>
    </section>
  );
};

export default Filters;
