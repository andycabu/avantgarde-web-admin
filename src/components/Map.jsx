import { useEffect } from "react";
import PropTypes from "prop-types";
import { Loader } from "@googlemaps/js-api-loader";
const API_KEY = import.meta.env.VITE_API_KEY;

const Map = ({ locations }) => {
  useEffect(() => {
    const loader = new Loader({
      apiKey: API_KEY,
      version: "weekly",
      libraries: ["marker"],
    });

    loader.load().then(() => {
      const isArray = Array.isArray(locations);
      const locationsArray = isArray ? locations : [locations];

      if (locationsArray.length > 0) {
        const { lat, lng } = locationsArray[0];

        const map = new google.maps.Map(document.getElementById("map"), {
          center: { lat, lng },
          zoom: isArray ? 9 : 16,
          mapId: "DEMO_MAP_ID",
        });

        // Crea un marcador para cada ubicación
        locationsArray.forEach((location) => {
          new google.maps.marker.AdvancedMarkerElement({
            position: { lat: location.lat, lng: location.lng },
            map,
            title: location.title || "No Title",
          });
        });
      }
    });
  }, []);

  return <div id="map" style={{ width: "800px", height: "450px" }}></div>;
};

Map.propTypes = {
  locations: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
        title: PropTypes.string,
      })
    ),
    PropTypes.shape({
      lat: PropTypes.number.isRequired,
      lng: PropTypes.number.isRequired,
      title: PropTypes.string,
    }),
  ]).isRequired,
};

export default Map;
