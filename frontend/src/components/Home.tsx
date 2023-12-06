import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RestaurantActions } from "../redux/slices/RestaurantSlice";
import {
  MenuActions,
  fetchCategories,
  fetchMenus,
} from "../redux/slices/MenuSlice";
import { RootState, AppDispatch } from "../redux/store";
import { Menu } from "../types/types";
import { Link } from "react-router-dom";
import MenuDetails from "./MenuDetails";

function Home() {
  const dispatch = useDispatch<AppDispatch>();
  const menus = useSelector((state: RootState) => state.menus);
  const [categoryName, setCategoryName] = useState("");
  const [counts, setCounts] = useState<{ [id: number]: number }>({});

  const addNumber = (itemId: number) => {
    setCounts({ ...counts, [itemId]: (counts[itemId] || 0) + 1 });
  };

  const subNumber = (itemId: number) => {
    setCounts({ ...counts, [itemId]: Math.max((counts[itemId] || 0) - 1, 0) });
  };

  useEffect(() => {
    dispatch(fetchMenus(""));
    dispatch(fetchCategories());
  }, [dispatch]);

  const getMenuBycategory = (name: string) => {
    if (name === "All") {
      dispatch(fetchMenus(""));
      setCategoryName(name);
    } else {
      dispatch(fetchMenus(`category/${name}`));
      setCategoryName(name);
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

  if (menus.isLoading)
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="rounded-full h-20 w-20 bg-pink-300 animate-ping"></div>
      </div>
    );
  if (menus.error)
    return (
      <div className="flex justify-center items-center h-screen">
        <div
          className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
          role="alert"
        >
          <span className="font-medium"> ERROR: {menus.error}</span> .
        </div>
      </div>
    );

  console.log("counts :>> ", counts);

  return (
    <div>
      <div>
        <div className=" md:mt-20 md:ml-28">
          <div className="flex">
            <ul className="mt-10 grid grid-cols-2 gap-3 xl:flex md:grid-cols-3 md:m-0 md:space-x-4 text-lg font-medium text-gray-500 dark:text-gray-400 md:me-4 mb-4 md:mb-0 ">
              <button
                className="inline-flex items-center px-4 py-3 rounded-lg shadow hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                onClick={() => getMenuBycategory("All")}
              >
                <p>All</p>
              </button>
              {menus.categories.map((category) => {
                return (
                  <li>
                    <button
                      className="inline-flex items-center px-4 py-3 rounded-lg shadow hover:text-gray-900 bg-gray-50 hover:bg-gray-100 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:text-white"
                      onClick={() => getMenuBycategory(category.category)}
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
      <div className="mt-12 container grid grid-cols-1 gap-6  mx-auto xl:grid-cols-3 md:mt-12 md:grid-cols-2 ">
        {menus.items.map((item: Menu) => {
          return (
            <button
              onClick={() => openPopup(item.id)}
              className="flex flex-col items-center bg-white rounded-lg shadow  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:flex-row"
            >
              <img
                className="object-cover w-full mx-4 rounded-xl h-96 md:h-36 md:m-3 md:w-36 md:rounded-xl md:order-1"
                src={item.image}
                alt={item.name}
              />
              <div className="flex flex-col justify-between p-4 leading-normal md:order-2">
                <h5 className="self-start mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.name}
                </h5>
                <p className="self-start mb-3 text-xs font-normal text-gray-400 dark:text-gray-500">
                  {item.calorie} cal
                </p>

                <div className="flex justify-between gap-16 sm:gap-4 items-center w-full">
                  <p className="font-medium flex-grow text-2xl text-pink-300">
                    {item.price} SR
                  </p>
                  <div className="flex justify-normal items-center">
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
            </button>
          );
        })}
      </div>
      <MenuDetails isOpen={isPopupOpen} onClose={closePopup} />
    </div>
  );
}

export default Home;
