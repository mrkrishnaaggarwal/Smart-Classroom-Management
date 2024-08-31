// import React from 'react';
// import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const data = [
//   { name: 'Jan', Performance: 40, Attendance: 24 },
//   { name: 'Feb', Performance: 30, Attendance: 13 },
//   { name: 'Mar', Performance: 20, Attendance: 98 },
//   { name: 'Apr', Performance: 27, Attendance: 39 },
//   { name: 'May', Performance: 18, Attendance: 48 },
//   { name: 'Jun', Performance: 23, Attendance: 38 },
//   { name: 'Jul', Performance: 34, Attendance: 43 },
// ];

// const Overview = () => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md w-full m-2 border-2 border-neutral-200">
//       <h3 className="text-lg font-semibold mb-4">Overview</h3>
//       <ResponsiveContainer width="100%" height={250}>
//         <LineChart data={data}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line type="monotone" dataKey="Performance" stroke="#8884d8" />
//           <Line type="monotone" dataKey="Attendance" stroke="#82ca9d" />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };


//export default Overview;
// import React, { useEffect, useState } from 'react';
// import {
//   LineChart,
//   Line,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer
// } from 'recharts';
// import axios from 'axios';

// const Overview = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('/api/performance-data'); // Replace with your actual API endpoint
//         setData(response.data);
//       } catch (err) {
//         console.error('Error fetching the data:', err);
//         setError('Failed to load data');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) return <div>Loading...</div>;
//   if (error) return <div>{error}</div>;

//   return (
//     <div className="bg-white p-6 rounded-lg shadow-md w-full m-2 border-2 border-neutral-200">
//       <h3 className="text-lg font-semibold mb-4">Yearly Performance and Attendance Overview</h3>
//       <ResponsiveContainer width="100%" height={300}>
//         <LineChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="name" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Line
//             type="monotone"
//             dataKey="Performance"
//             stroke="#8884d8"
//             activeDot={{ r: 8 }}
//             isAnimationActive={true}
//             animationDuration={1500}
//           />
//           <Line
//             type="monotone"
//             dataKey="Attendance"
//             stroke="#82ca9d"
//             isAnimationActive={true}
//             animationDuration={1500}
//           />
//         </LineChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default Overview;


import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Overview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/student/seeStats',{
          headers : {
            'Authorization' : "Bearer " + localStorage.getItem('token')
          }
        }); // Replace with your actual API endpoint
        const result = await response.json();
        console.log(result);
        // Transform the data to match the format required by Recharts
        const formattedData = result.stats.map(([subject, performance, classesAttended, totalClasses]) => ({
          name: subject,
          Performance: performance,
          Attendance: (classesAttended / totalClasses) * 100,
        }));

        setData(formattedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full m-2 border-2 border-neutral-200">
      <h3 className="text-lg font-semibold mb-4">Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="Performance" stroke="#8884d8" />
          <Line type="monotone" dataKey="Attendance" stroke="#82ca9d" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Overview;