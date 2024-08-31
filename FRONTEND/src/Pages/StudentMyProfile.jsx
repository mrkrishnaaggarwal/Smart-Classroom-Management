import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import MainLayout from '../Components/MainLayout';
import Sidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';

const StudentMyProfile = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
    
  useEffect(() => {
    const fetchUserData = async () => {
        try {
            const response = await axios.get("http://localhost:3000/api/v1/student/myprofile", {
                headers : {
                    Authorization : "Bearer "+ localStorage.getItem(token)
                }
            });
            setUserData(response.data);
            console.log("hihihihiihihi");
        } catch (e) {
            setError('Error fetching user data');
            console.error(e);
            
        }
      }
    },[]);
    
    
  return (
    <div className="flex w-screen h-screen">
    <Sidebar />
    <div className='w-[85%]'>
      <Topbar />
      <div className='flex'>
        <MainLayout props = {userData}/>
      </div>
    </div>
  </div>
  )
}

export default StudentMyProfile;