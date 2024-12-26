import React from "react";

const IntroductionPage = () => {
  return (
    <div className="w-[90%] mx-auto my-12">
      <div className="sm:w-[30vw] min-w-fit text-center px-5 bg-blue-600 text-white sm:text-left py-4 text-xl font-semibold">
        Introduction
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-2/3">
            <div className="text-base">
              DeitY has sponsored a scheme entitled "Scheme of Financial
              Assistance for setting up of Electronics and ICT Academies". The
              objective of the above scheme is to set up seven (07) Electronics
              and ICT Academies as a unit in IITs, NITs, IIITs etc. for
              faculty/mentor development/up gradation to improve the
              employability of the graduates/ diploma holders in various
              streams, through collaboration of States/Union Territories with
              financial assistance from the Central Government. Electronics and
              ICT Academy would aim to provide specialized training to the
              faculties of Engineering, Arts, Commerce & Science colleges,
              Polytechnics etc, by developing state-of-the-art facilities. The
              scheme would lead to enhancement of the skills of the students.
              The Scheme has been approved on 14.11.2014. Subsequently, an
              Empowered Committee under the chairmanship of Secretary,DeitY has
              accorded approval for setting up of 4 such Academies in NIT
              Patna(Bihar), IIITDM Jabalpur(Madhya Pradesh), NIT
              Warangal(Telangana), IIT Guwahati(Assam).
            </div>
          </div>

          <div className="w-[50vw] sm:h-[50vh] md:w-1/3">
            <img
              src="/di.jpg"
              alt="Government Logo"
              className="h-full w-full"
            />
          </div>
        </div>
      </div>

      <div className="sm:w-[50vw] min-w-fit text-center px-5 bg-blue-600 text-white sm:text-left py-4 text-xl font-semibold">
        Area of coverage / training target
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="space-y-4">
          <ul className="list-disc pl-6 space-y-4">
            <li>
              The faculty of various academic institutions cutting across
              engineering / arts / commerce / science colleges / polytechnics
              across the country would be covered.
            </li>
            <li>
              Training Target is as follows:
              <div className="overflow-x-auto mt-4">
                <table className="w-full border-collapse border border-gray-300">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="border border-gray-300 p-2">Category</th>
                      <th className="border border-gray-300 p-2">
                        Target for 4 years per Academy
                      </th>
                      <th className="border border-gray-300 p-2">
                        Number of Academies
                      </th>
                      <th className="border border-gray-300 p-2">
                        Total target
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">A</td>
                      <td className="border border-gray-300 p-2">16,000</td>
                      <td className="border border-gray-300 p-2">05</td>
                      <td className="border border-gray-300 p-2">80,000</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">B</td>
                      <td className="border border-gray-300 p-2">6,400</td>
                      <td className="border border-gray-300 p-2">02</td>
                      <td className="border border-gray-300 p-2">12,800</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2" colSpan="2">
                        Total target in four years by 07 Academies
                      </td>
                      <td className="border border-gray-300 p-2">07</td>
                      <td className="border border-gray-300 p-2">92,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default IntroductionPage;
