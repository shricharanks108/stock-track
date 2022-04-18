import './OrderPlacement.css';
import { ToastContainer, Toast } from 'react-bootstrap';
import { NotificationToast } from '../../components/NotificationToast/NotificationToast';
import { Button } from 'react-bootstrap';
import React from "react";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import TimeAgo from "javascript-time-ago";

const toast_data = {
  title: 'Order Placed',
  body: 'Your order has been placed successfully',
}

// const Time = () => {
//     // TimeAgo.addLocale(en);

//     const timeAgo = new TimeAgo("en-US");
//     const inSeconds = new Date(time).getTime();
//     const minutesAgo = timeAgo.format(inSeconds - 60 * 1000);
   
//     return minutesAgo;
// }

function OrderPlacement() {

  // const [show, setShow] = useState(true);  
  // const toggleShow = () => setShow(!show);

  // const [selectedTime, setSelectedTime] = useState(new Date());
  const [time, setTime] = useState(new Date());

  // const onChangeTime = (e) => {
  //     setTime(e.target.value)
  // }

  return (
    <div className="background-order">
      <Button className="mb-2">
        Toggle Toast <strong>with</strong> Animation
      </Button>
      <Toast show={true} onClose={false}>
        <Toast.Header>
          <strong className="me-auto">{toast_data.title}</strong>
          <small>20 seconds ago</small>
        </Toast.Header>
        <Toast.Body>{toast_data.body}</Toast.Body>
      </Toast>
    </div>
  );
}


export default OrderPlacement;