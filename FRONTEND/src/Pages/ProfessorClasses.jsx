import React from 'react'
import Sidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import UploadPhoto from '../Components/UploadPhoto';


const ProfessorClasses = () => {

  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='flex'>
            ProfessorClasses
            <UploadPhoto/>
        </div>
      </div>
    </div>
  )
}

export default ProfessorClasses
