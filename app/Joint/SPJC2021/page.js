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
      name: "Machine Learning for computer vision",
      date: "01 Feb – 12 Feb, 2021",
      brochure: "mlspring.php",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScgegJvO1ZcTYNI5mFxXDrBkjP1jnXYCQbo5Y1RY2I7NzMPjw/closedform",
    },
    {
      id: 2,
      name: "Advanced Communication & Antennas",
      date: "15th Feb – 26th Feb, 2021",
      brochure: "advancedcommunication.php",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScYbL2R8a0TamHDaNd__yfBNk4Zaw1csNPSK1euDWLbvgvjQA/viewform",
    },
    {
      id: 3,
      name: "5G Design: Journey from Devices to Circuits",
      date: "01st March – 12th March, 2021",
      brochure: "fivegdesign.php",
      registrationLink:
        "https://docs.google.com/forms/d/e/1FAIpQLScFDmQbT6WL3K_wQlii-Fxgk8qmDTbsJaAoQXBQRBuKoRRNgA/viewform",
    },
    {
      id: 4,
      name: "ICT Tools for Teaching, Learning process & Institutes",
      date: "15th March – 26th March, 2021",
      brochure: "icttoolsspring.php",
      registrationLink: "https://forms.gle/QMKwhMcxLcZKB7hZ6",
    },
    {
      id: 5,
      name: "RISC-V VLSI Implementation Flow: RTL2GDS",
      date: "27th March – 10th April, 2021",
      brochure: "rtlgds.php",
      registrationLink: "https://forms.gle/zMoyVemCosbQv92q6",
    },
    {
      id: 6,
      name: "Data Science for All",
      date: "12th April – 23rd April, 2021",
      brochure: "datascienceall.php",
      registrationLink: "https://forms.gle/a5efmpSvoHRptCnv7",
    },
    {
      id: 7,
      name: "Designing With FPGAs (Intel)",
      date: "19th April – 30th April, 2021",
      brochure: "fgpaintel.php",
      registrationLink: "https://forms.gle/jdYUYwPzLr2zHeat7",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="">
          <h1 className="text-3xl font-bold font-sans mb-4 text-center">
            Jointly planned Spring courses for the year 2021
            <br />
            (Feb 2021 - April 2021)
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
              Welcome to Spring Courses, 2021
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
                    Brochure
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
                      {course.brochure}
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
