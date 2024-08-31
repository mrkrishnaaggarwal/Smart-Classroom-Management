import React, { useState } from 'react';
import StudentSidebar from '../Components/StudentSidebar';  // Adjust the import path as needed
import Topbar from '../Components/Topbar';          // Adjust the import path as needed

const StudentStats = () => {
  // Example data stored in a Map. In a real scenario, this would come from a database.
  const [attendanceData] = useState(new Map([
    ['Mathematics', { totalClasses: 50, attendedClasses: 45, performance: '90%', marks: 85, totalMarks: 100 }],
    ['Physics', { totalClasses: 40, attendedClasses: 35, performance: '87.5%', marks: 80, totalMarks: 100 }],
    ['Chemistry', { totalClasses: 45, attendedClasses: 40, performance: '88.9%', marks: 82, totalMarks: 100 }],
    ['Biology', { totalClasses: 30, attendedClasses: 27, performance: '90%', marks: 88, totalMarks: 100 }],
  ]));

  return (
    <div className="flex w-screen h-screen">
      <StudentSidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='p-6'>
          <h1 className='text-2xl font-bold mb-4'>Attendance and Performance</h1>
          <table className='w-full text-left border-collapse rounded-lg overflow-hidden shadow-md'>
            <thead>
              <tr className='bg-purple-300'>
                <th className='border-b-2 p-2 w-1/6 text-center'>Subject</th>
                <th className='border-b-2 p-2 w-1/6 text-center'>Classes Attended</th>
                <th className='border-b-2 p-2 w-1/6 text-center'>Total Classes</th>
                <th className='border-b-2 p-2 w-1/6 text-center'>Percentage</th>
                <th className='border-b-2 p-2 w-1/6 text-center'>Marks</th>
                <th className='border-b-2 p-2 w-1/6 text-center'>Total Marks</th>
                <th className='border-b-2 p-2 w-1/6 text-center'>Performance</th>
              </tr>
            </thead>
            <tbody>
              {Array.from(attendanceData.entries()).map(([subject, { totalClasses, attendedClasses, performance, marks, totalMarks }]) => {
                const attendancePercentage = ((attendedClasses / totalClasses) * 100).toFixed(2) + '%';

                return (
                  <tr key={subject}>
                    <td className='border-b p-2 text-center'>{subject}</td>
                    <td className='border-b p-2 text-center'>{attendedClasses}</td>
                    <td className='border-b p-2 text-center'>{totalClasses}</td>
                    <td className='border-b p-2 text-center'>{attendancePercentage}</td>
                    <td className='border-b p-2 text-center'>{marks}</td>
                    <td className='border-b p-2 text-center'>{totalMarks}</td>
                    <td className='border-b p-2 text-center'>{performance}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentStats;
