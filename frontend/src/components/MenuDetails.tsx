import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMenus } from "../redux/slices/MenuSlice";
import { AppDispatch, RootState } from "../redux/store";
import { Menu } from "../types/types";

type PopupProps = {
  isOpen: boolean;
  onClose: () => void;
};
function MenuDetails(popup: PopupProps) {
  const dispatch = useDispatch<AppDispatch>();
  const menu = useSelector((state: RootState) => state.menus.item);

  const [count, setCount] = useState(0);

  const addNumber = () => setCount(count + 1);
  const subNumber = () => setCount(Math.max(count - 1, 0));

  // useEffect(() => {
  //   dispatch(fetchMenus(popup.id.toString()));
  // }, [dispatch, popup.id]);

  if (!popup.isOpen) {
    return null;
  }
  if (!menu) {
    return (
      <div>
        <div className="flex justify-center items-center h-screen">
          <div
            className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <span className="font-medium"> ERROR: Item Not Found</span> .
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-4 max-w-xl w-full dark:bg-gray-800">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold dark:text-white">{menu.name}</h2>
          <button
            className="text-xl hover:bg-gray-200 rounded-full w-8  h-8 "
            onClick={popup.onClose}
          >
            ×
          </button>{" "}
          {/* Replace with close icon */}
        </div>
        <span className=" bg-green-300 p-1 text-green-800 border rounded-full text-xs font-semibold mr-2 dark:bg-transparent dark:border-green-400 dark:text-green-200">
          Best Sale
        </span>
        <div className="text-lg dark:text-white">{menu.calorie} Cal</div>
        <p className="text-gray-500 my-2  dark:text-gray-100">
          {menu.description}
        </p>
        <img
          src={menu.image}
          alt={menu.name}
          className="w-full h-96 object-cover rounded-lg"
        />
        <div className="flex justify-between items-center mt-4">
          <div className="text-2xl font-semibold dark:text-white">
            {menu.price} SR
          </div>
          <div className="flex items-center">
            <button
              className="w-10 h-10 text-xl font-medium text-black bg-pink-200 rounded-xl border border-pink-200 hover:bg-pink-100 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-transparent dark:hover:bg-gray-600 dark:text-pink-400 dark:focus:ring-pink-800"
              onClick={subNumber}
            >
              −
            </button>
            <div className="mx-4 text-lg font-semibold dark:text-gray-400 ">
              {count}
            </div>
            <button
              className="w-10 h-10 text-xl font-medium text-black bg-pink-200 rounded-xl border border-pink-200 hover:bg-pink-100 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-transparent dark:hover:bg-gray-600 dark:text-pink-400 dark:focus:ring-pink-800"
              onClick={addNumber}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuDetails;
