// src/TestCalender.js
import React, { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './TestCalender.css';
import axios from 'axios';
import Classe from '../Components/Class';

const TestCalender = () => {
  const dayobj = {
    0: "Sunday",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday"
  };

  const [day, setDay] = useState([]);
  const [date, setDate] = useState(new Date());
  const [IsVisible,setIsVisible] = useState(null);

  // Fetch classes for the current day on component mount
  useEffect(() => {
    const fetchClassesForCurrentDay = async () => {
      try {
        const currentDay = new Date().getDay();
        if(currentDay===0||currentDay===6){
          setIsVisible(false);
          return;
        }
        else{
          setIsVisible(true);
        }
        const response = await axios.post(
          'http://localhost:3000/api/v1/student/classesForDay',
          { day: dayobj[3] },
          {
            headers: {
              Authorization: "Bearer " + localStorage.getItem('token'),
            },
          }
        );
        setDay(response.data.classes);
      } catch (error) {
        console.error('Error fetching classes for the current day:', error);
      }
    };

    fetchClassesForCurrentDay();
  }, []); // Empty dependency array to run only once on mount

  const handleDateClick = async (value) => {
    const day = value.getDay();
    if(day===0||day===6){
      setIsVisible(false);
      return;
    }
    else{
      setIsVisible(true);
    }
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/student/classesForDay',
        { day: dayobj[day] },
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem('token'),
          },
        }
      );
      setDay(response.data.classes);
    } catch (error) {
      console.error('Error fetching classes for the selected day:', error);
    }
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
    <div className="bg-white shadow-lg rounded-lg p-2 border-2 border-neutral-200">
      <Calendar
        onChange={setDate}
        value={date}
        onClickDay={handleDateClick}
        className="react-calendar"
        tileClassName={({ date }) => {
          if (isToday(date)) {
            return 'bg-blue-500 text-white rounded-md';
          }
          return 'text-center p-2 rounded-md transition-colors hover:bg-blue-100';
        }}
      />

      {IsVisible && <Classe props={day} />}
    </div>
  );
};

export default TestCalender;
