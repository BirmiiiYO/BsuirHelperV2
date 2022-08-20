import axios from 'axios'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { GetDepartment, IDepartment } from '../../models/Department'

function News(departments:GetDepartment) {

  const data = departments.departments
  
  return (
    <div>
      <h1>Список всех кафедр<label>(Выберите нужную)</label></h1>
      <ul>
        {data.map(dep=><ul key={dep.id}>
        <Link href={`/news/${dep.id}`} prefetch={false}>
        {dep.abbrev === dep.name || dep.abbrev.includes('каф')  ? `${dep.name}` : `${dep.abbrev} - ${dep.name}`}
        </Link>
        </ul>)}
      </ul>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  
  try {

    const res = await axios.get<GetDepartment>('https://iis.bsuir.by/api/v1/departments')
    
    return { props: { departments: res.data } }

    } catch (e) {

    return { props: { error: 'Something went wrong' }}

    }}


export default News
