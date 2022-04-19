import React from "react";
import './NotificationToast.css';
// import {Link} from "react-router-dom";
import { Toast , Button } from 'react-bootstrap';
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, NavLink } from "react-router-dom";
import TimeAgo from "javascript-time-ago";

export const NotificationToast = (props) => {

    const [show, setShow] = useState(true);  
    const toggleShow = () => setShow(!show);

    const [selectedTime, setSelectedTime] = useState(new Date());
    const [time, setTime] = useState(new Date());

    const onChangeTime = (e) => {
        setTime(e.target.value)
    }

    const Time = () => {
        // TimeAgo.addLocale(en);

        const timeAgo = new TimeAgo("en-US");
        const inSeconds = new Date(time).getTime();
        const minutesAgo = timeAgo.format(inSeconds - 60 * 1000);
       
        return minutesAgo;
    }

    return (
        <div>
            <div style={{textAlign:"center",marginTop:"50px"}}>
                <input type="datetime-local" min="2022-03-12T00:00" max={new Date()}/>
                <Time/>
            </div>
            <Toast show={show} onClose={toggleShow}>
                <Toast.Header>
                    <strong className="me-auto">{props.title}</strong>
                    <small>{Time}</small>
                </Toast.Header>
                <Toast.Body>{props.body}</Toast.Body>
            </Toast>
        </div>
    );
};