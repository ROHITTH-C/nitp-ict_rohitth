"use client";

import { useState } from "react";

const images = [
  "/Image1.jpg",
  "/Image2.jpg",
  "/Image3.jpg",
  "/Image4.jpg",
  "/Image5.jpg",
  "/Image6.jpg",
 
];

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden h-[380px] z-0">
      {/* Slider Content */}
      <div
        className="flex transition-transform duration-500"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
  {images.map((img, index) => (
    <div
      key={index}
      className="w-full flex-shrink-0 h-[380px]"
    >
      <img
          src={img}
          alt={`Slide ${index + 1}`}
          className="w-full h-full object-cover rounded-md"
        />
        </div>
      ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 hover:bg-gray-600"
      >
        &#8594;
      </button>

      {/* Dots for Pagination */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
