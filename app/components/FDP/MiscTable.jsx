"use client";
import React from 'react';

const GDriveTable = ({ courses }) => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold text-blue-800 mb-4">FDP Course Resources</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full border border-blue-300 rounded-lg shadow-md">
          <thead className="bg-sky-200 text-blue-900">
            <tr>
              <th className="border border-blue-300 p-2">S.No</th>
              <th className="border border-blue-300 p-2">Course Name</th>
              <th className="border border-blue-300 p-2">GDrive Link</th>
            </tr>
          </thead>
          <tbody className="bg-white text-blue-800">
            {courses
              .filter(course => course.gdrive)
              .map((course, index) => (
                <tr key={index} className="hover:bg-sky-50 transition duration-200">
                    <td className="border border-blue-200 p-2 text-center">{index + 1}</td>
                  <td className="border border-blue-200 p-2">{course.name}</td>
                  <td className="border border-blue-200 p-2 text-center">
                    <a
                      href={course.gdrive}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded-md shadow"
                    >
                      View
                    </a>
                  </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GDriveTable;
