import './ProductListings.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.js';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function ProductListings(props) {

  const { products } = data;

  return (
    <div className="background">
      <h1 className='product-listings-title'>Products</h1>
      <div className="filter-categories-container">
        <DropdownButton className="category-dropdown" id="Major Cateogry Filter" title="Major Category: ">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="category-dropdown" id="Minor Cateogry Filter" title="Minor Category: ">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton className="category-dropdown" id="Minor Cateogry Filter" title="Sort by: ">
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