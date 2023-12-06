import React, { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";

import Map from "./components/Map";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Restaurants from "./components/Restaurants";
import RestaurantsDetails from "./components/RestaurantsDetails";
import Menus from "./components/Menus";

const mapboxAccessToken: string =
  "pk.eyJ1IjoibW9oYW1tZWRhaiIsImEiOiJjbHBmZHd5OTAxajN0MmtwZDdocTYwY3g2In0.6bA26ldyRoaxGKuFikpYRw";

function App() {
  const location = useLocation();
  let style = "min-h-screen min-w-screen bg-gray-100 dark:bg-gray-900";

  if (location.pathname === "/map") {
    style = "bg-gray-100 dark:bg-gray-900";
  } else {
    style = "min-h-screen min-w-screen bg-gray-100 dark:bg-gray-900";
  }
  return (
    <div className={style}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/restaurants/:id" element={<RestaurantsDetails />} />
        <Route path="/menus" element={<Menus />} />

        <Route
          path="map"
          element={
            <Map
              accessToken={mapboxAccessToken}
              center={[46.6753, 24.7136]}
              zoom={9}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
