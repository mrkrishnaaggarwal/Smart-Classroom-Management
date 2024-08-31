import React from 'react'

const Logout = () => {
  try{
    localStorage.removeItem("token");
  }
  catch(e){
    console.log(e);
  }
  return (
    <div>
      Logout
    </div>
  )
}

export default Logout
