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
import Class from '../Components/Class';
const StudentDashboard  =  () => {

    // if(!localStorage.getItem("token")){
    //     console.log("you are not logged in");
    //     return (<></>)
    // }
    return (
        <div className="flex w-screen h-screen overflow-x-hidden">
            <StudentSidebar />
            <div className='w-[85%]'>
                <Topbar />
                <div className='flex mt-4'>
                    <div className='w-8/12 mr-2'>
                        <Welcome />
                        <StatsCard/>
                        <Overview />
                    </div>
                    <div className='w-4/12 ml-2'>
                        <TestCalender/>
                        <Class/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentDashboard;
