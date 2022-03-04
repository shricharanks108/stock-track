import { Button } from 'react-bootstrap';
import ProductCartCard from '../../components/ProductCartCard/ProductCartCard';
import './OrderCart.css';

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
      <Button className="cartOrderBtn">Order</Button>
    </div>
  );
}


export default OrderCart;