import React from 'react';

const ClassCard = ({ className, tutorName, grade, performanceColor }) => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between mb-4">
            <div className="flex items-center">
                <div className="mr-4">
                    <h2 className="text-xl font-semibold">{className}</h2>
                    <div className="flex items-center space-x-2">
                        {/* Replace these with images */}
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300"></div>
                        <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-xs text-white bg-purple-600">
                            +2
                        </div>
                    </div>
                </div>
                <div>
                    <p className="text-sm text-gray-500">{tutorName}</p>
                </div>
            </div>
            <div className="flex items-center space-x-4">
                <div className="bg-purple-200 w-16 h-8"></div>
                <div className="relative">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white ${performanceColor}`}>
                        {grade}
                    </div>
                </div>
                <div className="w-24 h-2 bg-purple-200 rounded-full"></div>
            </div>
        </div>
    );
};

export default ClassCard;
