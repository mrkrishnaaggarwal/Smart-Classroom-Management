import React from 'react';

const StatsCard = () => {
  return (
    <div className="grid grid-cols-3 gap-6 m-2 w-full">
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-neutral-200">
        <h3 className="text-lg font-semibold">Course Progress</h3>
        <p className="text-2xl font-bold">75%</p>
        <p className="text-sm text-gray-500">112 out of 150 classes</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-neutral-200">
        <h3 className="text-lg font-semibold">Attendance Rate</h3>
        <p className="text-2xl font-bold">84/112</p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md border-2 border-neutral-200">
        <h3 className="text-lg font-semibold">Exam Scores</h3>
        <p className="text-2xl font-bold">225/300</p>
      </div>
    </div>
  );
};

export default StatsCard;
