import React from 'react';

const Calendar = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-2 border-2 border-neutral-200">
      <h3 className="text-lg font-semibold mb-4">June 2024</h3>
      <div className="grid grid-cols-7 gap-2">
        <div className="text-center">S</div>
        <div className="text-center">M</div>
        <div className="text-center">T</div>
        <div className="text-center">W</div>
        <div className="text-center">T</div>
        <div className="text-center">F</div>
        <div className="text-center">S</div>
        {/* Repeat for all days */}
        <div className="text-center text-gray-500">1</div>
        <div className="text-center text-gray-500">2</div>
        <div className="text-center">3</div>
        <div className="text-center">4</div>
        <div className="text-center">5</div>
        <div className="text-center">6</div>
        <div className="text-center">7</div>
        {/* Continue with other days */}
      </div>
    </div>
  );
};

export default Calendar;
