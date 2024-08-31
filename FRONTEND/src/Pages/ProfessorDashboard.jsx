import React from 'react'
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import Publish from '../Components/Publish';
import Welcome from '../Components/Welcome';
import StatsCard from '../Components/StatsCard';
import Overview from '../Components/Overview';

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
          <div className='w-8/12 ml-4'>
            <Welcome/>
            <StatsCard/>
            <Overview/>
          </div>
          <div className='w-4/12'>
            <Publish heading="Publish Announcement"/>
            <Publish heading="Publish Homework"/>
          </div>
        </div>
        
    </div>
</div>
  )
}

export default ProfessorDashboard
