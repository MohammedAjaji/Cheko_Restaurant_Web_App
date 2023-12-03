import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IoSearchSharp } from "react-icons/io5";

import { AppDispatch, RootState } from "../redux/store";
import { fetchCategories, fetchMenus } from "../redux/slices/MenuSlice";
import { Category } from "../types/types";
import { useLocation } from "react-router-dom";
import { fetchRestaurants } from "../redux/slices/RestaurantSlice";

export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const location = useLocation();

  const category = useSelector((state: RootState) => state.menus.categories);
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleCategoryChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setSelectedCategory(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("selectedCategory :>> ", selectedCategory);
    if (location.pathname === "/map") {
      if (searchTerm) {
        dispatch(fetchRestaurants(`search/${searchTerm}`));
      } else {
        dispatch(fetchRestaurants(""));
      }
    } else {
      if (searchTerm) {
        if (selectedCategory === "All") {
          dispatch(fetchMenus(`search/${searchTerm}`));
        } else {
          dispatch(fetchMenus(`search/${searchTerm}/${selectedCategory}`));
        }
      } else {
        dispatch(fetchMenus(""));
      }
    }
  };
  // Hide filters dropdown if clicking outside of it
  //   useEffect(() => {
  //     function handleClickOutside(event: React.MouseEventHandler<HTMLButtonElement> ) {
  //       if (filterRef.current && !filterRef.current.contains(event.target)) {
  //         setShowFilters(false);
  //       }
  //     }
  //     document.addEventListener('mousedown', handleClickOutside);
  //     return () => document.removeEventListener('mousedown', handleClickOutside);
  //   }, [filterRef]);

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="flex justify-center">
        <div className="relative w-2/3 md:w-2/3">
          <div className="absolute text-xl left-3 top-7 transform -translate-y-1/2 w-5 h-5 text-gray-500">
            <IoSearchSharp />
          </div>
          <input
            type="search"
            id="search-dropdown"
            className="block pl-10 py-4 w-full z-20 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          <select
            className="absolute top-0 right-40 py-4 text-base text-gray-900 bg-gray-50 mt-1 border-l-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
            onChange={handleCategoryChange}
          >
            <option value="All">All</option>;
            {category.map((item, index) => {
              return (
                <option key={index} value={item.category}>
                  {item.category}
                </option>
              );
            })}
          </select>
          <button
            type="submit"
            className="absolute top-0 right-0 p-2.5 text-sm font-medium text-black bg-pink-200 rounded-lg pr-6 pl-6 mt-2 mr-2 border border-pink-200 hover:bg-pink-100 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
          >
            Search
          </button>
        </div>
      </div>
    </form>
  );
}
