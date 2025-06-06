import { useState } from "react";

export default function Carousel() {
  const images = [
    {
      id: 1,
      thumb: "/images/image-product-1-thumbnail.jpg",
      image: "/images/image-product-1.jpg",
    },
    {
      id: 2,
      thumb: "/images/image-product-2-thumbnail.jpg",
      image: "/images/image-product-2.jpg",
    },
    {
      id: 3,
      thumb: "/images/image-product-3-thumbnail.jpg",
      image: "/images/image-product-3.jpg",
    },
    {
      id: 4,
      thumb: "/images/image-product-4-thumbnail.jpg",
      image: "/images/image-product-4.jpg",
    },
  ];
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative w-full overflow-hidden sm:hidden">
      {/* Main image */}
      <img
        src={images[current].image}
        alt={`Slide ${current + 1}`}
        className="w-full object-cover"
      />

      {/* Left & Right Arrows */}
      <div
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 h-8 w-8 flex justify-center bg-white rounded-full p-2 shadow-md"
      >
        <img src="/images/icon-previous.svg" alt="" />
      </div>
      <div
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 h-8 w-8 flex justify-center bg-white rounded-full p-2 shadow-md"
      >
        <img src="/images/icon-next.svg" alt="" />
      </div>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full ${
              index === current ? "bg-orange-500" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
