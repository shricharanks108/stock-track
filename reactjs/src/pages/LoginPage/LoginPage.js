import './LoginPage.css';
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
    <div>
      <div className="login-background">
        <form className="form-inline">
          <input type="text" className="form-control" placeholder="Email Address" 
          onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="form-control" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} />
        </form>
        <Button type="submit" className="btn btn-primary" onClick={login}>Login</Button>
      </div>
      <div className="register-background">
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
      </div>
    </div>
  );
}
 
export default LoginPage;