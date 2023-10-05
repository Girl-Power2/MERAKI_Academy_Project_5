import GoogleMapReact from 'google-map-react';
import React from "react";

const Map=()=>{
    const defaultProps = {
      center: {
        lat: 31.945368,
        lng: 35.928371
      },
      zoom: 7
    };
  
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBW1nDKAK6Pttb8-Hwxqi28KxCjGlIUxTc" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <div
            lat={31.945368}
            lng={35.928371}
            text="My Marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
  export default Map