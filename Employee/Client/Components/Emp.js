import { useEffect, useState, } from 'react';

import {Link, useNavigate} from "react-router-dom"
import EmpModule from './Employee.module.css'
import Axios from 'axios';


const Emp = () => {
  const Employ = useNavigate()

  const [EmployeeList, setEmployeeList] = useState([])
  
  useEffect(() => {
    Axios.get("http://localhost:3001/read").then((response) => {
      setEmployeeList(response.data)
    });

  }, []);

  const UpdatedData =(id) =>{
    
    localStorage.setItem("EmployeId",id.toString())
    Employ("/UpdateProfile")

  }
  const deleteMember = (id) =>{
    Axios.delete(`http://localhost:3001/delete/${id}`)
  }
  return (
    <div className={EmpModule.body}>
      <main className={EmpModule.main}>
        <header className={EmpModule.header2}>
          <h3 className={EmpModule.h3}>LetsTravel members</h3>
          <nav className={EmpModule.buttons}>
            <Link to="/Add"><button type="button" name="add" className={EmpModule.add}>Add</button></Link>
            <Link to="/" id="Logout"><button type="button" name="Logout" className={EmpModule.logout}>Logout</button></Link>
          </nav>
        </header>
        {EmployeeList.map((val) => {
          return (<div>
            <div className={EmpModule.container}>
              <div className={EmpModule.flex_item}>
              <img className={EmpModule.f5} />
                <h5 className={EmpModule.n1}>{val.FirstName}&nbsp;{val.Surname}</h5>
                <p className={EmpModule.p}>{val.Position}<br></br>
                  {val.Email}</p>
                <button type="button" name="u1" className={EmpModule.u1} onClick={() => UpdatedData(val._id)}>Update</button>
                <button type="button" name="d1" className={EmpModule.d1} onClick={() => deleteMember(val._id)}>Delete</button>
              </div>
            </div>
          </div>)

        })}
      </main>
    </div>
  )
}
export default Emp;
