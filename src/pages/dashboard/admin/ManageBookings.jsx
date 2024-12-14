

import React, { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaArrowLeft, FaArrowRight, FaTrashAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";

const ManageBookings = () => {
  const { user, loading } = useAuth();
  const token = localStorage.getItem("access_token");
  const { refetch, data: orders = [] } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/payments/all`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });
      return res.json();
    },
  });

  const axiosSecure = useAxiosSecure();

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const items_Per_Page = 10;
  const indexOfLastItem = currentPage * items_Per_Page;
  const indexOfFirstItem = indexOfLastItem - items_Per_Page;
  const currentItems = orders.slice(indexOfFirstItem, indexOfLastItem);

  // Delete item
  const handleDeleteItem = (item) => {
    console.log(item._id);
  };

  // Confirm order
  const confiremedOrder = async (item) => {
    console.log(item);
    await axiosSecure.patch(`/payments/${item._id}`).then((res) => {
      console.log(res.data);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: `Order Confirmed Now!`,
        showConfirmButton: false,
        timer: 1500,
      });
      refetch();
    });
  };

  return (
    <div className="w-full md:w-[870px] mx-auto px-4">
      <h2 className="text-2xl font-semibold my-4 text-gray-800">
        Manage All <span className="text-green-700">Bookings!</span>
      </h2>

      {/* Menu items table */}
      <div>
        <div className="overflow-x-auto lg:overflow-x-visible">
          <table className="table w-full">
            {/* Head */}
            <thead className="bg-gray-100">
              <tr>
                <th className="text-gray-800">#</th>
                <th className="text-gray-800">User</th>
                <th className="text-gray-800">Transaction ID</th>
                <th className="text-gray-800">Price</th>
                <th className="text-gray-800">Status</th>
                <th className="text-gray-800 text-center">Confirm Order</th>
                <th className="text-gray-800">Delete</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="text-gray-800">{index + 1}</td>
                  <td className="text-gray-800">{item.email}</td>
                  <td className="text-gray-800">{item.transitionId}</td>
                  <td className="text-gray-800">${item.price}</td>
                  <td className="text-gray-800">{item.status}</td>
                  <td className="text-center">
                    {item.status === "confirmed" ? (
                      <span className="text-green-700 font-semibold">Done</span>
                    ) : (
                      <button
                        className="btn bg-green-800 text-white btn-xs hover:bg-green-900"
                        onClick={() => confiremedOrder(item)}
                      >
                        <GiConfirmed />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => handleDeleteItem(item)}
                      className="btn bg-green-800 text-white btn-xs hover:bg-green-900"
                    >
                      <FaTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center my-4">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="btn btn-sm bg-green-800 text-white hover:bg-green-900 mr-2"
        >
          <FaArrowLeft /> Previous
        </button>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={indexOfLastItem >= orders.length}
          className="btn btn-sm bg-green-800 text-white hover:bg-green-900"
        >
          Next <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default ManageBookings;
