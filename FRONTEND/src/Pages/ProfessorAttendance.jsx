import React, { useState } from 'react';
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import UploadPhoto from '../Components/UploadPhoto';
import FilterBar from '../Components/FilterBar';
import ClassCard from '../Components/ClassCard';
import StudentAttendanceCard from '../Components/StudentAttendanceCard';

const ProfessorAttendance = () => {
    const [selectedClass, setSelectedClass] = useState(null);
    const [isVisible, setIsVisible] = useState(true);
    const closeDiv = () => {
        setIsVisible(false);
        setSelectedClass(null);
    };
    const classes = [
        { className: 'CS-A Class' },
        { className: 'CS-B Class' },
        { className: 'IT-A Class' },
        { className: 'ECE-A Class' }
    ];

    const attendance = [
        ["123102130", 1],
        ["123102114", 0],
        ["123102115", 0],
        ["123102116", 1]
    ];
    return (
        <div className="flex w-screen h-screen">
            <ProfessorSidebar />
            <div className='w-[85%] relative'>
                <Topbar />
                <div className='flex items-center justify-evenly'>
                    <FilterBar />
                    <UploadPhoto />
                </div>
                <div className='p-4 '>
                    {classes.map((classInfo, index) => (
                        <ClassCard 
                            key={index} 
                            {...classInfo} 
                            onClick={() => {
                              setSelectedClass(classInfo.className);
                              setIsVisible(true);  
                          }}
                        />
                    ))}
                </div>

                {selectedClass && (
                    <div className={`w-3/5 p-4 absolute top-40 left-1/2 transform -translate-x-1/2 bg-neutral-300 backdrop-blur-3xl bg-opacity-30 border-2 rounded-xl ${isVisible?"":"hidden"}`}>
                        <button onClick={closeDiv} className="absolute top-2 right-2 text-gray-600 hover:text-black">&times;</button>
                        <h2 className="text-2xl font-bold mb-4">{selectedClass}</h2>
                        {attendance.map((item) => {
                            return <StudentAttendanceCard 
                                        name={"Student Name"} 
                                        rollNo={item[0]} 
                                        status={item[1]} 
                                        key={item[0]} 
                                    />
                        })}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ProfessorAttendance;
