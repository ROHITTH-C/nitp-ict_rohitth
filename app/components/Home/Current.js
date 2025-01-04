export default function Announce() {
    const announcements = [
      {
        title: "Online FDP under the banner of EICT NIT Patna titled as 'Advances in Robotics and Machine Learning'",
        date: "10-02-2025 to 14-02-2025",
      },
      {
        title: "FDP on “Quantum Communication and AI/ML”",
        date: "7th – 11th March, 2025",
      },
    ];
  
    return (
      <div className="max-w-lg mx-auto bg-gradient-to-b from-blue-100 to-blue-300 p-4 shadow-lg rounded-md ">
        <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black">
          Current Courses
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
  