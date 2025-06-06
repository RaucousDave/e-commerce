export default function Images() {
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

  return (
    <>
      {/* Full-size preview */}
      <div className="hidden sm:flex flex-col gap-6 sm:w-[50%] md:w-[40%]">
        <div className="w-full">
          <img
            src={images[0].image}
            className="rounded-2xl cursor-pointer"
            alt=""
          />
        </div>

        {/* Thumbnails */}
        <div className="flex space-x-6">
          {images.map((image) => (
            <div className="w-18 relative" key={image.id}>
              <img
                src={image.thumb}
                alt=""
                className="rounded-lg cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
    </>
  );
}
