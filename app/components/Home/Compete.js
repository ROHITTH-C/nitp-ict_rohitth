export default function Announce() {
    const announcements = [
      {
        title: "Electrical Vehicle and Energy Storage Systems: Recent Trends and Future Prospects",
        date: "27-31 Jan 2025",
      },
      {
        title: "Current challenges in cyber security with blockchain and IDS in IoT domain",
        date: "20-24 Jan 2025",
      },
      {
        title: "Nanotechnology for VLSI: Fabrication and Challenges",
        date: "3-7 Feb 2025",
      },
      {
        title: "Future Trends in AI and Machine Learning",
        date: "15-19 Mar 2025",
      },
      {
        title: "Advancements in Quantum Computing",
        date: "10-14 Apr 2025",
      },
    ];
  
    return (
      <div className="max-w-lg mx-auto bg-gradient-to-b from-blue-100 to-blue-300 p-4 shadow-lg rounded-md">
        <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black">
          Compete Courses
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
  