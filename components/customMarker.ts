import L from 'leaflet';
import Icon from '../public/MapMarker.png';

const CustomMarker = new L.Icon({
  iconUrl: Icon,
  iconRetinaUrl: Icon,
  iconAnchor: undefined,
  popupAnchor: undefined,
  shadowUrl: undefined,
  shadowSize: undefined,
  shadowAnchor: undefined,
  iconSize: new L.Point(45, 60),
});

export { CustomMarker }