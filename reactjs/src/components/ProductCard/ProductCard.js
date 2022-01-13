import React from 'react';
import './ProductCard.css';
import { Breadcrumb, Button, Card } from 'react-bootstrap';
import img from '../../logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

function ProductCard(props) {
    const { product, onAdd } = props;
    return (
        <Card className="card-style">
            <Card.Img variant="top" src= {img}/>
            <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                {product.description}
            </Card.Text>
            <Button className="add-to-cart-from-card" variant="primary">Add to Order</Button>
            <Breadcrumb>
                <Breadcrumb.Item href="#results-by-category">{product.category_1}</Breadcrumb.Item>
                <Breadcrumb.Item href="#results-by-category">{product.category_2}</Breadcrumb.Item> 
            </Breadcrumb>
            </Card.Body>
            
        </Card>
  );
}

export default ProductCard;