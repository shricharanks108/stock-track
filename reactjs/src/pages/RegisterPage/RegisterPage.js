import './RegisterPage.css';

import Axios from 'axios';
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';

function RegisterPage() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [street, setStreet] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [birthday, setBirthday] = useState('');

  Axios.defaults.withCredentials = true;

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
      birthday: birthday
    }).then((res) => {
      console.log(res);
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
            <h1>Register Page</h1>
            <h2>Personal Information</h2>
              <input type="text" className="form-control" placeholder="First Name" onChange={(e) => setFirstName(e.target.value)}/>
              <input type="text" className="form-control" placeholder="Last Name" onChange={(e) => setLastName(e.target.value)}/>
              <input type="text" className="form-control" placeholder="Email Address" onChange={(e) => setEmail(e.target.value)}/>
              <input type="text" className="form-control" placeholder="Street" onChange={(e) => setStreet(e.target.value)}/>
              <input type="text" className="form-control" placeholder="City" onChange={(e) => setCity(e.target.value)}/>
              <input type="text" className="form-control" placeholder="State" onChange={(e) => setState(e.target.value)} />
              <input type="text" className="form-control" placeholder="Date of Birth (mm/dd/yyyy)" onChange={(e) => setBirthday(e.target.value)} />
            <Button type="submit" className="btn btn-primary" onClick={register} href='/home'>Register</Button>
            <p className="links">
                <Button href="#forgot-password">Forgot password?</Button>
                <Button href="/sign-in">Sign In</Button>
            </p>
        </div>
    </div>
  );
}

export default RegisterPage;
