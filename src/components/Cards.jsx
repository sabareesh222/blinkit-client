import React, { useContext, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import Swal from "sweetalert2";
import useCart from "../hooks/useCart";
import axios from "axios";

const Cards = ({ item }) => {
  const { name, image, price, _id } = item;
  const { user } = useContext(AuthContext);
  const [cartItems, reloadCart] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  const addToCart = (product) => {
    if (user && user.email) {
      const newCartItem = {
        menuItemId: product._id,
        name: product.name,
        quantity: 1,
        image: product.image,
        price: product.price,
        email: user.email,
      };

      axios
        .post("https://blinkit-server-tppv.onrender.com/carts", newCartItem)
        .then((response) => {
          if (response) {
            reloadCart();
            Swal.fire({
              position: "center",
              icon: "success",
              title: "Item added to cart successfully.",
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          const errorMsg = error.response?.data?.message || "Error occurred";
          Swal.fire({
            position: "center",
            icon: "warning",
            title: errorMsg,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    } else {
      Swal.fire({
        title: "You need to log in to add items to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Log in now!",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card shadow-lg relative mr-5 md:my-5">
      <div
        className={`absolute top-2 right-2 p-4 rounded-full cursor-pointer bg-green ${
          favorite ? "text-rose-500" : "text-white"
        }`}
        onClick={toggleFavorite}
      >
        <FaHeart className="w-5 h-5" />
      </div>
      <Link to={`/menu/${item._id}`}>
        <figure>
          <img
            src={image}
            alt={name}
            className="hover:scale-105 transition-transform duration-300 md:h-72"
          />
        </figure>
      </Link>
      <div className="card-body">
        <Link to={`/menu/${item._id}`}>
          <h2 className="card-title">{name}</h2>
        </Link>
        <p>Enjoy this delicious item!</p>
        <div className="card-actions flex justify-between items-center mt-2">
          <h5 className="font-semibold">
            <span className="text-sm text-red">$</span> {price}
          </h5>
          <button
            onClick={() => addToCart(item)}
            className="btn bg-green text-white"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;

