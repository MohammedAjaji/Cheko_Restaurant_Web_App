import React, { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchRestaurants } from "../redux/slices/RestaurantSlice";
import { Restaurant } from "../types/types";

interface MapComponentProps {
  accessToken: string;
  center: [number, number];
  zoom: number;
  // center: LngLatLike;
  markers: [number, number][]; // Array of marker coordinates
}

const Map: React.FC<MapComponentProps> = ({ accessToken, center, zoom }) => {
  const mapContainerRef = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<AppDispatch>();
  const restaurants = useSelector((state: RootState) => state.restaurant);

  useEffect(() => {
    dispatch(fetchRestaurants(""));
  }, [dispatch]);

  useEffect(() => {
    mapboxgl.accessToken = accessToken;

    const map = new mapboxgl.Map({
      container: mapContainerRef.current!,
      style: "mapbox://styles/mapbox/streets-v11",
      center: center,
      zoom: zoom,
    });
    console.log("Map initialized:", map);

    // Add navigation control to the map
    map.addControl(new mapboxgl.NavigationControl());

    // Add markers to the map
    restaurants.items.forEach((item: Restaurant) => {
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setHTML(
          `<h1>Marker ${item.name} Information</h1><p>This is some information about marker ${item.name}.</p><img class= "rounded-full" src = "https://cdn.langeek.co/photo/26023/original/any"/>`
        )
        .addTo(map);

      new mapboxgl.Marker()
        .setLngLat([item.lng, item.lat])
        .setPopup(popup)
        .addTo(map);
    });

    // Cleanup on unmount
    return () => map.remove();
  }, [accessToken, center, zoom, restaurants.items]);

  if (restaurants.isLoading) return <div>Loading...</div>;
  if (restaurants.error) return <div>Error: {restaurants.error}</div>;
  return (
    <div
      ref={mapContainerRef}
      style={{
        position: "absolute",
        top: 110,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: -1,
      }}
    />
  );
};

export default Map;
