'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, UploadCloud } from 'lucide-react';

export default function NewImage() {
  const [title, setTitle] = useState('');
  const [driveUrl, setDriveUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const getEmbedUrl = (url) => {
    if (!url) return '';
    if (url.includes('drive.google.com') && url.includes('/view')) {
      return url.replace('/view', '/preview');
    }
    return url;
  };

  const isVideo = (url) =>
    url.includes('drive.google.com') || url.endsWith('.mp4') || url.endsWith('.mov');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !driveUrl) {
      setError('Both title and Google Drive URL are required.');
      return;
    }

    try {
      setUploading(true);

      const payload = {
        title,
        url: driveUrl.trim(),
      };

      const res = await fetch('/api/gallery/add_new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.message || 'Failed to save image info');
      }

      router.push('/admin/gallery&videos');
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };
  
  const previewUrl = getEmbedUrl(driveUrl);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Add New Image/Video</h1>
          <button
            onClick={() => router.push('/admin/gallery&videos')}
            className="text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft size={20} />
          </button>
        </div>
      </div>

      <div className="max-w-3xl mx-auto py-8 px-4">
        <div className="bg-white shadow rounded-lg p-6">
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Title*
              </label>
              <input
                name="title"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>

            <div>
              <label htmlFor="driveUrl" className="block text-sm font-medium text-gray-700">
                Google Drive Link (Public Shareable)*
              </label>
              <input
                type="url"
                id="driveUrl"
                name="driveUrl"
                value={driveUrl}
                onChange={(e) => setDriveUrl(e.target.value)}
                required
                placeholder="https://drive.google.com/..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>

            {driveUrl && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Preview:</p>
                {isVideo(driveUrl) ? (
                  <iframe
                    src={previewUrl}
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="w-full h-64 rounded-lg border border-gray-300"
                    title={title}
                  ></iframe>
                ) : (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="rounded-lg max-h-64 border border-gray-300"
                  />
                )}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={uploading}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                <UploadCloud size={18} />
                {uploading ? 'Saving...' : 'Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
