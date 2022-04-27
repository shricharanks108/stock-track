import './LoginPage.css';

//Need to add icons:
//import { IoPersonCircle } from "react-icons/io";
//import email from "./Images/EmailIcon.png";
//import pass from "./Images/LockIcon.png";

import Axios from 'axios';
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const register = () => {
    console.log('registering');
    Axios.post('https://stocktrack.shricharanks.com/auth/register', {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
    });
  };

  // TODO: just doesn't work.
  const login = () => {
    Axios.post('https://stocktrack.shricharanks.com/auth/login', {
      email: email,
      password: password,
    }).then((res) => {
      console.log(res);
      if (res.data !== "Incorrect Password" || res.data !== "User Not Found") {
        localStorage.setItem('loginStatus', true);
        localStorage.setItem('userEmail', res.data.Email);
        setLoginStatus(localStorage.getItem('loginStatus'));
        privileges(res.data.UserPermissionLevel);
        navigate("/dashboard");
      }
    });
  };

  const privileges = (userPrivLevel) => {
    localStorage.setItem('loginStatus', true);
    Axios.post('https://stocktrack.shricharanks.com/permissions/userPermissionLevelDetails', {
      permissionLevel: userPrivLevel
    }).then((res) => {
      console.log(res);
      if (res.data !== "Incorrect Password" || res.data !== "User Not Found") {
        localStorage.setItem('CreateStaffPermission', res.data.CreateStaffPermission);
        localStorage.setItem('PlaceOrdersPermission', res.data.PlaceOrdersPermission);
        localStorage.setItem('FulfillOrdersPermission', res.data.FulfillOrdersPermission);
        localStorage.setItem('AddMerchantsPermission', res.data.AddMerchantsPermission);
        localStorage.setItem('PlaceOrdersPermission', res.data.PlaceOrdersPermission);
        localStorage.setItem('ViewAdminDashboardPermission', res.data.ViewAdminDashboardPermission);
        localStorage.setItem('ViewAllOrdersPermission', res.data.ViewAllOrdersPermission);
        localStorage.setItem('RestockInventoryPermission', res.data.RestockInventoryPermission);
        localStorage.setItem('MakeAnnouncementsPermission', res.data.MakeAnnouncementsPermission);
      }
    });
  }

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
        <h1>Login Page</h1>
        <input type="text" className="login-form-control" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
        <input type="password" className="login-form-control" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit" className="login-button" onClick={login} >Login</Button>
        <Button type="submit" className="login-button">Forgot password?</Button>
        <Button type="submit" className="login-button" href='/register'>Sign Up</Button>
      </div>
    </div>
  );
}

export default LoginPage;