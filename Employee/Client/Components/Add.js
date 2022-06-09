import { useState } from 'react';
import { Link } from 'react-router-dom';
import addMod from './Add.module.css'
import Axios from 'axios';

const Add = () => {
  const [FirstName, setFirstName] = useState("");
  const [Surname, setSurname] = useState("");
  const [Email, setEmail] = useState("");
  const [Gender, setGender] = useState("");
  const [StartDate, setStartDate] = useState("");
  const [ContractType, setContractType] = useState("");
  const [Position, setPosition] = useState("");
  /* const [filename, setFilename] = useState("");

  const onChangefile = e => {
    setFilename(e.target.file[0]);
  }
  const changeOnclick = e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("FirstName", FirstName);
    formData.append("Surname", Surname);
    formData.append("Email", Email);
    formData.append("firstName", Gender);
    formData.append("firstName", StartDate);
    formData.append("ContractType", ContractType);
    formData.append("Position", Position);
    formData.append("filename", filename);

    setFirstName("");
    setEmail("");
    setGender("");
    setStartDate("");
    setContractType("");
    setPosition("");

  } */
  const addToList = () => {
    Axios.post("http://localhost:3001/insert", {
      FirstName: FirstName,
      Surname: Surname,
      Email: Email,
      Gender: Gender,
      StartDate: StartDate,
      ContractType: ContractType,
      Position: Position
    });
  }

  return (
    <div>
      <body >
        <header>
          <h3 className={addMod.h3}>LetsTravel</h3>
        </header>
        <main className={addMod.main}>

          <div className={addMod.container}>
            <div className={addMod.flex_item}>
            
              Add profile picture<br /><input type="file" id="myFile" name="filename"
              />
             
            </div>
            <div className={addMod.flex_item}>
              <form className="" action="" method="post" >
                <div className={addMod.pp}>
                  <label for=""> First Name</label>  <input type="text" name="name" className={addMod.name}
                    onChange={ (event)=>{setFirstName(event.target.value)}} /><br />
                  <label for="">  Surname</label>    <input type="text" name="sname" className={addMod.name}
                    onChange={ (event)=>{setSurname(event.target.value)}} required /><br />
                  <label for="">Email Address</label>  <input type="email" name="name" className={addMod.name}
                    onChange={ (event)=>{setEmail(event.target.value)}}  required /><br />
                  <label for="">Gender</label> <input type="text" name="name" className={addMod.name}
                    onChange={ (event)=>{setGender(event.target.value)}}  required /><br />
                  <label for="">Started Date </label>  <input type="text" name="name" className={addMod.name}
                    onChange={ (event)=>{setStartDate(event.target.value)}}  required /><br />
                  <label for="">Contract Type</label> <input type="text" name="name" className={addMod.name}
                    onChange={ (event)=>{setContractType(event.target.value)}}  required /><br />
                  <label for="">Position</label> <input type="text" name="name" className={addMod.name}
                    onChange={ (event)=>{setPosition(event.target.value)}}  required /><br />

                </div>
              </form>

              <Link to="/Emp"><button type="button" name="button" onClick={addToList} >Add</button></Link>


            </div>
          </div>

        </main>

      </body>
    </div>
  )
}
export default Add;