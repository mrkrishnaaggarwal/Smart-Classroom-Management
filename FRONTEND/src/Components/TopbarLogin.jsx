import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import imgSrc from '../assets/tanmay.jpg';
const TopbarLogin = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () => {
    console.log('User signed out');
  };

  return (
    <div className="relative inline-block text-left ">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleDropdown}>
        <img
          src={imgSrc}
          alt="User Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="text-black font-semibold">Anshuman</span>
        <FaChevronDown className="text-white w-10" />
      </div>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
          <button
            className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100"
            onClick={signOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default TopbarLogin;
