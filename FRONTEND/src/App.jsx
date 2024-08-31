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
import Settings from './Pages/Settings';
import Help from './Pages/Help';
import Logout from './Pages/Logout';
import StudentMyProfile from './Pages/StudentMyProfile';
import ProfessorMyProfile from './Pages/ProfessorMyProfile';
import ProfessorAttendence from './Pages/ProfessorAttendence';

function App() {
  return (
    <>
      <Router>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/Student/Dashboard" element={<StudentDashboard />} />
              <Route path="/Professor/Dashboard" element={<ProfessorDashboard />} />
              <Route path="/Student/curriculum" element={<Curriculum />} />
              <Route path="/Professor/Curriculum" element={<ProfessorCurriculum />} />
              <Route path="/Student/classes" element={<Classes />} />
              <Route path="/Professor/classes" element={<ProfessorClasses />} />
              <Route path="/Professor/attendence" element={<ProfessorAttendence />} />
              <Route path="/Student/results" element={<Results />} />
              <Route path="/Professor/Results" element={<ProfessorResults />} />
              <Route path="/Student/myprofile" element={<StudentMyProfile />} />
              <Route path="/Professor/myprofile" element={<ProfessorMyProfile />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/help" element={<Help />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/result" element={<Results />} />
            </Routes>
      </Router>
    </>
  );
}

export default App;
