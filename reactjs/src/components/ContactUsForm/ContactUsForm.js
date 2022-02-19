
import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import './ContactUsForm.css'
import {FaFacebook,FaInstagram,FaTwitter,FaLinkedin} from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi'
import { FiSmartphone } from 'react-icons/fi';
import Form from 'react-bootstrap/Form';

export default class ContactUsForm extends Component {
    render() {
        return (
            <div>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contact Form</title>
                <div className="contact-us-container">
                <span className="big-circle" />
                <img src="img/shape.png" className="square" alt="" />
                <div className="contact-us-form">
                    <div className="contact-info">
                    <h3 className="title">Let's get in touch</h3>
                    <p className="text">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
                        dolorum adipisci recusandae praesentium dicta!
                    </p>
                    <div className="info">
                        <div className="information">
                        <img src={GoLocation} className="icon" alt="" />
                        <p>92 Cherry Drive Uniondale, NY 11553</p>
                        </div>
                        <div className="information">
                        <img src={HiOutlineMail} className="icon" alt="" />
                        <p>lorem@ipsum.com</p>
                        </div>
                        <div className="information">
                        <img src={FiSmartphone} className="icon" alt="" />
                        <p>123-456-789</p>
                        </div>
                    </div>
                    <div className="social-media">
                        <p>Connect with us :</p>
                        <div className="social-icons">
                        <a href="#">
                            <FaFacebook />
                        </a>
                        <a href="#">
                            <FaTwitter />
                        </a>
                        <a href="#">
                            <FaInstagram />
                        </a>
                        <a href="#">
                            <FaLinkedin />
                        </a>
                        </div>
                    </div>
                    </div>
                    <div className="contact-form">
                    <span className="circle one" />
                    <span className="circle two" />
                        <h3 className="title">Contact us</h3>
                        <Form>
                            <Form.Group className="input-container" controlId="formBasicUsername">
                                <Form.Control className="input" type="username" placeholder="Username" />
                                <Form.Text className="text-muted">
                                If you do not have an account, make one for free!
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="input-container" controlId="formBasicEmail">
                                <Form.Control className="input" type="email" placeholder="Email Address" />
                                <Form.Text className="text-muted">
                                Keep a look out for a response from us.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="input-container" controlId="formBasicPhoneNumber">
                                <Form.Control className="input" type="phoneNumber" placeholder="Phone Number" />
                                <Form.Text className="text-muted">
                                Don't worry, we don't sell your information :)
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="input-container" controlId="formBasicPhoneNumber">
                                <Form.Control className="input" type="phoneNumber" placeholder="Phone Number" />
                            </Form.Group>
                            <Button className="contact-submit-btn">Submit</Button>
                        </Form>
                        
                    </div>
                </div>
                </div>
            </div> 
        );
    }
}


{/* <form action="index.html" autoComplete="off">
                        <h3 className="title">Contact us</h3>
                        <div className="input-container">
                        <input type="text" name="name" className="input" />
                        <label htmlFor>Username</label>
                        <span>Username</span>
                        </div>
                        <div className="input-container"å>
                        <input type="email" name="email" className="input" />
                        <label htmlFor>Email</label>
                        <span>Email</span>
                        </div>
                        <div className="input-container">
                        <input type="tel" name="phone" className="input" />
                        <label htmlFor>Phone</label>
                        <span>Phone</span>
                        </div>
                        <div className="input-container textarea">
                        <textarea name="message" className="input" defaultValue={""} />
                        <label htmlFor>Message</label>
                        <span>Message</span>
                        </div>
                        <Button className="contact-submit-btn" variant="danger">Submit</Button>
                    </form> */}