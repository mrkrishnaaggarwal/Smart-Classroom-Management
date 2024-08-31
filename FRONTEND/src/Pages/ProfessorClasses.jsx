import React from 'react';
import FilterBar from '../Components/FilterBar';
import ClassCard from '../Components/ClassCard';
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import UploadPhoto from '../Components/UploadPhoto';

const ProfessorClasses = () => {

    // if(!localStorage.getItem("token")){
    //     console.log("you are not logged in");
    //     return (<></>)
    // }
    

    return (
        <div className="flex w-screen h-screen">
            <ProfessorSidebar />
            <div className='w-[85%] bg-gradient-to-b from-purple-100 via-orange-50 to-transparent'>
                <Topbar />
                <div className=''>
                    <FilterBar />
                </div>
            </div>
        </div>
    );
};

export default ProfessorClasses;
