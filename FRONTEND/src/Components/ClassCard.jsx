import React from 'react';

const ClassCard = ({className,onClick}) => {
    return (
        
        <div className="bg-white border-2 border-neutral-300 p-4 rounded-xl shadow-lg flex items-center justify-between mb-4 cursor-pointer" onClick={onClick}>
                <div className="mr-4">
                    <h2 className="text-xl font-semibold">{className}</h2>
                </div>
        </div>
    );
};

export default ClassCard;