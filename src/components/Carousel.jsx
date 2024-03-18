import { useState } from "react";
import PropTypes from "prop-types";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const Carousel = ({ images, height }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = (event) => {
    event.stopPropagation();
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div
      className={`relative ${height} w-full bg-cover`}
      style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
    >
      <FaArrowAltCircleLeft
        onClick={prevImage}
        className="absolute left-0 top-1/2 text-[1.8rem] cursor-pointer ml-[10px] text-white hover:opacity-50 z-10"
      />
      <FaArrowAltCircleRight
        onClick={nextImage}
        className="absolute right-0 top-1/2 text-[1.8rem] cursor-pointer mr-[10px] text-white hover:opacity-50 z-10"
      />
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.array.isRequired,
  height: PropTypes.string.isRequired,
};

export default Carousel;
