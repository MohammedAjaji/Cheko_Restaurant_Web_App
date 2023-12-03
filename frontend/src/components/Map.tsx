import React, { useEffect, useRef } from "react";
import mapboxgl, { LngLatLike } from "mapbox-gl";
import ReactDOMServer from "react-dom/server";

import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../redux/store";
import { fetchRestaurants } from "../redux/slices/RestaurantSlice";
import { Restaurant } from "../types/types";
import MapPopup from "./MapPopup";

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

  const popupHTML = (name: string, rating: number, id: number, url: string) => {
    return ReactDOMServer.renderToStaticMarkup(
      <MapPopup name={name} rating={rating} id={id} url={url} />
    );
  };

  const navigateTo = (id: number) => {
    window.location.href = `/restaurants/${id}`;
  };

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
        .setHTML(popupHTML(item.name, item.rating, item.id, item.url))
        .addTo(map);
      popup.on("open", () => {
        const button = document.getElementById(`navigate-button-${item.id}`);
        if (button) {
          button.addEventListener("click", () => navigateTo(item.id));
        }
      });

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
