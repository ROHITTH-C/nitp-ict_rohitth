import React from 'react';
import Table from '../../components/FDP/Table';

const courses = [
    {
      sno: 1,
      name: "Deep Learning and Optimization for Healthcare",
      coordinators: ["Prof. M P Singh", "Dr. Amit Kumar Singh", "Dr. Anshul"],
      start: "24-02-2025",
      end: "04-03-2025",
      hub: "NIT Patna",
      spokes: [
        "MECET, Hyderabad",
        "UPES, Dehradun, Uttarakhand",
        "Sri Sankara Arts and Science College, Kanchipuram",
        "SR University",
        "BIT Sindri"
      ],
      beneficiaries: 297,
      gdrive: "https://drive.google.com/file/d/1vd5p9TlEgtq5JKptQErRXfyzHG-ZPXUN/view"
    },
    {
      sno: 2,
      name: "Machine Learning for Multimedia Forensics",
      coordinators: ["Dr. M. P. Singh", "Dr. Shyam Singh Rajput"],
      start: "28-02-2024",
      end: "04-03-2024",
      hub: "NIT Patna",
      spokes: [
        "NIT Jamshedpur",
        "UPES, Dehradun, Uttarakhand",
        "Bihar Engineering University, Patna"
      ],
      beneficiaries: 127,
      gdrive: ""
    },
    {
      sno: 3,
      name: "Data Science for All",
      coordinators: ["Dr. J P Singh"],
      start: "24-02-2025",
      end: "06-03-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 60,
      gdrive: "https://drive.google.com/file/d/1FpwGcxu-9zTjqYTOhgH9rRKcqes58u2t/view"
    },
    {
      sno: 4,
      name: "Biometrics Security in the Generative AI Era",
      coordinators: ["Dr. Kakali Chatterjee", "Dr. Ditipriya Sinha"],
      start: "01-03-2025",
      end: "12-03-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 51,
      gdrive: "https://drive.google.com/file/d/1-BPZ4MpYPDcR0D4oLpXZQksbV0StybW2/view"
    },
    {
      sno: 5,
      name: "Text Analytics with Deep Learning",
      coordinators: ["Dr. J. P. Singh", "Dr. Bhaskar Mandal"],
      start: "01-03-2025",
      end: "09-03-2025",
      hub: "NIT Patna",
      spokes: [
        "NIT Agartala",
        "UPES University Dehradun"
      ],
      beneficiaries: 111,
      gdrive: "https://drive.google.com/file/d/1ZuhBJW6yR_jHepFESPm6hp0OFNT98Diw/view"
    },
    {
      sno: 6,
      name: "Advances in Artificial Intelligence for image processing and medical applications",
      coordinators: ["Dr.Bikash Chandra Sahana", "Dr.Ashish Kumar Bhandari"],
      start: "03-03-2025",
      end: "07-03-2025",
      hub: "NIT Patna",
      spokes: [
        "KNIT, Sultanpur",
        "MRCET, Secunderabad",
        "UPES University Dehradun"
      ],
      beneficiaries: 215,
      gdrive: "https://drive.google.com/file/d/1BgFq9T3t1qEQ9EuZYnIU9ZR_H9Ze5PcC/view"
    },
    {
      sno: 7,
      name: "Application of Industry 4.0 in Circular Supply Chain",
      coordinators: ["Dr. Sonu Rajak"],
      start: "03-03-2025",
      end: "12-03-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 65,
      gdrive: "https://drive.google.com/file/d/1v4PIXopCw9g6aZCvI2W5sn-ZOV3WyDgU/view"
    },
    {
      sno: 8,
      name: "Quantum Communication and AI/ML",
      coordinators: ["Dr. M. P. Singh", "Dr. Rajeev Arya"],
      start: "07-03-2025",
      end: "11-03-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 73,
      gdrive: ""
    },
    {
      sno: 9,
      name: "Power Electronics and Drives Shaping the Future of Electric Vehicles",
      coordinators: ["Dr. Trilochan Pethia", "Dr. Vimlesh K Verma"],
      start: "10-03-2025",
      end: "16-03-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 147,
      gdrive: ""
    },
    {
      sno: 10,
      name: "Quantum Computing (IBM)",
      coordinators: ["Dr. M. P. Singh", "Dr. Rajeev Arya"],
      start: "28-02-2025",
      end: "22-03-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 70,
      gdrive: "https://drive.google.com/file/d/1JA5KM2dYAUt9FYHaJBCRn6Jx2IHFsF61/view"
    },
    {
      sno: 11,
      name: "IoT Applications with Sensors, Embedded Systems, and Data Analytics",
      coordinators: ["Dr. M. P. Singh", "Dr. Shyam Singh Rajput"],
      start: "17-02-2024",
      end: "28-02-2025",
      hub: "NIT Patna (Joint)",
      spokes: [],
      beneficiaries: 77,
      gdrive: "https://drive.google.com/file/d/1x9l_wLChvmxoq3afTtumRzV3GhpEHNo_/view"
    },
    {
      sno: 12,
      name: "VLSI Design using Open-source tools",
      coordinators: ["Dr. Sangeeta Singh", "Dr. Rajan Agrahari"],
      start: "02-03-2025",
      end: "16-02-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 28,
      gdrive: ""
    },
    {
      sno: 13,
      name: "Intricacies of Analog & Mixed Signal design",
      coordinators: ["Dr. Bal Chand Nagar", "Dr. Meena Panchore"],
      start: "17-02-2025",
      end: "26-02-2025",
      hub: "NIT Patna",
      spokes: [],
      beneficiaries: 43,
      gdrive: ""
    },
    {
      sno: 14,
      name: "V2X and UAV communications in 6G: Recent trends and enabling Technology",
      coordinators: ["Dr. Seemanti Saha", "Dr. Ritesh Kumar Mishra"],
      start: "24-02-2024",
      end: "28-02-2025",
      hub: "NIT Patna",
      spokes: ["UPES, Dehradun, Uttarakhand"],
      beneficiaries: 62,
      gdrive: "https://drive.google.com/file/d/1OCaUB2avo712u-kftBuM7MnOIwWrtSxb/view"
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
