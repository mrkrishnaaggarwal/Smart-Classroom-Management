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
    const classes = [
        { className: 'X-B Class'},
        { className: 'X-B Class'},
        { className: 'X-B Class'},
        { className: 'X-B Class'},
    ];

    return (
        <div className="flex w-screen h-screen">
            <ProfessorSidebar />
            <div className='w-[85%] bg-gradient-to-b from-purple-100 via-orange-50 to-transparent'>
                <Topbar />
                <div className=''>
                    <FilterBar />
                    <div className="m-6">
                        {classes.map((classInfo, index) => (
                            <ClassCard key={index} {...classInfo} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfessorClasses;
