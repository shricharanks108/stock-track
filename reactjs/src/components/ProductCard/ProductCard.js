import React from 'react';
import './ProductCard.css';
import { Breadcrumb, Card } from 'react-bootstrap';
import img from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToOrderButton from '../AddToOrderButton/AddToOrderButton';

function ProductCard(props) {
    const { product, id, cartItems, setCartItems } = props;
    console.log(id);
    return (
        <Card className="card-style">
            <Card.Img variant="top" src= {img}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <AddToOrderButton productID={id} cartItems={cartItems} setCartItems={setCartItems}/>
            <Breadcrumb>
                <Breadcrumb.Item href="#results-by-category">{product.category_1}</Breadcrumb.Item>
                <Breadcrumb.Item href="#results-by-category">{product.category_2}</Breadcrumb.Item> 
            </Breadcrumb>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;