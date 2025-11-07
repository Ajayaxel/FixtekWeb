import React from 'react'
import Footersection from "../Components/common/Footersection";

function Partnerwithus() {
  return (
    <div className="space-y-7">
      {/* Content Section with Padding */}
      <div className="p-16 space-y-14">
        {/* Top Section */}
        <div className="bg-[#023047] rounded-lg p-8 flex flex-col md:flex-row items-center justify-between text-white w-[1200px]">
          <div className="max-w-[1200px] h-[552px]">
            <h2 className="text-[41px] font-bold mb-3">Become a Fixtek <br/> Partner</h2>
            <p className="mb-6 text-[15px]">
              Lorem ipsum is simply dummy text of the printing and typesetting industry.<br/> 
              Lorem Ipsum has been the...
            </p>
            <button className="bg-white text-[#023047] px-7 py-4 rounded-md text-[18px] font-medium hover:bg-gray-100 w-[194px] h-[49px] ">
              Partner With Us
            </button>
          </div>
          <div className="mt-6 md:mt-0">
            <img
              src="business-deal 1 (1).png"
              alt="Partner Illustration"
              className="w-580 h-427 object-contain"
            />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="bg-[#F3F7FF] shadow rounded-lg p-9 w-full  h-[555px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-60 py-3 mt-4 px-7">
            {/* Card 1 */}
            <div className="bg-[#FFFFFF] shadow rounded-lg p-3 px-4 h-[440px] w-[601px]">
              <h3 className="text-[43px] font-regular mb-2 px-0">Why Join the Fixtek<br/> Network?</h3>
              <p className="text-[15px] text-[#4A5565] mb-2 py-2 px-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting <br/>
                industry. Lorem Ipsum has been the industry’s standard dummy text <br/> 
                ever since the...
              </p>
              <button className="bg-[#023047] mt-14 text-white  px-6 py-3 rounded-md text-sm font-medium hover:bg-[#034c63] ">
              Partner With Us
              </button>
            </div>

            {/* Card 2 */}
            <div className="bg-[#F3F7FF] shadow rounded-lg p-3 px-9 w-[435px] h-[440px]">
              <h3 className="text-[43px] font-regular mb-3">Expand Your<br/> Reach, Boost Your<br/> Skills</h3>
              <p className="text-sm text-gray-600 mb-6">
                Lorem Ipsum is simply dummy text of the printing and <br/>typesetting industry. 
                Lorem Ipsum has been <br/>the industry’s standard dummy text ever since <br/>the...
              </p>
              <button className="bg-[#F3F7FF] text-black px-6 py-3 shadow rounded-lg text-sm font-medium hover:bg-[#034c63]">
                Partner With Us
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Full Width */}
      <Footersection />
    </div>
  );
}

export default Partnerwithus;
