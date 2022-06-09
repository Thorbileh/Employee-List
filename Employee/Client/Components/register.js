 import regModule from './register.module.css';
// import Login from './Login';
 import Axios from 'axios'; 
import { Link ,useNavigate} from 'react-router-dom';
import {  useState } from 'react';

const Register = () =>{
const navigate =useNavigate()

   const [FirstName, setFirstName] = useState("");
    const [Surname, setSurname] = useState("");
    const [Email, setEmail] = useState("");
    const [Password, setPassword] = useState("");
    const [Cpassword,setCpassword] =useState("");

     const addToList = () =>{
       if(FirstName === "" || Surname==="" || Email==="" || Password==="" )
       {
         alert("Please fill all the required space")
       }
       else
       {
         navigate("/Emp")
       }
       Axios.post("http://localhost:3001/Add", {
         FirstName: FirstName,
          Surname: Surname,
          Email: Email,
          Password:Password
         
      });
  } 
return(
    <body className={regModule.body}>
      <main className={regModule.main}>

      <Link to="/" class={regModule.x}>X</Link>
      <div className={regModule.signUp}>
        <h3 className={regModule.h3}>Sign UP</h3>
        <h5 className={regModule.h5}>it's so quickly</h5>
      </div>
      <div className="line"> </div>

      <form className={regModule.register} action="register.html" method="post">
        <input type="text" name="name" className={regModule.name} id="name"  placeholder="First Name" onChange={(event) =>{
                                setFirstName(event.target.value);}}  />
        <input type="text" name="surname" className={regModule.surname} id="surname"  placeholder="surname"  onChange={(event) =>{
                                setSurname(event.target.value);}} required/><br /><br />
        
        <input type="email" name="email" className={regModule.email} id="email"  placeholder="E-mail address"  onChange={(event) =>{
                                setEmail(event.target.value);}}  /> <br /><br />
        <input type="password" name="Password" className={regModule.password} id="password"   placeholder="Password"  onChange={(event) =>{
                                setPassword(event.target.value);}} required/>
        <input type="password" name="Cpassword" className={regModule.Cpassword} id="Cpassword"  placeholder="Re-type Password" required 
         onChange={(event) =>{
          setCpassword(event.target.value);}}/><br /><br />
      </form>
      <p className={regModule.p1}>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy.
        You may receive SMS notifications from us and can opt out at any time.</p>
      <button type="button" className={regModule.buttons} name="button"  onClick={addToList} >SignUp</button>
      <footer className={regModule.footer}><Link to="/Login">Already a member?Login</Link> </footer>

      </main>
       

  </body>
)
}
export default Register;