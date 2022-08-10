import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getEmployees } from "../../reducs/reducers/ActionCreators";


export default function Employees() {

  const dispatch = useAppDispatch();
  const {employees, isLoading, Error} = useAppSelector(state=>state.employeeReducer)

  useEffect(()=>{
      dispatch(getEmployees())    
// eslint-disable-next-line react-hooks/exhaustive-deps
},[])

  

  return (
    <div>
      <h1>Список преподавателей БГУИР</h1>
      {isLoading && <h2>Loading...</h2>}
      {Error && <h2>{Error}</h2>}
      <ul>
      {employees?.map((employee)=>(<li key={employee.id} >
        <Link href={`/employees/${employee.urlId}`} prefetch={false}> 
        <a style={{color:"black"}}> {employee.fio}</a>
        </Link>
      </li>))}
      </ul>
    </div>
  )
}
