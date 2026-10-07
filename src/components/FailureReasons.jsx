import React from 'react';
import './FailureReasons.css';

const FailureReasons = () => {
  const failureReasons = [
    { reason: 'Shared secret mismatch', percentage: 78 },
    { reason: 'Certificate validation failed', percentage: 62 },
    { reason: 'Auth timeout', percentage: 51 },
    { reason: 'Rejected by policy', percentage: 43 },
    { reason: 'Unknown NAS / client', percentage: 29 },
  ];

  const thresholds = [
    {
      status: 'healthy',
      label: 'Healthy',
      definition: 'Error rate < 1% and latency < 200 ms',
    },
    {
      status: 'degraded',
      label: 'Degraded',
      definition: 'Error rate 1–5% or one listener degraded',
    },
    {
      status: 'unavailable',
      label: 'Unavailable',
      definition: 'Error rate > 5% or service/database unreachable',
    },
  ];

  return (
    <section className="main-grid" style={{ marginTop: 0 }}>
      <div className="card failure-reasons">
        <div className="panel-header">
          <h3>Top Failure Reasons</h3>
          <span className="muted">Last 24h</span>
        </div>

        <div className="list-wrap">
          {failureReasons.map((item, index) => (
            <div key={index} className="reason-row">
              <div className="reason-name">
                <span>{item.reason}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className="bar">
                  <span style={{ width: `${item.percentage}%` }}></span>
                </div>
                <strong>{item.percentage}%</strong>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="card">
        <div className="panel-header">
          <h3>Operational Thresholds</h3>
          <span className="muted">Definitions</span>
        </div>

        <div className="list-wrap">
          {thresholds.map((threshold, index) => (
            <div key={index} className="reason-row">
              <div className="reason-name">
                <span
                  className={`dot ${threshold.status}-dot`}
                  style={{
                    marginRight: '8px',
                    display: 'inline-block',
                  }}
                ></span>
                <span>{threshold.label}</span>
              </div>
              <div className="trend">{threshold.definition}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FailureReasons;
