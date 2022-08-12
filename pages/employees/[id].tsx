import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { useAppSelector } from "../../hooks/redux"
import { GetReviews} from "../../models/Review";
import { GetServerSideProps } from 'next'
import Review from "../../components/Review";

// json-server --watch db.json --port 3004

export const getServerSideProps: GetServerSideProps = async () => {
  
  try {

    const res = await axios.get<GetReviews>('http://localhost:3004/reviews')
    
    return { props: { reviews: res.data } }

    } catch (e) {
    return { props: { error: 'Something went wrong' }}
    }}

function Employee(reviews:GetReviews) {

    const router = useRouter()
    const id = router.query
    const data = reviews.reviews
    const {employees} = useAppSelector(state=>state.employeeReducer)
    const employee = employees.find(employee => employee.urlId === id.id)
    console.log(data);
      
  return (
    <div className="employeeBlock">
      <h1>Личное дело преподавателя:</h1>
        <div className="photo-name">
        <Image
      src={employee?.photoLink}
      alt="PhotoOfLector"
      width={200}
      height={200}
      layout='fixed'
    />
        <div>
        <span>{employee?.lastName} </span>
        <span>{employee?.firstName} </span>
        <span>{employee?.middleName} </span>
        </div>
        </div>
        <div className="info">
        <span>Откосится к: <strong>{employee?.academicDepartment ? employee?.academicDepartment.join(', ') : 'Отсутствует'}</strong></span>
        <span>Степень: <strong>{employee?.degree ? employee.degree : 'Отсутствует'}</strong></span>
        <span>Звание: <strong>{employee?.rank ? employee.rank : 'Отсутствует'}</strong></span>
        </div>
        <div className="reviews">
        <ul>
        {data.map(review => 
          <Review key={review.reviewId} {...review}/>)}
        </ul>
        </div>
    </div>
  )
}

export default Employee