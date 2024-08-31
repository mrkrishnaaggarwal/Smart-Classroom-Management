import React from 'react';
import FilterBar from '../Components/FilterBar';
import ClassCard from '../Components/ClassCard';
import ProfessorSidebar from '../Components/ProfessorSidebar';
import Topbar from '../Components/Topbar';
import UploadPhoto from '../Components/UploadPhoto';

const ProfessorClasses = () => {
    const classes = [
        { className: 'X-B Class', tutorName: 'Madona Bulia', grade: '7.5', performanceColor: 'bg-green-500' },
        { className: 'X-B Class', tutorName: 'Madona Bulia', grade: '7.5', performanceColor: 'bg-yellow-500' },
        { className: 'X-B Class', tutorName: 'Madona Bulia', grade: '7.5', performanceColor: 'bg-red-500' },
        { className: 'X-B Class', tutorName: 'Madona Bulia', grade: '7.5', performanceColor: 'bg-green-500' },
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
