import L from 'leaflet';
import Icon from '../public/mapMarker.svg';

const LocationIcon = new L.Icon({
  iconUrl: Icon,
 iconSize:[40,40]
});

export { LocationIcon };