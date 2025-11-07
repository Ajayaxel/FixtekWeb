// WhyChooseFixtek.jsx
import React from "react";

const cardsTop = [
  {
    id: 1,
    img: "Figure.png",
    alt: "Background Verified",
    text: "Background Verified and Trusted Experts",
  },
  {
    id: 2,
    img: "Figure (1).png",
    alt: "Home Cleaning",
    text: "Professionally Trained For Home Cleaning",
  },
  {
    id: 3,
    img: "Figure (2).png",
    alt: "Freedom",
    text: "Freedom to Cancel or Reschedule",
    colSpan: "sm:col-span-2 lg:col-span-1",
  },
];

const cardsBottom = [
  {
    id: 4,
    img: "Figure (3).png",
    alt: "Women Workforce",
    text: "Powered By Strong Women Workforce",
  },
  {
    id: 5,
    img: "Figure (4).png",
    alt: "Quality",
    text: "Quality You Can Trust",
    bold: true,
  },
  {
    id: 6,
    img: "Figure (5).png",
    alt: "Families",
    text: "Trusted by 6000+ Families",
    colSpan: "sm:col-span-2 lg:col-span-1",
    bold: true,
  },
];

const Card = ({ img, alt, text, colSpan, bold }) => {
  return (
    <div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-md border transition-all flex flex-col items-center text-center w-full max-w-[95%] sm:max-w-[360px] md:max-w-[400px] lg:max-w-[420px] h-auto ${colSpan || ""}`}
    >
      <img
        src={img}
        alt={alt}
        className="w-full h-[150px] sm:h-[170px] md:h-[200px] lg:h-[220px] bg-[#F6F6F6] rounded-t-2xl object-cover"
      />
      <p
        className={`text-sm sm:text-[15px] md:text-[16px] lg:text-lg mt-3 px-8 py-4 pb-4 flex items-center text-gray-900" : "font-semibold text-gray-800"
        }`}
      >
        {text}
      </p>
    </div>
  );
};

const WhyChooseFixtek = () => {
  return (
    <div className="bg-white w-full py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-12 flex flex-col items-center justify-center">
      {/* Top Row */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 justify-items-center mb-8 sm:mb-10 md:mb-12">
        {cardsTop.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>

      {/* Centered Title */}
      <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#3C172A] text-manrope my-6 sm:my-8 md:my-12 px-2 sm:px-4 md:px-6 lg:px-0">
        <span className="text-[#3C172A]">WHY CHOOSE </span>
        <span className="text-black">FIXTEK</span>
      </h2>

      {/* Bottom Row */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 justify-items-center mt-0">
        {cardsBottom.map((card) => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};

export default WhyChooseFixtek;
