import './LogoutPage.css';
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';

function LogoutPage() {
  return (
      <div className='logout-page'>
        <h1>Succesfully Logged Out!</h1>
        <Button className='login-button'>Sign in!</Button>
        <Button className='login-button'>Return to Home</Button>
      </div>
  );
}

export default LogoutPage;