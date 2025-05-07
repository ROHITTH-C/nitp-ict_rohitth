'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookOpen, Award, Users, MapPin, School, Globe } from 'lucide-react';
import Announcement from './Announcement';

// import Compete from './Compete';
// import Current from './Current';
// import UpProgram from './UpProgram';
// import Gallery from './Gallery';

export default function Main() {
  return (
    <div className="max-w-7xl mx-auto">
      {/* Introduction Section */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-4 flex items-center">
          <BookOpen className="mr-2" size={28} />
          About Electronics and ICT Academy
        </h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Electronics and ICT Academy at NIT Patna was established under a scheme of MeitY, Government of India, with the primary objective to enhance the quality of technical education and to bridge the gap between academia and industry.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The Academy focuses on imparting knowledge and skills in cutting-edge technologies like AI, Machine Learning, IoT, Blockchain, and other emerging areas of Electronics and ICT.
            </p>
            <div className="flex items-center space-x-2 text-blue-600">
              <Link href="/Institute/Introduction" className="flex items-center hover:underline">
                Read More
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="relative h-64 rounded-lg overflow-hidden">
            <Image 
              src="https://www.nitp.ac.in/homepage/MainEntrance.jpg" 
              alt="NIT Patna Campus" 
              fill
              style={{ objectFit: 'cover' }}
              className="rounded-lg"
            />
          </div>
        </div>
      </section>

      
     
      {/* Key Features Section */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center">
          <Award className="mr-2" size={28} />
          Our Key Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Faculty Development Programs</h3>
            <p className="text-gray-600">
              Intensive training programs for faculty members to enhance their knowledge and skills in emerging technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Industry Collaborations</h3>
            <p className="text-gray-600">
              Partnerships with leading technology companies to bridge the gap between academic curriculum and industry requirements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Research & Innovation</h3>
            <p className="text-gray-600">
              Promoting research in cutting-edge technologies like AI, IoT, Blockchain, and more through workshops and projects.
            </p>
          </div>
        </div>
      </section>

      {/* Participating Institutes Section */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center">
          <School className="mr-2" size={28} />
          Participating Institutes
        </h2>
        <p className="text-gray-700 mb-6">
          DeitY has sponsored a scheme entitled "Scheme of Financial Assistance for setting up of Electronics and ICT Academies". The Empowered Committee under the chairmanship of Secretary, DeitY has accorded approval for setting up of 4 such Academies across India:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          <div className="p-6 border border-gray-200 rounded-md hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-blue-700 text-lg">NIT Patna</h3>
            <p className="text-gray-600 mt-1">National Institute of Technology, Patna</p>
            <p className="text-gray-500 mt-1 text-sm">Bihar</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-md hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-blue-700 text-lg">IIITDM Jabalpur</h3>
            <p className="text-gray-600 mt-1">Indian Institute of Information Technology, Design and Manufacturing</p>
            <p className="text-gray-500 mt-1 text-sm">Madhya Pradesh</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-md hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-blue-700 text-lg">NIT Warangal</h3>
            <p className="text-gray-600 mt-1">National Institute of Technology, Warangal</p>
            <p className="text-gray-500 mt-1 text-sm">Telangana</p>
          </div>
          <div className="p-6 border border-gray-200 rounded-md hover:bg-blue-50 transition-colors">
            <h3 className="font-semibold text-blue-700 text-lg">IIT Guwahati</h3>
            <p className="text-gray-600 mt-1">Indian Institute of Technology, Guwahati</p>
            <p className="text-gray-500 mt-1 text-sm">Assam</p>
          </div>
        </div>
        <p className="text-gray-700 mt-6">
          The NIT Patna E&ICT Academy caters to faculty from institutions across Bihar, Jharkhand, Odisha, and West Bengal, through partnerships with various technical institutes in these states.
        </p>
      </section>

      {/* Quick Stats Section */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center">
          <Users className="mr-2" size={28} />
          Our Impact
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">14+</p>
            <p className="text-gray-700">Faculty Programs</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">1500+</p>
            <p className="text-gray-700">Faculty Trained</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">10+</p>
            <p className="text-gray-700">Institutions Reached</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <p className="text-4xl font-bold text-blue-600 mb-2">8+</p>
            <p className="text-gray-700">Technology Areas</p>
          </div>
        </div>
      </section>

      {/* Government Support Section */}
      <section className="mb-12 bg-white rounded-lg shadow-md p-6 border-t-4 border-blue-600">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center">
          <MapPin className="mr-2" size={28} />
          Government Initiative
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Under Ministry of Electronics & IT</h3>
            <p className="text-gray-700 mb-4 leading-relaxed">
              The E-ICT Academy at NIT Patna is supported by the Ministry of Electronics and Information Technology (MeitY), Government of India. The academy is part of the government's Digital India initiative to enhance digital skills across the nation.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through funding and guidance from MeitY, the academy is able to offer high-quality training programs and workshops at minimal costs to participants from educational institutions and industry.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-3 text-gray-800">Responsibilities of DeitY</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                To set up and organize meetings of the Empowered Committee for taking policy level decisions
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                To ensure time-bound implementation through Project Review and Steering Group
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                To provide necessary funds for implementation to respective institutions
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                To assist in expediting issues related to progress and coordination
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-600 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                To take up any other issues and aspects related to the Scheme/Project
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="mb-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-6 flex items-center">
          <svg className="mr-2 w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
          </svg>
          Technology Focus Areas
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">AI & Medical Imaging</h3>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Quantum Computing</h3>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Industry 4.0</h3>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Multimedia Forensics</h3>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Text Analytics</h3>
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-3 bg-blue-100 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
              </svg>
            </div>
            <h3 className="font-semibold text-gray-800">Semiconductor Devices</h3>
          </div>
        </div>
      </section>
    </div>
  );
}
