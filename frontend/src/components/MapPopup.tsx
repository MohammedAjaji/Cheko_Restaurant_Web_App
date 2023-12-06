import React, { useEffect } from "react";

import { FaCar, FaStar } from "react-icons/fa";

type Props = {
  name: string;
  rating: number;
  id: number;
  url: string;
};
function MapPopup(props: Props) {
  return (
    <div className="flex items-center bg-white w-max rounded-lg shadow p-4 dark:bg-gray-800">
      <div className="flex-shrink-0">
        <img
          src="https://cdn.langeek.co/photo/26023/original/any"
          alt="Restaurant Logo"
          className="h-24 w-24 rounded-full"
        />
      </div>
      <div className="ml-4 flex-grow">
        <h5 className="text-lg font-bold dark:text-white">{props.name}</h5>
        <div className="flex gap-2">
          <p className="text-gray-500 dark:text-white">{props.rating}</p>
          <p className=" text-yellow-400 border-yellow-500 mt-1">
            <FaStar />{" "}
          </p>
          <a
            href={props.url}
            target="_blank"
            className="text-blue-400 border-blue-500 mt-1"
          >
            <FaCar />{" "}
          </a>
        </div>
      </div>
      <button
        id={`navigate-button-${props.id}`}
        className="bg-pink-200 p-2 rounded-full ml-4 shadow-lg hover:bg-pink-300"
      >
        <span className="text-xl">→</span>
      </button>
    </div>
  );
}

export default MapPopup;
