import React from 'react'

const Logout = () => {
  try{
    localStorage.removeItem("token");
  }
  catch(e){
    console.log(e);
  }
  return (
    <div className="flex w-screen h-screen">
      <Sidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='flex'>
          Logout
        </div>
      </div>
    </div>
  )
}

export default Logout
