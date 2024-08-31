import React from 'react';
import UploadPhoto from './UploadPhoto';

const FilterBar = () => {
    return (
        <div className="flex items-center p-4 w-full">
                <select className="border border-gray-300 rounded">
                    <option disabled selected>Class</option>
                    <option>CS-A</option>
                    <option>CS-B</option>
                    <option>IT-A</option>
                    <option>ECE-B</option>
                </select>
        </div>
    );
};

export default FilterBar;
