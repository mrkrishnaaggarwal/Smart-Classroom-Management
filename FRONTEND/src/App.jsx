import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Curriculum from './Pages/Curriculum';
import StudentDashboard from './Pages/StudentDashboard';
import Sidebar from './Components/StudentSidebar';
import Classes from './Pages/Classes';
import Results from './Pages/Results';
import Topbar from './Components/Topbar';
import Login from './Pages/Login/Login';
import ProfessorDashboard from './Pages/ProfessorDashboard';

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Student/Dashboard" element={<StudentDashboard />} />
              <Route path="/Professor/Dashboard" element={<ProfessorDashboard />} />
              <Route path="/Studetn/curriculum" element={<Curriculum />} />
              <Route path="/Professor/Curriculum" element={<ProfessorCurriculum />} />
              <Route path="/Student/classes" element={<Classes />} />
              <Route path="/Professor/Classes" element={<ProfessorClasses />} />
              <Route path="/Student/results" element={<Results />} />
              <Route path="/Professor/Results" element={<ProfessorResults />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
