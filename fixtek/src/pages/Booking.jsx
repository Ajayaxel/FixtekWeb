import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import Footersection from "../components/common/Footersection";
import Login from "../components/auth/Login";
import Register from "../components/auth/Register";

function Booking() {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const navigate = useNavigate();

  const handleVerified = () => {
    setShowLogin(false);
    setShowRegister(false);
    navigate("/service-booking");
  };

  const handleSwitchToRegister = () => {
    setShowLogin(false);
    setShowRegister(true);
  };

  const handleSwitchToLogin = () => {
    setShowRegister(false);
    setShowLogin(true);
  };

  return (
    <div className="bg-white rounded-lg max-w-full relative overflow-hidden">
      {/* ---------- Images Grid ---------- */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 p-4 md:p-8 md:px-20">
        <img
          src="Plumbing Repair (8).png"
          alt="Main"
          className="w-full h-[250px] sm:h-[350px] md:h-[500px] object-cover rounded-lg row-span-2"
        />
        <img
          src="Plumbing Repair (11).png"
          alt="Secondary"
          className="w-full h-[200px] sm:h-[250px] md:h-[240px] object-cover rounded-lg"
        />
        <img
          src="Plumbing Repair (10).png"
          alt="Work"
          className="w-full h-[200px] sm:h-[250px] md:h-[240px] object-cover rounded-lg"
        />
      </div>

      {/* ---------- Save Button ---------- */}
      <div className="flex justify-end px-4 md:px-20 -mt-2 md:mt-0">
        <button className="flex items-center bg-white hover:scale-105 transition">
          <FaRegHeart size={22} className="text-black hover:text-red-500 mr-2" />
          <span className="text-sm md:text-base text-black">Save</span>
        </button>
      </div>

      {/* ---------- Service Info ---------- */}
      <div className="mt-5 px-4 md:px-20">
        <h3 className="text-xl md:text-2xl font-manrope font-bold text-[#212529]">
          Plumbing Repair
        </h3>
        <div className="flex items-center text-gray-600 mt-1">
          <span className="flex items-center text-green-600 font-medium mr-2">
            <FaStar className="text-white bg-green-600 rounded p-[2px] mr-1 w-[18px] h-[18px]" />
            4.9
          </span>
          <span className="text-sm md:text-base text-black">(53 Reviews)</span>
        </div>
      </div>

      {/* ---------- Main Content ---------- */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-6 mt-6 px-4 md:px-20">
        {/* Left Content */}
        <div className="md:col-span-2">
          <h4 className="text-lg font-semibold border-b pb-1">Description</h4>
          <p className="text-sm md:text-base mt-3 leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>
          <p className="mt-2 text-sm md:text-base leading-relaxed">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum.
          </p>

          {/* Included */}
          <h4 className="mt-6 text-lg font-semibold">What's Included</h4>
          <ul className="list-disc list-inside text-sm md:text-base mt-2 space-y-1">
            <li>Lorem Ipsum is simply dummy text.</li>
            <li>Lorem Ipsum is simply dummy text.</li>
            <li>Lorem Ipsum is simply dummy text.</li>
          </ul>

          {/* Excluded */}
          <h4 className="mt-6 text-lg font-semibold">What's Excluded</h4>
          <ul className="list-disc list-inside text-sm md:text-base mt-2 space-y-1">
            <li>Lorem Ipsum is simply dummy text.</li>
            <li>Lorem Ipsum is simply dummy text.</li>
            <li>Lorem Ipsum is simply dummy text.</li>
          </ul>
        </div>

        {/* ---------- Right Sidebar ---------- */}
        <div className="space-y-10 py-6 md:py-10">
          {/* Pricing Card */}
          <div className="border rounded-lg p-5 shadow-sm">
            <div className="bg-blue-100 rounded-lg p-4 flex flex-col sm:flex-row justify-between items-center mb-5 space-y-4 sm:space-y-0">
              <div className="flex flex-col items-center flex-1">
                <p className="text-xs md:text-sm text-gray-700">
                  First hour charge
                </p>
                <p className="text-sm md:text-lg text-[#003580]">AED 90.00</p>
              </div>
              <div className="flex flex-col items-center flex-1 sm:border-l border-blue-300 sm:pl-6">
                <p className="text-xs md:text-sm text-gray-700">
                  Later hour charge
                </p>
                <p className="text-sm md:text-lg text-[#003580]">
                  AED 60.00 / hour
                </p>
              </div>
            </div>

            <button
              onClick={() => setShowLogin(true)}
              className="w-full h-[48px] md:h-[52px] bg-[#00343D] text-white rounded-lg hover:bg-[#024650] transition"
            >
              Book Now
            </button>
          </div>

          {/* Features */}
          <div className="space-y-4">
            {[
              {
                img: "fluent_star-16-regular.svg fill.png",
                title: "100% Guarantee",
              },
              {
                img: "icon.png",
                title: "Certified Technician",
              },
              {
                img: "icon (1).png",
                title: "Transparent Pricing",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start space-x-2">
                <img src={item.img} alt={item.title} className="w-6 h-6 mt-1" />
                <p>
                  <span className="text-base font-medium">{item.title}</span>
                  <br />
                  <span className="text-sm text-gray-500">
                    Lorem Ipsum is simply dummy
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ---------- Expandable Section ---------- */}
      <div className="mt-10 space-y-4 w-full md:w-[612px] px-4 md:px-20">
        {[
          { title: "How it Works", desc: "Learn how Fixtek works for you." },
          { title: "Service Terms", desc: "Learn how Fixtek works for you." },
        ].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-gray-100 px-5 py-3 rounded-lg shadow-sm cursor-pointer hover:bg-gray-200 transition"
          >
            <div>
              <p className="text-sm md:text-base font-medium">{item.title}</p>
              <p className="text-xs md:text-sm text-gray-500">{item.desc}</p>
            </div>
            <span className="text-gray-500 text-lg md:text-xl">&gt;</span>
          </div>
        ))}
      </div>

      {/* ---------- Reviews Section ---------- */}
      <div className="mt-20 rounded-lg shadow-sm py-10 md:py-20 text-center px-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center space-x-2">
            <img
              src="download (2).jpeg"
              alt="left"
              className="w-[40px] md:w-[60px] h-[70px] md:h-[120px]"
            />
            <h2 className="text-3xl md:text-5xl font-bold text-[#212529]">
              4.9
            </h2>
            <img
              src="download (1).jpeg"
              alt="right"
              className="w-[40px] md:w-[60px] h-[70px] md:h-[120px]"
            />
          </div>
          <p className="text-gray-600 text-xs md:text-sm mt-1">
            Based on 53+ Reviews
          </p>
        </div>

        {/* Reviews */}
        <div className="grid md:grid-cols-2 gap-6 mt-6 text-left px-2 md:px-20">
          {[
            {
              name: "David",
              time: "1 month ago",
              text: "Good service, easy availability",
            },
            {
              name: "Aneeta",
              time: "1 month ago",
              text: "Excellent experience",
            },
            {
              name: "Latheef",
              time: "4 months ago",
              text: "Lorem Ipsum is simply dummy",
            },
          ].map((review, i) => (
            <div key={i} className="flex items-start space-x-3">
              <img
                src="user.png"
                alt={review.name}
                className="w-[43px] h-[43px] rounded-full object-cover"
              />
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <p className="text-sm md:text-base">{review.name}</p>
                  <div className="text-yellow-500 text-sm md:text-lg">
                    {"★★★★★"}
                  </div>
                </div>
                <p className="text-xs text-gray-500">{review.time}</p>
                <p className="mt-1 text-xs md:text-sm text-gray-700">
                  {review.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6">
          <button className="text-[#00343D] font-medium underline">
            View All
          </button>
        </div>
      </div>

      <Footersection />

      {/* ---------- Login Popup ---------- */}
      {showLogin && (
        <Login
          onClose={() => setShowLogin(false)}
          onVerified={handleVerified}
          onSwitchToRegister={handleSwitchToRegister}
        />
      )}

      {/* ---------- Register Popup ---------- */}
      {showRegister && (
        <Register
          onClose={() => setShowRegister(false)}
          onVerified={handleVerified}
          onSwitchToLogin={handleSwitchToLogin}
        />
      )}
    </div>
  );
}

export default Booking;
