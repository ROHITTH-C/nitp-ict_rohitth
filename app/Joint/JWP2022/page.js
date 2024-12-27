"use client";
import React, { useState, useRef } from "react";

const WinterCoursesPage = () => {
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
      name: "Blockchain Technology & Applications- IIITDM/IITK/NITP",
      BrochureLink:
        "../uploads20/Brochoure- Blockchain and its Application-20.12.2021.pdf",
      date: "3 Jan - 8 Jan 2022",
      coordinator: "Dr. Prabhat Kumar",
      "Registration Link": "https://forms.gle/dLufjjjG6Wrw9Mzg9",
    },
    {
      id: 2,
      name: "Machine Learning Application in Signal Processing and Communication",
      BrochureLink:
        "../uploads20/Brochure- ML Application for Signal Prcessing and Communication Engineering- 03rd Jan, 2022.pdf",
      date: "3 Jan - 8 Jan 2022",
      coordinator: "Dr. Bharat Gupta & Dr. Rakesh Ranjan",
      "Registration Link": "https://forms.gle/fAuKP5NXmW9jgMKq6",
    },
    {
      id: 3,
      name: "Scientific Computation and GUI Development Using MATLAB",
      BrochureLink: "./Brochure/SCDM Flyer.pdf",
      date: "21 Mar - 31 Mar 2022",
      coordinator: "Dr. Bharat Gupta & Dr. Mukesh Kumar",
      "Registration Link": "https://forms.gle/xQudVqnAgRRhS38s5",
    },
    {
      id: 4,
      name: "Data Science for All",
      BrochureLink: "./Brochure/Brochure_DataScienceForAll.pdf",
      date: "22 Mar - 1 Apr 2022",
      coordinator: "Dr. M P Singh",
      "Registration Link": "https://forms.gle/9Xcj8uStDo64r8Ry6",
    },
    {
      id: 5,
      name: "Electric Vehicles & mobility",
      BrochureLink: "./Brochure/Electric Vehicle and Moility.pdf",
      date: "14 Mar - 26 Mar 2022",
      coordinator: "Dr. Amitesh Kumar and Dr. D K Dheer",
      "Registration Link": "https://forms.gle/gKx877ncytW3i56e9",
    },
    {
      id: 6,
      name: "Natural Language Processing",
      BrochureLink: "./Brochure/NLP_FDP_2022.pdf",
      date: "7 Feb - 18 Feb 2022",
      coordinator: "Dr. J P Singh, Dr. G Pradhan & Dr. Bhaskar Mondal",
      "Registration Link": "https://forms.gle/Jt6khAPa2ti15wcp9",
    },
    {
      id: 7,
      name: "RISC-V VLSI Implementation Flow: RTL2GDS",
      BrochureLink: "./Brochure/JOINT FDP - EICT _ RISC2022.pdf",
      date: "7 Feb - 12 Feb 2022",
      coordinator: "Dr. Sangeeta Singh and Dr. Pankaj Kumar",
      "Registration Link": "https://forms.gle/7uYTCMpTmvFe14n4A",
    },
    {
      id: 8,
      name: "IoT & Applications (smart systems)",
      BrochureLink: "./Brochure/IoT & Applications.pdf",
      date: "14 Feb - 19 Feb 2022",
      coordinator: "Dr. Bharat Gupta & Dr. Suyel Namasudra",
      "Registration Link": "https://forms.gle/q27Rm25rZbApVYNc7",
    },
    {
      id: 9,
      name: "Machine Learning for Computer Vision",
      BrochureLink: "./Brochure/ML for Computer Vision.pdf",
      date: "21 Feb - 4 Mar 2022",
      coordinator: "Dr. M P Singh and Dr. Suyel Namasudra",
      "Registration Link": "https://forms.gle/CtH9hHWYwYTECcr49",
    },
    {
      id: 10,
      name: "Numerical & engineering computation, optimization for Physicists, Scientists & Engineers using open-source- SCILAB",
      BrochureLink: "wintercourses2022.php",
      date: "21 Feb - 4 Mar 2022",
      coordinator: "Dr.Bharat Gupta & Dr. Rakesh Ranjan",
      "Registration Link": "https://forms.gle/QqaWsc9K6CE3W2Tj6",
    },
    {
      id: 11,
      name: "Android programming & applications",
      BrochureLink: "wintercourses2022.php",
      date: "7 Mar - 12 Mar 2022",
      coordinator: "Dr. Prabhat Kumar and Dr. Somaraju Suvari",
      "Registration Link": "https://forms.gle/fC1rnTacbmDppGpW7",
    },
    {
      id: 12,
      name: "Research Methodology",
      BrochureLink: "wintercourses2022.php",
      date: "14 Mar - 19 Mar 2022",
      coordinator: "Dr. J P Singh & Dr. Bharat Gupta",
      "Registration Link": "https://forms.gle/jzY9GaNSaLdcwmSh6",
    },
    {
      id: 13,
      name: "Designing With FPGAs (Intel)",
      BrochureLink: "wintercourses2022.php",
      date: "14 Mar - 19 Mar 2022",
      coordinator: "Dr. Sangeeta Singh and Dr. Meena Panchore",
      "Registration Link": "https://forms.gle/TCJaYxxMwT8BpgZT9",
    },
    {
      id: 14,
      name: "AI & Machine Learning for IoT/EDA",
      BrochureLink: "./Brochure/22.01.20-AI & ML for IoT EDA.pdf",
      date: "7 Mar - 19 Mar 2022",
      coordinator: "Dr. Bharat Gupta & Dr. Bal Chand Nagar",
      "Registration Link": "https://forms.gle/RtFg5rDwMJorxdQg6",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="">
          <h1 className="text-3xl font-bold font-sans mb-4 text-center">
            Jointly Planned Winter Courses for the year 2022
            <br />
            (Jan 2022 - Mar 2022)
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
              Welcome to Winter Joint Courses, 2022
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
                    Course Name with Principal Academy
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Brochoure
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Starting date (Duration is one/two Week)
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Coordinator from E & ICT Academy, NIT Patna
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Registration link (Apply Online)
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
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a
                        href={course.BrochureLink}
                        className="text-blue-600 hover:text-blue-800 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Details
                      </a>
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

export default WinterCoursesPage;
