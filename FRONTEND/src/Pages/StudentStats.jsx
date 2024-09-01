import React, { useEffect, useState } from 'react';
import StudentSidebar from '../Components/StudentSidebar';  // Adjust the import path as needed
import Topbar from '../Components/Topbar';          // Adjust the import path as needed
import axios from 'axios';

const StudentStats = () => {
  // Example data stored in a Map. In a real scenario, this would come from a database.
  const [Data, setData] = useState([]);
  useEffect(() => {
    console.log("hi");
    const fetchResult = async () => {
      const response = await axios.get("http://localhost:3000/api/v1/student/seeStats", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token")
        }
      });
      console.log(response.data.stats);
      setData(response.data.stats);
    }
    fetchResult();
  }, []);

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
              {Data.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className='border-b p-2 text-center'>{item[0]}</td>
                    <td className='border-b p-2 text-center'>{item[2]}</td>
                    <td className='border-b p-2 text-center'>{item[3]}</td>
                    <td className='border-b p-2 text-center'>{parseInt(item[2]/item[3]*100)+"%"}</td>
                    <td className='border-b p-2 text-center'>{item[1]}</td>
                    <td className='border-b p-2 text-center'>100</td>
                    <td className='border-b p-2 text-center'>{parseInt(item[1])+"%"}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentStats;
