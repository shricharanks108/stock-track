import { Button } from 'react-bootstrap';
import React, {useState} from 'react';
import ProductCartCard from '../../components/ProductCartCard/ProductCartCard';
import {Axios} from 'axios';
import './OrderCart.css';
import {Modal} from 'react-bootstrap';

function getEachItemIDWithQuantity(cards) {
  if(cards.length > 0) return cards[0].props.cartItems;
}

function OrderCart(props) {
  var cartItems = props.cartItems;
  var setCartItems = props.setCartItems;
  var cards = [];

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function executeOrder(cards){
    handleShow()
    var cartItems = getEachItemIDWithQuantity(cards);
    var staffNumber = 3; // TODO: what is staffNumber?
  
    console.log(cartItems);
    Axios.post("https://stocktrack.shricharanks.com/order/createOrder", {
      staffNumber: staffNumber,
      productIDsWithQuantities: cartItems
    });
  }


  for (var productID in cartItems) {
    var amount = cartItems[productID];
    cards.push(<ProductCartCard productID={productID} cartItems={cartItems} setCartItems={setCartItems} />);
  }

  return (
    <div id="orderCartPage">
      {cards}
      <hr></hr>
      <Button className="cartOrderBtn" onClick={async () => await executeOrder(cards)}>Order</Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Order Successful!</Modal.Title>
        </Modal.Header>
        <Modal.Body>Your order has been placed successfully!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Logout
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}


export default OrderCart;