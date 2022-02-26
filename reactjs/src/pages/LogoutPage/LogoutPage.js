import './LogoutPage.css';
import React, { useRef } from 'react'
import { Button } from 'react-bootstrap';

function LogoutPage() {
  return (
      <div>
        <h1>Succesfully Logged Out!</h1>
        <Button>Login!</Button>
        <Button>Return to Home</Button>
      </div>
  );
}

export default LogoutPage;