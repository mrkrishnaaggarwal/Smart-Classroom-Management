import React from 'react';
import { useLocation } from 'react-router-dom';
import { BiMessageDetail } from "react-icons/bi";
import { MdOutlineNotifications } from "react-icons/md";
import TopbarLogin from './TopbarLogin';

const Topbar = () => {
  const location = useLocation();
  const pageName = location.pathname.split('/').pop() || 'Home';
  const capitalizedPageName = pageName.charAt(0).toUpperCase() + pageName.slice(1);
  

  return (
    <div className="bg-white p-2 flex items-center justify-between max-h-fit mb-4 border-b-2 border-neutral-300">
      <div className="text-3xl font-bold text-blue-900">{capitalizedPageName}</div>
      <div className="flex w-1/5 items-center justify-between">
        <button className=''><BiMessageDetail style={{ height: '19px', width: '19px' }} /></button>
        <button className=''><MdOutlineNotifications style={{ height: '20px', width: '20px' }} /></button>
        <div><TopbarLogin/></div>
      </div>
    </div>
  )
}

export default Topbar;
