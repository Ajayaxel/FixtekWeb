import { FaStar } from "react-icons/fa";
import Footersection from "../components/common/Footersection";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Plumbing from "../components/services/Plumbing";
function Services() {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    pauseOnHover: true,
  };

  return (
    <div className="bg-white min-h-screen font-sans">
      {/* Hero Section */}
      <div className="bg-[#00343D] text-white p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start justify-between max-w-full md:w-[1300px] h-auto md:h-[543px] mx-auto mt-6 md:mt-9">

        
        {/* Left: Image Carousel */}
        <div className="flex-shrink-0 w-full md:w-[402px]">
          <Slider {...settings}>
            <div>
              <img
                src="WhatsApp Image 2025-09-22 at 14.54.52_9091031f.jpg"
                alt="Plumbing work 1"
                className="rounded-lg w-[403px] h-[403px] sm:h-[350px] md:h-[403px] object-cover"
              />
            </div>
            <div>
              <img
                src="WhatsApp Image 2025-09-22 at 14.49.10_ad2a3f85.jpg"
                alt="Plumbing work 2"
                className="rounded-lg w-[403px] h-[402px] sm:h-[350px] md:h-[403px] object-cover"
              />
            </div>
            <div>
              <img
                src="WhatsApp Image 2025-09-22 at 14.54.52_f39372d8.jpg"
                alt="Plumbing work 3"
                className="rounded-lg w-[403px] h-[402px] sm:h-[350px] md:h-[403px] object-cover"
              />
            </div>
            <div>
              <img
                src="WhatsApp Image 2025-09-22 at 14.59.09_90d72dca.jpg"
                alt="Plumbing work 4"
                className="rounded-lg w-[403px] h-[402px] sm:h-[350px] md:h-[403px] object-cover"
              />
            </div>
          </Slider>
          <div className="flex items-center gap-2 mt-2 text-sm text-gray-100 justify-center md:justify-start"> 
            <FaStar className="text-yellow-400 text-lg" /> 
            <span className="text-center md:text-left"> 10,289 Plumbing services completed this year. </span> 
          </div>
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 mt-6 md:mt-0 md:ml-6 text-center md:text-left px-8">
          <h1 className="text-[26px] sm:text-[30px] md:text-[36px] font-manrope  font-bold leading-tight">
            Plumbing Problems? We&apos;re here for you.
          </h1>
          <p className="text-gray-200 mt-3 text-[14px] sm:text-[15px] font-manrope">
            We offer expert plumbing service — from leak repairs and pipe fixes
            to tap replacements, all done right at your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-40 mt-10 text-[16px] text-gray-300 md:justify-start">
            <div className="flex items-center gap-2">
               <img
    src="features_10.png" // <-- replace with your image path
    alt="Certified Technician"
    className="w-6 h-6 object-contain"
  />
            
              <span>Certified Technician</span>
            </div>
            <div className="flex items-center gap-4 px-20 ">
                <img
    src="warranty.png" // <-- replace with your image path
    alt="Certified Technician"
    className="w-6 h-6 object-contain"
  />
              <span>Transparent Pricing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
<div className="mx-4 md:mx-9 mt-6 md:mt-9">
  <h2 className="text-[20px] sm:text-[22px] mb-4 font-manrope text-center md:text-left">
    Plumbing Services
  </h2>

  {/* Card Container */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 justify-items-center mb-4">
    {/* Card 1 */}
    <div
      onClick={() => navigate("/booking")}
      className="bg-white rounded-lg shadow-md flex p-0 gap-4 w-full sm:w-[320px] md:w-[393px] h-[172px] cursor-pointer hover:shadow-lg transition"
    >
            <img
              src="Plumbing Repair.png"
              alt="Leak Repair"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs text-green-600 font-semibold">Best Value</span>
                <h3 className="mt-1 font-semibold font-manrope">Plumbing Repair</h3>
                <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                  <FaStar className="text-green-600" /> 4.8 (43)
                </div>
                <p className="text-sm text-gray-500 font-manrope">
                  Book an expert plumber for an on-site insep..
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 2 */}
          <div
            onClick={() => navigate("/Booking/plumbing-installation")}
            className="bg-white rounded-lg shadow-md flex p-0 gap-4 w-full sm:w-[320px] md:w-[393px] h-[172px] cursor-pointer hover:shadow-lg transition"
          >
            <img
              src="Plumbing Installation.png"
              alt="Pipe Installation"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-semibold font-manrope">Plumbing Installation</h3>
                <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                  <FaStar className="text-green-600" /> 5.0 (18)
                </div>
                <p className="text-sm text-gray-500 font-manrope">
                  Book an expert plumber for on-site issue in...
                </p>
              </div>
            </div>
          </div>

          {/* Service Card 3 */}
          <div
            onClick={() => navigate("/Booking/drainage")}
            className="bg-white rounded-lg shadow-md flex p-0 gap-4 w-full sm:w-[320px] md:w-[393px] h-[172px] cursor-pointer hover:shadow-lg transition"
          >
            <img
              src="Drainage Related.png"
              alt="Drain Cleaning"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-semibold font-manrope">Drainage Related</h3>
                <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                  <FaStar className="text-green-600" /> 5.0 (11)
                </div>
                <p className="text-sm text-gray-500 font-manrope">
                  Book a skilled plumber to inspect the probl...
                </p>
              </div>
            </div>
          </div>
        
          {/* Service Card 4 */}
          <div className="flex justify-center">
          <div
            onClick={() => navigate("/Booking/major-plumbing")}
            className="bg-white rounded-lg shadow-md flex p-1  gap-4  w-full sm:w-[320px] md:w-[393px] h-[172px] cursor-pointer hover:shadow-lg transition"
          >
            <img
              src="Major Plumbing Work.png"
              alt="Maintenance"
              className="rounded-lg h-[172px] w-[134px] object-cover"
            />
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="mt-3 font-semibold font-manrope">Major Plumbing Work</h3>
                <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
                  <FaStar className="text-green-600" /> 4.9 (81)
                </div>
                <p className="text-sm text-gray-500 font-manrope">
                  The plumbing services include major plumbin...
                </p>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footersection />
    </div>
  );
}

export default Services;
