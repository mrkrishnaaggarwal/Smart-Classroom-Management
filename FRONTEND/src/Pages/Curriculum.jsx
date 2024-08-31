import React from 'react';
import SubjectCard from '../Components/SubjectCard';
import StudentSidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';

const subjects = [
  {
    name: "Physics",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "https://th.bing.com/th/id/OIP.6m9ak3KaHQ_wBaLNUNckbQHaEo?w=299&h=186&c=7&r=0&o=5&dpr=1.3&pid=1.7",
  },
  {
    name: "Mathematics",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "https://th.bing.com/th/id/OIP.FHkyarijHWa-4OhEc8IalAHaEK?w=1920&h=1080&rs=1&pid=ImgDetMain",
  },
  {
    name: "Chemistry",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "https://th.bing.com/th/id/OIP.f32jWCFl2DKDewRumqPNjwHaEU?rs=1&pid=ImgDetMain",
  },
  {
    name: "Science",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "https://thumbs.dreamstime.com/b/science-chemistry-physics-biology-astronomy-education-subject-doodle-icon-doodle-presenation-title-school-91147329.jpg",
  },
  {
    name: "Hindi",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "https://images.news18.com/ibnlive/uploads/2021/09/happy-hindi-diwas-16315868654x3.jpg?impolicy=website&width=640&height=480",
  },
  {
    name: "English",
    assignment: "Calculus Practice Problems",
    marks: 100,
    image: "https://media.istockphoto.com/vectors/english-language-learning-concept-vector-vector-id1288019626?b=1&k=20&m=1288019626&s=170667a&w=0&h=J7Qp8H1hKnxyZ2E8WLsT1QBp9A5uPpl18Ma54YOLqWI=",
  },
  
];

const Curriculum = () => {
  return (
    <div className="flex w-screen h-screen">
      <StudentSidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 h-[92%]">
          {subjects.map((subject, index) => (
            <SubjectCard key={index} subject={subject} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Curriculum;

