import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Curriculum from './Pages/Curriculum';
import Dashboard from './Pages/Dashboard';
import Sidebar from './Components/Sidebar';
import Classes from './Pages/Classes';
import Results from './Pages/Results';
import Topbar from './Components/Topbar';

function App() {
  return (
    <>

      <Router>
        <div className='flex h-screen'>
          <Sidebar />
          <div>
            <Topbar/>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/curriculum" element={<Curriculum />} />
              <Route path="/classes" element={<Classes />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
