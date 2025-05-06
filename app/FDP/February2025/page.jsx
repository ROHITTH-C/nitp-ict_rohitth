import React from 'react';
import Table from '../../components/FDP/Table';

const courses = [
    {
      sno: 1,
      name: 'Generative AI & Use Cases (2025)',
      coordinators: ['Dr. Jyoti Prakash Singh'],
      start: '01-11-2025',
      end: '02-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 112,
      gdrive:"https://drive.google.com/file/d/1LuL3MAANpGT0QFDxeDWE1LrSoySCTKEG/view"
    },
    {
      sno: 2,
      name: 'Application of Digital Technologies in Manufacturing Environment',
      coordinators: ['Dr. Sonu Rajak', 'Dr. Vimal KEK'],
      start: '02-03-2025',
      end: '14-02-2025',
      hub: 'NIT Patna',
      spokes: ['NIT Tiruchirapalli'],
      beneficiaries: 90,
      gdrive: "https://drive.google.com/file/d/1_Ln9je38tKrWpYrsgb4ZcWIlq5wicbW6/view"
    },
    {
      sno: 3,
      name: 'Nanotechnology for VLSI: Fabrication and Challenges',
      coordinators: ['Dr. J B Maurya', 'Dr. Pushpa Giri', 'Dr. V Madhusudhana Reddy'],
      start: '02-03-2025',
      end: '02-07-2025',
      hub: 'NIT Patna',
      spokes: ['Malla Reddy College of Engineering & Technology'],
      beneficiaries: 84,
      gdrive: "https://drive.google.com/file/d/17LJELbWxx40uYm91Y5FD0yLdobXzJTNm/view"
    },
    {
      sno: 4,
      name: 'AI and Deep Learning',
      coordinators: ['Dr. Mukesh Kumar', 'Dr. Piyush Kumar'],
      start: '01-02-2025',
      end: '23-02-2025',
      hub: 'NIT Patna',
      spokes: ['KNIT Sultanpur'],
      beneficiaries: 67,
      gdrive: "https://drive.google.com/file/d/1USJ2c4AfJE9XhkytU1jqXaxF08a6UijP/view"
    },
    {
      sno: 5,
      name: 'Advanced Optimization Techniques using MATLAB',
      coordinators: ['Dr. Mukesh Kumar', 'Dr. Piyush Kumar'],
      start: '17-02-2025',
      end: '28-02-2025',
      hub: 'NIT Patna',
      spokes: ['BEU Patna', 'Malla Reddy College'],
      beneficiaries: 116,
      gdrive: "https://drive.google.com/file/d/1z2ua6HVdtzYy6Hz_z3ISLKt__0F6gppA/view"
    },
    {
      sno: 6,
      name: 'IoT Applications with Sensors, Embedded Systems, and Data Analytics',
      coordinators: ['Dr. M. P. Singh', 'Dr. Shyam Singh Rajput'],
      start: '17-02-2025',
      end: '03-02-2025',
      hub: 'NIT Patna',
      spokes: ['NIT Agartala', 'UPES Dehradun', 'Techno Main Salt Lake'],
      beneficiaries: 77,
      gdrive: "https://drive.google.com/file/d/1x9l_wLChvmxoq3afTtumRzV3GhpEHNo_/view"
    },
    {
      sno: 7,
      name: 'Technology Enabled Teaching, Learning & Process for Institutes',
      coordinators: ['Prof. M P Singh', 'Dr. Bikash Chandra Sahana'],
      start: '03-02-2025',
      end: '14-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 94,
      gdrive: "https://drive.google.com/file/d/14or3JBOPJl1lDtgRx-k1SqKfpcfP0zxj/view"
    },
    {
      sno: 8,
      name: 'Transforming Water Resources Management, Traffic Systems and E-Mobility with Quantum Computing and AI',
      coordinators: ['Dr. Satyajit Mondal', 'Dr. B. Balaji Naik', 'Dr. Trilochan Penthia'],
      start: '17-02-2025',
      end: '28-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 130,
      gdrive: "https://drive.google.com/file/d/1JA5KM2dYAUt9FYHaJBCRn6Jx2IHFsF61/view"
    },
    {
      sno: 9,
      name: 'Next-Gen Sensors, Monitoring and Automation for Energy Systems and Electric Vehicles',
      coordinators: ['Dr. Ravi Kumar', 'Qaisar Raza', 'Achinta Sarkar'],
      start: '17-02-2025',
      end: '22-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 103,
      gdrive: "https://drive.google.com/file/d/1x9l_wLChvmxoq3afTtumRzV3GhpEHNo_/view"
    },
    {
      sno: 10,
      name: 'Advanced in Robotics and Machine Learning',
      coordinators: ['Dr. Arunangshu Ghosh', 'Dr. Gagan Deep Meena'],
      start: '02-10-2025',
      end: '14-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 54
    },
    {
      sno: 11,
      name: 'Innovative Mechatronics Product Design and Development: Addressing Emerging Needs with Embedded Systems and Robotics',
      coordinators: ['Prof. Amit Kumar', 'Dr. Golak Bihari Mahanta'],
      start: '02-10-2025',
      end: '21-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 82
    },
    {
      sno: 12,
      name: 'Advances in Millimeter Wave & THz technologies for 6G and Future Wireless Networks',
      coordinators: ['Dr. Rajeshee Bhattacharya', 'Dr. Rajan Agrahari'],
      start: '02-10-2025',
      end: '14-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 64,
      gdrive: "https://drive.google.com/file/d/1XsO21xBqLx3pEqrCZBIsvZtGAcnIu87V/view"
    },
    {
      sno: 13,
      name: '5G Wireless System Design: From the Standards Perspective',
      coordinators: ['Dr. Aakash Agarwal', 'Dr. Richa Agarwal', 'Dr. Rakesh Ranjan'],
      start: '17-02-2025',
      end: '21-02-2025',
      hub: 'NIT Patna',
      spokes: [],
      beneficiaries: 52,
      gdrive: "https://drive.google.com/file/d/1kDVRzp47VXL6Bnb94f7Oot3YfdKaeTcr/view"
    },
    {
      sno: 14,
      name: 'Quantum Computing and Post-Quantum Cryptography',
      coordinators: ['Dr. Om Pal'],
      start: '02-03-2025',
      end: '02-09-2025',
      hub: 'Delhi University, Delhi',
      spokes: [],
      beneficiaries: 135,
      gdrive: "https://drive.google.com/file/d/1JA5KM2dYAUt9FYHaJBCRn6Jx2IHFsF61/view"
    },
    {
      sno: 15,
      name: 'Harnessing AI & ML for Social Impact and Smart Industries (on hybrid mode)',
      coordinators: ['Soumitra Sasmal'],
      start: '24-02-2025',
      end: '28-02-2025',
      hub: 'Techno India, Kolkata',
      spokes: [],
      beneficiaries: 73
    },
    {
      sno: 16,
      name: 'Next-Generation Wireless Sensor Networks (NGWSN-2025)',
      coordinators: ['Dr. Prashant Kumar'],
      start: '17-02-2025',
      end: '28-02-2025',
      hub: 'NIT Jamshedpur',
      spokes: [],
      beneficiaries: 51
    },
    {
      sno: 17,
      name: 'AI-based Image Processing for Bio-medical Applications (AIIPBM-2025)',
      coordinators: ['Dr. Prashant Kumar'],
      start: '17-02-2025',
      end: '28-02-2025',
      hub: 'NIT Jamshedpur',
      spokes: [],
      beneficiaries: 57,
      gdrive: "https://drive.google.com/file/d/1BgFq9T3t1qEQ9EuZYnIU9ZR_H9Ze5PcC/view"
    }
  ];  

function Page() {
  return (
    <div className="min-h-screen bg-sky-50 p-6">
      <Table courses={courses} />
    </div>
  );
}

export default Page;
