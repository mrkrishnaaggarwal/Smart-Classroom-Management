import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Curriculum from './Pages/Curriculum';
import StudentDashboard from './Pages/StudentDashboard';
import Classes from './Pages/Classes';
import Results from './Pages/Results';
import Login from './Pages/Login/Login';
import ProfessorDashboard from './Pages/ProfessorDashboard';
import ProfessorCurriculum from './Pages/ProfessorCurriculum';
import ProfessorClasses from './Pages/ProfessorClasses';
import ProfessorResults from './Pages/ProfessorResults';
import MyProfile from './Pages/MyProfile';
import Settings from './Pages/Settings';
import Help from './Pages/Help';
import Logout from './Pages/Logout';

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
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/setting" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/logout" element={<Logout />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
