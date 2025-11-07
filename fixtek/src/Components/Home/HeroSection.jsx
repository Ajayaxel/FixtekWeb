import React, { useRef } from 'react';
import { FaGooglePlay, FaApple } from 'react-icons/fa';

const goToService = () => {
  console.log("Navigating to Plumbing service page...");
};

const HomeHero = () => {
  const serviceRef = useRef(null);

  return (
    <div className="w-full bg-white font-manrope relative">

      {/* Hero Section */}
      <div className="w-full py-8 md:py-12 px-4 flex flex-col items-center text-center relative">

        {/* Sparkles - responsive */}
        <span className="hidden md:block absolute top-8 left-1/2 transform -translate-x-1/2 text-amber-500 text-4xl lg:text-6xl">✦</span>
        <span className="hidden lg:block absolute top-16 left-1/4 text-amber-500 text-3xl lg:text-5xl">✦</span>
        <span className="hidden lg:block absolute top-20 right-1/4 text-amber-500 text-3xl lg:text-5xl">✦</span>

        {/* Top small text */}
        <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2">
          Lorem Ipsum is simply
        </p>

        {/* Main Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-extrabold mt-3 md:mt-5 leading-snug relative px-2 sm:px-4">
          <span className="relative font-extrabold
            after:content-['']
            after:absolute
            after:left-1 sm:after:left-2 md:after:left-4
            after:bottom-0
            after:w-16 sm:after:w-24 md:after:w-[136px]
            after:h-1 md:after:h-[9px]
            after:bg-gradient-to-r after:from-transparent after:via-black after:to-black
          ">
            Home
          </span>{" "}
          services at your doorstep
        </h1>

        {/* Description */}
        <p className="text-gray-600 mt-4 max-w-md sm:max-w-xl text-sm sm:text-base md:text-[13px] px-2 sm:px-0">
          Lorem Ipsum has been the industry&apos;s<br className="hidden sm:block" /> standard dummy text ever since the
        </p>

        {/* App Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 justify-center relative px-2 sm:px-0">
          <span className="hidden lg:block absolute -left-6 bottom-6 text-3xl text-amber-500">✦</span>

          {/* Google Play Button */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base justify-center"
          >
            <FaGooglePlay className="text-lg sm:text-xl" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] leading-none">GET IT ON</p>
              <p className="text-xs sm:text-sm font-semibold">Google Play</p>
            </div>
          </a>

          {/* App Store Button */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base justify-center"
          >
            <FaApple className="text-lg sm:text-xl" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] leading-none">Download on the</p>
              <p className="text-xs sm:text-sm font-semibold">App Store</p>
            </div>
          </a>
        </div>
      </div>

      {/* Services Illustration + Background */}
      <div className="relative w-full bg-white overflow-hidden mt-8">
        {/* Green background bar */}
        <div className="absolute bottom-0 left-0 w-full h-16 md:h-24 bg-[#12343b]"></div>

        {/* Workers + Mobile App */}
        <div className="relative z-10 flex justify-center items-end px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 w-full max-w-6xl">

            {/* Left Worker */}
            <img
              src="cleaner1.svg (1).png"
              alt="Worker ironing"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain hidden sm:block"
            />

            {/* Mobile App */}
            <img
              src="iPhone 13 Pro (1).png"
              alt="App Preview"
              className="w-40 sm:w-48 md:w-60 lg:w-72 h-auto object-contain   "
            />

            {/* Right Worker */}
            <img
              src="cleaner2.svg (1).png"
              alt="Worker cleaning"
              className="w-24 sm:w-32 md:w-40 lg:w-48 h-auto object-contain hidden sm:block"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default HomeHero;
