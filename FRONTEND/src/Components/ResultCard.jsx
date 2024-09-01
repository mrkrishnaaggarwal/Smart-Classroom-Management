import React from 'react';
import ResultRow from './resultrow'; // Adjust the path as needed

const ResultCard = ({ results }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-4">Results & Reports</h3>
      <table className="w-full text-left">
        <thead>
          <tr>
            <th className="border-b-2 p-2">Code</th>
            <th className="border-b-2 p-2">Subject Title</th>
            <th className="border-b-2 p-2">Credit Point</th>
            <th className="border-b-2 p-2">Grade</th>
            <th className="border-b-2 p-2">Obtained Marks</th>
            <th className="border-b-2 p-2">Max. Marks</th>
          </tr>
        </thead>
        <tbody>
          {results.map((result, index) => (
            <ResultRow
              key={index}
              code="MAIC201"
              subjectTitle={result.subject}
              creditPoint={result.credits}
              grade={result.grade}
              obtainedMarks={result.performance}
              maxMarks="100"
            />
          ))}
          {/* Last row for Pass/Fail status */}
          <tr className="bg-purple-100">
            <td colSpan="5" className="p-2 font-semibold">Result:</td>
            <td className="p-2 font-semibold">Pass</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResultCard;