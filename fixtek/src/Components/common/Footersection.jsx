import React from 'react'

function Footersection() {
  return (
    <div className="bg-black text-white flex flex-col justify-between font-manrope mx-auto mt-12"
         style={{ width: "full", height: "930px" }}>

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center py-16 md:py-20 px-4 relative rounded-2xl">
        <div className="absolute top-[15px] left-[350px]">
          {/* Small stars */}
          <span className="absolute top-[50px] left-[800px] md:top-20 md:left-6 text-white text-2xl md:text-[50px]">✦</span>
        </div>
        <span className="absolute top-[80px] right-[100px] md:top-60 md:right-10 text-white text-60px md:text-[33px]">✦</span>
        <span className="absolute bottom-2 left-4 md:bottom-40 md:left-20 text-white text-sm md:text-[25px]">✦</span>

        <p className="text-[22px] font-bold font-manrope">Lorem Ipsum is simply</p>

        {/* ✅ Gradient Underline Applied */}
        <h1 className="text-[57px] text-3xl font-bold font-manrope  mb-3 leading-snug font-manrope relative">
          <span className="relative font-extrabold after:content-[''] after:absolute after:left-3 after:bottom-0 after:w-[163px] after:h-[10px] after:bg-gradient-to-r after:from-transparent after:via-white after:to-white">
            Home
          </span>{" "}
          services at your doorstep
        </h1>

        <p className="text-gray-300 mb-6 text-sm md:text-base max-w-lg font-manrope">
          On demand home services to empower<br /> urban households.
        </p>

        {/* App Download Buttons */}
        <div className="mt-8 flex gap-4 flex-wrap">
          <a
            href="#"
            className="flex items-center bg-white border border-gray-300 rounded-full shadow w-[153px] h-[37px] hover:shadow-md transition"
          >
            <img
              src="Button (1).png"
              alt="Google Play"
              className="h-[37px] w-[153px] mr-2 rounded-full"
            />
          </a>

          <a
            href="#"
            className="flex items-center bg-white border border-gray-300 rounded-full shadow w-[153px] h-[37px] hover:shadow-md transition"
          >
            <img
              src="Button (2).png"
              alt="App Store"
              className="h-8 w-auto mr-2 rounded-full"
            />
            <span className="text-sm font-medium font-manrope"></span>
          </a>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center py-6 text-gray-400 text-xs md:text-sm font-manrope">
        <div className="flex flex-row items-center justify-between max-w-6xl mx-auto px-4 gap-3">
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
      <div className="text-center py-2 md:py-4 border-t border-gray-800">
        <h1
          className="text-[80px] sm:text-[140px] md:text-[200px] lg:text-[280px] font-bold text-[#FFFFFF] opacity-30 tracking-widest font-manrope"
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
