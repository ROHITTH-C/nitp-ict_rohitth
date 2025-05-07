"use client";

import { useState, useEffect } from "react";

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
  const [autoPlay, setAutoPlay] = useState(true);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (autoPlay) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
    }
    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [autoPlay, currentSlide]);

  // Pause auto-play when user interacts with the slider
  const handleUserInteraction = () => {
    setAutoPlay(false);
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setAutoPlay(true), 10000);
  };

  return (
    <div 
      className="relative w-full mx-auto overflow-hidden rounded-md shadow-md h-[200px] sm:h-[300px] md:h-[380px] z-10"
      onMouseEnter={() => setAutoPlay(false)}
      onMouseLeave={() => setAutoPlay(true)}
    >
      {/* Slider Content */}
      <div
        className="flex transition-transform duration-500 h-full"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 h-full"
          >
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() => {
          prevSlide();
          handleUserInteraction();
        }}
        className="absolute top-1/2 left-2 sm:left-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 focus:outline-none"
        aria-label="Previous slide"
      >
        &#8592;
      </button>
      <button
        onClick={() => {
          nextSlide();
          handleUserInteraction();
        }}
        className="absolute top-1/2 right-2 sm:right-4 transform -translate-y-1/2 bg-gray-800 bg-opacity-50 text-white rounded-full p-1 sm:p-2 hover:bg-opacity-70 focus:outline-none"
        aria-label="Next slide"
      >
        &#8594;
      </button>

      {/* Dots for Pagination */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-1 sm:space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full ${
              index === currentSlide ? "bg-blue-600" : "bg-gray-400"
            }`}
            onClick={() => {
              setCurrentSlide(index);
              handleUserInteraction();
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
