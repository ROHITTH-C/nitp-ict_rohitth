import React from 'react';
import { Mail, ExternalLink, User } from 'lucide-react';

const members = [
  {
    sno: 1,
    name: 'Prof. Maheshwari Prasad Singh',
    title: 'PI - E&ICT Academy, NIT Patna',
    department: 'Computer Science and Engineering',
    email: 'Ci.eictpatna@nitp.ac.in',
    profileUrl: 'https://www.nitp.ac.in/profile/mps@nitp.ac.in',
    image: 'https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1f2bFo1KIY1xF6MOmTAjM3gNYZcUySBaG&w=640&q=75'
  },
  {
    sno: 2,
    name: 'Dr. Bikash Chandra Sahana',
    title: 'CO-PI - E&ICT Academy, NIT Patna',
    department: 'Electronics and Communication Engineering',
    email: 'eictapatna@nitp.ac.in',
    profileUrl: 'https://www.nitp.ac.in/profile/sahana@nitp.ac.in',
    image: 'https://www.nitp.ac.in/_next/image?url=https%3A%2F%2Fdrive.google.com%2Fthumbnail%3Fauthuser%3D0%26sz%3Dw320%26id%3D1NlBSYjT91ItzC8wq3JsvGMxLZGYXcjL2&w=640&q=75'
  },
];

export default function PiCoCommittee() {
  return (
    <div className="min-h-screen  py-14 px-4">
      <h2 className="text-2xl  font-bold md:text-3xl text-blue-900 mb-16 text-center tracking-tight">
        PI and CO-PI Committee
      </h2>
      
      <div className="max-w-6xl mx-auto grid gap-10 sm:grid-cols-1 md:grid-cols-2">
        {members.map((member) => (
          <div
            key={member.sno}
            className="flex flex-col md:flex-row items-stretch bg-white border border-blue-100 rounded-3xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="md:w-1/3 w-full h-64 md:h-auto flex-shrink-0 bg-blue-50 flex items-center justify-center overflow-hidden rounded-t-3xl md:rounded-l-3xl md:rounded-t-none">
              {member.image ? (
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-contain md:object-cover w-full h-full"
                />
              ) : (
                <User className="w-20 h-20 text-blue-400" />
              )}
            </div>

            {/* Content */}
            <div className="flex-1 p-8 flex flex-col justify-between space-y-4">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-blue-700 text-lg mb-3">{member.title}</p>
              </div>

              <div className="space-y-3 mt-4">
                <p className="flex items-center gap-2 text-gray-700">
                  <Mail className="w-5 h-5 text-blue-500" />
                  <a
                    href={`mailto:${member.email}`}
                    className="hover:underline text-blue-600 break-all"
                  >
                    {member.email}
                  </a>
                </p>
                <p className="flex items-center gap-2 text-gray-700">
                  <ExternalLink className="w-5 h-5 text-blue-500" />
                  <a
                    href={member.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-blue-600"
                  >
                    Visit Profile
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
