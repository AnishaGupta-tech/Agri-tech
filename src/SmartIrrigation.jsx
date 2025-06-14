import React, { useState } from 'react';
import './styles_irr.css';

const SmartIrrigation = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [selectedZone, setSelectedZone] = useState(null);
  const [scheduleModal, setScheduleModal] = useState(false);
  const [newSchedule, setNewSchedule] = useState({
    startTime: '06:00',
    duration: 30,
    days: ['Monday', 'Wednesday', 'Friday'],
    waterAmount: 50
  });

  // Sample data
  const irrigationZones = [
    {
      id: 1,
      name: 'North Field',
      status: 'optimal',
      moisture: 72,
      lastWatered: '2 hours ago',
      cropType: 'Corn',
      waterRequirement: 120,
      position: { top: 10, left: 15, width: 30, height: 40 },
      wateringHistory: [
        { date: 'Today 6:00 AM', amount: 80, duration: 45 },
        { date: 'Yesterday 6:00 AM', amount: 85, duration: 50 }
      ]
    },
    {
      id: 2,
      name: 'South Orchard',
      status: 'dry',
      moisture: 42,
      lastWatered: '5 hours ago',
      cropType: 'Apples',
      waterRequirement: 150,
      position: { top: 55, left: 60, width: 25, height: 30 },
      wateringHistory: [
        { date: 'Today 7:00 AM', amount: 100, duration: 60 }
      ]
    }
  ];

  const waterUsageData = [
    { day: 'Mon', usage: 450 },
    { day: 'Tue', usage: 520 },
    { day: 'Wed', usage: 480 },
    { day: 'Thu', usage: 390 },
    { day: 'Fri', usage: 410 }
  ];

  const toggleDaySelection = (day) => {
    setNewSchedule(prev => ({
      ...prev,
      days: prev.days.includes(day) 
        ? prev.days.filter(d => d !== day)
        : [...prev.days, day]
    }));
  };

  const handleScheduleSubmit = (e) => {
    e.preventDefault();
    // In a real app, you would save the schedule here
    setScheduleModal(false);
  };

  return (
    <div className="irrigation-container">
      {/* Header */}
      <div className="irrigation-header">
        <div className="header-content">
          <h1>
            <i className="fas fa-tint"></i> Smart Irrigation Control
          </h1>
          <p>Precision water management powered by AI analytics</p>
        </div>
        <div className="header-stats">
          <div className="stat-card">
            <div className="stat-value">35%</div>
            <div className="stat-label">Water Saved</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Monitoring</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="irrigation-main">
        {/* Navigation Tabs */}
        <div className="irrigation-tabs">
          <button 
            className={`tab-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <i className="fas fa-chart-pie"></i> Dashboard
          </button>
          <button 
            className={`tab-btn ${activeTab === 'zones' ? 'active' : ''}`}
            onClick={() => setActiveTab('zones')}
          >
            <i className="fas fa-map-marked-alt"></i> Zones
          </button>
          <button 
            className={`tab-btn ${activeTab === 'schedule' ? 'active' : ''}`}
            onClick={() => setActiveTab('schedule')}
          >
            <i className="fas fa-calendar-alt"></i> Schedule
          </button>
        </div>

        {/* Dashboard Tab */}
        {activeTab === 'dashboard' && (
          <div className="dashboard-view">
            <div className="metrics-grid">
              <div className="metric-card water-usage">
                <h3>Water Usage</h3>
                <div className="water-graph">
                  {waterUsageData.map((day, index) => (
                    <div key={index} className="graph-bar">
                      <div 
                        className="bar-fill"
                        style={{ height: `${day.usage / 10}%` }}
                      ></div>
                      <div className="bar-label">{day.day}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="metric-card moisture-levels">
                <h3>Soil Moisture</h3>
                <div className="moisture-grid">
                  {irrigationZones.map(zone => (
                    <div key={zone.id} className="moisture-item">
                      <div className="zone-name">{zone.name}</div>
                      <div className="moisture-bar">
                        <div 
                          className="moisture-fill"
                          style={{ width: `${zone.moisture}%` }}
                        ></div>
                      </div>
                      <div className="moisture-value">{zone.moisture}%</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Zones Tab */}
        {activeTab === 'zones' && (
          <div className="zones-view">
            <div className="zone-map-container">
              <div className="zone-map">
                {irrigationZones.map(zone => (
                  <div 
                    key={zone.id}
                    className={`zone-area ${zone.status} ${selectedZone?.id === zone.id ? 'selected' : ''}`}
                    style={{
                      top: `${zone.position.top}%`,
                      left: `${zone.position.left}%`,
                      width: `${zone.position.width}%`,
                      height: `${zone.position.height}%`
                    }}
                    onClick={() => setSelectedZone(zone)}
                  >
                    <div className="zone-label">{zone.name}</div>
                  </div>
                ))}
                <img src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae" alt="Farm layout" />
              </div>
            </div>
            
            {selectedZone && (
              <div className="zone-details">
                <h3>{selectedZone.name} Details</h3>
                <div className="detail-row">
                  <span>Crop Type:</span>
                  <strong>{selectedZone.cropType}</strong>
                </div>
                <div className="detail-row">
                  <span>Moisture Level:</span>
                  <strong>{selectedZone.moisture}%</strong>
                </div>
                <div className="detail-row">
                  <span>Last Watered:</span>
                  <strong>{selectedZone.lastWatered}</strong>
                </div>
                
                <button className="action-btn water-now">
                  <i className="fas fa-tint"></i> Water Now
                </button>
              </div>
            )}
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="schedule-view">
            <button 
              className="add-schedule-btn"
              onClick={() => setScheduleModal(true)}
            >
              <i className="fas fa-plus"></i> New Schedule
            </button>
            
            <div className="schedules-list">
              {irrigationZones.map(zone => (
                <div key={zone.id} className="schedule-card">
                  <div className="schedule-header">
                    <h4>{zone.name}</h4>
                    <div className="schedule-time">
                      <i className="fas fa-clock"></i> 6:00 AM - 30 mins
                    </div>
                  </div>
                  <div className="schedule-days">
                    Mon, Wed, Fri
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Schedule Modal */}
      {scheduleModal && (
        <div className="modal-overlay">
          <div className="schedule-modal">
            <div className="modal-header">
              <h3>Create Irrigation Schedule</h3>
              <button 
                className="close-modal"
                onClick={() => setScheduleModal(false)}
              >
                <i className="fas fa-times"></i>
              </button>
            </div>
            
            <form onSubmit={handleScheduleSubmit}>
              <div className="form-group">
                <label>Zone</label>
                <select>
                  {irrigationZones.map(zone => (
                    <option key={zone.id} value={zone.id}>{zone.name}</option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label>Start Time</label>
                <input 
                  type="time" 
                  value={newSchedule.startTime}
                  onChange={(e) => setNewSchedule({...newSchedule, startTime: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Duration (minutes)</label>
                <input 
                  type="number" 
                  value={newSchedule.duration}
                  onChange={(e) => setNewSchedule({...newSchedule, duration: e.target.value})}
                />
              </div>
              
              <div className="form-group">
                <label>Days</label>
                <div className="days-selector">
                  {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].map(day => (
                    <button
                      type="button"
                      key={day}
                      className={`day-btn ${newSchedule.days.includes(day) ? 'selected' : ''}`}
                      onClick={() => toggleDaySelection(day)}
                    >
                      {day.slice(0, 3)}
                    </button>
                  ))}
                </div>
              </div>
              
              <div className="form-actions">
                <button type="button" className="cancel-btn" onClick={() => setScheduleModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="save-btn">
                  Save Schedule
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SmartIrrigation;