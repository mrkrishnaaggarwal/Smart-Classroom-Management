import { FaChevronDown } from 'react-icons/fa';
import { useState,useEffect } from 'react';
import axios from 'axios';
const TopbarLogin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [imageData, setImageData] = useState('');
  const [name, setName] = useState('');

  useEffect(() => {
    const fetchImage = async () => {
      try {
        console.log(localStorage.getItem("token"));
        const response = await axios.get('http://localhost:3000/api/v1/student/myprofile',{
          headers :{
            Authorization : "Bearer " + localStorage.getItem("token")
          },
        });
        console.log(response);
        setImageData(response.data.data.photograph);
        setName(response.data.data.name);
      } catch (error) {
        console.error('Error fetching image:', error);
      }
    };

    fetchImage();
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const signOut = () => {
    console.log('User signed out');
  };

  return (
    <div className="relative inline-block text-left ">
      <div className="flex items-center space-x-3 cursor-pointer" onClick={toggleDropdown}>
      <img src={`data:image/jpeg;base64,${imageData}`} alt="User Profile" className='w-10 h-10 rounded-full border'/>
        {/* 2 lines of code were removed and one line above was added */}
        <span className="text-black font-semibold">{name}</span>
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
