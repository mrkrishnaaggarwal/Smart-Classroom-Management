import React from 'react'
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import Publish from '../Components/Publish';
import Welcome from '../Components/Welcome';
import StatsCard from '../Components/StatsCard';
import Overview from '../Components/Overview';
import ProfessorCalendar from '../Components/ProfessorCalendar';
import { useState,useEffect } from 'react';
import axios from 'axios'
const ProfessorDashboard = () => {
  const [profile, setProfile] = useState(null);
  if (!localStorage.getItem("token")) {
      console.log("You are not logged in");
      return null;
  }

  useEffect(() => {
      const fetchProfile = async () => {
          try {
              const response = await axios.get('http://localhost:3000/api/v1/Professor/myprofile', {
                  headers: {
                      Authorization: "Bearer " + localStorage.getItem("token")
                  },
              });
              console.log(response);
              setProfile(response.data.data.name); // Assuming response.data.data.name contains the name of the student
          } catch (error) {
              console.error('Error fetching profile:', error);
          }
      };

      fetchProfile();
  }, []);
  return (
    <div className="flex w-screen h-screen">
    <ProfessorSidebar />
    <div className='w-[85%]'>
        <Topbar props = {"Professor"}/>
        <div className='flex m-4 gap-4'>
          <div className='w-8/12'>
            <Welcome name = {profile}/>
            <div className='flex gap-4'>
              <Publish heading="Publish Announcement"/>
              <Publish heading="Publish Homework"/>
            </div>
          </div>
          <div className='w-4/12'>
            <ProfessorCalendar/>
          </div>
        </div>
        
    </div>
</div>
  )
}

export default ProfessorDashboard
