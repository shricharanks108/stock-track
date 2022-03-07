import './LoginPage.css';

//Need to add icons:
//import { IoPersonCircle } from "react-icons/io";
//import email from "./Images/EmailIcon.png";
//import pass from "./Images/LockIcon.png";

import Axios from 'axios';
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

function LoginPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;

  const register = () => {
    console.log('registering');
    Axios.post('http://localhost:8080/register', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
    }).then((res) => {
      console.log(res);
    });
  };

  // TODO: just doesn't work.
  const login = () => {
    Axios.post('http://localhost:8080/login', {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res.data !== "Incorrect Password" || res.data !== "User Not Found") {
        localStorage.setItem('loginStatus', true);
        localStorage.setItem('userEmail', res.data.EmailAddress);
        localStorage.setItem('userFirstName', res.data.FirstName);
        localStorage.setItem('userLastName', res.data.LastName);
        setLoginStatus(localStorage.getItem('loginStatus'));
      }
    });
  };

  const logout = () => {
    localStorage.clear();
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userEmail");
    if (loggedInUser) {
      setLoginStatus(true);
    }
  }, []);

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
             <input type="text" className="form-control" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
           </div>
           <div className="second-input">
             {/*<img src={pass} alt="pass" className="email"/>*/}
             <input type="password" className="form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
           </div>
          <div className="login-button">
          <Button type="submit" className="btn btn-primary" onClick={login} >Login</Button>
          </div>
            <p className="link">
              <a href="#">Forgot password?</a>
              <a href="#">Sign Up</a>
            </p>
         </div>
       </div>
     </div>
    </div>
  );
}


{/* <div className="register-background">
  <form className="form-inline">
    <input type="text" className="form-control" placeholder="First Name" 
    onChange={(e) => setFirstName(e.target.value)}/>
    <input type="text" className="form-control" placeholder="Last Name" 
    onChange={(e) => setLastName(e.target.value)}/>
    <input type="text" className="form-control" placeholder="Email Address" 
    onChange={(e) => setEmail(e.target.value)}/>
    <input type="text" className="form-control" placeholder="Password" 
    onChange={(e) => setPassword(e.target.value)}/>
  </form>
  <Button type="submit" className="btn btn-primary" onClick={register}>Register</Button>
</div> */}

export default LoginPage;