import { Link } from 'react-router-dom';
import EmpModule from'./Employee.module.css'


const Employee =() =>
{
  return(
   
    <body className={EmpModule.body}>
    <main className={EmpModule.main}>
      <header className={EmpModule.header2}>
        <h3 className={EmpModule.h3}>LetsTravel members</h3>
          <nav className={EmpModule.buttons}>
          <Link to="/Add"><button type="button" name="add" className={EmpModule.add}>Add</button></Link>
          <Link to="/" id="Logout"><button type="button" name="Logout" className={EmpModule.logout}>Logout</button></Link>
          
          </nav>
       
      </header>
      <div  className={EmpModule.container}>
        <div className={EmpModule.flex_item}>
          <div className={EmpModule.img}>
          <img className={EmpModule.f1}/>
          <h5 className={EmpModule.n1}>Thembeka Mabena</h5>
        <p  className={EmpModule.p}>Director of finance
        nhlingo@travel.ac.za</p>
        <Link to="/Profile"><button type="button" name="u1" className={EmpModule.u1}>Update</button></Link>
        <Link to="/Employee"><button type="button" name="d1" className={EmpModule.d1}>Delete</button></Link>
          </div>
        </div>
        <div className={EmpModule.flex_item}>
          <img className={EmpModule.f2}/>
          <h5 className={EmpModule.n2}>Sipho Nkuna </h5>
          <p className={EmpModule.p}>customer services agent<br/>
          nkuna89@travel.ac.za</p>
          <Link to="/Profile"><button type="button" name="u2" className={EmpModule.u2}>Update</button></Link>
          <Link to="/Employee"><button type="button" name="d2" className={EmpModule.d2}>Delete</button></Link>
        </div>
        <div className={EmpModule.flex_item}>
          <img className={EmpModule.f3}/>
          <h5 className={EmpModule.n3}>Thabiso Mankge</h5>
        <p className={EmpModule.p}>Planner<br></br>
          thabi_ty@travel.ac.za
        </p>
        <Link to="/Profile"><button type="button" name="u3" className={EmpModule.u3}>Update</button></Link>
        <Link to="/Employee"><button type="button" name="d3" className={EmpModule.d3}>Delete</button></Link>
        </div>
        <div className={EmpModule.flex_item}>
          <img className={EmpModule.f4} />
          <h5 className={EmpModule.n}>Lucia Mthombeni</h5>
          <p className={EmpModule.p}>CEO <br></br>
          mthombo.ll@travel.ac.za</p>
          <Link to="/Profile"><button type="button" name="u4" className={EmpModule.u4}>Update</button></Link>
          <Link to="/Employee"><button type="button" name="d4" className={EmpModule.d4}>Delete</button></Link>
        </div>
    
        <div className={EmpModule.flex_item}>
          <img className={EmpModule.f5}/>
          <h5 className={EmpModule.n}>Prudence Mashaba</h5>
        <p className={EmpModule.p}>travel Agent<br></br>
        prudence2@travel.ac.za</p>
        <Link to="/Profile"><button type="button" name="u5" className={EmpModule.u5}>Update</button></Link>
        <Link to="/Employee"><button type="button" name="d5" className={EmpModule.d5}>Delete</button></Link>
        </div>
    
        <div className={EmpModule.flex_item}>
          <img className={EmpModule.f6}/>
          <h5 className={EmpModule.n}>Andries Mahlangu</h5>
          <p className={EmpModule.p}>Tour Guide<br></br>
          mahlangu23@travel.ac.za</p>
          <Link to="/Profile"><button type="button" name="u6" className={EmpModule.u6}>Update</button></Link>
          <Link to="/Employee"><button type="button" name="d6" className={EmpModule.d6}>Delete</button></Link>
      </div>
    
      <div className={EmpModule.flex_item}>
          <img className={EmpModule.f7}/>
          <h5 className={EmpModule.n}>Thabsile Mthimunye</h5>
        <p className={EmpModule.p}>flight attendant<br></br>
        thabyBC@travel.ac.za</p>
        <Link to="/Profile"><button type="button" name="u7" className={EmpModule.u7}>Update</button></Link>
        <Link to="/Employee"><button type="button" name="d7" className={EmpModule.d7} >Delete</button></Link>
      </div>
    
      <div className={EmpModule.flex_item}>
        <img className={EmpModule.f8} />
        <h5 className={EmpModule.n}>Daniel Makua</h5>
        <p className={EmpModule.p}>Consultant<br></br>
        danielD@travel.ac.za</p>
        <Link to="/Profile"><button type="button" name="u8" className={EmpModule.u8}>Update</button></Link>
        <Link to="/Employee"><button type="button" name="d8" className={EmpModule.d8}>Delete</button></Link>
      </div>
    </div>
    
    </main>
    
            </body> 
  )
}
export default Employee;