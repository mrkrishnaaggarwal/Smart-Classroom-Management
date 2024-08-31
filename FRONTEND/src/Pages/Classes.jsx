import React from 'react'
import Sidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';

const Classes = () => {

  // if(!localStorage.getItem("token")){
  //   console.log("you are not logged in");
  //   return (<></>)
  // }
  return (
    <div className="flex w-screen h-screen">
    <Sidebar />
    <div className='w-[85%]'>
        <Topbar />
        <div className='flex'>
          Classes
        </div>
    </div>
</div>
  )
}

export default Classes
