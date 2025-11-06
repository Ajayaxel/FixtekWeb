import React from 'react'

function Plumbing() {
  return (
     <div className="min-h-screen bg-white flex flex-col items-center py-20 font-manrope">
      <div className="w-[600px] bg-gray-100 shadow-lg rounded-xl p-10">
        <h2 className="text-3xl font-bold text-center text-[#00343D] mb-6">
          Book Plumbing Service
        </h2>

        {/* Date */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date
          </label>
          <input
            type="date"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00343D]"
          />
        </div>

        {/* Time */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Time
          </label>
          <input
            type="time"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00343D]"
          />
        </div>

        {/* Address */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Address
          </label>
          <textarea
            rows={3}
            placeholder="Enter your service address"
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-[#00343D]"
          ></textarea>
        </div>

        {/* Confirm Button */}
        <button className="w-full h-[52px] bg-[#00343D] text-white rounded-lg hover:bg-[#024650] transition">
          Confirm Booking
        </button>
      </div>
    </div>
  )
}

export default Plumbing;
