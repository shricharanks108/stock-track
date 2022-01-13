import './ProductListings.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.js';
import { DropdownButton, Dropdown } from 'react-bootstrap';

function ProductListings() {

  const { products } = data;

  const onAdd = (product) => {
    // const exist = cartItems.find((x) => x.id === product.id);
    // if (exist) {
    //   setCartItems(
    //     cartItems.map((x) =>
    //       x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    //     )
    //   );
    // } else {
    //   setCartItems([...cartItems, { ...product, qty: 1 }]);
    // }
    console.log("Added to Cart")
  };

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
          <ProductCard className="" key={product.id} product={product} onAdd={onAdd}></ProductCard>
        ))}
      </div>
      <small>Product Results: {products.length}</small>
    </div>
  );
}


export default ProductListings;