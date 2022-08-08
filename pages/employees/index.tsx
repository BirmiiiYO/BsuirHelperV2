import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getEmployee } from "../../reducs/reducers/ActionCreators";


export default function employees() {

  const dispatch = useAppDispatch();
  const {employees} = useAppSelector(state=>state.employeeReducer)

  useEffect(()=>{
    dispatch(getEmployee())    
  },[])

  console.log(employees[0]?.firstName);
  

  return (
    <div></div>
  )
}
