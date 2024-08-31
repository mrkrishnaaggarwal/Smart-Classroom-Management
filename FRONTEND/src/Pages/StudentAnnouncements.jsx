import React from 'react'
import StudentSidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';
import Announcements from '../Components/Announcements';

const StudentAnnouncements = () => {
  return (
    <div className="flex w-screen h-screen">
      <StudentSidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='m-4'>
            <Announcements professor="Dr. Nikhil Sharma" announcement="The mid-term exam has been rescheduled to September 15th."/>
        </div>
      </div>
    </div>
  )
}

export default StudentAnnouncements;
