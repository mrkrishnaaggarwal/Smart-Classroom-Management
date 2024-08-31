// import React from 'react'
// import StudentSidebar from '../Components/StudentSidebar';
// import Topbar from '../Components/Topbar';

// const Curriculum = () => {

//   // if(!localStorage.getItem("token")){
//   //   console.log("you are not logged in");
//   //   return (<></>)
//   // }
//   return (
//     <div className="flex w-screen h-screen">
//     <StudentSidebar />
//     <div className='w-[85%]'>
//         <Topbar />
//         <div className='flex'>
//           curriculum
//         </div>
//     </div>
// </div>
//   )
// }

// export default Curriculum


import React from 'react';
import SubjectCard from '../Components/SubjectCard';

const subjects = [
  {
    name: "Physics",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "path_to_physics_image",
  },
  {
    name: "Mathematics",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "path_to_math_image",
  },
  {
    name: "Chemistry",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "path_to_chemistry_image",
  },
  // Add more subjects here
];

const Curriculum = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
      {subjects.map((subject, index) => (
        <SubjectCard key={index} subject={subject} />
      ))}
    </div>
  );
};

export default Curriculum;

