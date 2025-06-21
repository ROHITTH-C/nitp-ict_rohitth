'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Save, UploadCloud, ImageIcon, Video } from 'lucide-react';

export default function NewImage() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState('');
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      setFile(selectedFile);
      const preview = URL.createObjectURL(selectedFile);
      setPreviewUrl(preview);
    } else {
      setFile(null);
      setPreviewUrl('');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!title || !file) {
      setError('Both title and file are required.');
      return;
    }

    try {
      setUploading(true);

      const uploadForm = new FormData();
      uploadForm.append('file', file);

      const uploadRes = await fetch('/api/upload', {
        method: 'POST',
        body: uploadForm,
      });

      const uploadData = await uploadRes.json();

      if (!uploadRes.ok || !uploadData.url) {
        throw new Error(uploadData.message || 'File upload failed');
      }

      const galleryPayload = {
        title,
        url: uploadData.url,
      };

      const saveRes = await fetch('/api/gallery/add_new', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(galleryPayload),
      });

      if (!saveRes.ok) {
        const saveData = await saveRes.json();
        throw new Error(saveData.message || 'Failed to save image info');
      }

      router.push('/admin/gallery&videos');
    } catch (err) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

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
              <label htmlFor="file" className="block text-sm font-medium text-gray-700">
                Upload File (Image/Video)*
              </label>
              <input
                type="file"
                id="file"
                accept="image/*,video/*"
                onChange={handleFileChange}
                required
                className="mt-1 block w-full"
              />
            </div>

            {previewUrl && (
              <div className="mt-4">
                <p className="text-sm text-gray-500 mb-2">Preview:</p>
                {file?.type.startsWith('image') ? (
                  <img
                    src={previewUrl}
                    alt="Preview"
                    className="rounded-lg max-h-64 border border-gray-300"
                  />
                ) : (
                  <video
                    controls
                    className="rounded-lg max-h-64 border border-gray-300"
                  >
                    <source src={previewUrl} type={file?.type} />
                    Your browser does not support the video tag.
                  </video>
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
                {uploading ? 'Uploading...' : 'Upload & Save'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
