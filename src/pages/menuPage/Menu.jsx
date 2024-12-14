

import React, { useEffect, useState } from "react";
import Cards from "../../components/Cards";
import { FaFilter } from "react-icons/fa";
import { useTheme } from "../../hooks/ThemeContext";

const Menu = () => {
  const { isDarkMode } = useTheme();
  const [menu, setMenu] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortOption, setSortOption] = useState("default");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://blinkit-server-tppv.onrender.com/menu");
        const data = await response.json();
        setMenu(data);
        setFilteredItems(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const filterItems = (category) => {
    const filtered =
      category === "all"
        ? menu
        : menu.filter((item) => item.category === category);

    setFilteredItems(filtered);
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const showAll = () => {
    setFilteredItems(menu);
    setSelectedCategory("all");
    setCurrentPage(1);
  };

  const handleSortChange = (option) => {
    setSortOption(option);

    let sortedItems = [...filteredItems];

    switch (option) {
      case "A-Z":
        sortedItems.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        sortedItems.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "low-to-high":
        sortedItems.sort((a, b) => a.price - b.price);
        break;
      case "high-to-low":
        sortedItems.sort((a, b) => b.price - a.price);
        break;
      default:
        break;
    }

    setFilteredItems(sortedItems);
    setCurrentPage(1);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      {/* Menu Banner */}
      <div
        className={`max-w-screen-2xl container mx-auto xl:px-24 px-4 bg-gradient-to-r from-[#FAFAFA] to-[#FCFCFC] ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="py-36 flex flex-col items-center justify-center text-center">
          <h2 className="text-4xl md:text-5xl font-bold leading-snug">
            For the Love of Delicious{" "}
            <span className="text-green">Food</span>
          </h2>
          <p className="text-[#4A4A4A] text-lg md:w-4/5 mx-auto mt-4">
            Experience mouthwatering dishes like Greek Salad, Lasagne,
            Butternut Pumpkin, and more at moderate prices.
          </p>
          <button className="mt-6 bg-green font-semibold text-white px-8 py-3 rounded-full">
            Order Now
          </button>
        </div>
      </div>

      {/* Filter and Sort Options */}
      <div className="section-container my-10 max-w-screen-2xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Categories */}
          <div className="flex flex-wrap gap-3 mb-4 md:mb-0">
            {["all", "salad", "pizza", "soup", "dessert", "drinks"].map(
              (category) => (
                <button
                  key={category}
                  onClick={() =>
                    category === "all" ? showAll() : filterItems(category)
                  }
                  className={`px-4 py-2 rounded-full font-semibold ${
                    selectedCategory === category
                      ? "bg-green text-white"
                      : "bg-[#FAFAFA] text-[#4A4A4A]"
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              )
            )}
          </div>

          {/* Sort Options */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center bg-[#4A4A4A] p-2 rounded-full">
              <FaFilter className="text-white" />
            </div>
            <select
              id="sort"
              onChange={(e) => handleSortChange(e.target.value)}
              value={sortOption}
              className="bg-[#4A4A4A] text-white px-4 py-2 rounded-full"
            >
              <option value="default">Default</option>
              <option value="A-Z">A-Z</option>
              <option value="Z-A">Z-A</option>
              <option value="low-to-high">Low to High</option>
              <option value="high-to-low">High to Low</option>
            </select>
          </div>
        </div>
      </div>

      {/* Product Cards */}
      <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-6 px-4 max-w-screen-2xl mx-auto">
        {currentItems.map((item, index) => (
          <Cards key={index} item={item} />
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 mb-20 space-x-2">
        {Array.from({ length: Math.ceil(filteredItems.length / itemsPerPage) }).map(
          (_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-full font-semibold ${
                currentPage === index + 1
                  ? "bg-green text-white"
                  : "bg-[#FAFAFA] text-[#4A4A4A]"
              }`}
            >
              {index + 1}
            </button>
          )
        )}
      </div>
    </div>
  );
};

export default Menu;
