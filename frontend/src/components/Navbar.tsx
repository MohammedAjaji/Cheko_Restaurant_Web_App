import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Search from "./Search";
import { FaMoon, FaSun } from "react-icons/fa";

function Navbar() {
  const [theme, setTheme] = useState("light");
  // const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  console.log("location :>> ", location);

  // const handleLinkClick = (link: string) => {
  //   setActiveLink(link);
  // };
  const linkClass = (link: string): string => {
    console.log("link :>> ", link);
    return `box-border h-16 py-2 p-3 pt-5 rounded-br-lg rounded-bl-lg ${
      location.pathname === link
        ? "bg-pink-200 text-black"
        : "text-white hover:bg-pink-200 hover:text-black"
    }`;
  };

  // console.log("activeLink :>> ", activeLink);

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
              {/* <p className="block py-2 px-3 text-white rounded hover:bg-pink-200 hover:text-black"> */}
              <Link to="/">
                <p
                  className={linkClass("/")}
                  // onClick={() => handleLinkClick("/")}
                >
                  Home
                </p>
              </Link>
            </li>
            <li>
              <Link to="/map">
                <p
                  className={linkClass("/map")}
                  // onClick={() => handleLinkClick("/map")}
                >
                  Map
                </p>
              </Link>
              {/* <p className="block py-2 px-3 text-white rounded hover:bg-pink-200 hover:text-black"> */}
            </li>
            <li>
              <Link to="/restaurants">
                <p
                  className={linkClass("/restaurants")}
                  // onClick={() => handleLinkClick("/map")}
                >
                  Restaurants
                </p>
              </Link>
              {/* <p className="block py-2 px-3 text-white rounded hover:bg-pink-200 hover:text-black"> */}
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
          {/* <label className="absolute right-2 top-3 flex items-center mb-5 cursor-pointer">
            <span className="text-sm mr-1 text-gray-900 dark:text-gray-300">
              <FaSun />
            </span>
            <input
              type="checkbox"
              value=""
              className="sr-only peer"
              onChange={handleThemeChange}
            />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none  peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full  dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
            <span className="text-sm ml-1 text-gray-900 dark:text-gray-300">
              <FaMoon />
            </span>
          </label> */}
        </div>
        <div className=" m-4">
          <Search />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
