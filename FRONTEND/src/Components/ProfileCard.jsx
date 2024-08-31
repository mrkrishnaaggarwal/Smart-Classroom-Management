import React from 'react';
import { FaPen } from 'react-icons/fa';

const ProfileCard = ({ title, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl">
      {/* Title with full purple background */}
      <div className="bg-purple-600 text-white font-semibold px-4 py-2 flex items-center justify-between">
        <span>{title}</span>
        <FaPen className="text-xl" />
      </div>
      {/* Card content */}
      <div className="p-4">
        {children}
      </div>
    </div>
  );
}

export default ProfileCard;