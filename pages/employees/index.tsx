// import { GetServerSideProps } from "next";
// import Link from "next/link";
// import { useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../hooks/redux"
// import { getEmployees } from "../../reducs/reducers/ActionCreators";

// function Employees() {

//   const dispatch = useAppDispatch();
//   const {employees, isLoading, Error} = useAppSelector(state=>state.employeeReducer)
  
// //   useEffect(()=>{
// //       dispatch(getEmployees())    
// // // eslint-disable-next-line react-hooks/exhaustive-deps
// // },[])


//   return (
//     <div>
//       <h1>Список преподавателей БГУИР</h1>
//       {isLoading && <div className="lds-facebook"><div></div><div></div><div></div></div>}
//       {Error && <h2>{Error}</h2>}
//       <ul>
//       {employees?.map((employee)=>(<li key={employee.id} >
//         <Link href={`/employees/${employee.urlId}`} prefetch={false}> 
//         <a style={{color:"black"}}> {employee.fio}</a>
//         </Link>
//       </li>))}
//       </ul>
//     </div>
//   )
// }

// export default Employees

// export const getServerSideProps: GetServerSideProps = async () => {
  
//   try {

//     const res = useAppDispatch(getEmployees())
    
//     return { props: { reviews: res.data } }

//     } catch (e) {
//     return { props: { error: 'Something went wrong' }}
//     }}

import Link from "next/link";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/redux"
import { getEmployees } from "../../reducs/reducers/ActionCreators";

function Employees() {

  const dispatch = useAppDispatch();
  const {employees, isLoading, Error} = useAppSelector(state=>state.employeeReducer)
  
  useEffect(()=>{
      dispatch(getEmployees())    
      // eslint-disable-next-line react-hooks/exhaustive-deps
},[])

console.log(employees[3].calendarId);


  return (
    <div>
      <h1>Список преподавателей БГУИР</h1>
      {isLoading && <div className="lds-facebook"><div></div><div></div><div></div></div>}
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

export default Employees