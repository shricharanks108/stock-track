import './ProductListings.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.js';
import { DropdownButton, Dropdown, Form } from 'react-bootstrap';

function ProductListings(props) {

  // const filterProducts = () => {
  //   Axios.get('http://localhost:8080/filterProducts', {
  //     email: email,
  //     password: password,
  //     firstName: firstName,
  //     lastName: lastName,
  //   }).then((res) => {
  //     console.log(res);
  //   });
  // };

  const { products } = data;

  return (
    <div className="background">
      <h1 className='product-listings-title'>Products</h1>
      <div className="filter-categories-container">
        <div className="major-category-filter">
          <Form.Check type="checkbox" id="major-category-filter" label="Dairy"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Protein Foods"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Mixed Dishes"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Grains"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Snacks And Sweets"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Fruits And 100% Fruit Juice"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Vegetables"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Condiments, Gravies, Spreads, Salad Dressings"/>
          <Form.Check type="checkbox" id="major-category-filter" label="All Beverages"/>
          <Form.Check type="checkbox" id="major-category-filter" label="Other Beverages"/>
        </div> 
        <DropdownButton className="category-dropdown" id="Minor Category Filter" title="Minor Category: ">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div className="products-row">
        {products.map((product) => (
          <ProductCard className="" key={product.id} id={product.id} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} ></ProductCard>
        ))}
      </div>
      <small>Product Results: {products.length}</small>
    </div>
  );
}


export default ProductListings;