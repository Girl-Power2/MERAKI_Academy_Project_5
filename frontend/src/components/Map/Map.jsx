import GoogleMapReact from 'google-map-react';
import React from "react";
const Marker = ({ text }) => <div style={{fontSize:"24px"}}>{text}</div>;
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
      <div style={{ height: '70vh', width: '70%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBW1nDKAK6Pttb8-Hwxqi28KxCjGlIUxTc" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          <Marker 
            lat={31.945368775725}
            lng={35.928371524575}
            text="📍"
          />
        </GoogleMapReact> 
      </div>
     
    );
  }
  export default Map