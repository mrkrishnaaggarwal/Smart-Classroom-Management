import React from 'react';

const Class = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md m-2 border-2 border-neutral-200">
      <h3 className="text-lg font-semibold mb-4">Classes</h3>
      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-bold">10:00 - 12:30 PM</h4>
          <p className="text-gray-600">Lights & Optics - by Prof. Ian Fritz</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg">
          <h4 className="font-bold">1:00 - 2:30 PM</h4>
          <p className="text-gray-600">Literary Analysis - by Prof. Jane Doe</p>
        </div>
        <div className="p-4 bg-gray-100 rounded-lg ">
          <h4 className="font-bold">3:00 - 4:30 PM</h4>
          <p className="text-gray-600">Integration Techniques - by Prof. John Smith</p>
        </div>
      </div>
    </div>
  );
};

export default Class;
