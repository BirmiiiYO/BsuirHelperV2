import { useEffect } from "react";
import EmployeeBlock from "../../components/EmployeeBlock";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getEmployees } from "../../reducs/reducers/ActionCreators";


export default function employees() {

  const dispatch = useAppDispatch();
  const {employees, isLoading, Error} = useAppSelector(state=>state.employeeReducer)

  useEffect(()=>{
    dispatch(getEmployees())    
  },[])

  console.log()
  
  

  return (
    <div>
      {isLoading && <h2>Loading...</h2>}
      {Error && <h2>{Error}</h2>}
      {employees?.map(employee=>(<EmployeeBlock key={employee.id} {...employee}/>))}
    </div>
  )
}
