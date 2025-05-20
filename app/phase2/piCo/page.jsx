import React from 'react';

const members = [
  {
    sno: 1,
    name: 'Prof. Maheshwari Prasad Singh',
    title: 'PI- E&ICT Academy, NIT Patna',
    department: 'Computer Science and Engineering',
  },
  {
    sno: 2,
    name: 'Dr. Bikash Chandra Sahana',
    title: 'CO-PI- E&ICT Academy, NIT Patna',
    department: 'Electronics and Communication Engineering',
  },
];

export default function PiCoCommittee() {
  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-800 mb-6">Pi/Co Committee Members</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-blue-200 shadow-md rounded-md">
          <thead>
            <tr className="bg-blue-100 text-blue-800 text-left">
              <th className="py-2 px-4 border-b">S.No</th>
              <th className="py-2 px-4 border-b">Name</th>
              <th className="py-2 px-4 border-b">Designation</th>
              {/* <th className="py-2 px-4 border-b">Department</th> */}
            </tr>
          </thead>
          <tbody>
            {members.map((member) => (
              <tr key={member.sno} className="hover:bg-blue-50">
                <td className="py-2 px-4 border-b">{member.sno}</td>
                <td className="py-2 px-4 border-b">{member.name}</td>
                <td className="py-2 px-4 border-b">{member.title}</td>
                {/* <td className="py-2 px-4 border-b">{member.department}</td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
