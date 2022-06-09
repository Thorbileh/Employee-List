import loginmodule from './Login.module.css';
import { Link ,useNavigate} from 'react-router-dom'
const Login = () => {

    const clicked = () => {
     

    }
    return (
        <body className={loginmodule.body}>

            <div className={loginmodule.flex}>
                <div className={loginmodule.left}>
                    <p className={loginmodule.p}>Traveling it helps you to refresh your mind from busy schedule and to experience
                        life in different ways.Traveling is actually a good remedy for relieving stress,anxiety and depression.
                        It also improvess the mental and physical health.</p>
                </div>

                <div className={loginmodule.right}>
                    <h4 className={loginmodule.h4}>Welcome to LetsTravel</h4>

                    <div className={loginmodule.n}>
                        Username<br />
                        <input type="text" name="name" className={loginmodule.name} id="name" required /> <br /><br />

                        Password<br />
                        <input type="password" name="pass" className={loginmodule.pass} id="pass" required /><br />
                    </div>
                    <footer>forgot Password?<Link to="/forgotPassword"></Link> </footer><br /><br />
                   <Link to="/Emp"> <button type="submit" name="button" className={loginmodule.button} onClick={clicked}>Login</button></Link>
                    <nav class={loginmodule.nav1}>
                        new to LetsTravel?<Link to="/register" className={loginmodule.reg}>Create account</Link>
                    </nav>
                </div>

            </div>



        </body>
    );
}
export default Login;