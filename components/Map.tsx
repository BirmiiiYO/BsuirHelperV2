import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from "react-leaflet";
import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchLocation } from "../reducs/reducers/ActionCreators";
import { LatLngExpression } from "leaflet";
import { LocationIcon } from "./Icon";

// json-server --watch db.json --port 3004

const Map:FC = () => {

  const MAP_API_key = "pk.eyJ1IjoidGVtYWJpcm1pIiwiYSI6ImNsNnVtbTBnZDFmZnkzam4yZm5ibWVtb3UifQ.Oiw_j57yDwQpFyfjpxMngA"
  const dispatch = useAppDispatch();
  const {locations, isLoading, Error} = useAppSelector(state=>state.locationReducer)
  const [activeBuild, setActiveBuild] = useState<number >(11);
  const position: LatLngExpression = [locations[activeBuild]?.lat === undefined ? 53.9177318 : locations[activeBuild].lat,
  locations[activeBuild]?.lng === undefined ? 27.5945042 : locations[activeBuild].lng ]

  function LocationMarker() {
    const map = useMapEvents({
      click() {
        map.flyTo(position)
      },
    })
  
    return (
      <Marker position={position} icon={LocationIcon}>
        
        <Popup>
        {locations[activeBuild]?.name === undefined ? "Выберите место" : locations[activeBuild].name}
       <br />
        {locations[activeBuild]?.address === undefined ? "" : locations[activeBuild].address}
       </Popup>
      </Marker>
    )
  }
  
  useEffect(()=>{
      dispatch(fetchLocation())    
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

console.log(locations[activeBuild]?.name);


  return (
    <>
    <div className="info">
      <h1>Что где есть
      <label>(Нажмите чтобы увидеть)</label>
      </h1>
      {isLoading && <div className="lds-facebook"><div></div><div></div><div></div></div>}
      {Error && <h2>{Error}</h2>}
      <ul>
      {locations.map(location=>
      <li 
      key={location.structureId}
      onClick={() => {
        activeBuild === location.structureId ? setActiveBuild(11) : setActiveBuild(location.structureId);
      }}
      className={activeBuild === location.structureId ? 'active' : ''}
      >
      {location.name} - {location.address}
      </li>
      )}
      </ul>
    </div>

    <div className="map">
    <MapContainer
      center={position}
      zoom={15}
      scrollWheelZoom={true}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_key}`}
      />
      <LocationMarker/>
    </MapContainer>
    </div>
    </>
  );
};

export default Map;