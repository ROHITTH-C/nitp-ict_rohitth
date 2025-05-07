import { NextResponse } from 'next/server';
import { query } from '@/app/lib/db';

// Seed announcements data
const announcementsData = [
  {
    title: "Faculty Development Program on Next-Generation Semiconductor Technology Advancement, Research and Applications",
    link: "https://drive.google.com/file/d/1soWSqXqf-yalk4GSR52YqKKuuMF3q_cn/view?usp=sharing",
    date: "23-27 June 2025",
    is_new: true
  },
  {
    title: "Faculty Development Program on Blockchain Technology and Applications",
    link: "https://drive.google.com/file/d/1qYWgJDG6do4OvkYqamqNzDB0RPSsuPqA/view?usp=sharing",
    date: "13-23 May 2025",
    is_new: true
  },
  {
    title: "Faculty Development Program on Natural Language Processing with Deep Learning",
    link: "https://drive.google.com/file/d/1s6vsOEP_6VXq1msfPhxwUPKe6O5O-Hua/view?usp=sharing",
    date: "24 June -1 July 2025",
    is_new: true
  },
  {
    title: "Faculty Development Program on AI in Medical Imaging and Diagnostics: Current Trends and Challenges",
    link: "https://drive.google.com/file/d/1CXJE4E_Dg9apHE0m_uZdr19N0bekCrLN/view?usp=sharing",
    date: "7-18 July 2025",
    is_new: true
  },
  {
    title: "Faculty Development Program on Malware Analysis with Data Science",
    link: "https://drive.google.com/file/d/1VBZwM_kGIlciBttvBzSJwcoF4D_wotMD/view?usp=sharing",
    date: "12-18 May 2025",
    is_new: true
  },
  {
    title: "Faculty Development Program on Drone and IoT Technology for GIS and Smart Farming Application",
    link: "https://drive.google.com/file/d/1-bydZZTRxeYA_nVU1N-pW0VBqUMLjdQ9/view?usp=sharing",
    date: "2-6 Jun 2025",
    is_new: true
  },
  {
    title: "Online Faculty Development Programme on Semiconductor Devices, Circuits & Sensors: Applications and Research Perspective",
    link: "https://drive.google.com/file/d/1233OI0yDXjDRXPdSVv3CBIvaoBVl-EVG/view",
    date: "09-22 Jun 2025",
    is_new: false
  },
  {
    title: "Online Faculty Development Programme on Blockchain Technology and Applications",
    link: "https://drive.google.com/file/d/1WKe9vkh2l_k76iYYtU2mYa0P5zAPtBoK/view",
    date: "13-23 May 2025"
  },   
  {
    title: "Online Faculty Development Program on Theoretical Insights and Practical Strategies: Optimization, Control, Game Theory and Reinforcement Learning ",
    link: "https://drive.google.com/file/d/1NZxTJFaeKna4jcVKOptFbvDUScshew7w/view?usp=sharing",
    date: "2 - 12 June 2025"
  },
  {
    title: "Online Faculty Development Program on QT-03 BASIC QUANTUM PROGRAMMING",
    link: "https://drive.google.com/file/d/1NZxTJFaeKna4jcVKOptFbvDUScshew7w/view?usp=sharing",
    date: "May 16 - 7 June 2025"
  },
  {
    title: "Online Faculty Development Programme on Semiconductor Devices, Circuits & Sensors: Applications and Research Perspective",
    link: "https://drive.google.com/file/d/1fbzy9dpv8sRoW9JxQKOFfGV8z4O5hEoT/view?usp=sharing",
    date: "June 09 – 22, 2025"
  },
  {
    title: "Online Faculty Development Programme on Blockchain Technology and Applications",
    link: "https://drive.google.com/file/d/1NZxTJFaeKna4jcVKOptFbvDUScshew7w/view?usp=sharing",
    date: "13 - 23 May 2025"
  },
  {  
    title: "Two-week Hybrid Faculty Development Program on \"Applications of ICT in Smart Cities\"",
    link: "https://forms.gle/HJir9hfRxpUeuKHk9",
    date: "2 - 14 April 2025"
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
    title: "FDP on E&ICT Quantum Computing (IBM)",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScTzZ6x07Nukk_qHM7KNbU4Ij-P9K9_JGsWcFNj0lr49o0aRQ/viewform",
    date: "28 Feb - 22 Mar 2025"
  }
];

export async function GET() {
  try {
    // First, clear existing data
    await query({
      query: 'DELETE FROM announcements',
    });

    // Reset auto-increment
    await query({
      query: 'ALTER TABLE announcements AUTO_INCREMENT = 1',
    });

    // Insert each announcement
    for (const announcement of announcementsData) {
      await query({
        query: `
          INSERT INTO announcements (title, link, date, is_new)
          VALUES (?, ?, ?, ?)
        `,
        values: [
          announcement.title,
          announcement.link,
          announcement.date,
          announcement.is_new === undefined ? false : announcement.is_new
        ],
      });
    }

    return NextResponse.json(
      { 
        message: 'Announcements seeded successfully',
        count: announcementsData.length
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error seeding announcements:', error);
    return NextResponse.json(
      { message: 'Error seeding announcements', error: error.message },
      { status: 500 }
    );
  }
} 