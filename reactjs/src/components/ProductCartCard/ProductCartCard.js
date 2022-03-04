import { Card } from "react-bootstrap";
import "./ProductCartCard.css";
import img from '../../logo.svg';
import fetchData from "../../fetchData";

function ProductCartCard(props) {
    const productID = props.productID;
    const cartItems = props.cartItems;
    const setCartItems = props.setCartItems;

    return (
        <div className="productCartCard">
            <div className="productCartDescription">
                <h1>{fetchData.getProductName(productID)}</h1>
                <p>{fetchData.getProductDescription(productID)}</p>
            </div>
            <div className="productCartQty">
                <p>Qty: </p>
                <input type="number" defaultValue={cartItems[productID]} min={0} onChange={(e) => {
                    var newQty = parseInt(e.target.value);
                    var tmpCartItems = {...cartItems};
                    tmpCartItems[productID] = newQty;
                    setCartItems(tmpCartItems);
                }} />
            </div>
        </div>
    );
}

export default ProductCartCard;