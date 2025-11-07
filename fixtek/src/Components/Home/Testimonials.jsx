    // src/components/Testimonials.jsx
    import React from "react";

    // Sample testimonial data
    const testimonials = [
    {
        id: 1,
        name: "Shraddha Musale",
        location: "Powai",
        image: "Margin (8).png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
    },
    {
        id: 2,
        name: "Sapana Jain",
        location: "Powai",
        image: "Margin (7).png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
    },
    {
        id: 3,
        name: "Shraddha Musale",
        location: "Powai",
        image: "Margin (8).png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
    },
    {
        id: 4,
        name: "Sunny Gala",
        location: "Powai",
        image: "Margin (9).png",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make."
    }
    ];

    const Testimonials = () => {
    return (
        <div className="mt-12 md:mt-20 px-4">
        {/* Section Heading */}
        <h2 className="text-center text-2xl sm:text-3xl md:text-4xl lg:text-[43px] font-bold text-manrope">
            See what our users are saying...
        </h2>

        {/* Cards Container */}
        <div className=" mx-auto flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10 mt-8 md:mt-16 px-4 sm:px-6">
            {testimonials.map((testimonial) => (
            <div
                key={testimonial.id}
                className="relative w-1/3 md:w-1/4 lg:w-1/5  px-2 sm:px-4 py-6 sm:py-8 md:py-10"
            >
                <div className="relative">
                <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full  h-auto mx-auto rounded-lg"
                />
                <div className="absolute bottom-3    left-1/2 -translate-x-1/2 bg-white shadow rounded-lg p-3 sm:p-4 w-[180px] sm:w-[195px] md:w-[211px] min-h-[160px] sm:min-h-[175px] md:h-[185px]">
                <p className="text-[10px] sm:text-[11px] text-gray-600 text-manrope leading-tight">
                    "{testimonial.text}"
                </p>
                <p className="mt-3 sm:mt-4 text-[10px] sm:text-[11px] font-semibold text-manrope">
                    {testimonial.name}
                </p>
                <button className="absolute bottom-3 sm:bottom-4 right-2 text-[10px] sm:text-[11px] text-manrope text-black font-semibold bg-[#F0EDE4] px-2 sm:px-3 py-1 rounded-full">
                    {testimonial.location}
                </button>
                </div>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default Testimonials;
