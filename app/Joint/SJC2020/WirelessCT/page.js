import React from "react";

const WirelessCT = () => {
  return (
    <>
      <style>
        {`
          @keyframes blinkingText {
            0% { color: #000; }
            49% { color: #000; }
            60% { color: transparent; }
            99% { color: transparent; }
            100% { color: #000; }
          }
          .blinking {
            animation: blinkingText 0.6s infinite;
          }
          @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
        `}
      </style>

      <div className="min-h-screen bg-white p-2 sm:p-4 md:p-6">
        <div className="w-[90%] mx-auto bg-[#FFF067] p-2 sm:p-4 md:p-6 text-sm">
          {/* Header - Improved mobile layout */}
          <div className="relative mb-6 md:mb-8 pt-8 sm:pt-4">
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl font-bold font-['Quicksand']">
              Wireless Communication Technologies for IoT
            </h1>
            <h1 className="text-center text-red-800 text-md sm:text-xl md:text-2xl font-bold font-['Quicksand']">
              July 27 - August 07 , 2020
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://forms.gle/mfuW4Htgp2u9UM1W6"
                target="_blank"
                rel="noopener noreferrer"
                className="blinking font-bold text-xs sm:text-sm"
              >
                Apply Online
              </a>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Coordinators - Improved mobile layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 px-2">
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">
                  Prof. Ratnajit Bhattacharjee, IIT Guwahati
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Co-Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Bharat Gupta, NIT Patna</li>
              </ul>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Academy Level Coordinator */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Academy Level Coordinator:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Rakesh Ranjan,</strong>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:rr@nitp.ac.in" className="hover:underline">
                  rr@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:9334385016" className="hover:underline">
                  9334385016
                </a>
              </p>
            </div>

            <br />

            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Richa Agrawal</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:richa.ec@nitp.ac.in"
                  className="hover:underline"
                >
                  richa.ec@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:9559090527" className="hover:underline">
                  9559090527
                </a>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Fee Details - More compact on mobile */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Course Fee Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                Faculty/ PhD Scholar :
                <strong> Rs.500/-(SC/ST = Rs. 250/- )</strong>
              </p>
              <p>
                Others (Except Faculty/PhD-Scholar):
                <strong> Rs. 1000/- (SC/ST = Rs. 500/- )</strong>
              </p>
            </div>
          </div>

          {/* Payment Details - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Payment Details:
            </h2>
            <div className="space-y-2 text-sm sm:text-base">
              <p>Bank Name: Allahabad Bank (Merge to Indian Bank)</p>
              <p>Account Name: NIT Patna</p>
              <p>
                <strong>Account No.: 50380476798</strong>
              </p>
              <p>
                <strong>IFSC Code: IDIB000B810</strong>
              </p>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Resource Persons - Responsive text */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Resource Persons:
            </h2>
            <p className="text-sm sm:text-base">
              <strong>Inaugural Speaker-</strong> Ms. Dora Smith (Academic
              program(USA), Siemens); <br /> Dr. Ferdous Ahmed (IIIT Guwahati),
              <br /> Prof. Ratnajit Bhattacharjee(IIT Guwahati)
              <br /> Prof. Sukumar Nandi (IIT Guwahati),
              <br /> Dr. Santosh Biswas (IIT Guwahati)
              <br /> Dr. Rishikesh Kulkarni (IIT Guwahati)
            </p>
            <br />
            <p className="text-sm sm:text-base">
              <strong>Industry Speakers-</strong> Kaushlendra Singh
              Sisodia(Senior Expert, UniConverge),
              <br /> Mr. Rishabh Kumar(Senior Expert, UniConverge),
              <br /> Mr. Jitesh Kumar(Senior Expert, UniConverge)
            </p>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Course Contents - Improved mobile layout */}
          <div className="mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] text-center mb-3 sm:mb-4">
              Course contents:
            </h2>
            <div className="border-2 border-black">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="p-4 text-left font-['Quicksand'] w-16">
                        S.No.
                      </th>
                      <th className="p-4 text-left font-['Quicksand']">
                        Module Name
                      </th>
                      <th className="p-4 text-left font-['Quicksand']">
                        Topics
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-[#FFE81C] text-base">
                    {[
                      {
                        name: "Introduction to IoT",
                        topic:
                          "What is IoT, IoT applications in different domains, Trends in IoT Market.",
                      },
                      {
                        name: "Basic Architecture",
                        topic:
                          "Basic knowledge of IoT Architecture, Protocols Introduction (MQTT, AMQP, CoAP), Recap of Embedded Systems, Basic Concepts: Sensors, Actuators, Microcontroller units and Architecture, Application-driven Selection of Microcontrollers.",
                      },
                      {
                        name: "IoT Architecture and Communication",
                        topic:
                          "IoT Layered Architecture, IPv6, RF Zigbee, Wi-Fi, BLE, LPWAN.",
                      },
                      {
                        name: "IoT Protocols",
                        topic: "MQTT, CoAP, 6LoWPAN design.",
                      },
                      {
                        name: "Introduction to Cloud Computing",
                        topic:
                          "About Cloud and Cloud Computing, Benefits of Cloud, History of Cloud Computing, Deployment Models.",
                      },
                      {
                        name: "Cloud Computing",
                        topic:
                          "Top Cloud Providers, Service Models, Service Catalogues, Different Cloud Services, Advantages of Different Offerings.",
                      },
                      {
                        name: "Web Services",
                        topic:
                          "What are Web Services, Why Web Services, Types of Web Services, RESTful Web Services, Design Principles.",
                      },
                      {
                        name: "Design Principles",
                        topic:
                          "Design Principles with respect to Architecture, Power, Ruggedness, Size, Weight, Security, Practical Use Cases.",
                      },
                      {
                        name: "IoT Security",
                        topic:
                          "How Secure is IoT, Issues and Vulnerabilities, Key Aspects for Securing IoT Solutions.",
                      },
                      {
                        name: "Industry 4.0",
                        topic:
                          "Introduction to Industry 4.0, Road to Industry 4.0, Role of Data, Information, Knowledge, and Collaboration in Future Organizations, Related Disciplines, Systems, Technologies for Enabling Industry 4.0.",
                      },
                    ].map((item, index) => (
                      <tr
                        key={index}
                        className={
                          index % 2 === 0 ? "bg-[#FFE81C]" : "bg-[#FFF067]"
                        }
                      >
                        <td className="p-4 align-top">{index + 1}</td>
                        <td
                          className="p-4"
                          dangerouslySetInnerHTML={{ __html: item.name }}
                        ></td>
                        <td
                          className="p-4"
                          dangerouslySetInnerHTML={{ __html: item.topic }}
                        ></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <hr className="border-gray-400 my-4" />

          {/* Core Team Members - Improved spacing */}
          <div className="text-center mb-6 px-2">
            <h2 className="text-lg sm:text-xl font-bold font-['Quicksand'] mb-3 sm:mb-4">
              Core Team Members, E&ICT Academy, NIT Patna:
            </h2>
            <div className="space-y-4 text-sm sm:text-base">
              <div>
                <p className="font-bold">
                  Dr. Bharat Gupta (CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:bharat@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    bharat@nitp.ac.in
                  </a>
                </p>
              </div>
              <div>
                <p className="font-bold">
                  Dr. M.P Singh (CO-CI E & ICT Academy, NIT Patna)
                </p>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:mps@nitp.ac.in"
                    className="text-blue-600 hover:underline"
                  >
                    mps@nitp.ac.in
                  </a>
                </p>
              </div>
              <p>
                Website: <strong>http://old.nitp.ac.in/ict/index.php</strong>
              </p>
            </div>
          </div>

          {/* Contact Information - Responsive spacing */}
          <div className="text-center px-2">
            <p className="font-bold font-['Quicksand'] mb-2 text-sm sm:text-base">
              Contact us :
            </p>
            <div className="space-y-1 text-sm sm:text-base">
              <p>Electronics and ICT Academy</p>
              <h1 className="font-bold">Mr. Ram Gopal (TPO) : 8434305807</h1>
              <p>National Institute of Technology, Patna</p>
              <p>AshokRajpath, Patna 800005</p>
              <p>
                <span className="font-bold font-['Quicksand']">Email:</span>{" "}
                eictapatna@nitp.ac.in
              </p>
              <p>
                <span className="font-bold font-['Quicksand']">Website:</span>{" "}
                http://old.nitp.ac.in/ict
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WirelessCT;
