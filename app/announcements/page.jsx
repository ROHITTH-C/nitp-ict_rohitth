'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Clock, ArrowLeft, Bell, ExternalLink } from 'lucide-react';

export default function AnnouncementsPage() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const announcementsPerPage = 10;

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        const response = await fetch('/api/announcements');
        if (!response.ok) {
          throw new Error('Failed to fetch announcements');
        }
        const data = await response.json();
        setAnnouncements(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  // Get current announcements
  const indexOfLastAnnouncement = currentPage * announcementsPerPage;
  const indexOfFirstAnnouncement = indexOfLastAnnouncement - announcementsPerPage;
  const currentAnnouncements = announcements.slice(indexOfFirstAnnouncement, indexOfLastAnnouncement);
  const totalPages = Math.ceil(announcements.length / announcementsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const formatDate = (dateStr) => {
    return dateStr;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-red-50 border border-red-200 p-4 rounded-md">
            <p className="text-red-700">Error loading announcements: {error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-4">
              <ArrowLeft size={16} className="mr-2" />
              Back to Home
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 flex items-center">
              <Bell className="mr-3 text-blue-600" size={28} />
              Announcements
            </h1>
            <p className="text-gray-600 mt-2">Stay updated with the latest news, events, and programs</p>
          </div>
        </div>

        {announcements.length === 0 ? (
          <div className="bg-white shadow-md rounded-lg p-6 text-center">
            <p className="text-gray-500">No announcements available at this time.</p>
          </div>
        ) : (
          <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {currentAnnouncements.map((announcement) => (
                <li key={announcement.id} className="transition-colors hover:bg-blue-50">
                  <div className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h2 className="text-lg font-semibold text-gray-900 mb-1">
                          {announcement.title}
                          {announcement.is_new === 1 && (
                      <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-red-600 text-white rounded-md mt-0.5">
                        New
                      </span>
                    )}
                        </h2>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <Clock size={14} className="mr-1" />
                          <span>{formatDate(announcement.date)}</span>
                        </div>
                      </div>
                      {announcement.link && (
                        <a 
                          href={announcement.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center px-3 py-1.5 border border-blue-600 text-blue-600 text-sm font-medium rounded-md hover:bg-blue-600 hover:text-white transition-colors"
                        >
                          <ExternalLink size={14} className="mr-1" />
                          View Details
                        </a>
                      )}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          
            {/* Pagination */}
            {totalPages > 1 && (
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <button 
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 border rounded-md ${
                      currentPage === 1 
                        ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    Previous
                  </button>
                  
                  <div className="flex space-x-1">
                    {[...Array(totalPages).keys()].map(number => (
                      <button
                        key={number + 1}
                        onClick={() => paginate(number + 1)}
                        className={`px-3 py-1 border rounded-md ${
                          currentPage === number + 1
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'border-gray-300 text-gray-700 hover:bg-blue-50'
                        }`}
                      >
                        {number + 1}
                      </button>
                    ))}
                  </div>
                  
                  <button 
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 border rounded-md ${
                      currentPage === totalPages 
                        ? 'border-gray-300 text-gray-400 cursor-not-allowed' 
                        : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
} 