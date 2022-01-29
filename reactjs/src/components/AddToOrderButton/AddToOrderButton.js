import React, { useState } from "react";
import { Button } from "react-bootstrap";

function onAdd(cartItems, setCartItems, productID) {
    // Stored in format {ID: qty}
    
    var tmpCartItems = {...cartItems};
    const exist = productID in cartItems;
    tmpCartItems[productID] = (exist) ? tmpCartItems[productID] + 1 : 1;
    setCartItems(tmpCartItems);
};

function AddToOrderButton(props) {
    return (
        <Button className="add-to-cart-from-card" variant="primary" onClick={() => onAdd(props.cartItems, props.setCartItems, props.productID)}>Add to Order</Button>
    );

}

export default AddToOrderButton;