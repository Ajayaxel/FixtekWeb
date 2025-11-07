import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ServiceList = () => {
  const navigate = useNavigate();

  const ServiceCard = ({ title, rating, reviews, desc, img, link, tag }) => {
    return (
      <div
        onClick={() => navigate(link)}
        className="bg-white rounded-lg shadow-md flex flex-col md:flex-row p-0 gap-4 w-full sm:w-[320px] md:w-[393px] h-[172px] cursor-pointer hover:shadow-lg transition"
      >
        <img
          src={img}
          alt={title}
          className="rounded-lg w-full md:w-[134px] h-[172px] object-cover flex-shrink-0"
        />
        <div className="flex flex-col justify-between px-2 py-1 flex-1">
          {tag && (
            <span className="text-xs text-green-600 font-semibold">{tag}</span>
          )}
          <h3 className="mt-1 font-semibold font-manrope">{title}</h3>
          <div className="flex items-center gap-1 text-green-600 text-xs font-semibold">
            <FaStar className="text-green-600" /> {rating} ({reviews})
          </div>
          <p className="text-sm text-gray-500 font-manrope line-clamp-2">
            {desc}
          </p>
        </div>
      </div>
    );
  };

  const servicesData = [
    {
      title: "Plumbing Repair",
      rating: 4.8,
      reviews: 43,
      desc: "Book an expert plumber for an on-site inspection or minor repairs.",
      img: "Plumbing Repair.png",
      link: "/booking",
      tag: "Best Value",
    },
    {
      title: "Plumbing Installation",
      rating: 5.0,
      reviews: 18,
      desc: "Book an expert plumber for on-site installation or replacement jobs.",
      img: "Plumbing Installation.png",
      link: "/Booking/plumbing-installation",
    },
    {
      title: "Drainage Related",
      rating: 5.0,
      reviews: 11,
      desc: "Book a skilled plumber to inspect and fix drainage problems efficiently.",
      img: "Drainage Related.png",
      link: "/Booking/drainage",
    },
    {
      title: "Major Plumbing Work",
      rating: 4.9,
      reviews: 81,
      desc: "Major plumbing services including pipe replacement and extensive repairs.",
      img: "Major Plumbing Work.png",
      link: "/Booking/major-plumbing",
    },
  ];

  return (
    <div className="mx-4 md:mx-10 lg:mx-16 xl:mx-28 mt-6 md:mt-9">
      {/* Heading aligned with grid */}
      <h2 className="text-lg lg:text-3xl mb-6 font-manrope text-left py-4">
        Plumbing Services
      </h2>

      {/* Grid with exactly 3 cards per row on lg screens */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {servicesData.map((service, i) => (
          <ServiceCard key={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default ServiceList;
