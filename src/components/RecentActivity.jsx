import React from 'react';
import Badge from './Badge';
import './RecentActivity.css';

const RecentActivity = () => {
  const activityData = [
    {
      time: '09:14:22',
      nas: 'Access-Edge-01',
      method: 'EAP-TLS',
      client: 'user-1024',
      outcome: 'accept',
    },
    {
      time: '09:13:48',
      nas: 'VPN-Gateway-02',
      method: 'PEAP-MSCHAPv2',
      client: 'user-7801',
      outcome: 'reject',
    },
    {
      time: '09:12:11',
      nas: 'Switch-CORE-07',
      method: 'MD5',
      client: 'bob.admin',
      outcome: 'challenge',
    },
    {
      time: '09:10:56',
      nas: 'WiFi-Guest-AP',
      method: 'Token',
      client: 'guest-442',
      outcome: 'timeout',
    },
    {
      time: '09:08:33',
      nas: 'Access-Edge-01',
      method: 'EAP-TLS',
      client: 'user-1904',
      outcome: 'accept',
    },
    {
      time: '09:07:28',
      nas: 'Switch-CORE-07',
      method: 'PEAP-MSCHAPv2',
      client: 'user-2130',
      outcome: 'reject',
    },
  ];

  return (
    <div className="card recent-activity">
      <div className="panel-header">
        <h3>Recent Activity</h3>
        <span className="muted">Live feed</span>
      </div>
      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>NAS</th>
              <th>Method</th>
              <th>Client</th>
              <th>Outcome</th>
            </tr>
          </thead>
          <tbody>
            {activityData.map((row, index) => (
              <tr key={index}>
                <td>{row.time}</td>
                <td>{row.nas}</td>
                <td>{row.method}</td>
                <td>{row.client}</td>
                <td>
                  <Badge type={row.outcome}>
                    {row.outcome.charAt(0).toUpperCase() + row.outcome.slice(1)}
                  </Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivity;
