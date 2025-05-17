import React from 'react';

const councilData = [
  { sno: 1, designation: 'Chairperson', details: 'Dr. Mangala Sunder Krishnan, IIT Madras (Professor Emeritus)' },
  { sno: 2, designation: 'Co-Chairperson', details: 'Group Coordinator (HRD), MeitY' },
  { sno: 3, designation: 'Member', details: 'Representative of AICTE' },
  { sno: 4, designation: 'Member', details: 'Representative of UGC' },
  { sno: 5, designation: 'Member', details: 'Shri Ramanan Ramanathan, Former Mission Director, Atal Innovation Mission' },
  { sno: 6, designation: 'Member', details: 'Prof. Anubha Gupta, Department of ECE, IIIT Delhi' },
  { sno: 7, designation: 'Member', details: 'Representative of IPHW Division, MeitY' },
  { sno: 8, designation: 'Member', details: 'Representative of India Electronics and Semiconductor Association (IESA)' },
  { sno: 9, designation: 'Member', details: 'Representative of Implementing Agencies' },
  { sno: 10, designation: 'Member Secretary', details: 'Representative of HRD Division' },
];

export default function AcademicCouncilTable() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Academic Council Composition</h2>
      <div className="overflow-x-auto rounded-lg shadow-lg border border-blue-300">
        <table className="min-w-full bg-white">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="py-2 px-4 text-left">S.No</th>
              <th className="py-2 px-4 text-left">Designation</th>
              <th className="py-2 px-4 text-left">Details</th>
            </tr>
          </thead>
          <tbody>
            {councilData.map(({ sno, designation, details }) => (
              <tr key={sno} className="border-t border-blue-200 hover:bg-blue-50">
                <td className="py-2 px-4">{sno}</td>
                <td className="py-2 px-4">{designation}</td>
                <td className="py-2 px-4">{details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
