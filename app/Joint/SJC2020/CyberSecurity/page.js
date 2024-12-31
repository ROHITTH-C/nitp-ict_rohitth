import React from "react";

const CyberSecurity = () => {
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
              Cyber Security
            </h1>
            <h1 className="text-center text-red-800 text-md sm:text-xl md:text-2xl font-bold font-['Quicksand']">
              5 Oct – 16 Oct, 2020
            </h1>
            <div className="absolute top-0 right-2 sm:right-4 flex flex-col sm:flex-row gap-2 sm:gap-4 text-right">
              <a
                href=""
                className="text-xs sm:text-sm font-bold hover:underline"
              >
                Brochure
              </a>
              <a
                href="https://forms.gle/vBXnf3X9XKDMxpPS7"
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
                <li className="ml-4">Prof. M.P. Singh, NIT Patna</li>
              </ul>
            </div>
            <div className="space-y-2">
              <p className="font-bold text-sm sm:text-base">
                Co-Principal Coordinator :
              </p>
              <ul className="list-disc pl-4 sm:pl-6 text-sm sm:text-base">
                <li className="ml-4">Dr. Ramesh B. Battula, MNIT Jaipur</li>
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
                <strong>Dr. Ditipriya Sinha,</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:ditipriya.cse@nitp.ac.in"
                  className="hover:underline"
                >
                  ditipriya.cse@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:9065536109" className="hover:underline">
                  9065536109
                </a>
              </p>
            </div>

            <br />
            <div className="space-y-2 text-sm sm:text-base">
              <p>
                <strong>Dr. Suyel Namasudra,</strong>
              </p>
              <p>
                Email:{" "}
                <a
                  href="mailto:suyel.cs@nitp.ac.in"
                  className="hover:underline"
                >
                  suyel.cs@nitp.ac.in
                </a>
              </p>
              <p>
                Contact:{" "}
                <a href="tel:9707046535" className="hover:underline">
                  9707046535
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
              <strong>
                Prof. Ganapati Panda, Fellow INAE, Fellow NASI,
                <br />
                Former Dy. Director and Prof. Emeritus, IIT Bhubaneswar
                <br />
                <br />
                Dr. Nithin V. George, Associate Professor,
                <br />
                Dept. of Electrical Engineering, IIT Gandhinagar
                <br />
                <br />
                Dr. Pyari M. Pradhan, Assistant Professor,
                <br />
                Dept. of Electronics and Communication Engg., IIT Roorkee
                <br />
                <br />
                Dr. Sitanshu Sekhar Sahu, Assistant Professor,
                <br />
                Dept. of Electronics and Communication Engg., Birla Institute of
                Technology Mesra
                <br />
                <br />
                Dr. Jagdish Chand Bansal, Associate Professor,
                <br />
                Dept. of Mathematics, South Asian University, New Delhi
                <br />
                <br />
                Dr. Sriparna Saha, Associate Professor, Dept. of Computer
                Science
                <br />
                and Engineering, IIT Patna
                <br />
                <br />
                Dr. Prashant K. Jain, IIITDMJ
                <br />
                <br />
                Prof. Rajesh Kumar, Professor,
                <br />
                Dept. of Electrical Engg., MNIT Jaipur
                <br />
                <br />
                Dr. Satyasai Jagannath Nanda, Assistant Professor (Course
                Coordinator)
              </strong>
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
                        name: "Wireless Vulnerabilities",
                        topic:
                          "Unconstrained and Constrained Optimization, Linear Programming, Graphical Method, Symmetric Dual Problems, Simplex Method, Derivative based Optimization, Newton’s Method, Least Mean Square Method.",
                      },
                      {
                        name: "Software Security",
                        topic:
                          "Buffer overflow, Integer overflow, Format string vulnerabilities.",
                      },
                      {
                        name: "Web Security",
                        topic: "SQL injection, XSS, CSRF, etc.",
                      },
                      {
                        name: "Web App Penetration Testing",
                        topic:
                          "Data security in cloud, Big data and cyber security; Network Security - DNS, ICMP, ARP attacks, IP Sec, BGP Sec, etc., Browser based attacks.",
                      },
                      {
                        name: "Security Tools",
                        topic:
                          "DVWA, Snort, Metasploit, Wireshark, NMAP, Nessus, Openssl, etc.",
                      },
                      {
                        name: "Security in IoT",
                        topic: "Security in IoT, Tools for cyber security.",
                      },
                      {
                        name: "Basic Cryptography",
                        topic:
                          "Basic Cryptography and its importance in Cyber security, Cryptography Hash functions.",
                      },
                      {
                        name: "Blockchain",
                        topic: "Blockchain based IoT Security.",
                      },
                      {
                        name: "IDS",
                        topic:
                          "	Intrusion Detection System. Cyber Security Assurance and Law, Cyber Forensics",
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

export default CyberSecurity;
