import axios from "axios"
import Image from "next/image"
import { useRouter } from "next/router"
import { useAppSelector } from "../../hooks/redux"
import { GetReviews} from "../../models/Review";
import { GetServerSideProps } from 'next'
import Reviews from "../../components/Reviews";
import NewReview from "../../components/NewReview";

function Employee(reviews:GetReviews) {

    const router = useRouter()
    const id = router.query
    const data = reviews.reviews
    const {employees} = useAppSelector(state=>state.employeeReducer)
    const employee = employees.find(employee => employee.urlId === id.id)
      
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
          <NewReview/>
        {data ? <ul>
        {data.map(review => 
          <Reviews key={review.reviewId} {...review}/>)}
        </ul> : <h3>Ooops, some problems</h3>}
        </div>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  
  try {

    const res = await axios.get<GetReviews>('http://localhost:3004/reviews')
    
    return { props: { reviews: res.data } }

    } catch (e) {
    return { props: { error: 'Something went wrong' }}
    }}

export default Employee