import React from 'react';
import Table from '../../components/FDP/Table';

const courses = [
  {
    sno: 1,
    name: 'Current Challenges in cyber security with block chain and IDS in IOT',
    coordinators: ['Dr. Ditipriya Sinha', 'Dr. Amrita Mohan'],
    start: '20-01-2025',
    end: '24-01-2025',
    hub: 'NIT Patna',
    spokes: [],
    beneficiaries: 101,
    gdrive: "https://drive.google.com/file/d/1LfE3C0nTAjEtyhVEQ88vXWamY5gLPCCB/view"

  },
  {
    sno: 2,
    name: "e-Content Development & MOOC's",
    coordinators: ['Dr. Abhishek Awasthi (Spoke)'],
    start: '14-01-2025',
    end: '20-01-2025',
    hub: 'NIT Patna',
    spokes: ['Maharaja Agrasen University, HP'],
    beneficiaries: 69,
  },
  {
    sno: 3,
    name: 'Cyber Physical Systems & control Bridging the Gap to Future Technologies',
    coordinators: ['Dr. Puskar Arya', 'Dr. Pawan Kuman'],
    start: '23-01-2025',
    end: '31-01-2025',
    hub: 'NIT Patna',
    spokes: [],
    beneficiaries: 65,
  },
  {
    sno: 4,
    name: 'Cyber Security (Dark Web)',
    coordinators: ['Dr. M. P. Singh', 'Dr. Shyam Singh Rajput'],
    start: '20-01-2025',
    end: '31-01-2025',
    hub: 'NIT Patna',
    spokes: [],
    beneficiaries: 100,
    
    gdrive: "https://drive.google.com/file/d/1LfE3C0nTAjEtyhVEQ88vXWamY5gLPCCB/view"
  },
  {
    sno: 5,
    name: 'Electrical Vehicle and Energy Storage Systems: Recent Trends and Future Prospects',
    coordinators: ['Dr Amitesh Kumar, EED, NIT Patna (Hub)'],
    start: '27-01-2025',
    end: '31-01-2025',
    hub: 'NIT Patna',
    spokes: [],
    beneficiaries: 43,
    gdrive: "https://drive.google.com/file/d/1sk3G6uSHBkfnkqyN1Xf2KieX0dTfloq6/view"
  },
  {
    sno: 5.1,
    name: 'Electrical Vehicle (Part-2)',
    coordinators: ['Dr. K V Ramana Reddy, MECET, Hyderabad (Spoke)'],
    start: '27-01-2025',
    end: '31-01-2025',
    hub: 'NIT Patna',
    spokes: ['MECET, Hyderabad'],
    beneficiaries: 51,
    gdrive: "https://drive.google.com/file/d/1sk3G6uSHBkfnkqyN1Xf2KieX0dTfloq6/view"
  },
  {
    sno: 6,
    name: 'Semiconductor Fabrication & Packaging Technology',
    coordinators: ['Dr. J B Maurya', 'Dr. Gaurav Varsney'],
    start: '20-01-2025',
    end: '31-01-2025',
    hub: 'NIT Patna',
    spokes: [],
    beneficiaries: 52,
    gdrive: "https://drive.google.com/file/d/1ptTSYuupJ8R3c2yICVoMaKSBjAV5I35H/view"
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
