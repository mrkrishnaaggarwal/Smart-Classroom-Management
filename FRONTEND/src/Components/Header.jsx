import React from 'react';
import headerBackground from '../assets/WavePhoto.jpg'; // Ensure you have this image in your assets


const Header = () => {
  return (
    <div
      className="relative bg-purple-600 p-4 flex items-start text-white rounded-3xl w-full"
      style={{
        backgroundImage: `url(${headerBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px', // Increased height from 150px to 200px
      }}
      //main heading
    >
      {/* Overlay to darken the background image for better text visibility */}
      <div className="absolute inset-0 bg-purple-600 opacity-50 rounded-3xl"></div>

      {/* Content on top of the background */}
      {/* <div className="relative z-10 flex justify-end items-start w-full rounded-3xl">
        <div className="flex flex-col items-end space-y-1">
          <div className="flex items-center space-x-3">
            <div className="bg-white text-purple-600 p-2 rounded-full">AP</div>
            <div className="text-lg">Anshuman Patra</div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;