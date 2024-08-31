import React from 'react';

const SubjectCard = ({ subject }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <img className="w-full" src={subject.image} alt={subject.name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{subject.name}</div>
        <p className="text-gray-700 text-base">
          Assignment: {subject.assignment}
        </p>
        <p className="text-gray-700 text-base">
          Marks: {subject.marks}
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Resources
        </button>
      </div>
    </div>
  );
};

export default SubjectCard;
