import React from 'react';
import logo from './logo.svg';
import Map from './components/Map';
import {LngLatLike} from 'mapbox-gl';
import './App.css';
import HomePage from "./components/Home";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
// import dotenv from "dotenv";

// dotenv.config()
// const mapboxAccessToken = process.env["MAPBOX "]
const mapboxAccessToken: string = "pk.eyJ1IjoibW9oYW1tZWRhaiIsImEiOiJjbHBmZHd5OTAxajN0MmtwZDdocTYwY3g2In0.6bA26ldyRoaxGKuFikpYRw"
const markers: [number, number][] = [
    [-74.5, 40.1],
    [-74.6, 40.2],
    [-178.4445, 47.1976]
    // Add more marker coordinates as needed
];


function App() {
  return (

    <div>
        {/*<div className="bg-blue-500 text-white p-4">*/}
        {/*    This is a Tailwind CSS example component.*/}
        {/*</div>*/}
        <Home/>
        {/*<Navbar/>*/}
      {/*<h1>Mapbox GL in React</h1>*/}
      {/*<Map accessToken={mapboxAccessToken} center={[46.6753, 24.7136]} zoom={9} markers={markers} />*/}
    </div>
  );
}

export default App;
