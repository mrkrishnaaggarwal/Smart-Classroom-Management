import React, { useState } from 'react';
import { RxCross2 } from "react-icons/rx";
import { FaCheck } from "react-icons/fa";

const Publish = ({ heading = "Publish Announcement"}) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const handleDateChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="w-[80%] mx-auto p-4 my-2 rounded-lg shadow-md border-2 border-neutral-200 min-h-fit">
            <h2 className="text-lg font-semibold mb-4">{heading}</h2>
            
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            

            <div className="mb-4">
                <textarea
                    placeholder="Text"
                    className="w-full p-3 border border-gray-300 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="4"
                />
            </div>

            <div className="flex justify-end items-center">
                <div>
                    <button className="mr-2 px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 focus:outline-none"><RxCross2 /></button>
                    <button className="px-4 py-2 bg-purple-400 text-white rounded-lg hover:bg-purple-500 focus:outline-none"><FaCheck /></button>
                </div>
            </div>
        </div>
    );
};

export default Publish;
