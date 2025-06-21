"use client";

import { useEffect, useState } from "react";
import { FiRefreshCw, FiAlertCircle, FiImage, FiFilm } from "react-icons/fi";

export default function PublicGallery() {
  const [galleryItems, setGalleryItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [mediaTypeFilter, setMediaTypeFilter] = useState("all");

  const fetchGallery = async () => {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("/api/gallery");

      if (!response.ok) {
        throw new Error(
          response.status === 404
            ? "Gallery not found"
            : "Failed to fetch gallery"
        );
      }

      const data = await response.json();
      if (!data || data.length === 0) {
        throw new Error("Gallery is empty");
      }

      const sorted = [...data].sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
      );
      setGalleryItems(sorted);
    } catch (err) {
      console.error("Gallery fetch error:", err);
      setError(err.message || "Error loading gallery.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const renderMedia = (item) => {
    const isVideo =
      item.url.includes("drive.google.com") ||
      item.url.match(/\.(mp4|webm|mov)$/i) ||
      item.type === "video";

    const src =
      isVideo && item.url.includes("drive.google.com")
        ? item.url.replace("/view", "/preview")
        : item.url;

    return isVideo ? (
      <div className="relative w-full h-48 bg-black flex items-center justify-center">
        <iframe
          src={src}
          allow="autoplay; encrypted-media"
          allowFullScreen
          className="w-full h-full"
          title={item.title}
          loading="lazy"
        />
      </div>
    ) : (
      <div className="relative w-full h-48 bg-gray-100 flex items-center justify-center">
        <img
          src={src}
          alt={item.title}
          className="w-full h-full object-contain"
          loading="lazy"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "/placeholder-image.jpg";
          }}
        />
      </div>
    );
  };

  const filteredItems = galleryItems.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.description &&
        item.description.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesMediaType =
      mediaTypeFilter === "all" ||
      (mediaTypeFilter === "images" &&
        !(
          item.url.includes("drive.google.com") ||
          item.url.match(/\.(mp4|webm|mov)$/i) ||
          item.type === "video"
        )) ||
      (mediaTypeFilter === "videos" &&
        (item.url.includes("drive.google.com") ||
          item.url.match(/\.(mp4|webm|mov)$/i) ||
          item.type === "video"));

    return matchesSearch && matchesMediaType;
  });

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Controls */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <div className="relative w-full sm:w-64">
            <input
              type="text"
              placeholder="Search images..."
              className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <svg
              className="absolute left-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* <div className="flex items-center gap-4">
            <select
              className="px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={mediaTypeFilter}
              onChange={(e) => setMediaTypeFilter(e.target.value)}
            >
              <option value="all">All Media</option>
              <option value="images">Images Only</option>
              <option value="videos">Videos Only</option>
            </select>

            <button
              onClick={fetchGallery}
              disabled={loading}
              className={`flex items-center px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors ${
                loading ? "opacity-70" : ""
              }`}
            >
              {loading ? (
                <FiRefreshCw className="animate-spin mr-2" />
              ) : (
                <FiRefreshCw className="mr-2" />
              )}
              Refresh
            </button>
          </div> */}
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 border border-red-400 px-4 py-3 rounded mb-8 text-center max-w-3xl mx-auto flex items-center justify-center gap-2">
            <FiAlertCircle className="text-xl" />
            {error}
            <button
              onClick={fetchGallery}
              className="ml-4 text-red-700 underline hover:text-red-800"
            >
              Try again
            </button>
          </div>
        )}

        {loading && !galleryItems.length ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600" />
          </div>
        ) : filteredItems.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <svg
                className="w-16 h-16 mx-auto"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              No media found
            </h3>
            <p className="text-gray-500 max-w-md mx-auto">
              {searchTerm || mediaTypeFilter !== "all"
                ? "Try adjusting your search or filter criteria"
                : "The gallery appears to be empty"}
            </p>
            {!searchTerm && mediaTypeFilter === "all" && (
              <button
                onClick={fetchGallery}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Refresh Gallery
              </button>
            )}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {renderMedia(item)}
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                        {item.description}
                      </p>
                    )}
                    <div className="flex justify-between items-center text-xs text-gray-500">
                      {item.size && (
                        <span>
                          {item.size > 1024 * 1024
                            ? `${(item.size / (1024 * 1024)).toFixed(1)} MB`
                            : `${Math.round(item.size / 1024)} KB`}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
