import axios from "axios"
import { GetServerSideProps, GetStaticProps } from "next"
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { GetLocation } from "../models/Location"

// json-server --watch db.json --port 3004

function Map(locations:GetLocation) {

    const data = locations.locations
    console.log("OTDAY",data);
    
  
    return (
      <div>
        <div>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
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
)}

export const getStaticProps: GetStaticProps = async () => {
  
  try {

    const res = await axios.get<GetLocation>('http://localhost:3004/locations')
    
    return { props: { locations: res.data } }

    } catch (e) {
    return { props: { error: 'Something went wrong' }}
    }}

export default Map