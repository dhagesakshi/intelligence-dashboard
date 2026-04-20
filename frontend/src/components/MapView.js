import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import axios from "axios";
import L from "leaflet";

// Fix marker icon issue (IMPORTANT)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
});

const MapView = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get("http://localhost:5000/api/data")
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  };

  return (
    <MapContainer
      center={[20.5937, 78.9629]}
      zoom={5}
      style={{ height: "85vh", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />

      {data.map((point) => (
        <Marker key={point.id} position={[point.lat, point.lng]}>
          <Popup>
            <h3>{point.type}</h3>
            <p>{point.info}</p>
            <img src={point.image} width="120" alt="intel" />
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default MapView;