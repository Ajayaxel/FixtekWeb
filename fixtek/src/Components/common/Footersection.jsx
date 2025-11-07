import React from 'react';

function Footersection() {
  return (
    <div className="bg-black text-white font-manrope mt-12 w-full flex flex-col items-center relative rounded-t-[60px]">

      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center text-center py-16 px-4 md:py-20 rounded-2xl w-full max-w-6xl mx-auto">
        {/* Decorative Stars */}
        <span className="absolute top-4 left-1/2 transform -translate-x-1/2 text-white text-2xl md:text-5xl">✦</span>
        <span className="absolute top-10 right-4 md:top-16 md:right-10 text-white text-3xl md:text-5xl">✦</span>
        <span className="absolute bottom-4 left-4 md:bottom-10 md:left-10 text-white text-lg md:text-3xl">✦</span>

        {/* Heading */}
        <p className="text-lg md:text-xl font-bold mb-2">Lorem Ipsum is simply</p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-snug relative">
          <span className="relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-32 after:h-2 md:after:h-3 after:bg-gradient-to-r after:from-transparent after:via-white after:to-white">
            Home
          </span>{" "}
          services at your doorstep
        </h1>

        <p className="text-gray-300 mb-6 text-sm md:text-base max-w-lg">
          On-demand home services to empower urban households.
        </p>

        {/* App Download Buttons */}
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <a
            href="#"
            className="flex items-center bg-white border border-gray-300 rounded-full shadow px-3 py-1 sm:px-4 sm:py-2 hover:shadow-md transition"
          >
            <img
              src="Button (1).png"
              alt="Google Play"
              className="h-8 sm:h-10 w-auto mr-2"
            />
          </a>

          <a
            href="#"
            className="flex items-center bg-white border border-gray-300 rounded-full shadow px-3 py-1 sm:px-4 sm:py-2 hover:shadow-md transition"
          >
            <img
              src="Button (2).png"
              alt="App Store"
              className="h-8 sm:h-10 w-auto mr-2"
            />
          </a>
        </div>
      </div>

      {/* Footer Links */}
      <div className="text-center py-6 text-gray-400 text-xs md:text-sm w-full border-t border-gray-800">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-3">
          <p>© 2025. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-3 md:gap-6">
            <a href="#" className="hover:text-white">Terms Of Use</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Support/Help Info</a>
            <a href="#" className="hover:text-white">Refunds/Cancellation Policy</a>
          </div>
        </div>
      </div>

      {/* Background Text */}
      <div className="w-full text-center py-4">
        <h1
          className="text-[80px] sm:text-[140px] md:text-[200px] lg:text-[280px] font-bold text-white opacity-10 tracking-widest"
          style={{
            textShadow: "2px 2px 0px #000, 3px 7px 0px #474646ff"
          }}
        >
          FIXTEK
        </h1>
      </div>
    </div>
  );
}

export default Footersection;
