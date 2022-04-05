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
            <Card.Link>
                <Card.Img variant="top" href={`/product/${id}`} src= {img}/>
                <Card.Body>
                <Card.Title style={{ textDecoration: 'none' }}className='product-card-title-text'>{product.name}</Card.Title>
                <Card.Text style={{ textDecoration: 'none' }} className='product-card-desc-text'>
                    {product.description}
                </Card.Text>
                <AddToOrderButton productID={id} cartItems={cartItems} setCartItems={setCartItems}/>
                <Breadcrumb>
                    <Breadcrumb.Item href="#results-by-category">{product.category_1}</Breadcrumb.Item>
                    <Breadcrumb.Item href="#results-by-category">{product.category_2}</Breadcrumb.Item> 
                </Breadcrumb>
                </Card.Body>
            </Card.Link>
        </Card>
    );
}

export default ProductCard;