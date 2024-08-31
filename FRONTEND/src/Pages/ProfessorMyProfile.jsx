import React from 'react'
import MainLayout from '../Components/MainLayout';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Sidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';

const ProfessorMyProfile = () => {

//   if(!localStorage.getItem("token")){
//     console.log("you are not logged in");
//     return (<></>)
// }
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/professor/myprofile", {
                    headers : {
                        Authorization : "Bearer "+ localStorage.getItem(token)
                    }
                });
                setUserData(response.data);
            } catch (e) {
                setError('Error fetching user data');
                console.error(e);
            }
        }
        },[]);
  return (
    <>
     <div className="flex w-screen h-screen">
     <Sidebar />
     <div className='w-[85%]'>
       <Topbar />
       <div className='flex'>
         <MainLayout props = {userData}/>
       </div>
     </div>
   </div>
    </>
  )
}

export default ProfessorMyProfile;