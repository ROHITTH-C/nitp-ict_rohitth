import React from 'react';

const prsgData = [
  { sno: 1, designation: 'Chairperson', details: 'Group Coordinator (HRD), MeitY' },
  { sno: 2, designation: 'Co-Chairperson', details: 'Dr. Mangala Sunder Krishnan, IIT Madras (Professor Emeritus)' },
  { sno: 3, designation: 'Member', details: 'Representative of Higher Education Department, MoE' },
  { sno: 4, designation: 'Member', details: 'Representative of NASSCOM' },
  { sno: 5, designation: 'Member', details: 'Representative of ESSCI' },
  { sno: 6, designation: 'Member', details: 'Representative of TSSC' },
  { sno: 7, designation: 'Member', details: 'Representative of NCVET' },
  { sno: 8, designation: 'Member', details: 'Ms. Meeta W Sengupta, Founder, Centre for Education Strategy' },
  { sno: 9, designation: 'Member Secretary', details: 'Representative from HRD Division, MeitY' },
];

export default function PRSGTable() {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">
        Project Review & Steering Group (PRSG) – Electronics & ICT Academy Scheme Phase-II
      </h2>
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
            {prsgData.map(({ sno, designation, details }) => (
              <tr key={sno} className="border-t border-blue-200 hover:bg-blue-50">
                <td className="py-2 px-4">{sno}</td>
                <td className="py-2 px-4">{designation}</td>
                <td className="py-2 px-4">{details}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 p-4 bg-white border border-blue-300 rounded-lg shadow">
        <h3 className="text-xl font-semibold text-blue-700 mb-3">Terms of Reference of the PRSG</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            To review and monitor the technical and financial progress of the respective Project/Scheme periodically until completion.
          </li>
          <li>
            To provide necessary technical expertise and guidance for successful implementation/completion of the project/scheme.
          </li>
          <li>
            To consider and recommend re-appropriation of funds among different project heads as per extant rules, if required.
          </li>
          <li>
            To examine the report on Mid-term Appraisal/Impact Assessment of the project in the fourth year of the implementation and recommend mid-course corrections, if any required, after taking into account various aspects for ensuring continuity/sustainability of the Academy.
          </li>
          <li>
            Any other issue connected with the implementation of the project.
          </li>
        </ul>
      </div>
    </div>
  );
}
