import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import {
  fetchRestaurantMenuCategories,
  fetchRestaurants,
} from "../redux/slices/RestaurantSlice";
import { useParams } from "react-router-dom";
import { FaCar, FaStar } from "react-icons/fa";

import { Menu, Restaurant } from "../types/types";
import MenuDetails from "./MenuDetails";
import { fetchMenus } from "../redux/slices/MenuSlice";

function RestaurantsDetails() {
  const dispatch = useDispatch<AppDispatch>();
  const id = useParams().id;
  console.log("id :>> ", id);
  const restaurant = useSelector((state: RootState) => state.restaurant);
  const [categoryName, setCategoryName] = useState("");
  const [counts, setCounts] = useState<{ [id: number]: number }>({});

  const addNumber = (itemId: number) => {
    setCounts({ ...counts, [itemId]: (counts[itemId] || 0) + 1 });
  };

  const subNumber = (itemId: number) => {
    setCounts({ ...counts, [itemId]: Math.max((counts[itemId] || 0) - 1, 0) });
  };

  useEffect(() => {
    if (id) {
      dispatch(fetchRestaurants(id));
      dispatch(fetchRestaurantMenuCategories(id));
    }
  }, [dispatch, id]);

  const getRestaurantBycategory = (name: string) => {
    if (id) {
      if (name === "All") {
        dispatch(fetchRestaurants(id));
        setCategoryName(name);
      } else {
        dispatch(fetchRestaurantMenuCategories(id));
        setCategoryName(name);
      }
    }
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  // const [itemId, setItemId] = useState(1);

  const openPopup = (itemId: number) => {
    setIsPopupOpen(true);
    // setItemId(itemId);
    dispatch(fetchMenus(itemId.toString()));
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  if (restaurant.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-pink-300 animate-ping"></div>
      </div>
    );
  if (!restaurant.item)
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium"> ERROR: {restaurant.error}</span> .
        </div>
      </div>
    );

  return (
    <div>
      <div>
        <div>
          <div className=" mt-20 ml-28">
            <div className="md:flex">
              <ul className="flex space-x-4 text-lg font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 ">
                <button
                  className="inline-flex items-center px-4 py-3 rounded-lg shadow hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                  onClick={() => getRestaurantBycategory("All")}
                >
                  <span>All</span>
                </button>
                {restaurant.categories.map((category) => {
                  return (
                    <li>
                      <button
                        className="inline-flex items-center px-4 py-3 rounded-lg shadow hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                        onClick={() =>
                          getRestaurantBycategory(category.category)
                        }
                      >
                        <span className=" mr-2 border-r-2 pr-2">
                          {category.category}
                        </span>
                        <span>{category.count}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        <h1 className=" font-medium text-[50px] ml-14 mt-10 dark:text-white">
          {categoryName}
        </h1>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-700" />
        <div className="mt-12 container grid grid-cols-1 gap-6  mx-auto md:grid-cols-3 md:mt-12 ">
          {restaurant.item.menuSet.map((item: Menu) => {
            return (
              <button
                onClick={() => openPopup(item.id)}
                className="flex flex-col items-center bg-white rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row"
              >
                <div className="flex flex-col justify-between p-4 leading-normal md:order-2">
                  <h5 className="self-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {item.name}
                  </h5>
                  <p className="self-start mb-3 text-xs font-normal text-gray-400 dark:text-gray-500">
                    {item.calorie} cal
                  </p>

                  <div className="flex justify-between items-center w-full">
                    <p className="font-medium flex-grow text-2xl text-pink-300">
                      {item.price} SR
                    </p>
                    <div className="absolute flex justify-end items-center ml-44">
                      <button
                        className="w-10 h-10 text-xl font-medium text-black bg-pink-200 rounded-xl border border-pink-200 hover:bg-pink-100 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-transparent dark:hover:bg-gray-600 dark:text-pink-400 dark:focus:ring-pink-800"
                        onClick={(event) => {
                          event.stopPropagation();
                          subNumber(item.id);
                        }}
                      >
                        -
                      </button>
                      <p className="font-semibold text-black px-4 dark:text-gray-400">
                        {counts[item.id] || 0}
                      </p>
                      <button
                        className="w-10 h-10 text-xl font-medium text-black bg-pink-200 rounded-xl border border-pink-200 hover:bg-pink-100 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-transparent dark:hover:bg-gray-600 dark:text-pink-400 dark:focus:ring-pink-800"
                        onClick={(event) => {
                          event.stopPropagation();
                          addNumber(item.id);
                        }}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  className="object-cover w-full mx-4 rounded-xl h-96 md:h-36 md:m-3 md:w-36 md:rounded-xl md:order-1"
                  src={item.image}
                  alt={item.name}
                />
              </button>
            );
          })}
        </div>
        <MenuDetails isOpen={isPopupOpen} onClose={closePopup} />
      </div>
    </div>
  );
}

export default RestaurantsDetails;
