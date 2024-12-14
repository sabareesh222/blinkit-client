

import React, { useContext, useState } from "react";
import useCart from "../../hooks/useCart";
import { AuthContext } from "../../contexts/AuthProvider";
import Swal from "sweetalert2";
import { FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import { useTheme } from "../../hooks/ThemeContext";

const CartPage = () => {
  const { user } = useContext(AuthContext);
  const { isDarkMode } = useTheme();
  const [cart, refetch] = useCart();
  const [cartItems, setCartItems] = useState(cart);

  const calculateTotalPrice = (item) => item.price * item.quantity;

  const handleQuantityChange = async (item, increment) => {
    if (item.quantity + increment < 1) return;

    try {
      const response = await fetch(`https://blinkit-server-tppv.onrender.com/carts/${item._id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ quantity: item.quantity + increment }),
      });

      if (response.ok) {
        const updatedCart = cartItems.map((cartItem) =>
          cartItem._id === item._id
            ? { ...cartItem, quantity: cartItem.quantity + increment }
            : cartItem
        );
        setCartItems(updatedCart);
        await refetch();
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
  };

  const handleDelete = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You will not be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://blinkit-server-tppv.onrender.com/carts/${item._id}`)
          .then(() => {
            refetch();
            Swal.fire("Deleted!", "The item has been removed.", "success");
          })
          .catch((error) => console.error("Error deleting item:", error));
      }
    });
  };

  const cartSubtotal = cart.reduce(
    (total, item) => total + calculateTotalPrice(item),
    0
  );

  return (
    <div className="max-w-screen-2xl container mx-auto xl:px-24 px-4">
      {/* Banner */}
      <div
        className={`bg-gradient-to-r from-0% from-[#FAFAFA] to-[#FCFCFC] to-100% ${
          isDarkMode ? "dark" : ""
        }`}
      >
        <div className="py-28 flex flex-col items-center justify-center">
          <div className="text-center px-4 space-y-7">
            <h2 className="md:text-5xl text-4xl font-bold md:leading-snug leading-snug">
              Items Added to the <span className="text-green">Cart</span>
            </h2>
          </div>
        </div>
      </div>

      {/* Cart Content */}
      {cart.length > 0 ? (
        <div>
          <div className="overflow-x-auto">
            <table className="table">
              <thead className="bg-green text-white rounded-sm">
                <tr>
                  <th>#</th>
                  <th>Food</th>
                  <th>Item Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={item._id}>
                    <td>{index + 1}</td>
                    <td>
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={item.image} alt="Food item" />
                        </div>
                      </div>
                    </td>
                    <td className="font-medium">{item.name}</td>
                    <td className="flex">
                      <button
                        className="btn btn-xs"
                        onClick={() => handleQuantityChange(item, -1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        className={`w-10 mx-2 text-center appearance-none ${
                          isDarkMode ? "dark" : ""
                        }`}
                        value={item.quantity}
                        readOnly
                      />
                      <button
                        className="btn btn-xs"
                        onClick={() => handleQuantityChange(item, 1)}
                      >
                        +
                      </button>
                    </td>
                    <td>${calculateTotalPrice(item).toFixed(2)}</td>
                    <td>
                      <button
                        className="btn btn-sm bg-transparent text-red"
                        onClick={() => handleDelete(item)}
                      >
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <hr />
          <div className="flex flex-col md:flex-row justify-between my-12 gap-8">
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-lg font-semibold">Customer Details</h3>
              <p>Name: {user?.displayName || "None"}</p>
              <p>Email: {user?.email}</p>
              <p>
                User ID: <span className="text-sm">{user?.uid}</span>
              </p>
            </div>
            <div className="md:w-1/2 space-y-3">
              <h3 className="text-lg font-semibold">Shopping Details</h3>
              <p>Total Items: {cart.length}</p>
              <p>Total Price: ${cartSubtotal.toFixed(2)}</p>
              <Link
                to="/process-checkout"
                className="btn btn-md bg-green text-white px-8 py-1"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="text-center mt-20">
          <p>Cart is empty. Please add products.</p>
          <Link to="/menu">
            <button className="btn bg-green text-white mt-3">
              Back to Menu
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;

