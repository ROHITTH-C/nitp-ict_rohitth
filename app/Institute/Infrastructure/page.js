import React from 'react';

const Infrastructure = () => {
  return (
    <div className="w-[90%] mx-auto my-12 text-base">
      <div className="sm:w-[30vw] min-w-fit text-center px-5 bg-blue-600 text-white sm:text-left py-4 text-xl font-semibold">
      Infrastructure
      </div>

      <div className="max-w-6xl mx-auto px-4 py-6">
        <div className="text-base space-y-6">
          <h3 className="text-lg font-semibold">
            Infrastructure and other facilities available at the institute for undertaking this project.
          </h3>
          
          <ul className="list-disc pl-6 space-y-2">
            <li>List of Classrooms with seating capacity: 4 large class rooms with 100 student's capacity</li>
            <li>List of Labs along with major equipment: 5 laboratories with modest facility are available. New laboratories will be developed under this scheme for faculty training</li>
            <li>Existing manpower and other personnel with names available for the project on full-time basis.</li>
            <li>Availability of administrative Structure for operationalization of actual faculty training of the Academy within the institute.</li>
          </ul>

          <h3 className="text-lg font-semibold">Facilities available in NIT Patna:</h3>

          <div className="space-y-4">
            <div>
              <h4 className="text-md font-semibold mb-2">Laboratory Facilities:</h4>
              <ul className="list-disc pl-6">
                <li>
                  <a href="http://nitp.ac.in/ict/ESDL/index.html" 
                     target="_blank" 
                     rel="noopener noreferrer" 
                     className="text-blue-600 hover:text-blue-800">
                    Embedded System Design Lab
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-2">Software:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>MATLAB</li>
                <li>Ni-LabVIEW</li>
                <li>VisSim for Communication</li>
                <li>IE3D for EM Simulation</li>
                <li>Agilent ADS</li>
                <li>CST Studio Suite 2014</li>
                <li>Ansys HFSS Suite 2014</li>
              </ul>
            </div>

            <div>
              <h4 className="text-md font-semibold mb-2">Hardware:</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>A number of SDR based transceivers from NI.</li>
                <li>High Performance Computing facility including a Dell PowerEdge Blade Server and a number of workstations.</li>
                <li>RF Signal Analyser up to 26.5 GHz (Agilent Technologies)</li>
                <li>RF Continuous Wave Signal Generator up to 40 GHz (Agilent Technologies)</li>
                <li>Vector Network Analyser up to 26.5 GHz (Agilent Technologies)</li>
                <li>A Number of DSO by Tektronix</li>
                <li>A number of analog, digital and wireless communication training kit</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infrastructure;