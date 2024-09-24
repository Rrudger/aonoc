import { MapContainer, TileLayer, useMap } from 'react-leaflet';
import "leaflet/dist/leaflet.css";

const Map = () => {
  const position = [51.505, -0.09]

  return (
    <MapContainer center={position} zoom={13} style={{ height: '300px', width:  '300px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};

export default Map;
