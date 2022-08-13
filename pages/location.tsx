import axios from "axios"
import { GetServerSideProps } from "next"
import { GetLocation } from "../models/Location"

function Location(locations:GetLocation) {

  console.log(locations);
  
  return (
    <div>Location</div>
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