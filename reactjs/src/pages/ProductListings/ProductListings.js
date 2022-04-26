import './ProductListings.css';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.js';
import { DropdownButton, Dropdown, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

function ProductListings(props) {

  let majorCat = '';
  let subCat = '';

  const { subcategories } =  {subcategories: ["Select a Subcategory...", "Test1", "Test2", "Test3"]};
  const { products } = data;

  const filterProducts = () => {
    if (subCat == 'Select a Subcategory...') {
      Axios.get('https://stocktrack.shricharanks.com/filterProductsByMajorCategory', {
        majorCategory: majorCat
      }).then((res) => {
        console.log(res.products);
        products = res.products;
      });
    } else {
      Axios.get('https://stocktrack.shricharanks.com/filterProductsBySubcategory', {
        subcategory: subCat
      }).then((res) => {
        console.log(res.products);
        products = res.products;
      });
    }
  };

  const updateSubcategories = (event) => {
    if (event.target.id == "major-subcategory") {
      majorCat = event.target.value;

      Axios.get('https://stocktrack.shricharanks.com/getFoodSubcategoriesFromMajorCategory', {
      majorCategory: majorCat,
      }).then((res) => {
        subcategories = res.subcategories;
      });

    } else {
      if (event.target.id == "minor-subcategory") {
        subCat = event.target.value;
      }
    }
    filterProducts;
  };

  return (
    <div>
      <h1 className='product-listings-title'>Products</h1>
      <div className="filter-categories-container">
        <div className="minor-category-filter">
            <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Major Subcategory</Form.Label>
                  <Form.Select id="major-subcategory" onChange={updateSubcategories}>
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
                  <Form.Select id="minor-subcategory" onChange={updateSubcategories}>
                    {subcategories.map((subcat) => ( <option>{subcat}</option> ))}
                  </Form.Select>
                </Form.Group>
            </Form>
          </div>
      </div>
      <div className="products-row">
        {products.map((product) => (
          <ProductCard className="" key={product.id} id={product.id} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} ></ProductCard>
        ))}
      </div>
      <small>Showing all of {products.length} Product Results!</small>
    </div>
  );
}

export default ProductListings;