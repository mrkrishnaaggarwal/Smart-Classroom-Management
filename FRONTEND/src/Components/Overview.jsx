import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Jan', Performance: 40, Attendance: 24 },
  { name: 'Feb', Performance: 30, Attendance: 13 },
  { name: 'Mar', Performance: 20, Attendance: 98 },
  { name: 'Apr', Performance: 27, Attendance: 39 },
  { name: 'May', Performance: 18, Attendance: 48 },
  { name: 'Jun', Performance: 23, Attendance: 38 },
  { name: 'Jul', Performance: 34, Attendance: 43 },
];

const Overview = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full m-2 border-2 border-neutral-200">
      <h3 className="text-lg font-semibold mb-4">Overview</h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
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
