import axios from "axios"
import { GetServerSideProps } from "next"
import { GetSingleDepartment } from "../../models/Department"

function NewsDepartment(newsDep:GetSingleDepartment) {

  const data = newsDep.department
  console.log(newsDep);
  


  return (
    <div>{data ? "Успешно": "Не успешно"}</div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
 
    try {

      const res = await axios.get<GetSingleDepartment>(`https://iis.bsuir.by/api/v1/announcements/departments?id=20027`)
      return { props: { newsDep: res.data } }
  
      } catch (e) {
      return { props: { error: 'Something went wrong' }}
      }}


export default NewsDepartment