import { useEffect } from "react";
import React, { useState } from 'react';


const StudentAttendenceCard = ({ name, rollNo, status }) => {
    const [attendance, setAttendance] = useState(null);
    
    useEffect(() => {
        if (status === 1) {
            setAttendance('yes');
        } else {
            setAttendance('no');
        }
    }, [status]);
    
    return (
        <div className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between w-full max-w-lg mx-auto mt-4 relative">
            <div className="flex flex-col">
                <span className="font-semibold">Name</span>
                <span>{name}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold">Roll No.</span>
                <span>{rollNo}</span>
            </div>
            <div className="flex flex-col">
                <span className="font-semibold">Attendance</span>
                <div className="flex space-x-4 mt-2">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name={`attendance-${rollNo}`} // Corrected interpolation
                            value="yes"
                            checked={attendance === 'yes'}
                            onChange={() => setAttendance('yes')}
                            className="mr-2"
                        />
                        Yes
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name={`attendance-${rollNo}`} // Corrected interpolation
                            value="no"
                            checked={attendance === 'no'}
                            onChange={() => setAttendance('no')}
                            className="mr-2"
                        />
                        No
                    </label>
                </div>
            </div>
        </div>
    );
};

export default StudentAttendenceCard;
