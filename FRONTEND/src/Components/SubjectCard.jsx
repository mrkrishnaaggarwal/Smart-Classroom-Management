import React from 'react';
import { FaDownload } from "react-icons/fa6";

const SubjectCard = ({ subject }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white border-2 border-neutral-200 w-4/5">
      <img className="w-full h-1/2" src={subject.image} alt={subject.name} />
      <div className="px-6 py-2">
        <div className="font-bold text-xl mb-2">{subject.name}</div>
        <div className="text-gray-700 text-base">
          Assignment: {subject.assignment}
        </div>
        <div className="text-gray-700 text-base">
          Marks: {subject.marks}
        </div>
      </div>
      <div className="px-6 pb-2 flex justify-center">
        <button className="bg-white hover:bg-purple-600 hover:text-white text-purple-500 border border-purple-500 font-bold py-2 px-4 shadow-md flex items-center gap-2 rounded-lg">
        <FaDownload />Download Resources
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
