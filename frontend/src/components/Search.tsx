import React, { useEffect, useRef, useState } from "react";

export default function Search() {
  //   const [searchTerm, setSearchTerm] = useState("");
  // const [showFilters, setShowFilters] = useState(false);

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
    <form className="w-full">
      <div className="flex justify-center">
        <div className="relative w-2/3 md:w-2/3">
          <svg
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 19l-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"
            />
          </svg>
          <input
            type="search"
            id="search-dropdown"
            className="block pl-10 py-4 w-full z-20 text-base text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search..."
          />
          <select className="absolute top-0 right-40 py-4 text-base text-gray-900 bg-gray-50 mt-1 border-l-2 border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:focus:border-blue-500">
            <option value="">Filter Option 1</option>
            <option value="">Filter Option 2</option>
            <option value="">Filter Option 3</option>
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
