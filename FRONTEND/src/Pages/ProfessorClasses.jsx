import React from 'react';
import FilterBar from '../Components/FilterBar';
import ClassCard from '../Components/ClassCard';
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';

const ProfessorClasses = () => {

    // if(!localStorage.getItem("token")){
    //     console.log("you are not logged in");
    //     return (<></>)
    // }
    const classes = [
        { className: 'CS-A Class' },
        { className: 'CS-B Class' },
        { className: 'IT-A Class' },
        { className: 'ECE-A Class' }
    ];

    return (
        <div className="flex w-screen h-screen">
            <ProfessorSidebar />
            <div className='w-[85%]'>
                <Topbar />
                <FilterBar />
                <div className='p-4'>
                    {classes.map((classInfo, index) => (
                        <ClassCard 
                            key={index} 
                            {...classInfo} 
                        //     onClick={() => {
                        //       setSelectedClass(classInfo.className);
                        //       setIsVisible(true);  
                        //   }}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProfessorClasses;
