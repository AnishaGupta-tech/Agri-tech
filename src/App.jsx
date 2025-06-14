import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Home';
import AnalyticsDashboard from './AnalyticsDashboard';

function App() {

  return (
      <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<AnalyticsDashboard />} />
              
             
            </Routes>
          
      </Router>
 
  );
}

export default App;
