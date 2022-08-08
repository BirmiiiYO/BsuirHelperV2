import Image from "next/image";
import { IEmployee } from "../models/Employee";

export default function EmployeeBlock(data:IEmployee) {

    console.log(data.photoLink);
    
  return (
    <div className="Block">
        <Image
        src={data.photoLink} alt="Logo"
        width={60}
        height={60}
        />
      <h3>{data.fio}</h3>
    </div>
  )
}
