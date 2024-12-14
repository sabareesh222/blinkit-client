

/* eslint-disable react/no-unescaped-entities */

/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { FaStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <div className="section-container my-16 bg-gray-900 py-10 px-4 rounded-lg shadow-md text-white">
      {/* Section Header */}
      <div className="text-center mb-10">
        <p className="subtitle text-green-500">Testimonials</p>
        <h2 className="title text-3xl font-bold text-white">
          What Our Customers Say About Us
        </h2>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Image */}
        <div className="lg:w-1/2">
          <img
            src="https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fGN1c3RvbWVyfGVufDB8fHx8MTY5Njg1MzEyNw&ixlib=rb-1.2.1&q=80&w=400"
            alt="Customer enjoying food"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="lg:w-1/2">
          <blockquote className="text-gray-300 text-lg italic leading-relaxed mb-6">
            “I can't stop raving about the experience! The meticulous attention to detail in both presentation and service was truly outstanding”
          </blockquote>

          {/* Customer Feedback */}
          <div className="flex items-center gap-6">
            {/* Avatar Group */}
            <div className="flex -space-x-4">
              <div className="w-12 h-12 rounded-full border border-gray-700 shadow-lg overflow-hidden">
                <img
                  src="/images/home/testimonials/testimonial1.png"
                  alt="Customer 1"
                />
              </div>
              <div className="w-12 h-12 rounded-full border border-gray-700 shadow-lg overflow-hidden">
                <img
                  src="/images/home/testimonials/testimonial2.png"
                  alt="Customer 2"
                />
              </div>
              <div className="w-12 h-12 rounded-full border border-gray-700 shadow-lg overflow-hidden">
                <img
                  src="/images/home/testimonials/testimonial3.png"
                  alt="Customer 3"
                />
              </div>
            </div>

            {/* Feedback Summary */}
            <div>
              <h5 className="text-lg font-semibold text-white">
                Customer Feedback
              </h5>
              <div className="flex items-center gap-2">
                <FaStar className="text-yellow-500" />
                <span className="text-lg font-medium text-white">4.9</span>
                <span className="text-sm text-gray-400">(18.6k Reviews)</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-8">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full">
              Read More Reviews
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
