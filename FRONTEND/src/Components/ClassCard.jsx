import React from 'react';

const ClassCard = ({className}) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg flex items-center justify-between mb-4">
                <div className="mr-4">
                    <h2 className="text-xl font-semibold">{className}</h2>
                </div>
        </div>
    );
};

export default ClassCard;