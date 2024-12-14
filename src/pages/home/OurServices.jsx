

import React from "react";

const serviceLists = [
  {
    id: 1,
    title: "Catering",
    des: "Delight your guests with our flavors and presentation",
    img: "/images/home/services/icon1.png",
  },
  {
    id: 2,
    title: "Fast Delivery",
    des: "We deliver your order promptly to your door",
    img: "/images/home/services/icon2.png",
  },
  {
    id: 3,
    title: "Online Ordering",
    des: "Explore menu & order with ease using our Online Ordering",
    img: "/images/home/services/icon3.png",
  },
  {
    id: 4,
    title: "Gift Cards",
    des: "Give the gift of exceptional dining with Foodi Gift Cards",
    img: "/images/home/services/icon4.png",
  },
];

const OurServices = () => {
  return (
    <div className="section-container my-16 bg-gray-50 py-10 rounded-lg shadow-md">
      {/* Section Header */}
      <div className="text-center mb-10 px-4">
        <p className="subtitle text-green-600">Our Story & Services</p>
        <h2 className="title text-gray-800 text-3xl font-bold">
          Our Culinary Journey and Services
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed max-w-2xl mx-auto">
          Driven by passion, we craft unforgettable dining experiences, combining exquisite culinary artistry with heartfelt hospitality.
        </p>
      </div>

      {/* Services */}
      <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-8 px-4">
        {serviceLists.map((service) => (
          <div
            key={service.id}
            className="group shadow-lg rounded-lg bg-white p-6 text-center transition-transform transform hover:scale-105"
          >
            <img
              src={service.img}
              alt={service.title}
              className="w-16 h-16 mx-auto mb-4"
            />
            <h5 className="text-lg font-semibold text-green-700 group-hover:text-green-600">
              {service.title}
            </h5>
            <p className="text-gray-500 mt-2">{service.des}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="flex justify-center mt-12">
        <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-full">
          Explore
        </button>
      </div>
    </div>
  );
};

export default OurServices;

