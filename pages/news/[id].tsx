import axios from "axios"
import { GetServerSideProps } from "next"
import { useRouter } from "next/router"

const Rout= ()=> {
  const router = useRouter()
  const id =router.query
  console.log(id)
}

export default function NewsDepartment(newsDep:any, Rout) {

  console.log(Rout);
  
  
  return (
    <div>zxc</div>
  )
}

export const getServerSideProps: GetServerSideProps = async (Rout) => {
 
    try {
      console.log(Rout);
      
      const res = await axios.get<any>(`https://iis.bsuir.by/api/v1/announcements/departments?id=${Rout}`)
      
      return { props: { newsDep: res.data } }
  
      } catch (e) {
      return { props: { error: 'Something went wrong' }}
      }}
