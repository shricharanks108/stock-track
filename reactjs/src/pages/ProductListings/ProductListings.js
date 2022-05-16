import './ProductListings.css';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.js';
import { DropdownButton, Dropdown, Form, Button } from 'react-bootstrap';
import Axios from 'axios';

function ProductListings(props) {

  // const [majorCat, setmajorCat] = useState('');
  // let subcats = null;

  // const subcategories = ["Select a Subcategory...", "Test1", "Test2", "Test3"];
  const { products } = data;
  // // subcats = subcategories.map((subcat) => (<option>{subcat}</option>));

  // // const filterProducts = () => {
  // //   if (subCat == 'Select a Subcategory...') {
  // //     Axios.get('https://stocktrack.shricharanks.com/inventory/productsByMajorCategory', {
  // //       majorCategory: majorCat
  // //     }).then((res) => {
  // //       console.log(res.products);
  // //       products = res.products;
  // //     });
  // //   } else {
  // //     Axios.get('https://stocktrack.shricharanks.com/inventory/productsBySubcategory', {
  // //       subcategory: subCat
  // //     }).then((res) => {
  // //       console.log(res.products);
  // //       products = res.products;
  // //     });
  // //   }
  // // };

  // const updateSubcategories = async (event) => {
  //   if (event.target.id == "major-subcategory") {
  //     setmajorCat(event.target.value);
  //     console.log(majorCat);
      
  //     subcats = subcategories.map((subcat) => (<option>{subcat}</option>))
  //     console.log(subcats);

  //     // Axios.get('https://stocktrack.shricharanks.com/wweia/getFoodSubcategoriesFromMajorCategory', {
  //     //   headers: {
  //     //     majorCategory: majorCat
  //     //   }
  //     // }).then((res) => {
  //     //   console.log(res.data);
  //     // });
  //   } else {
  //     if (event.target.id == "minor-subcategory") {
  //       console.log(event.target.value);
  //     }
  //   }
  //   // filterProducts();
  // };

  const [majorCategory, setMajorCategory] = useState('Dairy');
  const [subcategory, setSubcategory] = useState();

  const [isLoadingMajorCategories, setLoadingMajorCategories] = useState(true);
  const [isLoadingSubcategories, setLoadingSubcategories] = useState(true);
  const [availableMajorCategories, setAvailableMajorCategories] = useState();
  const [availableSubcategories, setAvailableSubcategories] = useState();

  useEffect(() => {
    setLoadingSubcategories(true);
    const availableOptions = async () => {
      let subcategories = await Axios.get('https://stocktrack.shricharanks.com/wweia/getFoodSubcategoriesFromMajorCategory', {
        headers: {
          majorcategory: majorCategory
        }
      }).then((res) => {
        console.log(res.data.subcategories);
      });
      subcategories = subcategories.data.subcategories;
      console.log(subcategories);
      if (subcategories.length > 0) {
        setAvailableSubcategories(subcategories.map(subcat => (subcat)));
        setLoadingSubcategories(false);
      }
    };
    availableOptions();
  }, [majorCategory]);

  return (
    <div>
      <h1 className='product-listings-title'>Products</h1>
      <div className="filter-categories-container">
        <div className="minor-category-filter">
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Major Subcategory</Form.Label>
              <Form.Select id="major-subcategory" onChange={(e) => setMajorCategory(e.target.value)}>
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
              <Form.Select id="minor-subcategory" onChange={(e) => setSubcategory(e.target.value)}>
                {isLoadingSubcategories? <option value="Loading" disabled>Loading.....</option> :  availableSubcategories.map((option) => (
                  <option value={option}>{option}</option>
                ))}
              </Form.Select>
              {/* <select onChange={updateSubcategories}>
                {subcats}
              </select> */}
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