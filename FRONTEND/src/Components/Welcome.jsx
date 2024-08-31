import React from 'react';
import './styles.css'; // Ensure to import your CSS file or place the CSS in a global stylesheet

const Welcome = ({ name }) => {
  return (
    <div className="moving-background text-white rounded-xl p-4 ml-2 max-h-fit">
      <h2 className="text-sm font-semibold">WELCOME BACK</h2>
      <h1 className="text-3xl font-bold mt-1">{name}</h1>
      <div className='mt-1'>Great To See You Again!</div>
      <div>Check Your Classes, Timetable, Homework, And Attendance On Your Dashboard.</div>
    </div>
  );
}

export default Welcome;
