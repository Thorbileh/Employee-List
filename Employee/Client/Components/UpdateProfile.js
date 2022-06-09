import { useEffect, useState } from 'react';
import {useNavigate} from "react-router-dom"
import profileMod from './Profile.module.css';

import Axios from 'axios';

const UpdateProfile = () => {
  const navigate = useNavigate()
  let [newFirstName, setnewFirstName] = useState("");
  let [newSurname, setnewSurname] = useState("");
  let [newEmail, setnewEmail] = useState("");
  let [newGender, setnewGender] = useState("");
  let [newStartDate, setnewStartDate] = useState("");
  let [newContractType, setnewContractType] = useState("");
  let [newPosition, setnewPosition] = useState("");

  const [EmployeeList, setEmployeeList] = useState([]);
  const id = localStorage.getItem("EmployeId")


  useEffect(() => {
    Axios.get(`http://localhost:3001/view/${id}`)
      .then((response) => {
        setEmployeeList(response.data)

      })
    console.log(EmployeeList)

  }, [])
  const UpdateData =  async () => {
    if (newFirstName === '') {
      newFirstName = EmployeeList.FirstName
    }
    if (newSurname === '') {
      newSurname = EmployeeList.Surname
    }
    if (newEmail === '') {
      newEmail = EmployeeList.Email
    }
    if (newGender === '') {
      newGender = EmployeeList.Gender
    }
    if (newStartDate === '') {
      newStartDate = EmployeeList.StartDate
    }
    if (newContractType === '') {
      newContractType = EmployeeList.ContractType
    }
    if (newPosition === '') {
      newPosition = EmployeeList.Position
    }

    const employeeUpdated =  await Axios.put("http://localhost:3001/update/" + id,
      { newFirstName: newFirstName, newSurname: newSurname, newEmail: newEmail, newGender: newGender, newStartDate: newStartDate, newContractType: newContractType, newPosition: newPosition })

    if (employeeUpdated === undefined || employeeUpdated === null) {
      return alert("not updated")
    }

    console.log(employeeUpdated)
    alert(employeeUpdated.data.message)
    navigate("/Emp")

    //navigate

  }

  return (
    <div className={profileMod.body}>
      <header>
        <h3 class={profileMod.h3}>LetsTravel</h3>
      </header>
      <main className={profileMod.main}>

        <p className={profileMod.p} >{EmployeeList.FirstName}&nbsp;{EmployeeList.Surname}</p>
        <div className={profileMod.container}>
          <div className={profileMod.flex_item}>
          <img /><br/>
          </div>

          <div className={profileMod.pp}>
            <label for="" className={profileMod.name}>First Name</label>  <input type="text" name="name" class={profileMod.name} placeholder={EmployeeList.FirstName}
              onChange={(event) => {
                setnewFirstName(event.target.value);
              }} /><br />
            <label for="" className={profileMod.name}>Surname</label>    <input type="text" name="sname" className={profileMod.name} placeholder={EmployeeList.Surname} onChange={(event) => {
              setnewSurname(event.target.value);
            }} /><br />
            <label for="">  Email Address</label>    <input type="text" name="name" className={profileMod.name} placeholder={EmployeeList.Email} onChange={(event) => {
              setnewEmail(event.target.value);
            }} /><br />
            <label for="">Gender</label> <input type="text" name="name" className={profileMod.name} placeholder={EmployeeList.Gender} onChange={(event) => {
              setnewGender(event.target.value);
            }} /><br />
            <label for="">Started Date </label>  <input type="text" name="name" className={profileMod.name} placeholder={EmployeeList.StartDate} onChange={(event) => {
              setnewStartDate(event.target.value);
            }} /><br></br>
            <label for="">Contract Type</label> <input type="text" name="name" className={profileMod.name} placeholder={EmployeeList.ContractType} onChange={(event) => {
              setnewContractType(event.target.value);
            }} /><br></br>
            <label for="">Position</label> <input type="text" name="name" className={profileMod.name} placeholder={EmployeeList.Position} onChange={(event) => {
              setnewPosition(event.target.value);
            }} /><br></br>
          </div>
          <button type="button" name="button" onClick={() => UpdateData(EmployeeList._id)}>Update</button>
        </div>

      </main>
    </div>
  )

  /*
    return (
      <div className={profileMod.body}>
        <header>
          <h3 className={profileMod.h3}>LetsTravel</h3>
        </header>
        <main className={profileMod.main}>
          <div className={profileMod.container}>
            <div className={profileMod.flex_item}>
              <img src="IMG-20200317-WA0023.jpg" alt="" /><br />
            </div>
  
            {EmployeeList.map((val, key) => {
  
              return (<div>
                <p className={profileMod.p}>{val.FirstName}&nbsp;{val.Surname}</p>
                <div className={profileMod.pp}>
                  <label for="" className={profileMod.name}> First Name</label>  <input type="text" name="name" class={profileMod.name} placeholder={val.FirstName}
                    onChange={(event) => {
                      setnewFirstName(event.target.value);
                    }} /><br />
                  <label for="">  Surname</label>    <input type="text" name="sname" className={profileMod.name} placeholder={val.Surname} onChange={(event) =>{
                                  setnewSurname(event.target.value);}}/><br />
                  <label for="">Email Address</label>  <input type="text" name="name" className={profileMod.name} placeholder={val.Email} nChange={(event) =>{
                                  setnewEmail(event.target.value);}}/><br></br>
                  <label for="">Gender</label> <input type="text" name="name" className={profileMod.name} placeholder={val.Gender} onChange={(event) =>{
                                  setnewGender(event.target.value);}}/><br />
                  <label for="">Started Date </label>  <input type="text" name="name" className={profileMod.name} placeholder={val.StartDate} onChange={(event) =>{
                                  setnewStartDate(event.target.value);}}/><br></br>
                  <label for="">Contract Type</label> <input type="text" name="name" className={profileMod.name} placeholder={val.ContractType} onChange={(event) =>{
                                  setnewContractType(event.target.value);}}/><br></br>
                  <label for="">Position</label> <input type="text" name="name" className={profileMod.name} placeholder={val.Position} onChange={(event) =>{
                                  setnewPosition(event.target.value);}} /><br></br>
                </div>
                <button type="button" name="button" onClick={()=>{UpdatedData(val._id)}}>Update</button>
              </div>)
  
            })}
          </div>
          
        </main>
      </div>
    )*/
}
export default UpdateProfile;