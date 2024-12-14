import React from "react";
import bannerImage from "/images/home/banner.png";
import { useTheme } from "../hooks/ThemeContext";

const Banner = () => {
  const { isDarkMode } = useTheme();

  return (
    <div
      className={`container mx-auto max-w-screen-2xl xl:px-24 bg-gradient-to-r from-[#FAFAFA] via-[#FCFCFC] to-[#FCFCFC] ${
        isDarkMode ? "dark" : ""
      }`}
    >
      <div
        className={`flex flex-col-reverse md:flex-row items-center justify-between py-24 gap-8 ${
          isDarkMode ? "text-white" : ""
        }`}
      >
        {/* Image Section */}
        <div className="md:w-1/2">
          <img src={bannerImage} alt="Banner" />
          <div className="flex flex-col md:flex-row items-center justify-around -mt-14 gap-4">
            <div className="bg-white shadow-sm px-3 py-2 rounded-2xl flex items-center gap-3 w-64">
              <img
                src="/images/home/b-food1.png"
                alt="Biriyani"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5>Biriyani</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="biriyani-rating"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="biriyani-rating"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="biriyani-rating"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="biriyani-rating"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="biriyani-rating"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">₹185.00</p>
              </div>
            </div>
            <div className="hidden md:flex bg-white shadow-sm px-3 py-2 rounded-2xl items-center gap-3 w-64">
              <img
                src="/images/home/b-food1.png"
                alt="Pulao"
                className="rounded-2xl"
              />
              <div className="space-y-1">
                <h5>Pulao</h5>
                <div className="rating rating-sm">
                  <input
                    type="radio"
                    name="pulao-rating"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="pulao-rating"
                    className="mask mask-star-2 bg-orange-500"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="pulao-rating"
                    className="mask mask-star-2 bg-orange-500"
                    checked
                    readOnly
                  />
                  <input
                    type="radio"
                    name="pulao-rating"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                  <input
                    type="radio"
                    name="pulao-rating"
                    className="mask mask-star-2 bg-orange-400"
                    readOnly
                  />
                </div>
                <p className="text-red">₹180.00</p>
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div className="md:w-1/2 px-4 space-y-7">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            Order Karle! <span className="text-green">Meal Kits</span>
          </h2>
          <p className="text-[#4A4A4A] text-xl">
            Get fresh meal kits delivered home quickly!
          </p>
          <button className="btn bg-green text-white font-semibold rounded-full px-8 py-3">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;

