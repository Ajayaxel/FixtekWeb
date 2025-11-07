import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components
const NextArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 right-2 -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
    onClick={onClick}
  >
    <HiArrowRight />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute top-1/2 left-2 -translate-y-1/2 z-10 cursor-pointer text-white text-2xl"
    onClick={onClick}
  >
    <HiArrowLeft />
  </div>
);

const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
  };

  const images = [
    "WhatsApp Image 2025-09-22 at 14.54.52_9091031f.jpg",
    "WhatsApp Image 2025-09-22 at 14.49.10_ad2a3f85.jpg",
    "WhatsApp Image 2025-09-22 at 14.54.52_f39372d8.jpg",
    "WhatsApp Image 2025-09-22 at 14.59.09_90d72dca.jpg",
  ];

  return (
    <div className="bg-[#00343D] text-white p-6 md:p-10 lg:p-16 rounded-2xl flex flex-col md:flex-row  justify-between max-w-full mx-4 md:mx-10 lg:mx-16 xl:mx-28 mt-6 md:mt-9 gap-6">
      {/* Left: Slider - 1/3 width */}
      <div className="w-full md:w-1/3 relative">
        <Slider {...settings}>
          {images.map((img, i) => (
            <div key={i} className="flex justify-center">
              <img
                src={img}
                alt={`Plumbing work ${i + 1}`}
                className="rounded-lg w-full aspect-square object-cover"
              />
            </div>
          ))}
        </Slider>
        <div className="flex items-center gap-2 mt-2 text-xl py-2 text-gray-100 justify-center md:justify-start">
          <FaStar className="text-yellow-400 text-xl" />
          <span>10,289 Plumbing services completed this year.</span>
        </div>
      </div>

      {/* Right: Text Content - 2/3 width */}
      <div className="w-full h-full  md:w-2/3 mt-6 md:mt-0 md:ml-6 text-center md:text-left px-4 md:px-0">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-manrope font-bold leading-tight">
          Plumbing Problems? We&apos;re here for you.
        </h1>
        <p className="text-gray-200 mt-3 text-base sm:text-lg  lg:text-xl font-manrope">
          We offer expert plumbing service — from leak repairs and pipe fixes
          to tap replacements, all done right at your doorstep.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mt-6 sm:mt-10 text-xl font-bold text-gray-300 justify-center md:justify-start">
          <div className="flex items-center gap-2">
            <img
              src="features_10.png"
              alt="Certified Technician"
              className="w-8 h-8 object-contain"
            />
            <span>Certified Technician</span>
          </div>
          <div className="flex items-center gap-2">
            <img
              src="warranty.png"
              alt="Transparent Pricing"
              className="w-8 h-8 object-contain"
            />
            <span>Transparent Pricing</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
