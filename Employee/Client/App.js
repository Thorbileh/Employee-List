import React from 'react';
//import './Components/Landing';
// import Landing from './Components/Landing';
import { BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/register';
import Landing from './Components/Landing';
//import Employee from './Components/Employee';
// import Profile from './Components/Profile';
import UpdateProfile from './Components/UpdateProfile';
import Add from './Components/Add';
import Emp from './Components/Emp';

function App() {
  return (
    <div>
          <Router>
        <Routes>
          <Route exact path="/" element={<Landing/>}/>
          <Route exact path="/Login" element={<Login/>}/>
          <Route exact path="/Register" element={<Register/>}/>
          <Route exact path="/Emp" element={<Emp/>}/>
          <Route exact path="/UpdateProfile" element={<UpdateProfile/>}/>
          <Route exact path="/Add" element={<Add/>}/>
          
        </Routes>
   
      </Router>
    </div>
 
  );
}

export default App;
 