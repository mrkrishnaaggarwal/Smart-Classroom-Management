// import React from 'react'

// const Announcements = () => {
//   // if(!localStorage.getItem("token")){
//   //   console.log("you are not logged in");
//   //   return (<></>)
//   // }
//   return (
//     <div>
//       <h1>Announcements</h1>
//     </div>
//   )
// }

// export default Announcements


import React from 'react';

const Announcements = ({ professor, announcement }) => {
  return (
    <div className="bg-white shadow-md rounded-xl p-4 my-4">
      {/* Heading */}
      <h3 className="text-lg font-semibold mb-2">Announcement</h3>
      
      {/* Professor Name Row */}
      <div className="flex justify-start border-b pb-2 mb-2">
        <span className="font-medium mr-2">Professor:</span>
        <span>{professor}</span>
      </div>
      
      {/* Announcement Row */}
      <div className="mt-2 bg-purple-100 p-2 rounded-lg">
        <p>{announcement}</p>
      </div>
    </div>
  );
};

export default Announcements;
