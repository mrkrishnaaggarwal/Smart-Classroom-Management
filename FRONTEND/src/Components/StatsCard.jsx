import React, { useState, useEffect } from 'react';
import axios from 'axios';

const StatsCard = () => {
  const [percent, setPercent] = useState(0);
  const [attended, setAttended] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/v1/student/totalattendance", {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        });
        console.log(response.data);
        // Update state with the response data
        setPercent(response.data.percent);
        console.log(response.data.present);
        setAttended(response.data.present);
        setTotal(response.data.total);
      } catch (e) {
        console.error(e);
      }
    };

    fetchAttendance(); // Call the async function
  }, []);
  return (
    <div className="grid grid-cols-3 gap-6 m-2 w-full">
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-neutral-200">
        <h3 className="text-lg font-semibold">Course Progress</h3>
        <p className="text-2xl font-bold">75%</p>
        <p className="text-sm text-gray-500">112 out of 150 classes</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-neutral-200">
        <h3 className="text-lg font-semibold">Attendance Rate</h3>
        <p className="text-2xl font-bold">{attended}/{total}</p>
        <p className="text-2xl font-bold">{percent}%</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-neutral-200">
        <h3 className="text-lg font-semibold">Exam Scores</h3>
        <p className="text-2xl font-bold">225/300</p>
      </div>
    </div>
  );
};

export default StatsCard;
