import './LoginPage.css';

//Need to add icons:
//import { IoPersonCircle } from "react-icons/io";
//import email from "./Images/EmailIcon.png";
//import pass from "./Images/LockIcon.png";

function LoginPage() {
  return (
    <div className="main">
     <div className="sub-main">
       <div>
         <div className="imgs">
           <div className="container-image">
            {/*add icon here*/}
           </div>


         </div>
         <div>
           <h1>Login Page</h1>
           <div>
             {/*<img src={email} alt="email" className="email"/>*/}
             <input type="text" placeholder="username" className="name"/>
           </div>
           <div className="second-input">
             {/*<img src={pass} alt="pass" className="email"/>*/}
             <input type="password" placeholder="password" className="name"/>
           </div>
          <div className="login-button">
          <button>Login</button>
          </div>
           
            <p className="link">
              <a href="#">Forgot password ?</a> Or<a href="#">Sign Up</a>
            </p>
           
 
         </div>
       </div>
       

     </div>
    </div>
  );
}


export default LoginPage;