import GoogleMapReact from "google-map-react";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
const Marker = ({ text }) => <div style={{ fontSize: "24px" }}>{text}</div>;
const Map = () => {
  const [myLon, setmyLon] = useState("");
  const [location, setLocation] = useState(null);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  }, []);

  const defaultProps = {
    center: {
      lat: 31.945368,
      lng: 35.928371,
    },
    zoom: 7,
  };
  console.log(location);
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "70vh", width: "70%" }}>
      {location && (
        <GoogleMapReact
        yesIWantToUseGoogleMapApiInternals={true}
          onClick={(e) => {
            const { lat, lng } = e;
            setLocation({ lat, lng });
          }}
          bootstrapURLKeys={{ key: "AIzaSyBW1nDKAK6Pttb8-Hwxqi28KxCjGlIUxTc" }}
          center={location}
          defaultCenter={defaultProps.center}
          
          defaultZoom={11}
        >
          <Marker lat={location.lat} lng={location.lng} text="📍" />
        </GoogleMapReact>
      )}
    </div>
  );
};
export default Map;
