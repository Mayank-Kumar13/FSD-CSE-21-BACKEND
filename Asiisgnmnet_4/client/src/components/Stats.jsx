import React from 'react';
import { Tray, Warning, FolderOpen } from '@phosphor-icons/react';

function Stats({ requests }) {
  const total = requests.length;
  const highPriority = requests.filter(r => r.priority === 'High' || r.priority === 'Critical').length;
  const open = requests.filter(r => r.status !== 'Resolved' && r.status !== 'Closed').length;

  return (
    <section className="stats-section">
      <div className="stat-card">
        <div className="stat-header">
          <Tray weight="regular" />
          <span>Total Requests</span>
        </div>
        <div className="stat-value">{total}</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <Warning weight="regular" />
          <span>High Priority</span>
        </div>
        <div className="stat-value">{highPriority}</div>
      </div>
      <div className="stat-card">
        <div className="stat-header">
          <FolderOpen weight="regular" />
          <span>Open Requests</span>
        </div>
        <div className="stat-value">{open}</div>
      </div>
    </section>
  );
}

export default Stats;
