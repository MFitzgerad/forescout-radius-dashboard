import React from 'react';
import StatusPill from './StatusPill';
import './ServiceStatus.css';

const ServiceStatus = () => {
  const services = [
    {
      name: 'auth-service-01',
      listener: 'Listener: 1812/udp',
      status: 'healthy',
    },
    {
      name: 'auth-service-02',
      listener: 'Listener: 1812/udp',
      status: 'healthy',
    },
    {
      name: 'acct-service-01',
      listener: 'Listener: 1813/udp',
      status: 'degraded',
    },
    {
      name: 'auth-service-03',
      listener: 'Listener: 1812/udp',
      status: 'unavailable',
    },
  ];

  const dbStatus = [
    {
      name: 'Database Reachability',
      meta: 'Primary replication: Synced',
      status: 'healthy',
    },
    {
      name: 'Query Latency',
      meta: 'p95: 132 ms',
      status: 'degraded',
    },
    {
      name: 'Client Record Sync',
      meta: 'Last sync: 08:42 UTC',
      status: 'healthy',
    },
  ];

  return (
    <div className="side-stack">
      <div className="card service-status">
        <div className="panel-header">
          <h3>RADIUS Service / Listener Status</h3>
          <span className="muted">Health</span>
        </div>

        <div className="status">
          {services.map((service, index) => (
            <div key={index} className="status-item">
              <div>
                <strong>{service.name}</strong>
                <div className="status-meta">{service.listener}</div>
              </div>
              <StatusPill status={service.status} />
            </div>
          ))}
        </div>

        <div className="thresholds">
          <span className="threshold-box">
            <span className="dot healthy-dot"></span>
            Healthy &lt; 1% error
          </span>
          <span className="threshold-box">
            <span className="dot degraded-dot"></span>
            Degraded 1–5%
          </span>
          <span className="threshold-box">
            <span className="dot unavailable-dot"></span>
            Unavailable &gt; 5%
          </span>
        </div>
      </div>

      <div className="card db-status">
        <div className="panel-header">
          <h3>radius_clients DB Status</h3>
          <span className="muted">Database</span>
        </div>

        <div className="status">
          {dbStatus.map((item, index) => (
            <div key={index} className="status-item">
              <div>
                <strong>{item.name}</strong>
                <div className="status-meta">{item.meta}</div>
              </div>
              <StatusPill status={item.status} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceStatus;
