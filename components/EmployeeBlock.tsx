import Image from "next/image";
import { IEmployee } from "../models/Employee";

export default function EmployeeBlock(data:IEmployee) {

    console.log(data.photoLink);
    
  return (
    <div className="Block">
        
      <h3>{data.fio}</h3>
      <span className="info">Имя: {data.firstName}</span>
      <br/>
      <span className="info">Отчество: {data.middleName}</span>
      <br/>
      <span className="info">звание: {data.rank}</span>
      <br/>
 
      
    </div>
  )
}
