import { Card, Button } from "react-bootstrap";
import "./ProductCartCard.css";
import img from '../../logo.svg';
import fetchData from "../../fetchData";

function ProductCartCard(props) {
    const productID = props.productID;
    const cartItems = props.cartItems;
    const setCartItems = props.setCartItems;

    function removeFromCart() { 
        var tmpCartItems = {...cartItems};
        delete tmpCartItems[productID];
        props.setCartItems(tmpCartItems);
    };

    return (
        <div className="productCartCard">
            <div className="productCartDescription">
                <h1>{fetchData.getProductName(productID)}</h1>
                <p>{fetchData.getProductDescription(productID)}</p>
            </div>
            <div className="productCartQty">
                <p>Qty: </p>
                <input className="item-count-dropdown" type="number" defaultValue={cartItems[productID]} min={0} onChange={(e) => {
                    var newQty = parseInt(e.target.value);
                    var tmpCartItems = {...cartItems};
                    tmpCartItems[productID] = newQty;
                    setCartItems(tmpCartItems);
                }} />
            </div>
            <Button variant="outline-danger" className="cart-card-remove-button" onClick={removeFromCart}>Remove from Cart</Button>
        </div>
    );
}

export default ProductCartCard;