"use client"
import Link from 'next/link'

const ResearchCommittee = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12 pagehead text-center py-4 ">
            <span className="text-xl font-bold text-blue-600">Committees</span>
          </div>
        </div>
      </div>

      <div className="container py-2">
        <div className="text-center">
          <h1 className="text-xl font-bold mb-4">Research Committee</h1>

          <table className="table-auto w-4/5 mx-auto border-collapse border border-gray-300 text-[13px] text-left">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left border border-gray-300 ">S.No</th>
                <th className="px-4 py-2 text-left border border-gray-300 ">Name</th>
                <th className="px-4 py-2 text-left border border-gray-300 ">Designation</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 py-2 border border-gray-300">1</td>
                <td className="px-4 py-2 border border-gray-300">Director, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Chairman</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">2</td>
                <td className="px-4 py-2 border border-gray-300">Prof. K P Singh, Ex-Director, IIT BHU & Emeritus Professor, IIT BHU</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">3</td>
                <td className="px-4 py-2 border border-gray-300">Prof. Dharmendra Singh, Professor & Head CSE, IIT Roorkee</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">4</td>
                <td className="px-4 py-2 border border-gray-300">Prof. R. Bhattacharjee, IIT Guwahati</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">5</td>
                <td className="px-4 py-2 border border-gray-300">Prof. R B Mishra, Professor, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">6</td>
                <td className="px-4 py-2 border border-gray-300">Dr. J. P Singh, Assistant Professor, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">7</td>
                <td className="px-4 py-2 border border-gray-300">Dr. Akshay Deepak, Assistant Professor, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">8</td>
                <td className="px-4 py-2 border border-gray-300">Dr. Gayadhar Pradhan, Associate Professor, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">9</td>
                <td className="px-4 py-2 border border-gray-300">Dr. Rakesh Ranjan, Assistant Professor, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">10</td>
                <td className="px-4 py-2 border border-gray-300">Dr. M. P. Singh, Co-PI- E&ICT Academy, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
              <tr>
                <td className="px-4 py-2 border border-gray-300">11</td>
                <td className="px-4 py-2 border border-gray-300">Dr. Bharat Gupta, PI – E&ICT Academy, NIT Patna</td>
                <td className="px-4 py-2 border border-gray-300">Member</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ResearchCommittee
