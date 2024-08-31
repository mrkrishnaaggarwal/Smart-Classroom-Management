import React from 'react'
import Sidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';

const Curriculum = () => {
  return (
    <div className="flex w-screen h-screen">
    <Sidebar />
    <div className='w-[85%]'>
        <Topbar />
        <div className='flex'>
          curriculum
        </div>
    </div>
</div>
  )
}

export default Curriculum
