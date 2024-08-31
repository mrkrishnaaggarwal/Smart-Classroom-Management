import React from 'react'
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import Publish from '../Components/Publish';

const ProfessorDashboard = () => {

//   if(!localStorage.getItem("token")){
//     console.log("you are not logged in");
//     return (<></>)
// }
  return (
    <div className="flex w-screen h-screen">
    <ProfessorSidebar />
    <div className='w-[85%]'>
        <Topbar />
        <div className='flex mt-4'>
            <Publish heading="Publish Announcement"/>
            <Publish heading="Publish Homework"/>
        </div>
    </div>
</div>
  )
}

export default ProfessorDashboard
