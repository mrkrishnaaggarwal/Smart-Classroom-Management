import React from 'react';
import { NavLink } from 'react-router-dom';
import { RiHome3Line } from "react-icons/ri";
import { AiOutlineSchedule } from "react-icons/ai";
import { IoBarChartOutline } from "react-icons/io5";
import { BsFileEarmarkText } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoLogOutOutline } from "react-icons/io5";
import { IoHelpCircleOutline } from "react-icons/io5";
import logo from '../assets/logo.jpg';

const ProfessorSidebar = () => {
  return (
    <div className="w-[15%] h-full bg-gray-100 flex flex-col p-6">
      <div className="mb-3">
        <h2 className="text-2xl font-bold"><img className='mix-blend-multiply' src={logo} alt="logo" /></h2>
      </div>
      <nav className="w-4/5 min-w-fit">
        <ul>
          <li className="mb-2">
            <NavLink className={({ isActive }) => { return isActive ? "text-lg bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-lg hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }} to={'/Professor/Dashboard'}><RiHome3Line />Dashboard</NavLink>
          </li>
          <li className="mb-2">
            <NavLink className={({ isActive }) => { return isActive ? "text-lg bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-lg hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }} to={'/Professor/curriculum'}><IoBarChartOutline />Curriculum</NavLink>
          </li>
          <li className="mb-2">
            <NavLink className={({ isActive }) => { return isActive ? "text-lg bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-lg hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }}  to={"/Professor/classes"}><AiOutlineSchedule />Classes</NavLink>
          </li>
          <li className="mb-2">
            <NavLink className={({ isActive }) => { return isActive ? "text-lg bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-lg hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }} to={"/Professor/results"}><BsFileEarmarkText />Results</NavLink>
          </li>
          <li className="mb-2">
            <NavLink className={({ isActive }) => { return isActive ? "text-lg bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-lg hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }} to={"/myprofile"}><CgProfile />My Profile</NavLink>
          </li>
        </ul>
      </nav>
      <div className='flex flex-col justify-between flex-1 w-4/5 min-w-fit'>
        <div>
          <NavLink className={({ isActive }) => { return isActive ? "text-lg bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-lg hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }} to={"/settings"}><IoSettingsOutline />Settings</NavLink>
        </div>
        <div>
          <NavLink className={({ isActive }) => { return isActive ? "text-base bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-base hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }} to={"/help"}><IoHelpCircleOutline />Help</NavLink>
          <NavLink className={({ isActive }) => { return isActive ? "text-base bg-neutral-200 px-2 py-1 rounded-lg text-[#6A2CFF] w-full flex items-center gap-2" : "text-base text-red-600 hover:bg-gray-300 px-2 py-1 rounded-lg w-full flex items-center gap-2" }} to={"/logout"}><IoLogOutOutline />Logout Account</NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProfessorSidebar;
