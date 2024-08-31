// src/TestCalender.js
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
// import './calendarStyles.css'; // We'll add some custom styles
import './TestCalender.css';

const TestCalender = () => {
  const [date, setDate] = useState(new Date());

  const handleDateClick = (value) => {
    alert(`You clicked on ${value.toDateString()}`);
  };

   const isToday = (date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };
  return (
      <div className="bg-white shadow-lg rounded-lg p-2 border-2 border-neutral-200 ">
        <Calendar
          onChange={setDate}
          value={date}
          onClickDay={handleDateClick}
          className="react-calendar"
          tileClassName={({ date, view }) => {
            if (isToday(date)) {
                return 'bg-blue-500 text-white rounded-md';
              }
              return 'text-center p-2 rounded-md transition-colors hover:bg-blue-100';
          }}
        />
      </div>
  );
};

export default TestCalender;
