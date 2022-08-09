import { access } from "fs"
import { url } from "inspector"
import { useAppSelector } from "../../hooks/redux"

export default function Employee() {

    const {activeUrl} = useAppSelector(state=>state.UrlReducer)
    const {employees} = useAppSelector(state=>state.employeeReducer)
    const employee = employees.find(employee => employee.urlId === activeUrl)
    
  return (
    <div>
        <img src={employee?.photoLink} alt="lox"/>
        <span>{employee?.firstName} </span>
        <span>{employee?.middleName} </span>
        <span>{employee?.lastName} </span>
    </div>
  )
}
