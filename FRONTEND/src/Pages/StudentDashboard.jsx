import React, { useState, useEffect } from 'react';
import axios from 'axios';
import StatsCard from '../Components/StatsCard';
import Overview from '../Components/Overview';
import Welcome from '../Components/Welcome';
import TestCalender from '../Components/TestCalender';
import StudentSidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';



const StudentDashboard = () => {
    const [profile, setProfile] = useState(null);
    if (!localStorage.getItem("token")) {
        console.log("You are not logged in");
        return null;
    }

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/v1/student/myprofile', {
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
        <div className="flex w-screen h-screen overflow-x-hidden">
            <StudentSidebar />
            <div className='w-[85%]'>
                <Topbar props = {"Student"}/>
                <div className='flex mt-4'>
                    <div className='w-8/12 mr-2'>
                        <Welcome name={profile} /> {/* Passing the profile name as a prop */}
                        <StatsCard />
                        <Overview />
                    </div>
                    <div className='w-4/12 ml-2'>
                        <TestCalender/>

                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
