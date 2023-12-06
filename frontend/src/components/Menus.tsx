import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchCategories, fetchMenus } from "../redux/slices/MenuSlice";

function Menus() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch<AppDispatch>();
  const menus = useSelector((state: RootState) => state.menus);
  useEffect(() => {
    dispatch(fetchMenus(""));
    dispatch(fetchCategories());
  }, [dispatch]);

  const addNumber = () => setCount(count + 1);
  const subNumber = () => setCount(Math.max(count - 1, 0));

  return (
    <div className="mt-12 container grid grid-cols-1 gap-6  mx-auto md:grid-cols-3 md:mt-12 ">
      {menus.items.map((item) => {
        return (
          <div>
            <img
              src={item.image}
              alt="Breakfast"
              className="w-full h-32 object-cover rounded-lg"
            />
            <div className="mt-3">
              <h3 className="text-xl font-bold">{item.name}</h3>
              <p className="text-sm text-gray-500">{item.calorie} Cal</p>
            </div>
            <div className="mt-2 mb-4 px-3 py-1 inline-block bg-green-200 text-green-800 text-xs font-semibold rounded-full">
              Best Sale
            </div>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-pink-400">
                {item.price} SR
              </span>
              <div className="flex items-center gap-2">
                <button
                  className="bg-pink-200 p-2 rounded-full text-xl text-black shadow-lg"
                  onClick={subNumber}
                >
                  −
                </button>
                <span className="text-lg font-semibold">{count}</span>
                <button
                  className="bg-pink-200 p-2 rounded-full text-xl text-black shadow-lg"
                  onClick={addNumber}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Menus;
