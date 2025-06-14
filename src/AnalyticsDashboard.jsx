import React, { useState, useEffect } from 'react';
import './dashboard.css';

const AnalyticsDashboard = () => {
  // Dynamic data state
  const [farmData, setFarmData] = useState({
    overview: {
      health: 78,
      progress: 65,
      yield: 3.2,
      efficiency: 88
    },
    conditions: {
      temperature: 24.5,
      moisture: 42,
      nutrients: 85,
      ph: 6.8
    },
    alerts: [
      { id: 1, type: 'irrigation', message: 'Section B needs watering', priority: 'high', time: '2h ago' },
      { id: 2, type: 'pest', message: 'Aphids detected in wheat field', priority: 'medium', time: '5h ago' },
      { id: 3, type: 'harvest', message: 'Corn ready in 3 days', priority: 'low', time: '1d ago' }
    ],
    equipment: [
      { id: 1, name: 'Irrigation System', status: 'active' },
      { id: 2, name: 'Soil Sensors', status: 'active' },
      { id: 3, name: 'Drone Scanner', status: 'maintenance' }
    ]
  });

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setFarmData(prev => ({
        ...prev,
        conditions: {
          ...prev.conditions,
          temperature: (24 + Math.random() * 3).toFixed(1),
          moisture: Math.max(30, Math.min(60, prev.conditions.moisture + (Math.random() * 6 - 3)))
        }
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="analytics-dashboard">
      {/* Header */}
      <div className="dashboard-header">
        <div className="header-left">
          <h1><i className="fas fa-leaf"></i> Farm Analytics Dashboard</h1>
          <p className="last-updated">Last updated: {new Date().toLocaleTimeString()}</p>
        </div>
        <div className="header-right">
          <button className="date-filter active">Today</button>
          <button className="date-filter">Week</button>
          <button className="date-filter">Month</button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="overview-grid">
        <div className="overview-card health">
          <div className="card-content">
            <h3>Farm Health</h3>
            <div className="metric-value">
              <span className="value">{farmData.overview.health}</span>
              <span className="unit">%</span>
            </div>
            <div className="progress-ring">
              <svg width="80" height="80">
                <circle className="progress-ring-bg" cx="40" cy="40" r="36" />
                <circle 
                  className="progress-ring-fill"
                  cx="40" cy="40" r="36"
                  style={{
                    strokeDashoffset: 226 - (226 * farmData.overview.health / 100)
                  }}
                />
              </svg>
            </div>
          </div>
          <div className="card-footer">
            <i className="fas fa-arrow-up"></i> 2% from yesterday
          </div>
        </div>

        <div className="overview-card progress">
          <div className="card-content">
            <h3>Crop Progress</h3>
            <div className="metric-value">
              <span className="value">{farmData.overview.progress}</span>
              <span className="unit">%</span>
            </div>
            <div className="progress-bar">
              <div 
                className="progress-fill"
                style={{ width: `${farmData.overview.progress}%` }}
              ></div>
            </div>
          </div>
          <div className="card-footer">
            <i className="fas fa-seedling"></i> 15 days to harvest
          </div>
        </div>

        <div className="overview-card yield">
          <div className="card-content">
            <h3>Estimated Yield</h3>
            <div className="metric-value">
              <span className="value">{farmData.overview.yield}</span>
              <span className="unit">tons/acre</span>
            </div>
            <div className="sparkline">
              {[3.1, 3.0, 3.2, 3.1, 3.3, 3.2].map((val, i) => (
                <div 
                  key={i}
                  className="sparkline-bar"
                  style={{ height: `${(val / 3.5) * 100}%` }}
                ></div>
              ))}
            </div>
          </div>
          <div className="card-footer">
            <i className="fas fa-chart-line"></i> 5% above average
          </div>
        </div>

        <div className="overview-card efficiency">
          <div className="card-content">
            <h3>Water Efficiency</h3>
            <div className="metric-value">
              <span className="value">{farmData.overview.efficiency}</span>
              <span className="unit">%</span>
            </div>
            <div className="gauge">
              <div className="gauge-body">
                <div 
                  className="gauge-fill"
                  style={{ transform: `rotate(${farmData.overview.efficiency / 100}turn)` }}
                ></div>
                <div className="gauge-cover">{farmData.overview.efficiency}%</div>
              </div>
            </div>
          </div>
          <div className="card-footer">
            <i className="fas fa-tint"></i> Optimal usage
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Left Column */}
        <div className="content-left">
          {/* Conditions Card */}
          <div className="data-card conditions">
            <div className="card-header">
              <h2><i className="fas fa-cloud-sun"></i> Field Conditions</h2>
              <div className="card-actions">
                <button className="action-btn"><i className="fas fa-sync-alt"></i></button>
              </div>
            </div>
            <div className="conditions-grid">
              <div className="condition-item temperature">
                <div className="condition-value">
                  {farmData.conditions.temperature}°C
                </div>
                <div className="condition-label">
                  <i className="fas fa-temperature-high"></i> Temperature
                </div>
                <div className="condition-trend up">
                  <i className="fas fa-arrow-up"></i> 1.2° from yesterday
                </div>
              </div>

              <div className="condition-item moisture">
                <div className="condition-value">
                  {farmData.conditions.moisture}%
                </div>
                <div className="condition-label">
                  <i className="fas fa-tint"></i> Soil Moisture
                </div>
                <div className="condition-trend down">
                  <i className="fas fa-arrow-down"></i> 3% from yesterday
                </div>
              </div>

              <div className="condition-item nutrients">
                <div className="condition-value">
                  {farmData.conditions.nutrients}%
                </div>
                <div className="condition-label">
                  <i className="fas fa-leaf"></i> Nutrients
                </div>
                <div className="condition-trend stable">
                  <i className="fas fa-equals"></i> Stable
                </div>
              </div>

              <div className="condition-item ph">
                <div className="condition-value">
                  {farmData.conditions.ph}
                </div>
                <div className="condition-label">
                  <i className="fas fa-flask"></i> pH Level
                </div>
                <div className="condition-trend stable">
                  <i className="fas fa-check"></i> Optimal
                </div>
              </div>
            </div>
          </div>

          {/* Alerts Card */}
          <div className="data-card alerts">
            <div className="card-header">
              <h2><i className="fas fa-exclamation-triangle"></i> Alerts & Notifications</h2>
              <span className="badge">{farmData.alerts.length}</span>
            </div>
            <div className="alerts-list">
              {farmData.alerts.map(alert => (
                <div key={alert.id} className={`alert-item ${alert.priority}`}>
                  <div className="alert-icon">
                    {alert.type === 'irrigation' && <i className="fas fa-tint"></i>}
                    {alert.type === 'pest' && <i className="fas fa-bug"></i>}
                    {alert.type === 'harvest' && <i className="fas fa-sickle"></i>}
                  </div>
                  <div className="alert-content">
                    <div className="alert-message">{alert.message}</div>
                    <div className="alert-time">{alert.time}</div>
                  </div>
                  <div className="alert-priority">{alert.priority}</div>
                </div>
              ))}
            </div>
            <button className="view-all-btn">
              View All Alerts <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="content-right">
          {/* Crop Health Card */}
          <div className="data-card crop-health">
            <div className="card-header">
              <h2><i className="fas fa-seedling"></i> Crop Health Map</h2>
              <div className="map-legend">
                <div className="legend-item healthy">Healthy</div>
                <div className="legend-item warning">Needs Attention</div>
                <div className="legend-item critical">Critical</div>
              </div>
            </div>
            <div className="crop-map">
              {/* Simplified farm map visualization */}
              {Array.from({ length: 12 }).map((_, i) => (
                <div 
                  key={i}
                  className={`map-cell ${i % 5 === 0 ? 'warning' : i % 7 === 0 ? 'critical' : 'healthy'}`}
                >
                  {i % 5 === 0 && <i className="fas fa-exclamation"></i>}
                </div>
              ))}
            </div>
            <div className="map-footer">
              <div className="map-stats">
                <div className="stat-item">
                  <span className="stat-value">85%</span>
                  <span className="stat-label">Healthy</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">12%</span>
                  <span className="stat-label">Warning</span>
                </div>
                <div className="stat-item">
                  <span className="stat-value">3%</span>
                  <span className="stat-label">Critical</span>
                </div>
              </div>
            </div>
          </div>

          {/* Equipment Card */}
          <div className="data-card equipment">
            <div className="card-header">
              <h2><i className="fas fa-tractor"></i> Equipment Status</h2>
              <div className="status-filter">
                <button className="active">All</button>
                <button>Active</button>
                <button>Maintenance</button>
              </div>
            </div>
            <div className="equipment-list">
              {farmData.equipment.map(item => (
                <div key={item.id} className="equipment-item">
                  <div className="equipment-icon">
                    <i className="fas fa-circle status-indicator"></i>
                    <i className="fas fa-water"></i>
                  </div>
                  <div className="equipment-info">
                    <div className="equipment-name">{item.name}</div>
                    <div className={`equipment-status ${item.status}`}>
                      {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
                    </div>
                  </div>
                  <button className="equipment-action">
                    <i className="fas fa-ellipsis-v"></i>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsDashboard;