import React from 'react';
import StudentSidebar from '../Components/StudentSidebar';
import Topbar from '../Components/Topbar';
import ResultCard from '../Components/ResultCard'; // Import the ResultCard component

const Results = () => {
  // Example data for results
  const resultsData = [
    { code: 'ENG252', subjectTitle: 'English', creditPoint: '4.5', grade: 'A', obtainedMarks: '085', maxMarks: '100' },
    { code: 'PHY252', subjectTitle: 'Physics', creditPoint: '4.0', grade: 'B', obtainedMarks: '075', maxMarks: '100' },
    // Add more subjects as needed
  ];

  // Pass/Fail status
  const passStatus = 'Pass'; // This can be dynamically determined based on the resultsData

  return (
    <div className="flex w-screen h-screen">
      <StudentSidebar />
      <div className='w-[85%]'>
        <Topbar />
        <div className='flex flex-col mt-4'>
          {/* Top section with heading, dropdown, and button */}
          <div className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg shadow-md">
            {/* Heading on the left side */}
            <h2 className="text-xl font-semibold">Annual Exam Results</h2>
            {/* Buttons on the right side */}
            <div className="flex space-x-4">
              {/* Dropdown for student exam selection */}
              <select className="p-2 rounded-lg border border-gray-300">
                <option value="exam1">Mid-Term Examination</option>
                <option value="exam2">Final Examination</option>
                <option value="exam3">Quarterly Examination</option>
              </select>
              {/* Download Marksheet button */}
              <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
                Download Marksheet
              </button>
            </div>
          </div>
          {/* ResultCard component */}
          <div className='w-full mt-4'>
            <ResultCard results={resultsData} passStatus={passStatus} /> {/* Pass results and passStatus as props */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;