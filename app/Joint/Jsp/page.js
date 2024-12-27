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
      name: "Trends in Robotics & Automation",
      date: "4 July - 15 July 2022",
      coordinator:
        "Jt. Principal Coordinator- Dr. Gagan Deep Meena, Assistant Prof., EE",
      registrationLink: "https://forms.gle/tfyuzLQZt8mmag378",
    },
    {
      id: 2,
      name: "Additive manufacturing & 3D printing",
      date: "18 July - 29 July 2022",
      coordinator:
        "Jt. Principal Coordinator Jt PC- Dr. Om Ji Shukla, and Dr. Sonu Rajak, ME",
      registrationLink: "https://forms.gle/qqMkPbueawYZgqWe7",
    },
    {
      id: 3,
      name: "Cyber Security",
      date: "18 July - 22 July 2022",
      coordinator: "Jt. Principal Coordinator : Dr. Suyel Namasudra",
      registrationLink: "https://forms.gle/RTPTRMuxY2v8JMmn7",
    },
    {
      id: 4,
      name: "Android Programming",
      date: "18 July - 29 July 2022",
      coordinator:
        "Jt. Principal Coordinator :Dr. Prabhat Kumar and Dr. Somaraju Suvari",
      registrationLink: "https://forms.gle/7oG8UZASbfSwVCkY6",
    },
    {
      id: 5,
      name: "Research methodology and authoring/reviewing Manuscripts",
      date: "25 July - 5 August 2022",
      coordinator:
        "Principal Coordinator : Dr. Bharat Gupta & Jt. Principal Coordinator/Academic Coordinator : Dr. Rakesh Ranjan & Dr. Richa Agarwal",
      registrationLink: "https://forms.gle/Sm6kZBVypxy239UM9",
    },
    {
      id: 6,
      name: "Smart Healthcare Technologies: Opportunities & Challengess",
      date: "25 July - 29 July 2022",
      coordinator:
        "Principal Coordinator: Dr. Bharat Gupta Academic Coordinator: Dr. Suyel Namasudra, CSE & Dr. Rajeev Arya, ECE",
      registrationLink: "https://forms.gle/ajZ5h3RkdJefA9uT6",
    },
    {
      id: 7,
      name: "Fundamentals of 5G & beyond wireless systems",
      date: "1 August - 5 August 2022",
      coordinator:
        "Principal Coordinator : Dr. Bharat Gupta & Jt. Principal Coordinator/Academic Coordinator : Dr. Rakesh Ranjan",
      registrationLink: "https://forms.gle/bEDzN718pdh2aNxU7",
    },
    {
      id: 8,
      name: "Malware Analysis with data science",
      date: "1 August - 12 August 2022",
      coordinator:
        "Principal Coordinator: Dr. J P Singh, Jt. Principal Coordinator/ Academic Coordinator: Dr. Bhaskar Mondal",
      registrationLink: "https://forms.gle/aqwB3zaVmt7Rcvg87",
    },
    {
      id: 9,
      name: "From Zero to Chip Design Workshop using OpenPOWER cores (IBM)",
      date: "8 August - 19 August 2022",
      coordinator:
        "Jt. Principal Coordinator : Dr. Sangeeta Singh and Dr. Bal Chand Nagar, ECE",
      registrationLink: "https://forms.gle/oE3de4hRc6xRrhG79",
    },
    {
      id: 10,
      name: "Advanced Optimization Techniques and Hands-on with MATLAB/SCILAB",
      date: "8 August - 19 August 2022",
      coordinator:
        "Jt. Principal Coordinator : Dr. J P Singh, CSE and Dr. G. Pradhan, ECE",
      registrationLink: "https://forms.gle/n8QbG9pE1YigBtCY7",
    },
    {
      id: 11,
      name: "Curriculum Development in the Light of NEP 2020",
      date: "8 August - 19 Aug 2022",
      coordinator: "Jt. Principal Coordinator : Dr. M P Singh, CSE",
      registrationLink: "https://forms.gle/wqCyKprpR2XW8dAf7",
    },
    {
      id: 12,
      name: "Introduction and Applications of NLP and IOT",
      date: "16 Aug - 20 Aug 2022",
      coordinator: "Jt. Principal Coordinator: Dr. Prabhat Kumar , CSE",
      registrationLink: "https://forms.gle/FrR2MKWiKxaZ9vTh8",
    },
    {
      id: 13,
      name: "MATLAB Programming",
      date: "22 Aug - 2 Sep 2022",
      coordinator: "Jt. Principal Coordinator : Dr. Bharat Gupta, ECE",
      registrationLink: "https://forms.gle/GFuacgTv9zTAe8kj6",
    },
    {
      id: 14,
      name: "Medical Imaging",
      date: "22 Aug - 2 Sep 2022",
      coordinator:
        "Jt. Principal Coordinator : Dr. M P Singh & Dr. Shyam Singh Rajput, CSE",
      registrationLink: "https://forms.gle/v4fz3YfzQmGQd3877",
    },
    {
      id: 15,
      name: "Open source FPGAs",
      date: "22 Aug - 2 Sep 2022",
      coordinator:
        "Jt. Principal Coordinator : Dr. Sangeeta Singh and Dr. Bal Chand Nagar, ECE",
      registrationLink: "https://forms.gle/fuTExit8dJMbhN33A",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="">
          <h1 className="text-3xl font-bold font-sans mb-4 text-center">
            Jointly Planned Summer Courses for the year 2022
            <br />
            (July 2022 - September 2022)
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
              Welcome to Summer Joint Courses, 2022
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
