import React from 'react';
import UploadPhoto from './UploadPhoto';

const FilterBar = () => {
    return (
        <div className="flex justify-between items-center p-4 w-full">
                <select className="py-3 px-6 border border-gray-300 rounded">
                    <option>Class</option>
                    <option>CS-A</option>
                    <option>CS-B</option>
                    <option>IT-A</option>
                    <option>ECE-B</option>
                </select>
                <UploadPhoto/>
        </div>
    );
};

export default FilterBar;
