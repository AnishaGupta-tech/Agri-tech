import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AnalyticsDashboard from './AnalyticsDashboard';
import SmartIrrigation from './SmartIrrigation';
import FarmAssistant from './FarmAssistant';

function App() {

  return (
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<AnalyticsDashboard />} />
              <Route path="/irrigation" element={<SmartIrrigation />} />
              <Route path="/assistant" element={<FarmAssistant />} />
             
            </Routes>
          
      </Router>
 
  );
}

export default App;
