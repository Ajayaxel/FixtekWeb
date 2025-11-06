import React from "react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Navbar from "../components/common/Navbar";
import Footersection from "../components/common/Footersection";
import { useNavigate } from "react-router-dom";



export default function Homepage({ serviceRef }) {
  const navigate = useNavigate(); // ✅ useNavigate gives navigation function

  const goToService = () => {
    navigate("/services"); // ✅ navigate to /services
  };

  return (
    <div className="min-h-screen bg-white font-manrope">
      {/* Hero Section */}
      <div className="w-full bg-white py-8 md:py-12 px-4 flex flex-col items-center text-center relative">
        {/* Sparkle Top Left - Hidden on mobile, visible on larger screens */}
        <span className="hidden md:block absolute left-[50px] lg:left-[330px] top-10 text-4xl lg:text-6xl">✦</span>

        {/* Top small text */}
        <p className="text-lg sm:text-xl md:text-[23px] font-bold text-gray-800">
          Lorem Ipsum is simply
        </p>

        {/* Main Heading */}
       <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-extrabold mt-3 md:mt-5 leading-snug relative text-manrope px-4">
  <span className="relative font-extrabold text-manrope 
    after:content-[''] 
    after:absolute 
    after:left-2 sm:after:left-4 md:after:left-6
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
        <p className="text-gray-600 mt-4 max-w-xl text-xs sm:text-sm md:text-[13px] text-manrope px-4">
          Lorem Ipsum has been the industry&apos;s<br className="hidden sm:block" /> standard dummy text
          ever since the
        </p>

        {/* App Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 relative px-4">
          {/* Sparkle Left Near Buttons - Hidden on mobile */}
          <span className="hidden lg:block absolute -left-7 bottom-6 text-3xl">✦</span>
          <span className="hidden xl:block absolute left-[460px] bottom-[90px] text-5xl">✦</span>
          {/* Google Play */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
          >
            <FaGooglePlay className="text-lg sm:text-xl" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] text-manrope leading-none">GET IT ON</p>
              <p className="text-xs sm:text-sm text-manrope font-semibold">Google Play</p>
            </div>
          </a>

          {/* App Store */}
          <a
            href="#"
            className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:opacity-90 transition text-sm sm:text-base"
          >
            <FaApple className="text-lg sm:text-xl" />
            <div className="text-left">
              <p className="text-[8px] sm:text-[10px] text-manrope leading-none">
                Download on the
              </p>
              <p className="text-xs sm:text-sm text-manrope font-semibold">App Store</p>
            </div>
          </a>
        </div>
      </div>

      {/* Services Illustration + Background Section */}
      <div className="relative w-full bg-white overflow-hidden">
        {/* Green background starting from workers' waistline */}
        <div className="absolute bottom-[0px] left-0 w-full h-16 md:h-[95px] bg-[#0c3b38]"></div>

        {/* Workers + iPhone */}
        <div className="w-full flex flex-col items-center relative z-10 px-4">
          <div className="container mx-auto flex flex-col md:flex-row items-end justify-center gap-4 md:gap-10">
            {/* Left Worker */}
            <img
              src="cleaner1.svg (1).png"
              alt="Worker ironing"
              className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain hidden md:block"
            />

            {/* Mobile App */}
            <img
              src="iPhone 13 Pro (1).png"
              alt="App Preview"
              className="w-48 sm:w-64 md:w-72 lg:w-80 h-auto object-contain"
            />

            {/* Right Worker */}
            <img
              src="cleaner2.svg (1).png"
              alt="Worker cleaning"
              className="w-32 sm:w-40 md:w-48 lg:w-56 h-auto object-contain hidden md:block"
            />
          </div>
        </div>
      </div>
    {/* 🛠️ Find Your Home Service Section */}
<div ref={serviceRef} id="find-service" className="bg-[#0c3b38] min-h-[400px] md:h-[500px] w-full py-8 md:py-14 text-center text-white px-4">
  <h2 className="text-xl sm:text-2xl md:text-[28px] lg:text-[45px] font-bold mb-6 md:mb-10 text-manrope">
    Find Your Home Service
  </h2>
  <div className="flex flex-col items-center justify-center">
    {/* Cards Row - Horizontal scroll on mobile, centered on desktop */}
    <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 px-4 overflow-x-auto no-scrollbar mt-4 w-full max-w-7xl mx-auto">
      {/* Card 1 */}
      <div className="bg-white rounded-xl p-2 text-center shadow w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[110px] md:h-[120px] opacity-70 flex-shrink-0">
        <p className="text-black text-[9px] sm:text-[10px] md:text-[11px] font-semibold text-manrope">
          Microwave Oven
        </p>
        <p className="text-green-600 text-[8px] sm:text-[9px] text-manrope">
          5.3k+ Bookings
        </p>
        <img
          src="Microwave Oven.png"
          alt="oven"
          className="w-6 sm:w-8 md:w-[40px] h-6 sm:h-8 md:h-[40px] object-contain mx-auto mt-1 sm:mt-2"
        />
      </div>

      {/* Card 2 */}
      <div className="bg-white rounded-xl p-2 sm:p-3 text-center shadow w-[130px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[140px] md:h-[150px] opacity-80 flex-shrink-0">
        <p className="text-black text-xs sm:text-sm md:text-[15px] font-semibold text-manrope">
          Carpentry
        </p>
        <p className="text-green-600 text-[10px] sm:text-[11px] md:text-[12px] font-semibold text-manrope">
          9.3k+ Bookings
        </p>
        <img
          src="Carpentry.png"
          alt="carpentry"
          className="w-8 sm:w-10 md:w-[55px] h-8 sm:h-10 md:h-[55px] object-contain mx-auto mt-1 sm:mt-2"
        />
      </div>

      {/* Card 3 */}
      <div onClick={goToService} className="bg-white rounded-2xl p-3 sm:p-4 md:p-5 text-center shadow-lg w-[180px] sm:w-[220px] md:w-[260px] h-[160px] sm:h-[190px] md:h-[210px] scale-105 sm:scale-110 cursor-pointer flex-shrink-0 transition-transform hover:scale-115">
        <p className="text-black text-base sm:text-lg md:text-[20px] text-manrope font-semibold">
          Plumbing
        </p>
        <p className="text-green-600 text-sm sm:text-[15px] md:text-[16px] text-manrope font-semibold">
          10.3k+ Bookings
        </p>
        <img
          src="Plumbing (2).png"
          alt="plumbing"
          className="w-12 sm:w-16 md:w-[85px] h-12 sm:h-16 md:h-[85px] object-contain mx-auto mt-2 sm:mt-3 md:mt-4"
        />
      </div>

      {/* Card 4 */}
      <div className="bg-white rounded-xl p-2 sm:p-3 text-center shadow w-[130px] sm:w-[150px] md:w-[180px] h-[120px] sm:h-[140px] md:h-[150px] opacity-80 flex-shrink-0">
        <p className="text-black text-xs sm:text-sm md:text-[15px] text-manrope font-semibold">
          Electrical
        </p>
        <p className="text-green-600 text-[10px] sm:text-[11px] md:text-[12px] text-manrope font-semibold">
          13.5k+ Bookings
        </p>
        <img
          src="Electrical.png"
          alt="electrical"
          className="w-8 sm:w-10 md:w-[55px] h-8 sm:h-10 md:h-[55px] object-contain mx-auto mt-1 sm:mt-2"
        />
      </div>

      {/* Card 5 */}
      <div className="bg-white rounded-xl p-2 text-center shadow w-[100px] sm:w-[120px] md:w-[140px] h-[100px] sm:h-[110px] md:h-[120px] opacity-70 flex-shrink-0">
        <p className="text-black text-[9px] sm:text-[10px] md:text-[11px] text-manrope font-semibold">
          Cleaning
        </p>
        <p className="text-green-600 text-[8px] sm:text-[9px] text-manrope">
          13.5k+17p Bookings
        </p>
        <img
          src="Cleaning (1).png"
          alt="cleaning"
          className="w-6 sm:w-8 md:w-[40px] h-6 sm:h-8 md:h-[40px] object-contain mx-auto mt-1 sm:mt-2"
        />
      </div>
    </div>
  </div>
</div>
      {/* ⭐ NEW SECTION: Most Booked Services + Banner + Testimonials */}
      <div className="w-full bg-white py-8 md:py-16 px-4 sm:px-6 md:px-8 lg:px-15">
        {/* Heading */}
        <h2 className="text-lg sm:text-xl md:text-[24px] font-bold px-4 sm:px-6 md:px-10 text-manrope">
          Most booked services
        </h2>

        {/* Services Cards Row - Scrollable on mobile, grid on desktop */}
        <div className="container mx-auto flex gap-4 sm:gap-6 mt-6 md:mt-8 px-1 overflow-x-auto md:overflow-x-visible no-scrollbar">
          {/* Card 1 */}
          <div className="flex flex-col flex-shrink-0 w-[200px] sm:w-[220px] md:w-[233px]">
            <img
              src="Container (1).png"
              alt="service1"
              className="rounded-lg shadow w-full h-auto aspect-square object-cover"
            />
            <div className="mt-3 md:mt-4 text-left">
              <p className="text-sm sm:text-[15px] font-semibold text-black text-manrope px-2">
                Pest control (includes utensil<br /> removal)
              </p>
              <p className="text-gray-500 text-xs sm:text-[14px] text-manrope px-1 mt-1">
                ⭐ 4.79 (117K)
              </p>
              <p className="text-black text-xs sm:text-[14px] text-manrope px-2 py-1">₹1,098</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col flex-shrink-0 w-[200px] sm:w-[220px] md:w-[233px]">
            <img
              src="Container (2).png"
              alt="service2"
              className="rounded-lg shadow w-full h-auto aspect-square object-cover"
            />
            <div className="mt-3 md:mt-4 text-left">
              <p className="text-sm sm:text-[15px] font-semibold text-black text-manrope px-2">
                Apartment pest control <br />
                (includes utensil removal)
              </p>
              <p className="text-gray-500 text-xs sm:text-[14px] text-manrope px-1 mt-1">
                ⭐ 4.65 (89K)
              </p>
              <p className="text-black text-xs sm:text-[14px] text-manrope px-2 py-1">₹2,499</p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col flex-shrink-0 w-[200px] sm:w-[220px] md:w-[233px]">
            <img
              src="Container (3).png"
              alt="service3"
              className="rounded-lg shadow w-full h-auto aspect-square object-cover"
            />
            <div className="mt-3 md:mt-4 text-left space-y-1">
         <p className="text-sm sm:text-[15px] font-semibold text-black text-manrope leading-tight px-2">
         Bed bugs control
         </p>
         <p className="text-gray-500 text-xs sm:text-[14px] text-manrope leading-tight">
         ⭐ 4.77 (25k)
         </p>
          <p className="text-black text-xs sm:text-[14px] text-manrope leading-tight px-2">₹1,599</p>
          </div>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col flex-shrink-0 w-[200px] sm:w-[220px] md:w-[233px]">
            <img
              src="Container (4).png"
              alt="service4"
              className="rounded-lg shadow w-full h-auto aspect-square object-cover"
            />
            <div className="mt-3 md:mt-4 text-left space-y-1">
         <p className="text-sm sm:text-[15px] font-semibold text-black text-manrope leading-tight px-2">
         Intense bathroom cleaning
         </p>
         <p className="text-gray-500 text-xs sm:text-[14px] text-manrope leading-tight px-1">
         ⭐ 4.79 (2.9M)
         </p>
          <p className="text-black text-xs sm:text-[14px] text-manrope leading-tight py-1 px-2">₹449</p>
          </div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col flex-shrink-0 w-[200px] sm:w-[220px] md:w-[233px]">
            <img
              src="Container (5).png"
              alt="service5"
              className="rounded-lg shadow w-full h-auto aspect-square object-cover"
            />
                 <div className="mt-3 md:mt-4 text-left space-y-1">
         <p className="text-sm sm:text-[15px] font-semibold text-black text-manrope leading-tight px-2">
         Apartment termite control
         </p>
         <p className="text-gray-500 text-xs sm:text-[14px] text-manrope leading-tight px-1">
         ⭐ 4.83 (16k)
         </p>
          <p className="text-black text-xs sm:text-[14px] text-manrope leading-tight px-2 py-1">₹3,999</p>
          </div>
          </div>
        </div>
        
{/* Banner Section */}
<div className="relative w-full max-w-[1232px] h-auto min-h-[300px] sm:min-h-[350px] md:h-[410px] mx-auto mt-12 md:mt-20 rounded-lg shadow overflow-hidden px-4">
  {/* Image */}
  <img
    src="/Frame 1171276389.png"
    alt="Smart Door Banner"
    className="w-full h-full min-h-[300px] sm:min-h-[350px] md:h-[410px] object-cover"
  />

  {/* Text content positioned over the image on the left side */}
  <div className="absolute inset-0 flex items-center px-4 sm:px-6 md:pl-10">
    <div className="max-w-[90%] sm:max-w-[550px] text-black">
      <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug md:leading-tight">
        Turn Your <br />
        <span className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] text-black text-manrope font-extrabold">Door Into A </span>
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] text-orange-400 text-manrope font-extrabold">SMART ONE!</span>
      </h2>
      <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base text-manrope text-black">
        We offer reliable door lock installation services <br className="hidden sm:block"/> that will increase the
        security of your house or <br className="hidden sm:block"/>office.
      </p>
      <button className="mt-3 sm:mt-5 bg-orange-500 text-white font-bold text-manrope text-xs sm:text-sm md:text-base px-4 sm:px-5 py-1.5 sm:py-2 rounded-full shadow hover:bg-orange-600 transition">
        Request a Quote
      </button>
    </div>
  </div>
</div>


        {/* Testimonials */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-bold mt-12 md:mt-20 text-manrope px-4">
          See what our users are saying...
        </h2>

        <div className="container mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mt-8 md:mt-16 px-4 sm:px-6">
          {/* Card 1 */}
          <div className="relative w-full sm:w-[240px] md:w-[260px] px-2 sm:px-4 py-6 sm:py-8 md:py-10">
            <img
              src="Margin (8).png"
              alt="user1"
              className="w-full max-w-[220px] sm:max-w-[253px] h-auto mx-auto rounded-lg"
            />
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 sm:p-4 w-[180px] sm:w-[195px] md:w-[211px] min-h-[160px] sm:min-h-[175px] md:h-[185px]">
              <p className="text-[10px] sm:text-[11px] text-gray-600 text-manrope leading-tight">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-semibold text-manrope">
                Shraddha Musale
              </p>
               <button className="absolute bottom-3 sm:bottom-4 right-2 text-[10px] sm:text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-2 sm:px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative w-full sm:w-[240px] md:w-[260px]">
            <img
              src="Margin (7).png"
              alt="user2"
              className="w-full max-w-[280px] sm:max-w-[310px] h-auto mx-auto rounded-lg"
            />
            <div className="absolute bottom-6 sm:bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 w-[180px] sm:w-[195px] md:w-[211px] min-h-[160px] sm:min-h-[175px] md:h-[185px]">
              <p className="text-[10px] sm:text-[11px] text-gray-600 text-manrope leading-tight">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-semibold text-manrope">
                Sapana Jain
              </p>
             <button className="absolute bottom-3 sm:bottom-4 md:bottom-5 right-2 text-[10px] sm:text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-2 sm:px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="relative w-full sm:w-[240px] md:w-[260px] px-2 sm:px-4 py-6 sm:py-8 md:py-10">
            <img
              src="Margin (8).png"
              alt="user3"
              className="w-full max-w-[220px] sm:max-w-[253px] h-auto mx-auto rounded-lg"
            />
            <div className="absolute bottom-12 sm:bottom-16 md:bottom-20 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 w-[180px] sm:w-[195px] md:w-[211px] min-h-[160px] sm:min-h-[175px] md:h-[185px]">
              <p className="text-[10px] sm:text-[11px] text-gray-600 text-manrope leading-tight">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-semibold text-manrope">
                Shraddha Musale
              </p>
               <button className="absolute bottom-3 sm:bottom-4 md:bottom-5 right-2 text-[10px] sm:text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-2 sm:px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="relative w-full sm:w-[240px] md:w-[260px] px-2 sm:px-3 py-3">
            <img
              src="Margin (9).png"
              alt="user4"
              className="w-full max-w-[220px] sm:max-w-[253px] h-auto mx-auto rounded-lg"
            />
            <div className="absolute bottom-8 sm:bottom-12 md:bottom-14 left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 w-[180px] sm:w-[195px] md:w-[211px] min-h-[160px] sm:min-h-[175px] md:h-[185px]">
              <p className="text-[10px] sm:text-[11px] text-gray-600 text-manrope leading-tight">
                "Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown
                printer took a galley of type and scrambled it to make."
              </p>
              <p className="mt-3 sm:mt-4 md:mt-5 text-[10px] sm:text-[11px] font-semibold text-manrope">
                Sunny Gala
              </p>
        <button className="absolute bottom-3 sm:bottom-4 right-2 text-[10px] sm:text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-2 sm:px-3 py-1 rounded-full">
      Powai
    </button>
            </div>
          </div>
        </div>
      </div>

    <div className="bg-[white] w-full py-8 md:py-16 px-4 sm:px-6 mt-8 md:mt-16 flex flex-col items-center justify-center">
  {/* Top Row */}
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center mb-8 md:mb-12">
    {/* Card 1 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-full max-w-[320px] sm:max-w-[362px] h-auto min-h-[200px] sm:h-[226px]">
      <img
        src="Figure.png"
        alt="Background Verified"
        className="w-full h-[140px] sm:h-[176px] rounded-t-2xl object-cover"
      />
      <p className="text-sm sm:text-[15px] font-semibold text-gray-800 mt-2 px-3 pb-3">
        Background Verified and Trusted Experts
      </p>
    </div>

    {/* Card 2 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-full max-w-[320px] sm:max-w-[362px] h-auto min-h-[200px] sm:h-[226px]">
      <img
        src="Figure (1).png"
        alt="Home Cleaning"
        className="w-full h-[140px] sm:h-[176px] bg-[#F6F6F6] rounded-t-2xl object-cover"
      />
      <p className="text-sm sm:text-[15px] font-semibold text-gray-800 mt-2 px-3 pb-3">
        Professionally Trained For Home Cleaning
      </p>
    </div>

    {/* Card 3 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-full max-w-[320px] sm:max-w-[362px] h-auto min-h-[200px] sm:h-[226px] sm:col-span-2 lg:col-span-1">
      <img
        src="Figure (2).png"
        alt="Freedom"
        className="w-full h-[140px] sm:h-[176px] bg-[#F6F6F6] rounded-t-2xl object-cover"
      />
      <p className="text-sm sm:text-[15px] font-semibold text-gray-800 mt-2 px-3 pb-3">
        Freedom to Cancel or Reschedule
      </p>
    </div>
  </div>

  {/* Centered Title */}
  <h2 className="text-center text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#3C172A] text-manrope my-8 md:my-12 px-4">
    <span className="text-[#3C172A]">WHY CHOOSE </span>
    <span className="text-black">FIXTEK</span>
  </h2>

  {/* Bottom Row */}
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 justify-items-center mt-0">
    {/* Card 4 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-full max-w-[320px] sm:max-w-[362px] h-auto min-h-[200px] sm:h-[226px]">
      <img
        src="Figure (3).png"
        alt="Women Workforce"
        className="w-full h-[140px] sm:h-[176px] rounded-t-2xl object-cover"
      />
      <p className="text-sm sm:text-[15px] font-semibold text-gray-800 mt-2 px-3 pb-3">
        Powered By Strong Women Workforce
      </p>
    </div>

    {/* Card 5 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-full max-w-[320px] sm:max-w-[362px] h-auto min-h-[200px] sm:h-[226px]">
      <img
        src="Figure (4).png"
        alt="Quality"
        className="w-full h-[140px] sm:h-[176px] rounded-t-2xl bg-[#F6F6F6] object-cover"
      />
      <p className="text-sm sm:text-[15px] font-bold text-gray-900 mt-2 px-3 pb-3">
        Quality You Can Trust
      </p>
    </div>

    {/* Card 6 */}
    <div className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-all p-0 flex flex-col items-center text-center w-full max-w-[320px] sm:max-w-[362px] h-auto min-h-[200px] sm:h-[226px] sm:col-span-2 lg:col-span-1">
      <img
        src="Figure (5).png"
        alt="Families"
        className="w-full h-[140px] sm:h-[176px] bg-[#F6F6F6] rounded-t-2xl object-cover"
      />
      <p className="text-sm sm:text-[15px] font-bold text-gray-900 mt-2 sm:mt-3 px-3 pb-3">
        Trusted by 6000+ Families
      </p>
    </div>
  </div>
</div>
<Footersection />

</div>
  );
}
 







