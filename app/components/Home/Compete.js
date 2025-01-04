export default function Announce() {
    const announcements = [
      {
        title: "Six Faculty Development Program",
     
      },
      {
        title: "Towards 5G- The Key Enabling Technologies",
      
      },
      {
        title: "Data structures & algorithms",
     
      },
      {
        title: "VLSI design & embedded system",
      
      },
      {
        title: "Analog electronic circuit",
    
      },
      {
        title: "Fuzzy Logic & its Applications",
      
      },
      {
        title: "Fundamentals of DBMS",
      
      },
      {
        title: "FDP on Pattern Recognition  ",
      
      },
      {
        title: "Analog electronic circuit(Module:02)</",
       
      },
      {
        title: "Distributed System",
      
      },
      {
        title: "Microcontroller Embedded System Design",
       
      },
      {
        title: "FDP on IoT,",
       
      },
      {
        title: " FDP on Sensors IoT and Security during 13th October to 18th October 2017 at NIT Patna",
      
      },
      {
        title: "“Dev. of Embedded Systems using ARM Cortex M4 Processors” from 7th to 12th August, 2017",
       
      },
      {
        title: "FDP on 'Big Data and Machine Learning'",
       
      },
      {
        title: " FDP on 'Introduction to Web Development' from 13th June to 22nd June",
      
      },
      {
        title: "  Short Term FDP on ICT Skills for Teachers during 19-24 June 2017",
      
      },
      {
        title: "FDP on 'Fundamentals of Databases' from 23rd June to 03rd July",
       
      },
      {
        title: "FDP on 'Introduction to data structures and programming in C' from 01st July to 10th July.",
      
      },
      {
        title: "FDP on Hybrid Computational Intelligence.",
       
      },
    ];
  
    return (
      <div className="max-w-lg mx-auto bg-gradient-to-b from-blue-100 to-blue-300 p-4 shadow-lg rounded-md">
        <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black">
          Complete Courses
        </h2>
        <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
          {announcements.map((item, index) => (
            <div
              key={index}
              className="p-4 bg-white rounded-md shadow hover:shadow-lg mb-4"
            >
              <a
                href="#"
                className="text-blue-700 font-semibold hover:underline"
              >
                {item.title}
              </a>
              <p className="text-sm text-gray-600 mt-1 flex items-center">
                {item.date}
                <span className="text-red-500 ml-2 font-bold text-xs">NEW</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  