import React, { useEffect, useRef } from 'react';
import mapboxgl, {LngLatLike} from 'mapbox-gl';

import 'mapbox-gl/dist/mapbox-gl.css';

interface MapComponentProps {
    accessToken: string;
    center: [number, number];
    zoom: number;
    // center: LngLatLike;
    markers: [number, number][]; // Array of marker coordinates

}

const Map: React.FC<MapComponentProps> = ({ accessToken, center, zoom,markers }) => {
    const mapContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        mapboxgl.accessToken = accessToken;

        const map = new mapboxgl.Map({
            container: mapContainerRef.current!,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: center,
            zoom: zoom
        });

        // Add navigation control to the map
        map.addControl(new mapboxgl.NavigationControl());

        // Add markers to the map
        markers.forEach((markerCoordinates) => {
            new mapboxgl.Marker().setLngLat(markerCoordinates).addTo(map);
        });

        // Cleanup on unmount
        return () => map.remove();
    }, [accessToken, center, zoom, markers]);

    return (
        <div ref={mapContainerRef} style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0  }} />
    );
};

export default Map;
