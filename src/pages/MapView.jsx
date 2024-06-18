import React, { useEffect } from "react"; // Import useEffect
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { icon } from "leaflet";
import { clearPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const flightState = useSelector((store) => store);
  const dispatch = useDispatch();

  const planeIcon = icon({
    iconUrl: "/p1.png",
    iconSize: [30, 30],
  });

  const philippinesBounds = [
    [4.225384, 116.978812],
    [21.896103, 126.604984],
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      
      console.log("Fetching live data every 1 seconds...");
    }, 1000); 

    return () => {
      clearInterval(intervalId); 
    };
  }, []);

  return (
    <MapContainer
      center={[13.0, 122.0]}
      zoom={6}
      scrollWheelZoom={true}
      bounds={philippinesBounds}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flightState.flights.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div className="d-flex flex-column gap-2">
              <span>Flight Code: {flight.code}</span>
              <button
                onClick={() => setDetailId(flight.id)}
                className="w-100 rounded"
              >
                Detail
              </button>

              {flightState.path.length > 0 && (
                <button onClick={() => dispatch(clearPath())}>
                  Clear Route
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      <Polyline positions={flightState?.path} />
    </MapContainer>
  );
};

export default MapView;
