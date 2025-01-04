export default function Announce() {
  const announcements = [
    {
      title: "FDP Innovative Mechatronic Product Design and Development",
      date: "10th Feb 2025 to 21st Feb 2025",
    },
    {
      title: "FDP on Cyber Security (Dark Web)",
      date: "20th to 31st Jan 2025",
    },
  
  ];

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-b from-blue-100 to-blue-300 p-4 shadow-lg rounded-md">
      <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black">
        Upcoming Programs
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
            <div>
              <button className="btn btn-secondary mt-5 bg-red-400 p-2 rounded-lg mr-2"><a href="#" target="_blank" >
                Brochure
              </a></button>
              <button className="btn btn-danger mt-5 text-blue-900"><a href="#" target="_blank" >
                Apply Now
              </a></button>
            </div>
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
