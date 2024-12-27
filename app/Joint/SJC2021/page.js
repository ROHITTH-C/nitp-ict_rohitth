"use client";
import React, { useState, useRef } from "react";

const SummerCoursesPage = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);
  const marqueeRef = useRef(null);

  const toggleAnimation = () => {
    if (!isPaused) {
      // Pause the animation and capture the current position
      const computedStyle = window.getComputedStyle(marqueeRef.current);
      const matrix = new DOMMatrix(computedStyle.transform);
      setCurrentPosition(matrix.m41); // Capture the translateX value
    }
    setIsPaused(!isPaused);
  };

  const courses = [
    {
      id: 1,
      name: "Social Robotics & AI",
      date: "28th June – 4th July, 2021",
      coordinator: "Dr Somaraju Suvvari, NIT Patna & Dr. Bharat Gupta, NIT Patna",
      registrationLink: "https://forms.gle/9Rnvw1c3PNgRtQge7"
    },
    {
      id: 2,
      name: "Digital Tools for Writing, Authoring and reviewing manuscripts",
      date: "12th July – 23rd July, 2021",
      coordinator: "Dr. Bharat Gupta, NIT Patna",
      registrationLink: "https://forms.gle/MurfmsRMLEtqRUHW9"
    },
    {
      id: 3,
      name: "Programming in Python",
      date: "26th July – 6th August, 2021",
      coordinator: "Dr. Prabhat Kumar, NIT Patna",
      registrationLink: "https://forms.gle/sq5gg5X2sNqAVeVP7"
    },
    {
      id: 4,
      name: "Quantum Computing",
      date: "Sept 27 – Oct 8, 2021",
      coordinator: "Dr. J P Singh, NIT Patna & Dr. M P Singh, NIT Patna",
      registrationLink: "https://forms.gle/WT3Wb4DrNpcm4PB49"
    },
    {
      id: 5,
      name: "Deep Learning & Applications (Parallel Architectures)",
      date: "23rd August – 3rd Sep, 2021",
      coordinator: "Dr. M P Singh, NIT Patna",
      registrationLink: "https://forms.gle/JZFKZHCYBhxxgyc68"
    },
    {
      id: 6,
      name: "Advanced Optimization Techniques and Hands-on with MATLAB/SCILAB",
      date: "6th Sep – 17th Sep, 2021",
      coordinator: "Dr. J P Singh, NIT Patna & Dr. Rakesh Ranjan, NIT Patna",
      registrationLink: "https://forms.gle/L3EQ2PKx1dkTWFPL8"
    },
    {
      id: 7,
      name: "SuperX- Operating Systems- Linux",
      date: "20th Sep – 1st Oct, 2021",
      coordinator: "Dr. M P Singh, NIT Patna & Dr. Suyel Namasudra, NIT Patna",
      registrationLink: "https://forms.gle/7QZdugMmnhoMost78"
    },
    {
      id: 8,
      name: "MATLAB Programming for Additive Manufacturing and 3D Printing (MPAM)",
      date: "20th Sep – 1st Oct, 2021",
      coordinator: "Dr. Bharat Gupta, NIT Patna",
      registrationLink: "https://forms.gle/Q8i8uzsKfmDB4KXk7"
    },
    {
      id: 9,
      name: "Numerical Analysis & optimization for Physicists, Scientists & Engineers using open-source- SCILAB",
      date: "4th Oct – 15th Oct, 2021",
      coordinator: "Dr. Rakesh Ranjan, NIT Patna & Dr. Bharat Gupta, NIT Patna",
      registrationLink: "https://forms.gle/DrJs2pxXToQzoApw6"
    },
    {
      id: 10,
      name: "Open Power RISC architecture Design (Industry IBM)",
      date: "18th Oct – 29th Oct, 2021",
      coordinator: "Dr. Sangeeta Singh, NITP & Mr. Pankaj Kumar, NITP",
      registrationLink: "https://forms.gle/tocoszZ1cFsWB2tc6"
    }
  ]
  

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="">
          <h1 className="text-3xl font-bold font-sans mb-4 text-center">
            Jointly planned Summer courses for the year 2021
            <br />
            (Jun 2021 - Oct 2021)
          </h1>
          <hr className="my-4" />

          {/* Marquee Effect */}
          <div
            className="bg-blue-50 overflow-hidden relative w-full cursor-pointer"
            onClick={toggleAnimation}
          >
            <div
              ref={marqueeRef}
              className={`flex whitespace-nowrap mx-4 py-2 text-2xl text-blue-600 ${
                isPaused ? "" : "animate-marquee"
              }`}
              style={{
                transform: isPaused
                  ? `translateX(${currentPosition}px)`
                  : "none",
              }}
            >
              Welcome to Summer Joint Courses, 2021
              <br /> New IFSC Code of Allahabad Bank is IDIB000B810
            </div>
          </div>

          {/* Course Table */}
          <div className="overflow-x-auto shadow-lg rounded-lg mt-5">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    S. No.
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Course Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Starting date (Duration is one/two Week)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Coordinator from E & ICT Academy, NIT Patna
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration Links
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {courses.map((course) => (
                  <tr key={course.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {course.id}
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm font-medium">{course.name}</span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {course.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      {course.coordinator}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={course.registrationLink}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Register
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummerCoursesPage;
