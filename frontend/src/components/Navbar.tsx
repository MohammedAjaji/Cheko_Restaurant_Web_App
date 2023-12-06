import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState("light");
  const location = useLocation();

  console.log("location :>> ", location);

  const linkClass = (link: string): string => {
    console.log("link :>> ", link);
    return `box-border h-16 py-2 p-3 pt-5 rounded-br-lg rounded-bl-lg ${
      location.pathname === link
        ? "bg-pink-200 text-black"
        : "text-white hover:bg-pink-200 hover:text-black"
    }`;
  };

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeChange = () => {
    setTheme(theme === "dark" ? "light" : "dark");
    console.log("theme :>> ", theme);
  };

  return (
    <div>
      <nav className="bg-gray-900 mr-20 rounded-br-[50px] box-border sm:h-28 text-3xl">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto">
          <ul className="sm:font-medium flex flex-col sm:flex-row gap-3  ">
            <li>
              <Link to="/">
                <p className={linkClass("/")}>Home</p>
              </Link>
            </li>
            <li>
              <Link to="/map">
                <p className={linkClass("/map")}>Map</p>
              </Link>
            </li>
            <li>
              <Link to="/restaurants">
                <p className={linkClass("/restaurants")}>Restaurants</p>
              </Link>
            </li>
          </ul>
          <div className="absolute right-6 top-3 flex items-center mb-5 cursor-pointer">
            <button
              id="theme-toggle"
              type="button"
              onClick={handleThemeChange}
              className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
            >
              {theme === "light" ? (
                <p className="text-2xl ml-1 text-gray-900 dark:text-gray-300">
                  <FaMoon />
                </p>
              ) : (
                <p className="text-2xl  ml-1 text-gray-900 dark:text-gray-300">
                  <FaSun />
                </p>
              )}
            </button>
          </div>
        </div>
        <div className=" m-4">
          <Search />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
