import React from 'react';
import './ProductCard.css';
import { Breadcrumb, Card } from 'react-bootstrap';
import img from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddToOrderButton from '../AddToOrderButton/AddToOrderButton';

function ProductCard(props) {
    const { product, id, cartItems, setCartItems } = props;
    return (
        <Card className="card-style">
            <Card.Img variant="top" href={'/product/' + id} src= {img}/>
            <Card.Body>
            <Card.Title style={{ textDecoration: 'none' }}  className='product-card-title-text'>{product.ProductName}</Card.Title>
            <Card.Text style={{ textDecoration: 'none' }} href={'/product/' + id} className='product-card-desc-text'>
                {product.ProductDescription}
            </Card.Text>
            <Card.Link href={'/product/' + id}>More Info</Card.Link>
            <AddToOrderButton productID={id} cartItems={cartItems} setCartItems={setCartItems}/>
            <Breadcrumb>
                <Breadcrumb.Item href="#results-by-category">{product.MajorCategory}</Breadcrumb.Item>
                <Breadcrumb.Item href="#results-by-category">{product.Subcategory}</Breadcrumb.Item> 
            </Breadcrumb>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;