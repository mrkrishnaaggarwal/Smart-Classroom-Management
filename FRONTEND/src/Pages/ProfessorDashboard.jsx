import React from 'react'
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';

const ProfessorDashboard = () => {
  return (
    <div className="flex w-screen h-screen">
    <ProfessorSidebar />
    <div className='w-[85%]'>
        <Topbar />
        <div className='flex'>
            ProfessorDashboard
        </div>
    </div>
</div>
  )
}

export default ProfessorDashboard
