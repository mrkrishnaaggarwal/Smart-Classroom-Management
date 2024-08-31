import React from 'react'
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import UploadPhoto from '../Components/UploadPhoto';
import FilterBar from '../Components/FilterBar';

const ProfessorAttendence = () => {
  // if(!localStorage.getItem("token")){
  //   console.log("you are not logged in");
  //   return (<></>)
  // }
  return (
    <div className="flex w-screen h-screen">
      <ProfessorSidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='flex items-center justify-evenly'>
            <FilterBar/>
            <UploadPhoto/>
        </div>
      </div>
    </div>
  )
}

export default ProfessorAttendence
