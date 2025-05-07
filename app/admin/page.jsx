'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Trash2, Edit, Plus, RefreshCw, LogOut } from 'lucide-react';

export default function AdminDashboard() {
  const [announcements, setAnnouncements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();
  
  const fetchAnnouncements = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/announcements');
      
      if (!response.ok) {
        throw new Error('Failed to fetch announcements');
      }
      
      const data = await response.json();
      // Sort announcements - new ones first
      const sortedAnnouncements = [...data.announcements || []].sort((a, b) => {
        // First sort by is_new (1 or true on top)
        if (a.is_new === 1 && b.is_new !== 1) return -1;
        if (a.is_new !== 1 && b.is_new === 1) return 1;
        // Then sort by date (most recent first)
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
      });
      setAnnouncements(sortedAnnouncements);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching announcements:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnnouncements();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this announcement?')) {
      return;
    }
    
    try {
      const response = await fetch(`/api/announcements/${id}`, {
        method: 'DELETE',
      });
      
      if (!response.ok) {
        throw new Error('Failed to delete announcement');
      }
      
      // Refresh the announcement list
      fetchAnnouncements();
    } catch (error) {
      setError(error.message);
      console.error('Error deleting announcement:', error);
    }
  };

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });
      
      if (!response.ok) {
        throw new Error('Logout failed');
      }
      
      // Redirect to login page
      router.push('/admin/login');
    } catch (error) {
      setError(error.message);
      console.error('Error during logout:', error);
    }
  };

  const handleAddNew = () => {
    router.push('/admin/announcements/new');
  };

  const handleEdit = (id) => {
    router.push(`/admin/announcements/edit/${id}`);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-4">
              <h1 className="text-2xl font-bold text-blue-700">Admin Dashboard</h1>
             
            </div>
            <button 
              onClick={handleLogout}
              className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              <LogOut size={18} />
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700">Announcements</h2>
            <div className="flex gap-2">
              <button 
                onClick={fetchAnnouncements}
                className="flex items-center gap-1 text-gray-600 hover:text-gray-900"
              >
                <RefreshCw size={18} />
                Refresh
              </button>
              <button
                onClick={handleAddNew}
                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
              >
                <Plus size={18} />
                Add New
              </button>
            </div>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
            </div>
          ) : announcements.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              No announcements found. Create one by clicking "Add New".
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">Title</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Date</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Link</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {announcements.map((announcement) => (
                    <tr key={announcement.id}>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-900 break-words line-clamp-2 hover:line-clamp-none">
                          {announcement.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {announcement.date}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        {announcement.link ? (
                          <a 
                            href={announcement.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:underline"
                          >
                            View
                          </a>
                        ) : (
                          <span className="text-gray-400">None</span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex space-x-4">
                          <button
                            onClick={() => handleEdit(announcement.id)}
                            className="text-indigo-600 hover:text-indigo-900"
                            title="Edit"
                          >
                            <Edit size={18} />
                          </button>
                          <button
                            onClick={() => handleDelete(announcement.id)}
                            className="text-red-600 hover:text-red-900"
                            title="Delete"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
} 