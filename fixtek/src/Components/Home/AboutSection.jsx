import React, { useState, useEffect, useCallback } from "react";

const services = [
  {
    name: "Microwave Oven",
    bookings: "5.3k+ Bookings",
    img: "Microwave Oven.png",
  },
  {
    name: "Carpentry",
    bookings: "9.3k+ Bookings",
    img: "Carpentry.png",
  },
  {
    name: "Plumbing",
    bookings: "10.3k+ Bookings",
    img: "Plumbing (2).png",
  },
  {
    name: "Electrical",
    bookings: "13.5k+ Bookings",
    img: "Electrical.png",
  },
  {
    name: "Cleaning",
    bookings: "13.5k+17p Bookings",
    img: "Cleaning (1).png",
  },
];


const ServiceCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(1); // default mobile
  const total = services.length;

  // --- Responsive breakpoints ---
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(5);
      else if (window.innerWidth >= 768) setVisibleCount(3);
      else setVisibleCount(1);
    };
    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  // --- Auto Slide ---
  const nextSlide = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // --- Swipe Gesture ---
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };
  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    if (distance > 50) nextSlide();
    if (distance < -50) prevSlide();
  };

  // --- Position & Style Logic ---
  const getCardStyle = (index) => {
    const position = (index - activeIndex + total) % total;
    const baseStyle = {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      transition: "all 0.6s ease",
      width: "70%",
      maxWidth: "380px",
      minWidth: "230px",
      aspectRatio: "350 / 310",
    };

    if (visibleCount === 1) {
      // Mobile: only show center
      return {
        ...baseStyle,
        transform: "translate(-50%, -50%) scale(1)",
        zIndex: position === 0 ? 10 : 0,
        opacity: position === 0 ? 1 : 0,
      };
    }

    if (visibleCount === 3) {
      // Tablet: show 3 cards
      const shift = 140;
      switch (position) {
        case 0:
          return {
            ...baseStyle,
            transform: "translate(-50%, -50%) scale(1)",
            zIndex: 30,
            opacity: 1,
          };
        case 1:
          return {
            ...baseStyle,
            transform: `translate(-${shift}%, -50%) scale(0.85)`,
            zIndex: 20,
            opacity: 0.8,
          };
        case total - 1:
          return {
            ...baseStyle,
            transform: `translate(${shift*.3}%, -50%) scale(0.85)`,
            zIndex: 20,
            opacity: 0.8,
          };
        default:
          return {
            ...baseStyle,
            opacity: 0,
            zIndex: 5,
            transform: "translate(-50%, -50%) scale(0.5)",
          };
      }
    }

    if (visibleCount === 5) {
      // Desktop: show 5 cards
      const shift = 140;
      switch (position) {
        case 0:
          return {
            ...baseStyle,
            transform: "translate(-50%, -50%) scale(1)",
            zIndex: 30,
            opacity: 1,
          };
        case 1:
          return {
            ...baseStyle,
            transform: `translate(-${shift*1.1}%, -50%) scale(0.85)`,
            zIndex: 20,
            opacity: 0.8,
          };
        case 2:
          return {
            ...baseStyle,
            transform: `translate(-${shift * 1.7}%, -50%) scale(0.7)`,
            zIndex: 10,
            opacity: 0.6,
          };
        case total - 1:
          return {
            ...baseStyle,
            transform: `translate(${shift * 0.4}%, -50%) scale(0.85)`,
            zIndex: 20,
            opacity: 0.8,
          };
        case total - 2:
          return {
            ...baseStyle,
            transform: `translate(${shift * 1.}%, -50%) scale(0.7)`,
            zIndex: 10,
            opacity: 0.6,
          };
        default:
          return {
            ...baseStyle,
            opacity: 0,
            zIndex: 5,
            transform: "translate(-50%, -50%) scale(0.5)",
          };
      }
    }
  };

  // --- Service Card ---
  const CardContent = ({ service, isActive }) => (
    <div
      className={`relative flex flex-col justify-between h-full p-5 sm:p-6 rounded-2xl sm:rounded-3xl ${
        isActive
          ? "bg-white shadow-2xl text-gray-900"
          : "bg-gradient-to-br from-[#3b5d63] to-[#21494f] text-white shadow-lg"
      }`}
    >
      <div>
        <h3
          className={`font-bold mb-2 ${
            isActive ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
          }`}
        >
          {service.name}
        </h3>
        <p
          className={`font-semibold ${
            isActive ? "text-green-600" : "text-green-400"
          } text-sm sm:text-base`}
        >
          {service.bookings} Bookings
        </p>
      </div>
      <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4">
        <img
          src={service.img}
          alt={service.name}
          className={`w-24 h-24 sm:w-32 sm:h-32 object-contain ${
            isActive ? "opacity-100" : "opacity-80"
          }`}
        />
      </div>
    </div>
  );

  return (
    <div
      className="relative bg-[#12343b] flex flex-col items-center justify-center min-h-[80vh] sm:min-h-screen overflow-hidden py-16 px-4 sm:px-8"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-12 sm:mb-16 text-center">
        Find Your Home Service
      </h2>

      <div className="relative w-full max-w-6xl mx-auto h-[300px] sm:h-[400px] flex justify-center items-center">
        {services.map((service, index) => (
          <div
            key={index}
            style={getCardStyle(index)}
            className="cursor-pointer"
            onClick={() => setActiveIndex(index)}
          >
            <CardContent service={service} isActive={index === activeIndex} />
          </div>
        ))}
      </div>

      <div className="flex gap-2 mt-10">
        {services.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
              index === activeIndex
                ? "bg-white scale-125"
                : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ServiceCarousel;
