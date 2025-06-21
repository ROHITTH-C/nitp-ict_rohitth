'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Edit, Plus, RefreshCw } from 'lucide-react';

export default function GalleryDashboard() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const router = useRouter();

  const fetchGallery = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/gallery');

      if (!response.ok) throw new Error('Failed to fetch gallery');

      const data = await response.json();

      const sorted = [...data || []].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setGalleryItems(sorted);
    } catch (err) {
      setError(err.message);
      console.error('Fetch Error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const handleAddNew = () => router.push('/admin/gallery&videos/new');
  const handleEdit = (id) => router.push(`/admin/gallery&videos/edit/${id}`);

  const renderMedia = (item) => {
    const isVideo = item.url.includes('drive.google.com') || item.url.endsWith('.mp4') || item.url.includes('video');
    if (isVideo) {
      const src = item.url.includes('drive.google.com')
        ? item.url.replace('/view', '/preview')
        : item.url;
      return (
        <iframe
          src={src}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-48"
          title={item.title}
        ></iframe>
      );
    }

    return (
      <img
        src={item.url}
        alt={item.title}
        className="w-full h-48 object-cover"
      />
    );
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-blue-700">Gallery & Videos</h2>
            <div className="flex gap-2">
              <button 
                onClick={fetchGallery}
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
          ) : galleryItems.length === 0 ? (
            <div className="text-center py-12 text-gray-600">
              No gallery items found.
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryItems.map((item) => (
                <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                  {renderMedia(item)}
                  <div className="p-4">
                    <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                    <div className="text-sm text-gray-500 mb-4">
                      {new Date(item.created_at).toLocaleString()}
                    </div>
                    <div className="flex space-x-4">
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="text-indigo-600 hover:text-indigo-900"
                        title="Edit"
                      >
                        <Edit size={18} />Edit
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
