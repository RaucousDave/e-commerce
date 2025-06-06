import { useState, useEffect } from "react";

export default function LightboxGallery({
  images,
  open,
  onClose,
  initialImageId,
}) {
  const [currentImageId, setCurrentImageId] = useState(initialImageId);

  useEffect(() => {
    if (open) setCurrentImageId(initialImageId);
  }, [open, initialImageId]);

  // Prevent body scroll when lightbox is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => (document.body.style.overflow = "");
  }, [open]);

  // Escape key to close
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const currentIndex = images.findIndex((img) => img.id === currentImageId);
  const currentImage = images[currentIndex];

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentImageId(images[nextIndex].id);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentImageId(images[prevIndex].id);
  };

  if (!open || !currentImage) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Close Button */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        className="absolute top-6 right-10 text-white text-3xl font-bold"
      >
        ✕
      </button>

      {/* Previous */}
      <button
        onClick={prevImage}
        className="absolute left-10 text-white text-4xl font-bold"
      >
        ‹
      </button>

      {/* Main Image */}
      <img
        src={currentImage.image}
        alt={`Product ${currentImage.id}`}
        className="max-w-3xl rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      {/* Next */}
      <button
        onClick={nextImage}
        className="absolute right-10 text-white text-4xl font-bold"
      >
        ›
      </button>
    </div>
  );
}
