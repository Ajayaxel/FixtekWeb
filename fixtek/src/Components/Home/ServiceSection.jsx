// MostBookedServices.jsx
import React from 'react';
import { AiFillStar } from 'react-icons/ai';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi';

// --- Services Data ---
const servicesData = [
  { id: 1, title: 'Pest control (includes utensil removal)', rating: '4.79', reviews: '117K', price: '₹1,098', image: 'https://images.pexels.com/photos/14503557/pexels-photo-14503557.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 2, title: 'Apartment pest control', rating: '4.80', reviews: '33K', price: '₹1,498', image: 'https://images.pexels.com/photos/11767528/pexels-photo-11767528.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 3, title: 'Bed bugs control', rating: '4.77', reviews: '25K', price: '₹1,599', image: 'https://images.pexels.com/photos/14714319/pexels-photo-14714319.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 4, title: 'Intense bathroom cleaning', rating: '4.79', reviews: '2.9M', price: '₹499', image: 'https://images.pexels.com/photos/4579458/pexels-photo-4579458.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 5, title: 'Apartment termite control', rating: '4.83', reviews: '16K', price: '₹3,999', image: 'https://images.pexels.com/photos/7998767/pexels-photo-7998767.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 6, title: 'Sofa & Carpet Deep Cleaning', rating: '4.72', reviews: '88K', price: '₹999', image: 'https://images.pexels.com/photos/8606126/pexels-photo-8606126.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 7, title: 'Kitchen deep cleaning', rating: '4.75', reviews: '42K', price: '₹799', image: 'https://images.pexels.com/photos/3825589/pexels-photo-3825589.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 8, title: 'Window cleaning', rating: '4.70', reviews: '15K', price: '₹399', image: 'https://images.pexels.com/photos/7096/cleaning-windows-squeegee-squeegeeing.jpg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 9, title: 'Sofa cleaning', rating: '4.71', reviews: '28K', price: '₹599', image: 'https://images.pexels.com/photos/8416513/pexels-photo-8416513.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
  { id: 10, title: 'Bathroom sanitization', rating: '4.78', reviews: '62K', price: '₹699', image: 'https://images.pexels.com/photos/7453113/pexels-photo-7453113.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop' },
];

// --- Service Card Component ---
const ServiceCard = ({ imageSrc, title, rating, reviews, price }) => {
  return (
    <div className="flex-none w-72 mr-6 bg-white rounded-xl hover:shadow-lg transition duration-300">
      <div className="w-full aspect-square overflow-hidden rounded-lg">
        <img src={imageSrc} alt={title} className="object-cover w-full h-full rounded-lg" />
      </div>
      <div className="p-4">
        <p className="text-base font-semibold h-12 leading-tight text-gray-900 overflow-hidden">{title}</p>
        <div className="flex items-center text-sm text-gray-500 mt-2">
          <AiFillStar className="w-4 h-4 text-yellow-500 mr-1" />
          <span className="font-medium text-gray-800 mr-1">{rating}</span>
          <span>({reviews})</span>
        </div>
        <p className="text-lg font-bold text-gray-900 mt-2">{price}</p>
      </div>
    </div>
  );
};

// --- Main Component ---
const MostBookedServices = () => {
  const scrollRef = React.useRef(null);

  const scrollLeft = () => scrollRef.current.scrollBy({ left: -350, behavior: 'smooth' });
  const scrollRight = () => scrollRef.current.scrollBy({ left: 350, behavior: 'smooth' });

  return (
    <section className="p-6 md:p-10 bg-white">
      <div className="w-full ld:px-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-800">Most Booked Services</h2>

        <div className="relative">
          {/* Left Arrow */}
          <div
            className="hidden sm:flex absolute left-0 top-1/2 transform -translate-y-1/2 w-12 h-12 items-center justify-center bg-white border border-gray-300 rounded-full shadow-md cursor-pointer hover:bg-gray-50 z-10"
            onClick={scrollLeft}
          >
            <HiArrowLeft className="w-6 h-6 text-gray-600" />
          </div>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="flex overflow-x-scroll pb-4 space-x-6 custom-scrollbar"
          >
            {servicesData.map(service => (
              <ServiceCard
                key={service.id}
                imageSrc={service.image}
                title={service.title}
                rating={service.rating}
                reviews={service.reviews}
                price={service.price}
              />
            ))}
          </div>

          {/* Right Arrow */}
          <div
            className="hidden sm:flex absolute right-0 top-1/2 transform -translate-y-1/2 w-12 h-12 items-center justify-center bg-white border border-gray-300 rounded-full shadow-md cursor-pointer hover:bg-gray-50 z-10"
            onClick={scrollRight}
          >
            <HiArrowRight className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        {/* Custom Scrollbar Hidden */}
        <style jsx global>{`
          .custom-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .custom-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}</style>
         {/* --- Banner Section Below Carousel --- */}
      <div className="relative w-full h-[500px] sm:h-[550px] md:h-[600px] mt-12 md:mt-20 overflow-hidden">
        <img
          src="/Frame 1171276389.png"
          alt="Smart Door Banner"
          className="w-full h-full object-cover"
        />
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center px-6 sm:px-10 md:pl-20">
          <div className="max-w-[600px] text-black">
            <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-snug md:leading-tight">
              Turn Your <br />
              <span className="text-2xl sm:text-4xl md:text-5xl lg:text-[60px] text-black font-extrabold">Door Into A </span>
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[70px] text-orange-400 font-extrabold">SMART ONE!</span>
            </h2>
            <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base">
              We offer reliable door lock installation services <br className="hidden sm:block" />
              that will increase the security of your house or <br className="hidden sm:block" />office.
            </p>
            <button className="mt-3 sm:mt-5 bg-orange-500 text-white font-bold text-xs sm:text-sm md:text-base px-5 py-2 rounded-full shadow hover:bg-orange-600 transition">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default MostBookedServices;
