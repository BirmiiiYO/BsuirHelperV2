// import dynamic from 'next/dynamic'

// const DynamicMap = dynamic(() => import('../components/Map'), {
//   ssr: false,
// })

// export default function location() {
//   return (
//     <>
//     <DynamicMap />
//   </>
//   )
// }
import axios from "axios"
import { GetServerSideProps } from "next"
import { MapContainer, TileLayer } from "react-leaflet";
import { GetLocation } from "../models/Location"
import 'leaflet/dist/leaflet.css';

function Location(locations:GetLocation) {

  const data = locations.locations

  console.log(data);
  
  return (
    <div>
      <div>
        {data.map(loc=><div key={loc.structureId}>{loc.address} --- {loc.name}</div>)}
      </div>
      <MapContainer
      className="markercluster-map"
      center={[51.0, 19.0]}
      zoom={4}
      maxZoom={18}
      style={{ height: "90vh" }}
      minZoom={1}
      maxBounds={[
        [90, -180],
        [-90, 180]
      ]}
      
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />

    </MapContainer> 
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  try {

    const res = await axios.get<GetLocation>('http://localhost:3004/locations')
    
    return { props: { locations: res.data } }

    } catch (e) {
    return { props: { error: 'Something went wrong' }}
    }}

export default Location
