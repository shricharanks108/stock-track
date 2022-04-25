import { Button } from 'react-bootstrap';
import ProductCartCard from '../../components/ProductCartCard/ProductCartCard';
import {Axios} from 'axios';
import './OrderCart.css';

function getEachItemIDWithQuantity(cards) {
  if(cards.length > 0) return cards[0].props.cartItems;
}

async function executeOrder(cards){
  var cartItems = getEachItemIDWithQuantity(cards);
  var staffNumber = 3; // TODO: what is staffNumber?

  console.log(cartItems);
  Axios.post("https://stocktrack.shricharanks.com/order/createOrder", {
    staffNumber: staffNumber,
    productIDsWithQuantities: cartItems
  });
}

function OrderCart(props) {
  var cartItems = props.cartItems;
  var setCartItems = props.setCartItems;
  var cards = [];

  for (var productID in cartItems) {
    var amount = cartItems[productID];
    cards.push(<ProductCartCard productID={productID} cartItems={cartItems} setCartItems={setCartItems} />);
  }

  return (
    <div id="orderCartPage">
      {cards}
      <hr></hr>
      <Button className="cartOrderBtn" onClick={async () => await executeOrder(cards)}>Order</Button>
    </div>
  );
}


export default OrderCart;