import React from 'react';

const Header2 = (prop) => {
  return (
    <div className="bg-white/80 p-2 flex justify-between items-center rounded-2xl w-11/12 mx-auto">
      <div className="flex items-center space-x-3">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Profile"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <div className="text-gray-800 font-medium">{prop.name}</div>
          <div className="text-gray-600 text-sm">
            <span className="block">ID: {prop.email} | Class: 12(A)</span>
          </div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        <img 
          src="https://via.placeholder.com/40" 
          alt="Class Teacher"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col">
          <div className="text-gray-600 text-sm">Class Teacher</div>
          <div className="text-gray-800 font-medium">
            <span className="block">Mrs. Tanya Roy</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header2;