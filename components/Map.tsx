// import { MapContainer, TileLayer, Popup, Marker } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
// import { fetchLocation } from "../reducs/reducers/ActionCreators";

// // json-server --watch db.json --port 3004

// const Map = () => {
//   const dispatch = useAppDispatch();
//   const {locations, isLoading, Error} = useAppSelector(state=>state.locationReducer)

//   useEffect(()=>{
//     dispatch(fetchLocation())    
//     // eslint-disable-next-line react-hooks/exhaustive-deps
// },[])  

//   console.log(locations[0].address);
  
//   const MAP_API_key = "pk.eyJ1IjoidGVtYWJpcm1pIiwiYSI6ImNsNnVtbTBnZDFmZnkzam4yZm5ibWVtb3UifQ.Oiw_j57yDwQpFyfjpxMngA"
//   const [activeBuild, setActiveBuild] = useState<number>(11);

//   return (
//     <>
//     <div className="info">
//       <h1>Что где есть
//       <label>(Нажмите чтобы увидеть)</label>
//       </h1>
//       {isLoading && <div className="lds-facebook"><div></div><div></div><div></div></div>}
//       {Error && <h2>{Error}</h2>}
//       <ul>
//       {locations.map(location=>
//       <li 
//       key={location.structureId}
//       onClick={() => {
//         activeBuild === location.structureId ? setActiveBuild(11) : setActiveBuild(location.structureId);
//       }}
//       className={activeBuild === location.structureId ? 'active' : ''}
//       >
//       {location.name} - {location.address}
//       </li>
//       )}
//       </ul>
//     </div>

//     <div className="map">
//     <MapContainer
//       center={[activeBuild === 11 ? locations[0].lat : locations[activeBuild].lat, activeBuild === 11 ? locations[0].lng : locations[activeBuild].lng]}
//       zoom={14}
//       scrollWheelZoom={true}
//       style={{ height: "100%", width: "100%" }}
//     >
//       <TileLayer
//         url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_key}`}
//       />
//       <Marker position={[activeBuild === 11 ? locations[0].lat : locations[activeBuild].lat, activeBuild === 11 ? locations[0].lng : locations[activeBuild].lng]}>
//       <Popup>
//       {activeBuild === 11 ? locations[0].name : locations[activeBuild].name}
//       <br /> {activeBuild === 11 ? locations[0].address : locations[activeBuild].address}.
//       </Popup>
//       </Marker>
//     </MapContainer>
//     </div>
//     </>
//   );
// };

// export default Map;

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { fetchLocation } from "../reducs/reducers/ActionCreators";

const Map = () => {

  const MAP_API_key = "pk.eyJ1IjoidGVtYWJpcm1pIiwiYSI6ImNsNnVtbTBnZDFmZnkzam4yZm5ibWVtb3UifQ.Oiw_j57yDwQpFyfjpxMngA"
  const dispatch = useAppDispatch();
  const {locations, isLoading, Error} = useAppSelector(state=>state.locationReducer)
  const [activeBuild, setActiveBuild] = useState<number | null>(1);
  
  useEffect(()=>{
      dispatch(fetchLocation())    
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

console.log(locations[0]?.name);


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
        activeBuild === location.structureId ? setActiveBuild(null) : setActiveBuild(location.structureId);
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
      center={[53.858045, 27.4829066]}
      zoom={14}
      scrollWheelZoom={false}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${MAP_API_key}`}
      />
      <Marker position={[53.9177318, 27.5945042]}>
        <Popup>Hey ! I live here</Popup>
      </Marker>
    </MapContainer>
    </div>
    </>
  );
};

export default Map;