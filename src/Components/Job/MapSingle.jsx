import React, { useState, useEffect } from "react";
import MapBox, { Marker, Popup, NavigationControl } from "react-map-gl";
import axios from 'axios'
import "mapbox-gl/dist/mapbox-gl.css";
import { Link } from "react-router-dom";
import "./style.scss";

MapSingle.propTypes = {};
 
function MapSingle({ marKers }) {
  const [markersWithCoordinates, setMarkersWithCoordinates] = useState([]);
  const MAPBOX_TOKEN = "pk.eyJ1IjoidGhlbWVzZmxhdCIsImEiOiJjbGt3NGxtYncwa2F2M21saHM3M21uM3h2In0.9NbzjykXil1nELxQ1V8rkA";

  const [popupOpen, setPopupOpen] = useState({});

  const [viewPort, setViewPort] = useState({
    longitude: -74.0004,
    latitude: 40.71,
    zoom: 14,
  });
  // Function to fetch coordinates based on location name
  const getCoordinatesFromLocation = async (location) => {
    try {
      const response = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(location)}.json?access_token=${MAPBOX_TOKEN}`
      );
      const coordinates = response.data.features[0]?.geometry.coordinates;
      return coordinates ? { longitude: coordinates[0], latitude: coordinates[1] } : null;
    } catch (error) {
      console.error("Error fetching coordinates:", error);
      return null;
    }
  };
// Check and update markers with missing coordinates
  const updateMarkersWithCoordinates = async () => {
    const updatedMarkers = await Promise.all(
      marKers.map(async (item) => {
        if (!item.longitude || !item.latitude) {
          const coordinates = await getCoordinatesFromLocation(item.location);
          if (coordinates) {
            return {
              ...item,
              longitude: coordinates.longitude,
              latitude: coordinates.latitude,
            };
          }
        }
        return item;
      })
    );
    setMarkersWithCoordinates(updatedMarkers);
  };

  // Fetch coordinates for markers on component mount
  useEffect(() => {
    updateMarkersWithCoordinates();
  }, [marKers]);

  return (
    <div className="map-content">
<MapBox
        mapLib={import("mapbox-gl")}
        initialViewState={{
          ...viewPort,
        }}
        mapboxAccessToken={MAPBOX_TOKEN}
        style={{ width: "100%", height: 300 }}
        mapStyle="mapbox://styles/themesflat/cll6d64hy00m901pd1tbe65ra"
        scrollZoom={false}
      >
        {markersWithCoordinates.map((item) => (
          <div key={item.jobID}>
            <Marker
              longitude={item.longitude || -74.00122}
              latitude={item.latitude || 40.71023}
              anchor="center"
              closeOnClick={false}
              onClick={(e) => {
                setPopupOpen((prevItem) => ({
                  ...prevItem,
                  [item.jobID]: !prevItem[item.jobID],
                }));
              }}
            >
              <div className="marker marker-logo-cty">
                <img
                  src={item.img}
                  alt="img"
                  style={{ width: "28px", height: "28px" }}
                />
              </div>
            </Marker>
            {popupOpen[item.jobID] && (
              <Popup
                key={item.jobID}
                longitude={item.longitude || -74.00122}
                latitude={item.latitude || 40.71023}
                anchor="center"
                onClose={() => setPopupOpen(false)}
                closeOnClick={false}
                closeButton={true}
                offsetLeft={10}
              >
                <div className="marker-popup">
                  <img src={item.img} alt="img" />
                  <div className="content">
                    <h4>{item.category}</h4>
                    <h3>
                      <Link to="#">
                        {item.title}&nbsp;<span className="icon-bolt"></span>
                      </Link>
                    </h3>
                    <p>
                      <i className="icon-map-pin"></i>&nbsp;
                      {item.location}
                    </p>
                  </div>
                </div>
              </Popup>
            )}
          </div>
        ))}
        <NavigationControl position="top-left" />
      </MapBox>
    </div>
  );
}

export default MapSingle;
