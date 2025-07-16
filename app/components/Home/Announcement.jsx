'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import { ChevronUp, ChevronDown, ArrowRight, Bell } from 'lucide-react';

export default function Announcement({ className }) {
  const [announcements, setAnnouncements] = useState([]);
  const [visibleAnnouncements, setVisibleAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isPaused, setIsPaused] = useState(false);
  
  const announcementListRef = useRef(null);
  const scrollTimerRef = useRef(null);
  const visibleCount = 4; // Number of announcements visible at once

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        setLoading(true);
        const response = await fetch('/api/announcements');
        
        if (!response.ok) {
          throw new Error('Failed to fetch announcements');
        }
        
        const data = await response.json();
        // Sort announcements - new ones first
        const sortedAnnouncements = [...data || []].sort((a, b) => {
          // First sort by is_new (1 or true on top)
          if (a.is_new && !b.is_new) return -1;
          if (!a.is_new && b.is_new) return 1;
          // Then sort by date (most recent first)
          return new Date(b.date || 0) - new Date(a.date || 0);
        });
        setAnnouncements(sortedAnnouncements);
        
        // Create repeating announcements if needed to fill the visible area
        let displayAnnouncements = [...sortedAnnouncements];
        if (sortedAnnouncements.length > 0 && sortedAnnouncements.length < visibleCount) {
          // Repeat the announcements to fill the visible area
          while (displayAnnouncements.length < visibleCount) {
            displayAnnouncements = [...displayAnnouncements, ...sortedAnnouncements];
          }
        }
        
        // Set the first visibleCount announcements
        if (displayAnnouncements.length > 0) {
          setVisibleAnnouncements(displayAnnouncements.slice(0, visibleCount));
        }
      } catch (error) {
        setError('Error loading announcements');
        console.error('Error fetching announcements:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnnouncements();
  }, []);

  // Setup auto-scrolling
  useEffect(() => {
    if (loading || error || announcements.length === 0 || isPaused) {
      return;
    }

    // Function to rotate announcements
    const rotateAnnouncements = () => {
      setVisibleAnnouncements(prev => {
        const newVisible = [...prev];
        // Remove the first item
        newVisible.shift();
        
        // Get the next item from the full list (or cycle back if needed)
        let nextAnnouncement;
        if (announcements.length <= visibleCount) {
          // If we don't have enough announcements, cycle through what we have
          nextAnnouncement = announcements[announcements.indexOf(prev[prev.length - 1]) + 1] || announcements[0];
        } else {
          // Normal case: get the next item in the full list
          const nextIndex = (announcements.indexOf(prev[prev.length - 1]) + 1) % announcements.length;
          nextAnnouncement = announcements[nextIndex];
        }
        
        // Add it to the end
        newVisible.push(nextAnnouncement);
        return newVisible;
      });
    };

    // Start auto-scrolling timer
    scrollTimerRef.current = setInterval(rotateAnnouncements, 2000);

    // Cleanup on component unmount
    return () => {
      if (scrollTimerRef.current) {
        clearInterval(scrollTimerRef.current);
      }
    };
  }, [loading, error, announcements, visibleCount, isPaused]);

  const handleMouseEnter = () => {
    setIsPaused(true);
    if (scrollTimerRef.current) {
      clearInterval(scrollTimerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  const handleScrollUp = () => {
    if (announcements.length === 0) return;
    
    setVisibleAnnouncements(prev => {
      const newVisible = [...prev];
      // Get the previous item from the full list (or cycle back if needed)
      let prevAnnouncement;
      const firstVisibleIndex = announcements.indexOf(prev[0]);
      const prevIndex = (firstVisibleIndex - 1 + announcements.length) % announcements.length;
      prevAnnouncement = announcements[prevIndex];
      
      // Add it to the beginning and remove the last item
      return [prevAnnouncement, ...newVisible.slice(0, -1)];
    });
  };

  const handleScrollDown = () => {
    if (announcements.length === 0) return;
    
    setVisibleAnnouncements(prev => {
      const newVisible = [...prev];
      // Get the next item from the full list (or cycle back if needed)
      let nextAnnouncement;
      const lastVisibleIndex = announcements.indexOf(prev[prev.length - 1]);
      const nextIndex = (lastVisibleIndex + 1) % announcements.length;
      nextAnnouncement = announcements[nextIndex];
      
      // Remove the first item and add the next to the end
      return [...newVisible.slice(1), nextAnnouncement];
    });
  };

  return (
    <div className={twMerge("mx-auto relative", className)}>
      <div
        className="px-4 py-3 bg-blue-600 text-white font-semibold text-lg sm:text-xl rounded-t-lg flex justify-between items-center"
      >
        <span className="flex items-center">
          <Bell className="mr-2" size={20} />
          Announcements
        </span>
        
        <div className="flex items-center space-x-2">
          {announcements.length > 0 && (
            <div className="flex space-x-1">
              <button 
                onClick={handleScrollUp}
                className="p-1 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Scroll up"
              >
                <ChevronUp size={18} />
              </button>
              <button 
                onClick={handleScrollDown}
                className="p-1 rounded-full hover:bg-blue-500 transition-colors"
                aria-label="Scroll down"
              >
                <ChevronDown size={18} />
              </button>
            </div>
          )}
          
          <Link 
            href="/announcements"
            className="ml-2 inline-flex items-center text-sm bg-white text-blue-600 px-2 py-1 rounded hover:bg-blue-50 transition-colors"
          >
            View All
            <ArrowRight size={14} className="ml-1" />
          </Link>
        </div>
      </div>
      <div
        className="bg-white border border-gray-300 rounded-b-md shadow h-[300px] sm:h-[350px] relative"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={announcementListRef}
      >
        {loading ? (
          <div className="flex justify-center items-center h-full">
            <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <div className="p-4 text-center text-red-500">{error}</div>
        ) : announcements.length === 0 ? (
          <div className="p-4 text-center text-gray-500">No announcements available</div>
        ) : (
          <div className="h-full overflow-hidden">
            <ul className="divide-y divide-gray-200">
              {visibleAnnouncements.map((announcement, index) => (
                <li key={index} className="p-4 hover:bg-gray-50 transition-all duration-300 animate-slide-in border-l-4 border-transparent hover:border-blue-500">
                  <div className="flex items-start gap-3">
                    {announcement.is_new === 1 && (
                      <span className="flex-shrink-0 px-2 py-0.5 text-xs font-medium bg-red-600 text-white rounded-md mt-0.5">
                        New
                      </span>
                    )}
                    <div className="flex-1">
                      <Link
                        href={announcement.link || "#"}
                        target="_blank"
                        className="text-blue-700 hover:text-blue-900 hover:underline font-medium text-sm sm:text-base"
                      >
                        {announcement.title}
                      </Link>
                      <p className="text-xs text-gray-600 mt-1.5">
                        {
                          announcement.start_date ?
                             `${new Date(announcement?.start_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - ${new Date(announcement?.end_date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}, ${new Date(announcement.start_date).getFullYear()}`: announcement?.date 
                        }
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
} 