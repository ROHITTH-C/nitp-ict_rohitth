export default function Announce() {
  const announcements = [
    {
      title: "Online Faculty Development Programme on Semiconductor Devices, Circuits & Sensors: Applications and Research Perspective",
      link: "https://drive.google.com/file/d/1233OI0yDXjDRXPdSVv3CBIvaoBVl-EVG/view",
      date: "09-22 Jun 2025"
    },
    {
      title: "Online Faculty Development Programme on Blockchain Technology and Applications",
      link: "https://drive.google.com/file/d/1WKe9vkh2l_k76iYYtU2mYa0P5zAPtBoK/view",
      date: "13-23 May 2025"
    },
    { 
      title: "Cyber Security (Dark Web)", 
      link: "https://forms.gle/aV2Dt75uRjFdNQNz7", 
      date: "20 Jan - 31 Jan 2025" 
    },
    { 
      title: "Current Challenges in Cyber Security with Blockchain and IDS in IoT Domain", 
      link: "https://forms.gle/FtXCxgRfjwcijbbv5", 
      date: "20 - 24 Jan 2025" 
    },
    { 
      title: "Electrical Vehicle and Energy Storage Systems: Recent Trends and Future Prospects", 
      link: "https://forms.gle/qcCXgbaPfkuYm15J7", 
      date: "27 - 31 Jan 2025" 
    },
    { 
      title: "AI and Deep Learning", 
      link: "https://forms.gle/zTyveCWgJDtkoLtZ7", 
      date: "1 Feb - 23 Feb 2025 (Weekends - Sat, Sun)" 
    },
    { 
      title: "Nanotechnology for VLSI: Fabrication and Challenges", 
      link: "https://forms.gle/K4EpKq6cXS9239Dh8", 
      date: "3 - 7 Feb 2025" 
    },
    { 
      title: "Advances in Millimeter Wave & THz Technologies for 6G and Future Wireless Networks", 
      link: "https://forms.gle/TaoVQJQBD4mcPLJo8", 
      date: "10 - 14 Feb 2025" 
    },
    { 
      title: "Innovate Mechatronics: Product Design and Development with Embedded Systems and Robotics", 
      link: "https://forms.gle/TpU55XcWfuTxPaab7", 
      date: "10 - 14 Feb 2025" 
    },
    { 
      title: "Advanced in Robotics and Machine Learning", 
      link: "https://forms.gle/nxjaWSGZrRZAGLkZA", 
      date: "10 - 14 Feb 2025" 
    },
    { 
      title: "5G Wireless System Design: From the Standards Perspective", 
      link: "https://forms.gle/5YqF3RBTDGaiVaDa6", 
      date: "17 - 21 Feb 2025" 
    },
    { 
      title: "Advanced Optimization Techniques using MATLAB", 
      link: "https://forms.gle/cxN1LFKLKxb6BHaS9", 
      date: "17 - 28 Feb 2025" 
    },
    { 
      title: "IoT Applications with Sensors, Embedded Systems, and Data Analytics", 
      link: "https://forms.gle/KKEpFsp8WpcNm4i87", 
      date: "17 - 28 Feb 2025" 
    },
    {
      title: "FDP on E&ICT Quantum Computing (IBM)",
      link:  "https://docs.google.com/forms/d/e/1FAIpQLScTzZ6x07Nukk_qHM7KNbU4Ij-P9K9_JGsWcFNj0lr49o0aRQ/viewform",
      date: "28 Feb - 22 Mar 2025"
    },
    { 
      title: "V2X and UAV Communications in 6G: Recent Trends and Enabling Technology", 
      link: "https://forms.gle/EN3U65rfbfgYFkT89", 
      date: "24 - 28 Feb 2025" 
    },
    { 
      title: "Deep Learning and Optimization for Healthcare", 
      link: "https://forms.gle/vvszJkj41gwXkb1d8", 
      date: "24 - 28 Feb 2025" 
    },
    { 
      title: "Text Analytics with Deep Learning", 
      link: "https://forms.gle/V4mQjC9FKDLnVVCB9", 
      date: "24 Feb - 7 Mar 2025 (4 Hours Per Day from 4 PM)" 
    },
    { 
      title: "Machine Learning for Multimedia Processing and Forensics", 
      link: "https://forms.gle/VsdrUSSfkN6zkgTp8", 
      date: "28 Feb - 4 Mar 2025" 
    },
    { 
      title: "Artificial Intelligence for Image Processing and Medical Applications", 
      link: "https://forms.gle/haKCtpddSLLMKb5X7", 
      date: "3 - 7 Mar 2025" 
    },
    { 
      title: "Application of Industry 4.0 in Circular Supply Chain", 
      link: "https://forms.gle/WYNrvmuCKtTooa627", 
      date: "3 - 7 Mar 2025" 
    },
    { 
      title: "Quantum Communication and AI/ML", 
      link: "https://forms.gle/xbnj17tKKZmxY3217", 
      date: "7 - 11 Mar 2025" 
    },
    {
      title: "Two-week Hybrid Faculty Development Program on “Applications of ICT in Smart Cities",
      link: "https://forms.gle/HJir9hfRxpUeuKHk9",
      date: "2 - 14 April 2025"
    }
  ];

  // Helper function to extract the latest date from a range
  const parseEndDate = (dateStr) => {
    const monthMap = {
      Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5,
      Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11,
    };

    const parts = dateStr.match(/(\d{1,2})[\s-]*(\d{0,2})?\s*([A-Za-z]+)?\s*-*\s*(\d{0,2})?\s*([A-Za-z]+)?\s*(\d{4})/);
    if (!parts) return new Date(0); // fallback if parsing fails

    const [
      , d1, d2, m1, d3, m2, yearStr
    ] = parts;

    const day = d3 || d2 || d1;
    const month = m2 || m1;
    const year = yearStr;

    const monthIndex = monthMap[month?.substring(0, 3)] || 0;

    return new Date(year, monthIndex, parseInt(day));
  };

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    return parseEndDate(b.date) - parseEndDate(a.date);
  });

  return (
    <div className="max-w-lg mx-auto bg-gradient-to-b from-blue-100 to-blue-300 p-4 shadow-lg rounded-md">
      <h2 className="text-xl font-bold text-black mb-4 border-b-2 border-black">
        ANNOUNCEMENTS
      </h2>
      <div className="max-h-72 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-gray-200">
        {sortedAnnouncements.map((item, index) => (
          <div
            key={index}
            className="p-4 bg-white rounded-md shadow hover:shadow-lg mb-4"
          >
            <a
              href={item.link}
              className="text-blue-700 font-semibold hover:underline"
              target="_blank"
              rel="noopener noreferrer"
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