import { Link } from 'react-router-dom';
import profileMod from './Profile.module.css';

const Profile =() =>{
    return(
        <body class={profileMod.body}>

    <header>
      <h3 class={profileMod.h3}>LetsTravel</h3>
    </header>
        <main className={profileMod.main}>
        <p className={profileMod.p}>Precious Thobile Masilela</p>
        <div className={profileMod.container}>
            <div className={profileMod.flex_item}>
            <img src="IMG-20200317-WA0023.jpg" alt=""/><br/>
            </div>
            <div class={profileMod.pp}>
            <label for="" className={profileMod.name}> First Name</label>  <input type="text" name="name" class={profileMod.name} value=""/><br/>
            <label for="">  Surname</label>    <input type="text" name="sname" className={profileMod.name}/><br/>
            <label for="">Email Address</label>  <input type="text" name="name" className={profileMod.name} /><br></br>
            <label for="">Gender</label> <input type="text" name="name" className={profileMod.name}/><br/>
            <label for="">Started Date </label>  <input type="text" name="name" className={profileMod.name} /><br></br>
            <label for="">Contract Type</label> <input type="text" name="name" className={profileMod.name} /><br></br>
            <label for="">Position</label> <input type="text" name="name" className={profileMod.name} /><br></br>



            <Link to="/Emp" className={profileMod.update}><button type="button" name="button">Update</button></Link>
            </div>
        </div>
        </main>
        </body>
    )
}
export default Profile;