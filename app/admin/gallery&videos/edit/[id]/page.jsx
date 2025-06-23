'use client';

import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { ArrowLeft, UploadCloud } from 'lucide-react';

export default function EditImageVideo() {
  const params = useParams();
  const id = params?.id;

  const router = useRouter();

  const [title, setTitle] = useState('');
  const [driveUrl, setDriveUrl] = useState('');
  const [previewUrl, setPreviewUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) return;
    const fetchItem = async () => {
      try {
        const res = await fetch(`/api/gallery/${id}`);
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || 'Failed to fetch item');

        setTitle(data.title);
        setDriveUrl(data.url);
        setPreviewUrl(data.url);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !driveUrl) {
      setError('Both title and Google Drive URL are required.');
      return;
    }

    try {
      setSaving(true);

      const updateRes = await fetch(`/api/gallery/edit/${id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, url: driveUrl.trim() }),
      });

      const updateData = await updateRes.json();
      if (!updateRes.ok) throw new Error(updateData.message || 'Failed to update');

      router.push('/admin/gallery&videos');
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700">Edit Image/Video</h1>
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
                Google Drive Link*
              </label>
              <input
                type="url"
                id="driveUrl"
                name="driveUrl"
                value={driveUrl}
                onChange={(e) => {
                  setDriveUrl(e.target.value);
                  setPreviewUrl(e.target.value);
                }}
                required
                placeholder="https://drive.google.com/..."
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3"
              />
            </div>

            {previewUrl && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Preview:</p>
                {(() => {
                  const isVideo =
                    previewUrl.includes('drive.google.com') ||
                    previewUrl.endsWith('.mp4');

                  const embedUrl = isVideo && previewUrl.includes('drive.google.com')
                    ? previewUrl.replace('/view', '/preview')
                    : previewUrl;

                  return isVideo ? (
                    <iframe
                      src={embedUrl}
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
                  );
                })()}
              </div>
            )}

            <div className="flex justify-end">
              <button
                type="submit"
                disabled={saving}
                className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
              >
                <UploadCloud size={18} />
                {saving ? 'Saving...' : 'Save Changes'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
