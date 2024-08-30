import React from 'react';
import StatsCard from '../Components/StatsCard';
import Overview from '../Components/Overview';
import Calendar from '../Components/Calendar';
import Classe from '../Components/Classe';
import  Welcome  from '../Components/Welcome';
import TestCalender from '../Components/TestCalender';

const Dashboard = () => {
    return (
        <div className="flex flex-col p-6">
            <div className='flex'>
                <div className='w-9/12 mr-2'>
                    <Welcome/>
                    <StatsCard />
                    <Overview />
                </div>
                <div className='w-3/12 ml-2'>
                    {/* <Calendar /> */}
                    <TestCalender/>
                    <Classe />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
