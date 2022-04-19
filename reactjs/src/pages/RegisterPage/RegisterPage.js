import './RegisterPage.css';

import Axios from 'axios';
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [birthday, setBirthday] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [foodpantryid, setFoodpantryid] = useState('');

  const [loginStatus, setLoginStatus] = useState('');

  Axios.defaults.withCredentials = true;
  const navigate = useNavigate();

  const register = () => {
    console.log('registering');
    Axios.post('http://localhost:8080/register', {
      email: email,
      password: password,
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
      state: state,
      birthday: birthday,
      phonenumber: phonenumber,
      foodpantryid: foodpantryid,
    }).then((res) => {
      navigate("/login");
    });
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("userEmail");
    if (loggedInUser) {
      setLoginStatus(true);
    }
  }, []);

  return (
    <div className="main">
        <div className="sub-main">
            <h1>Register Page</h1>
            <h2>Personal Information</h2>
              <input type="text" className="register-form-control" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
              <input type="text" className="register-form-control" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
              <input type="text" className="register-form-control" placeholder="Date of Birth (mm/dd/yyyy)" onChange={(e) => setBirthday(e.target.value)} />
              <input type="text" className="register-form-control" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
              <input type="text" className="register-form-control" placeholder="Phone Number" onChange={(e) => setPhonenumber(e.target.value)} />
              <input type="text" className="register-form-control" placeholder="Food Pantry ID" onChange={(e) => setFoodpantryid(e.target.value)} />
              <h2>Home Address</h2>
              <input type="text" className="register-form-control" placeholder="Street" onChange={(e) => setStreet(e.target.value)}/>
              <input type="text" className="register-form-control" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
              <input type="text" className="register-form-control" placeholder="State" onChange={(e) => setState(e.target.value)} />
            <Button type="submit" className="register-button" onClick={register()}>Register</Button>
            <Button className="register-button" href="/login">Switch to Sign In</Button>
        </div>
    </div>
  );
}

export default RegisterPage;
