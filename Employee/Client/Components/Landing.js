import { Link } from 'react-router-dom';
import LandingModule from'./Landing.module.css'

const Landing =() =>{
    return(
        <body className={LandingModule.body}>
            <main className={LandingModule.main}>
            <header className={LandingModule.all}>
        <a href="Home.html" className={LandingModule.home}>Home</a>
        <a href="About.html" className={LandingModule.about}>About</a>
        <div className={LandingModule.buttons}>
          <button type="button" className={LandingModule.login} id="login"><Link to="/Login" class={LandingModule.log}>Login</Link></button>
          <button type="button" className={LandingModule.register}><Link to="/register" class={LandingModule.reg} >SignUp</Link></button>
          
          
        </div>
      </header>
      <h3 className={LandingModule.h3}>LetsTravel</h3>
      <h2 className={LandingModule.h2}>All You Need is Fresh Air</h2>
      <p className={LandingModule.p5}>Time is now,Let us help you to travel the world,Money
      is not a problem all you need is to go out and have fun,make friends</p>
      <nav className={LandingModule.down}>
      <button type="button" name="contact" className={LandingModule.contact}><Link to="/Login" className={LandingModule.con}>Contact Us</Link></button>
        
        <button type="button" name="learn" className={LandingModule.more}><Link to="/register" className={LandingModule.learn} >LearnMore</Link></button>
      </nav>
       
    
            </main>

        </body>
    );
}
export default Landing;