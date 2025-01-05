"use client"
import { useState } from "react";

const PhotoGallery = () => {
  const slides = [
    {
      id: 1,
      image: "/Image1.jpg", 
      caption: " ",
    },
    {
      id: 2,
      image: "/Image2.jpg",
      caption: " ",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="max-w-md mx-auto bg-blue-200 rounded-lg shadow-lg">
      <h2 className="text-center text-lg font-bold py-2">PHOTO GALLERY</h2>
      <div className="relative">
        <img
          src={slides[currentIndex].image}
          alt={slides[currentIndex].caption}
          className="w-full h-64 object-cover rounded-lg"
        />
        <button
          onClick={goToPreviousSlide}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          &lt;
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200"
        >
          &gt;
        </button>
      </div>
      <p className="text-center py-2">{slides[currentIndex].caption}</p>
    </div>
  );
};

export default PhotoGallery;
