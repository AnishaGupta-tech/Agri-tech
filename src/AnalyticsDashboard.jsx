import React from 'react';
import { Link } from 'react-router-dom';
import './dashboard.css'; 

const AnalyticsDashboard = () => {
  // Sample data - in a real app this would come from your backend
  const farmStats = {
    totalArea: 45.7,
    crops: [
      { name: 'Wheat', area: 18.2, color: '#4CAF50' },
      { name: 'Corn', area: 12.5, color: '#8BC34A' },
      { name: 'Soybean', area: 9.3, color: '#CDDC39' },
      { name: 'Rice', area: 5.7, color: '#FFC107' }
    ],
    soilQuality: 82,
    temperature: {
      current: 24.5,
      min: 18,
      max: 29,
      trend: 'up' // 'up', 'down', or 'stable'
    },
    moistureLevels: {
      current: 65,
      optimal: 70,
      trend: 'down'
    },
    alerts: [
      { type: 'pest', crop: 'Wheat', severity: 'medium', date: '2023-06-15' },
      { type: 'disease', crop: 'Corn', severity: 'low', date: '2023-06-12' },
      { type: 'irrigation', severity: 'high', date: '2023-06-10' }
    ],
    yieldPrediction: {
      current: 3.8,
      previous: 3.5,
      unit: 'tons/acre'
    },
    recentActivity: [
      { action: 'Irrigation adjusted', time: '2 hours ago', by: 'System' },
      { action: 'Fertilizer applied', time: '1 day ago', by: 'Rajesh' },
      { action: 'Soil test completed', time: '2 days ago', by: 'System' }
    ]
  };

  // Generate time-series data for charts
  const generateTimeSeries = (days = 7) => {
    return Array.from({ length: days }, (_, i) => {
      const date = new Date();
      date.setDate(date.getDate() - (days - 1 - i));
      return {
        date: date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
        temperature: Math.round(18 + Math.random() * 12),
        moisture: Math.round(50 + Math.random() * 30),
        yield: Math.round(3 + Math.random() * 1.5 * 10) / 10
      };
    });
  };

  const timeSeriesData = generateTimeSeries(7);

  return (
    <div className="analytics-dashboard">
      {/* Dashboard Header */}
      <div className="dashboard-header">
        <h1><i className="fas fa-chart-line"></i> Farm Analytics Dashboard</h1>
        <div className="date-selector">
          <button className="active">Last 7 Days</button>
          <button>Last 30 Days</button>
          <button>This Season</button>
          <button><i className="fas fa-calendar-alt"></i> Custom Range</button>
        </div>
      </div>

      {/* Overview Cards */}
      <div className="overview-cards">
        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(46, 139, 87, 0.1)' }}>
            <i className="fas fa-map-marked-alt" style={{ color: '#2E8B57' }}></i>
          </div>
          <div className="stat-info">
            <h3>Total Farm Area</h3>
            <p>{farmStats.totalArea} <span>acres</span></p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(139, 195, 74, 0.1)' }}>
            <i className="fas fa-temperature-low" style={{ color: '#8BC34A' }}></i>
          </div>
          <div className="stat-info">
            <h3>Current Temperature</h3>
            <p>{farmStats.temperature.current}°C 
              <span className={`trend ${farmStats.temperature.trend}`}>
                <i className={`fas fa-arrow-${farmStats.temperature.trend === 'up' ? 'up' : farmStats.temperature.trend === 'down' ? 'down' : 'right'}`}></i>
                {farmStats.temperature.trend === 'up' ? '2.5°' : farmStats.temperature.trend === 'down' ? '1.2°' : ''}
              </span>
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}>
            <i className="fas fa-tint" style={{ color: '#FFC107' }}></i>
          </div>
          <div className="stat-info">
            <h3>Soil Moisture</h3>
            <p>{farmStats.moistureLevels.current}% 
              <span className={`trend ${farmStats.moistureLevels.trend}`}>
                <i className={`fas fa-arrow-${farmStats.moistureLevels.trend === 'up' ? 'up' : farmStats.moistureLevels.trend === 'down' ? 'down' : 'right'}`}></i>
                {Math.abs(farmStats.moistureLevels.current - farmStats.moistureLevels.optimal)}%
              </span>
            </p>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon" style={{ backgroundColor: 'rgba(46, 125, 50, 0.1)' }}>
            <i className="fas fa-weight-hanging" style={{ color: '#2E7D32' }}></i>
          </div>
          <div className="stat-info">
            <h3>Yield Prediction</h3>
            <p>{farmStats.yieldPrediction.current} <span>{farmStats.yieldPrediction.unit}</span>
              <span className={`trend ${farmStats.yieldPrediction.current > farmStats.yieldPrediction.previous ? 'up' : farmStats.yieldPrediction.current < farmStats.yieldPrediction.previous ? 'down' : 'stable'}`}>
                <i className={`fas fa-arrow-${farmStats.yieldPrediction.current > farmStats.yieldPrediction.previous ? 'up' : farmStats.yieldPrediction.current < farmStats.yieldPrediction.previous ? 'down' : 'right'}`}></i>
                {Math.abs(farmStats.yieldPrediction.current - farmStats.yieldPrediction.previous).toFixed(1)}
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Main Charts Area */}
      <div className="charts-container">
        {/* Temperature & Moisture Chart */}
        <div className="chart-card wide">
          <div className="chart-header">
            <h3><i className="fas fa-chart-area"></i> Temperature & Moisture Trends</h3>
            <select className="chart-filter">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>This Season</option>
            </select>
          </div>
          <div className="chart-wrapper">
            <div className="dual-axis-chart">
              {timeSeriesData.map((day, index) => (
                <div key={index} className="chart-bar-container">
                  <div className="chart-bar-group">
                    <div className="chart-bar-label">{day.date}</div>
                    <div className="chart-bar temperature" style={{ height: `${(day.temperature / 35) * 100}%` }}>
                      <span>{day.temperature}°C</span>
                    </div>
                    <div className="chart-bar moisture" style={{ height: `${day.moisture}%` }}>
                      <span>{day.moisture}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="chart-legend">
              <div><span className="legend-color temperature"></span> Temperature (°C)</div>
              <div><span className="legend-color moisture"></span> Soil Moisture (%)</div>
            </div>
          </div>
        </div>

        {/* Crop Distribution */}
        <div className="chart-card">
          <div className="chart-header">
            <h3><i className="fas fa-pie-chart"></i> Crop Distribution</h3>
          </div>
          <div className="chart-wrapper">
            <div className="pie-chart">
              {/* Pie chart segments would need a real chart library for accuracy */}
              <div className="pie-center">
                <div className="pie-value">{farmStats.totalArea}</div>
                <div className="pie-label">acres</div>
              </div>
            </div>
            <div className="pie-legend">
              {farmStats.crops.map(crop => (
                <div key={crop.name} className="legend-item">
                  <span className="legend-color" style={{ backgroundColor: crop.color }}></span>
                  <span className="legend-label">{crop.name}</span>
                  <span className="legend-value">{crop.area} acres</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Soil Quality */}
        <div className="chart-card">
          <div className="chart-header">
            <h3><i className="fas fa-seedling"></i> Soil Health</h3>
          </div>
          <div className="chart-wrapper">
            <div className="gauge-chart">
              <div className="gauge-background"></div>
              <div 
                className="gauge-progress" 
                style={{ '--percentage': `${farmStats.soilQuality}%` }}
              ></div>
              <div className="gauge-value">{farmStats.soilQuality}</div>
              <div className="gauge-label">Soil Quality Index</div>
              <div className="gauge-marks">
                <span>0</span>
                <span>50</span>
                <span>100</span>
              </div>
            </div>
            <div className="soil-metrics">
              <div className="soil-metric">
                <span className="metric-label">pH Level</span>
                <span className="metric-value">6.8</span>
                <div className="metric-bar">
                  <div className="metric-progress" style={{ width: '80%', backgroundColor: '#4CAF50' }}></div>
                </div>
              </div>
              <div className="soil-metric">
                <span className="metric-label">Nitrogen</span>
                <span className="metric-value">Medium</span>
                <div className="metric-bar">
                  <div className="metric-progress" style={{ width: '60%', backgroundColor: '#8BC34A' }}></div>
                </div>
              </div>
              <div className="soil-metric">
                <span className="metric-label">Organic Matter</span>
                <span className="metric-value">High</span>
                <div className="metric-bar">
                  <div className="metric-progress" style={{ width: '85%', backgroundColor: '#CDDC39' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Yield Prediction */}
          <div className="chart-card wide">
            <div className="chart-header">
              <h3><i className="fas fa-chart-line"></i> Yield Prediction</h3>
              <select className="chart-filter">
                <option>By Week</option>
                <option>By Month</option>
                <option>By Crop</option>
              </select>
            </div>
            <div className="chart-wrapper">
              <div className="line-chart">
                {timeSeriesData.map((day, index) => (
            <div key={index} className="line-chart-point">
              <div 
                className="data-point" 
                style={{ bottom: `${(day.yield / 5) * 100}%` }}
                data-value={day.yield}
              ></div>
              {index < timeSeriesData.length - 1 && (
                <div 
                  className="line-segment" 
                  style={{ 
              height: `${Math.abs((day.yield - timeSeriesData[index + 1].yield) / 5 * 100)}%`,
              bottom: `${(Math.min(day.yield, timeSeriesData[index + 1].yield) / 5 * 100)}%`,
              left: '50%'
                  }}
                ></div>
              )}
              <div className="point-label">{day.date}</div>
            </div>
                ))}
                <div className="y-axis">
            <span>5.0</span>
            <span>3.75</span>
            <span>2.5</span>
            <span>1.25</span>
            <span>0</span>
                </div>
              </div>
              <div className="chart-legend">
                <div><span className="legend-color yield"></span> Predicted Yield (tons/acre)</div>
              </div>
            </div>
          </div>
      </div>
      <div className="bottom-section">
        {/* Alerts */}
        <div className="alerts-card">
          <div className="card-header">
            <h3><i className="fas fa-exclamation-triangle"></i> Recent Alerts</h3>
            <span className="badge">{farmStats.alerts.length}</span>
          </div>
          <div className="alerts-list">
            {farmStats.alerts.map((alert, index) => (
              <div key={index} className={`alert-item ${alert.severity}`}>
                <div className="alert-icon">
                  {alert.type === 'pest' && <i className="fas fa-bug"></i>}
                  {alert.type === 'disease' && <i className="fas fa-virus"></i>}
                  {alert.type === 'irrigation' && <i className="fas fa-tint"></i>}
                </div>
                <div className="alert-content">
                  <div className="alert-title">
                    {alert.type === 'pest' && 'Pest Detected'}
                    {alert.type === 'disease' && 'Disease Warning'}
                    {alert.type === 'irrigation' && 'Irrigation Needed'}
                    {alert.crop && ` in ${alert.crop}`}
                  </div>
                  <div className="alert-date">{alert.date}</div>
                </div>
                <div className="alert-severity">
                  <span className={`severity-dot ${alert.severity}`}></span>
                  {alert.severity.charAt(0).toUpperCase() + alert.severity.slice(1)}
                </div>
              </div>
            ))}
          </div>
          <button className="view-all">View All Alerts</button>
        </div>

        {/* Recent Activity */}
        <div className="activity-card">
          <div className="card-header">
            <h3><i className="fas fa-history"></i> Recent Activity</h3>
          </div>
          <div className="activity-list">
            {farmStats.recentActivity.map((activity, index) => (
              <div key={index} className="activity-item">
                <div className="activity-icon">
                  <i className="fas fa-circle"></i>
                </div>
                <div className="activity-content">
                  <div className="activity-action">{activity.action}</div>
                  <div className="activity-meta">
                    <span className="activity-time">{activity.time}</span>
                    <span className="activity-by">by {activity.by}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="view-all">View Full Log</button>
        </div>
      </div>

      {/* Dashboard CSS */}
      <style jsx>{`
        /* ...styles omitted for brevity... */
      `}</style>
    </div>
  );
};

export default AnalyticsDashboard;