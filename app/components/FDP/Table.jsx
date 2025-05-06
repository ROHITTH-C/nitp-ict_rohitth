"use client"
import React from 'react';

const formatDate = (dateStr) => {
  const [day, month, year] = dateStr.split('-');
  const date = new Date(`${year}-${month}-${day}`);
  return date.toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
};

const Table = ({ courses }) => {
  const firstGDriveLink = courses.find(c => c.gdrive)?.gdrive;

  const handleDownloadClick = () => {
    if (firstGDriveLink) {
      window.open(firstGDriveLink, '_blank');
    } 
  };

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">Faculty Development Programs (FDPs)</h1>
        <button
          onClick={handleDownloadClick}
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow"
        >
          Download FDP
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-blue-300 rounded-lg shadow-md">
          <thead className="bg-sky-200 text-blue-900">
            <tr>
              <th className="border border-blue-300 p-2">S.No</th>
              <th className="border border-blue-300 p-2">Course Name</th>
              <th className="border border-blue-300 p-2">Coordinator Name</th>
              <th className="border border-blue-300 p-2">Start Date</th>
              <th className="border border-blue-300 p-2">End Date</th>
              <th className="border border-blue-300 p-2">Hub Institute</th>
              <th className="border border-blue-300 p-2">Spoke Institute(s)</th>
              <th className="border border-blue-300 p-2">Total Beneficiaries</th>
            </tr>
          </thead>
          <tbody className="bg-white text-blue-800">
            {courses.map((course, index) => (
              <tr key={index} className="hover:bg-sky-50 transition duration-200">
                <td className="border border-blue-200 p-2 text-center">{course.sno}</td>
                <td className="border border-blue-200 p-2">{course.name}</td>
                <td className="border border-blue-200 p-2">
                  {course.coordinators.map((c, i) => (
                    <div key={i}>{c}</div>
                  ))}
                </td>
                <td className="border border-blue-200 p-2 text-center">{formatDate(course.start)}</td>
                <td className="border border-blue-200 p-2 text-center">{formatDate(course.end)}</td>
                <td className="border border-blue-200 p-2 text-center">{course.hub}</td>
                <td className="border border-blue-200 p-2">
                  {course.spokes.length > 0 ? course.spokes.join(', ') : '-'}
                </td>
                <td className="border border-blue-200 p-2 text-center">{course.beneficiaries}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
