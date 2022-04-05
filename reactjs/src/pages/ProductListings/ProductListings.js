import './ProductListings.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.js';
import { DropdownButton, Dropdown, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

function ProductListings(props) {

  const filterProducts = () => {
    // Axios.get('http://localhost:8080/filterProducts', {
    //   email: email,
    //   password: password,
    //   firstName: firstName,
    //   lastName: lastName,
    // }).then((res) => {
    //   console.log(res);
    // });
    console.log('filterProducts');
  };

  const updateSubcategories = () => {
    // Axios.get('http://localhost:8080/filterProducts', {
    //   major_subcat: "yeet",
    // }).then((res) => {
    //   console.log(res);
    // });
    
    console.log('updateSubcategories');
  };

  const { subcategories } =  {subcategories: ["Test1", "Test2", "Test3"]};
  const { products } = data;

  return (
    <div>
      <h1 className='product-listings-title'>Products</h1>
      <div className="filter-categories-container">
        <div className="minor-category-filter">
            <Form>
              {/* <fieldset disabled> */}
                <Form.Group className="mb-3">
                  <Form.Label>Major Subcategory</Form.Label>
                  <Form.Select id="major-subcategory" onChange={updateSubcategories()}>
                    <option>Dairy</option>
                    <option>Protein Foods</option>
                    <option>Mixed Dishes</option>
                    <option>Grains</option>
                    <option>Snacks And Sweets</option>
                    <option>Fruits And 100% Fruit Juice</option>
                    <option>Vegetables</option>
                    <option>Condiments, Gravies, Spreads, Salad Dressings</option>
                    <option>All Beverages</option>
                    <option>Other Beverages</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Minor Subcategory</Form.Label>
                  <Form.Select id="minor-subcategory">
                    {subcategories.map((subcat) => ( <option>{subcat}</option> ))}
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Check
                    type="checkbox"
                    id="disabledFieldsetCheck"
                    label="Show Out of Stock Items"
                  />
                </Form.Group>
                <Button type="submit" onClick={filterProducts()}>Submit</Button>
              {/* </fieldset> */}
            </Form>
          </div>
        {/* <DropdownButton className="category-dropdown" id="Minor Category Filter" title="Minor Category: ">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton> */}
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