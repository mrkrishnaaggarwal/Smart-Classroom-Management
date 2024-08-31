import React from 'react'

const ProfessorCurriculum = () => {

//   if(!localStorage.getItem("token")){
//     console.log("you are not logged in");
//     return (<></>)
// }
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='flex'>
          curriculm 
        </div>
      </div>
    </div>
  )
}

export default ProfessorCurriculum
