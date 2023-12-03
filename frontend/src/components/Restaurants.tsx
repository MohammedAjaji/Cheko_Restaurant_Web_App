import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { FaCar, FaStar } from "react-icons/fa";

import { Restaurant } from "../types/types";
import { Link } from "react-router-dom";
import { fetchRestaurants } from "../redux/slices/RestaurantSlice";

export default function Restaurants() {
  const dispatch = useDispatch<AppDispatch>();
  const res = useSelector((state: RootState) => state.restaurant);

  useEffect(() => {
    dispatch(fetchRestaurants(""));
  }, [dispatch]);

  return (
    <div>
      <div className="mt-12 container grid grid-cols-1 gap-6  mx-auto md:grid-cols-3 md:mt-12 ">
        {res.items.map((item: Restaurant) => {
          return (
            <div className="flex items-center bg-white rounded-lg shadow p-4">
              <div className="flex-shrink-0">
                <img
                  src="https://cdn.langeek.co/photo/26023/original/any" // Replace with your image path
                  alt="Restaurant Logo"
                  className="h-24 w-24 rounded-full" // Adjust size as needed
                />
              </div>
              <div className="ml-4 flex-grow">
                <h5 className="text-xl font-bold">{item.name}</h5>
                <div className="flex gap-2">
                  <p className="text-gray-500">{item.rating}</p>
                  <p className=" text-yellow-400 border-yellow-500 mt-1">
                    <FaStar />{" "}
                  </p>
                  <a
                    href={item.url}
                    target="_blank"
                    className=" text-blue-400 border-blue-500 mt-1"
                  >
                    <FaCar />{" "}
                  </a>
                </div>
              </div>
              <Link
                to={`/restaurants/${item.id}`}
                className="bg-pink-200 p-2 rounded-full ml-4 shadow-lg hover:bg-pink-300"
              >
                {/* Replace with right arrow icon */}
                <span className="text-xl">→</span>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
