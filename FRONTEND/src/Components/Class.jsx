import React from 'react';

const Class = ({props}) => {
  console.log(props);
  
  return (
      <>
      <div className="bg-white p-6 rounded-lg shadow-md m-2 border-2 border-neutral-200">
        <h3 className="text-lg font-semibold mb-4">Classes</h3>
        <div className="space-y-4">
          {props.map((prop, index) => (
            <div key={index} className="p-4 bg-gray-100 rounded-lg">
              <h4 className="font-bold">{prop}</h4>
            </div>
          ))}
        </div>
      </div>
      </>
    );
};

export default Class;
