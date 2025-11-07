import React, { useState } from "react";
import Footersection from "../Components/common/Footersection";
import { FaCalendarAlt, FaCheck } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // ✅ import navigation hook

function ServiceBooking() {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [step, setStep] = useState(1);
  const [customerAddress, setCustomerAddress] = useState(
    "Al-Shifa Colony, Riya street, Karama Dubai"
  );

  const navigate = useNavigate(); // ✅ initialize navigation

  const handleAddressChange = () => {
    const newAddress = prompt("Enter new address:", customerAddress);
    if (newAddress) setCustomerAddress(newAddress);
  };

  const timeSlots = [
    "09:00AM - 11:00AM",
    "11:00AM - 01:00PM",
    "01:00PM - 03:00PM",
    "03.00AM - 05.00AM",
    "05.00AM - 07.00AM",
    "07.00AM - 09.00AM",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white font-manrope">
      {/* Banner Image */}
      <div className="flex justify-center ">
        <div className="w-full h-[431px] relative">
          <img
            src="/Rectangle 22714 (1).png"
            alt="Worker"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center pl-12">
            <span className="absolute left-[50px] top-20 text-6xl text-white">✦</span>
            <h2 className="text-white text-[57px] font-extrabold leading-tight px-10">
              We Provide <br />
              Quality Service
              <span className="absolute left-[700px] text-2xl text-white">✦</span>
            </h2>
            <span className="absolute left-[130px] bottom-[90px] text-4xl text-white">
              ✦
            </span>
          </div>
        </div>
      </div>

      {/* STEP 1: Booking Form */}
      {step === 1 && (
        <div className="flex justify-center -mt-10 ">
          <div className="w-[1000px] bg-[#F5F5FF] shadow-2xl rounded-xl p-10 border border-gray-200 z-10 relative ">
            <h2 className="text-[44px] font-bold text-center text-[#00343D] mb-2">
              Book Service
            </h2>

            {/* Stepper */}
            <div className="flex items-center justify-center mb-10">
              <div className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-semibold ${
                    step === 1
                      ? "border-[#00343D] text-[#00343D]"
                      : "border-gray-300 text-gray-400"
                  }`}
                >
                  1
                </div>
                <div className="w-16 h-px bg-gray-300 mx-2"></div>
              </div>
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center border-2 font-semibold ${
                  step === 2
                    ? "border-[#00343D] text-[#00343D]"
                    : "border-gray-300 text-gray-400"
                }`}
              >
                2
              </div>
            </div>

            {/* Date Picker */}
            <div className="mb-6">
              <label className="block text-[22px] font-semibold mb-2 text-gray-700">
                Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-[#00343D] focus:outline-none"
                />
                <FaCalendarAlt className="absolute top-3.5 left-3 text-gray-400" />
              </div>
            </div>

            {/* Thoughts */}
            <div className="mb-6">
              <label className="block text-[22px] font-semibold text-black mb-2">
                Your Thoughts
              </label>
              <textarea
                rows={3}
                placeholder="Write your requirements here..."
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00343D] focus:outline-none"
              ></textarea>
            </div>

            {/* Time Slots */}
            <div className="mb-8">
              <label className="block text-[22px] font-medium mb-3 text-[#000000]">
                Time Slots
              </label>
              <div className="grid grid-cols-3 gap-3">
                {timeSlots.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => setSelectedTime(slot)}
                    className={`relative p-3 border rounded-lg text-sm transition flex items-center justify-center text-center ${
                      selectedTime === slot
                        ? "bg-white border-2 border-dashed border-[#00343D] text-[#00343D]"
                        : "bg-white hover:bg-gray-100 border-gray-300"
                    }`}
                  >
                    {selectedTime === slot && (
                      <FaCheck className="absolute top-1 left-1 text-[#00343D] text-xs" />
                    )}
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
       <button
       onClick={() => navigate("/booking")}
       className="px-5 py-4 w-[171px] h-[60px] border border-gray-400 rounded-lg bg-[#656565] text-white hover:bg-[#4b4b4b] transition"
      >
  Cancel
    </button>


              <button
                onClick={() => setStep(2)}
                className="px-8 py-3 w-[171px] h-[60px] bg-[#00343D] text-[22px] text-white rounded-lg hover:bg-[#024650] transition"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 2: Booking Summary */}
      {step === 2 && (
        <div className="flex justify-center -mt-10">
          <div className="w-[1000px] bg-[#CCCCCC] shadow-2xl rounded-xl p-10 border border-gray-200 z-10">
            <h2 className="text-[32px] font-bold font-manrope text-center mb-6">
              Booking Summary
            </h2>

            {/* Service Card */}
            <div className="flex items-center bg-[#F9FBFC] rounded-xl p-4 mb-6">
              <img
                src="Plumbing Repair (12).png"
                alt="Plumbing"
                className="w-40 h-40 rounded-lg object-cover"
              />
              <div className="ml-6">
                <p className="text-green-600 text-[16px] font-medium">
                  Best Value
                </p>
                <p className="text-[24px] font-bold">Plumbing Repair</p>
                <p className="text-[20px]">AED 60.00 / hour</p>
                <p className="text-green-600 text-[16px] mt-1">⭐ 4.9 (53)</p>
              </div>
            </div>

            {/* Total Section */}
            <div className="p-4 border bg-white rounded-lg mb-4">
              <div className="flex justify-between text-gray-700 mb-2">
                <span>Charge</span>
                <span>Charge for 1 Hour is AED 90.00/-</span>
              </div>
              <div className="border-t border-black my-1"></div>
              <div className="flex justify-between font-semibold text-lg">
                <span>Total</span>
                <span>90.00/-</span>
              </div>
            </div>

            {/* Address */}
            <div className="p-4 border bg-white rounded-lg mb-4">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[17px]">Address</p>
                <button
                  onClick={handleAddressChange}
                  className="text-[#00343D] font-medium text-[15px]"
                >
                  Change
                </button>
              </div>
              <div className="border-t border-[#A1A1A1] my-2"></div>
              <p className="text-gray-500 text-[16px] mt-2">
                {customerAddress}
              </p>
            </div>

            {/* Slot Details */}
            <div className="p-4 border rounded-lg bg-white mb-8">
              <div className="flex justify-between items-center">
                <p className="font-semibold text-[17px]">Slot Details</p>
              </div>
              <div className="border-t border-[#A1A1A1] my-2"></div>

              <div className="flex justify-between items-center mt-4">
                <div>
                  <p className="text-gray-500 text-[14px]">Booking Date</p>
                  <p className="text-gray-800 text-[16px] mt-1">
                    {selectedDate}
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-[#00343D] font-medium text-[15px]"
                >
                  Change
                </button>
              </div>

              <div className="flex justify-between items-center mt-6">
                <div>
                  <p className="text-gray-500 text-[14px]">Booking Time</p>
                  <p className="text-gray-800 text-[16px] mt-1">
                    {selectedTime}
                  </p>
                </div>
                <button
                  onClick={() => setStep(1)}
                  className="text-[#00343D] font-medium text-[15px]"
                >
                  Change
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between">
             <button
  onClick={() => navigate("/booking")}
  className="px-5 py-3 w-[171px] border rounded-lg bg-gray-500 text-white hover:bg-gray-600 transition"
>
  Cancel
</button>

              <button
                onClick={() => setStep(3)}
                className="px-5 py-3 w-[171px] rounded-lg bg-[#00343D] text-white"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

      {/* STEP 3: Booking Confirmation */}
      {step === 3 && (
        <div className="w-full bg-[#FFFFFF] min-h-screen text-center px-6 py-12">
          <div className="flex justify-center relative">
            <img
              src="33141162_m010t0553_k_marking_11oct22 1.png"
              alt="Success"
              className="w-[404px] h-[400px] object-contain"
            />
            <img
              src="Rectangle 22635.png"
              alt="Badge"
              className="w-[914px] h-[676px] absolute bottom-20 right-15"
            />
          </div>

          <h2 className="text-[44px] font-bold font-manrope text-[#00343D] mt-6">
            Your Booking is Confirmed
          </h2>
          <p className="text-gray-600 text-[28px] mt-2">
            Lorem Ipsum has been the industry's standard dummy <br /> text ever
            since.
          </p>

          <div className="mt-14 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-center mb-4">
              Booking Details
            </h3>
            <div className="border-t border-gray-300 mb-8"></div>

            <div className="grid grid-cols-2 gap-6 text-gray-700 text-[18px]">
              <div className="flex items-center space-x-2">
                <span className="font-semibold">Booking ID:</span>
                <span>#QSD2367</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>📅</span>
                <span>{selectedDate || "16-Sept-2025"}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>🛠️</span>
                <span>Plumbing Repair</span>
              </div>
              <div className="flex items-center space-x-2">
                <span>⏰</span>
                <span>{selectedTime || "06.00PM - 08.00PM"}</span>
              </div>
              <div className="flex items-center space-x-2 col-span-2">
                <span>📍</span>
                <span>Al Madam, Dubai 238930</span>
              </div>
            </div>
          </div>

          {/* ✅ Back to Home button navigates to home */}
          <button
            onClick={() => navigate("/")}
            className="mt-12 px-8 py-4 bg-[#00343D] text-white rounded-lg hover:bg-[#024650] transition"
          >
            Back to Home
          </button>
        </div>
      )}

      <Footersection />
    </div>
  );
}

export default ServiceBooking;
