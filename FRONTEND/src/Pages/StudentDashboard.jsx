import React from 'react';
import axios from 'axios';
import StatsCard from '../Components/StatsCard';
import Overview from '../Components/Overview';
// import Calendar from '../Components/Calendar';
import Classe from '../Components/Class';
import Welcome from '../Components/Welcome';
import TestCalender from '../Components/TestCalender';
import StudentSidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';
import {useState,useEffect} from 'react';
const StudentDashboard  =  () => {
    return (
        <div className="flex w-screen h-screen">
            <StudentSidebar />
            <div className='w-[85%]'>
                <Topbar />
                <div className='flex'>
                    <div className='w-8/12 mr-2'>
                        <Welcome />
                        <StatsCard/>
                        <Overview />
                    </div>
                    <div className='w-4/12 ml-2'>
                        <TestCalender />
                        <Classe />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
