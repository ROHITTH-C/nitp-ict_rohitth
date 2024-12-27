"use client";
import Link from "next/link";
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
      name: "Machine Learning for Computer Vision",
      date: "29 June – 10 July, 2020",
      BrochureLink: "MLCV",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScBCng4WHpc6wRQ7skxM1LoGjnebwjR_g4mP2UV5QVHBEH-Kw/viewform",
    },
    {
      id: 2,
      name: "Quantum Computing",
      date: "07th August – 12th August, 2020 (Tentative)",
      BrochureLink: "QuantumComputing",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSfuSHQynBL2m9lEwdcCWyZr_wMZ0nN0AGtTj3OggXrq5m5aJg/viewform?vc=0&c=0&w=1",
    },
    {
      id: 3,
      name: "Advanced Optimization Techniques and Hands-on with MATLAB/SCILAB",
      date: "13th July – 24th July, 2020",
      BrochureLink: "MATLAB",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLSegvXCLoElM5BgPj4XLFkXLhMbFSN0hhxvst5lG6Zh69Ne6oQ/viewform",
    },
    {
      id: 4,
      name: "Embedded UVM open source Emulation & Functional Verification",
      date: "13th July – 24th July, 2020",
      BrochureLink: "UVM",
      registrationLink: "https://forms.gle/J3SM9eaTTesnQkxh6",
    },
    {
      id: 5,
      name: "Wireless Communication Technologies for IoT",
      date: "27th July – 07th August, 2020",
      BrochureLink: "WirelessCT",
      registrationLink: "https://forms.gle/mfuW4Htgp2u9UM1W6",
    },
    {
      id: 6,
      name: "Data Science for All",
      date: "27th July – 07th August, 2020",
      BrochureLink: "DS",
      registrationLink: "https://forms.gle/N3WZZtJC41E9qHUo8",
    },
    {
      id: 7,
      name: "ICT Tools for Teaching, Learning process & Institutes",
      date: "10th August – 21st August, 2020",
      BrochureLink: "ICTTools",
      registrationLink: "https://forms.gle/orqpstgdFtZJiYDj6",
    },
    {
      id: 8,
      name: "Demystifying 5G RF ASICs",
      date: "24th August – 04th September, 2020",
      BrochureLink: "ASIC",
      registrationLink: "https://forms.gle/8kze6yw8BHVUqKXX7",
    },
    {
      id: 9,
      name: "Python Programming",
      date: "07th September – 18th September, 2020",
      BrochureLink: "Python",
      registrationLink: "https://forms.gle/h9CWtvaVzy7y9mmLA",
    },
    {
      id: 10,
      name: "Digital Tools for Writing, Authoring and reviewing manuscripts",
      date: "21st September – 02nd October, 2020",
      BrochureLink: "DigitalTools",
      registrationLink: "https://forms.gle/UKb7q5bDf5qrYUyd6",
    },
    {
      id: 11,
      name: "Cyber Security",
      date: "05th October – 16th October, 2020",
      BrochureLink: "CyberSecurity",
      registrationLink: "https://forms.gle/vBXnf3X9XKDMxpPS7",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="">
          <h1 className="text-3xl font-bold font-sans mb-4 text-center">
            Jointly planned Summer courses for the year 2020
            <br />
            (June 2020 - October 2020)
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
              Welcome to Summer Courses, 2020
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
                    Name of the Course
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date(s)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Brochure
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Apply Online
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
                      <span className="text-sm font-medium">
                        <Link href={`SJC2020/${course.BrochureLink}`}>
                          {course.name}
                        </Link>
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {course.date}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      <Link href={`SJC2020/${course.BrochureLink}`}>
                        View Details
                      </Link> 
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
