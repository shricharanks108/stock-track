import './ProductListings.css';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import data from '../../data.js';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

function ProductListings(props) {

  var { products } = data;

  // const [products, setProducts] = useState([]);
  // const [isLoadingProducts, setLoadingProducts] = useState(true);

  const [majorCategory, setMajorCategory] = useState('Dairy');
  const [subcategory, setSubcategory] = useState();
  const [isLoadingSubcategories, setLoadingSubcategories] = useState(true);
  const [availableSubcategories, setAvailableSubcategories] = useState();

  const filterProducts = () => {
    Axios.get('https://stocktrack.shricharanks.com/inventory/productsByMajorCategory', {
      headers: {
        majorcategory: majorCategory,
        subcategory: subcategory
      }
    }).then((res) => {
      console.log(res.data.products);
      products = res.data.products;
    });
  };

  const getProducts = () => {
    Axios.get('https://stocktrack.shricharanks.com/inventory/productsFromPantryID', {
      headers: {
        pantryid: 1
      }
    }).then((res) => {
      if (res.data.subcategories.length > 0) {
        products = res.data.products;
      }
    });
  };

  useEffect(() => {
    setLoadingSubcategories(true);
    const availableOptions = async () => {
      Axios.get('https://stocktrack.shricharanks.com/wweia/getFoodSubcategoriesFromMajorCategory', {
        headers: {
          majorcategory: majorCategory
        }
      }).then((res) => {
        if (res.data.subcategories.length > 0) {
          setAvailableSubcategories(res.data.subcategories.map(subcat => (subcat)));
          setLoadingSubcategories(false);
        }
      });
    };
    availableOptions();
  }, [majorCategory]);

  // useEffect(() => {
  //   setLoadingProducts(true);
  //   const availableProducts = async () => {
  //     await Axios.get('https://stocktrack.shricharanks.com/inventory/productsFromPantryID', {
  //       headers: {
  //         pantryid: 1
  //       }
  //     }).then((res) => {
  //       if (res.data.subcategories.length > 0) {
  //         console.log(res.data.products);
  //         setProducts(res.data.products);
  //         setLoadingProducts(false);
  //       }
  //     });
  //   };
  //   availableProducts();
  // }, [products]);

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
            </Form.Group>
            <Button className='filter-button' onClick={filterProducts}>Filter</Button>
          </Form>
        </div>
      </div>
      <div className="products-row">
        {/* {isLoadingProducts? <ProductCard className="" key={1} id={1} product={{id:1, name:"Loading", description:"Loading", category_1: "Loading", category_2: "Loading"}} cartItems={props.cartItems} setCartItems={props.setCartItems} ></ProductCard> :  products.map((product) => (
          <ProductCard className="" key={product.id} id={product.id} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} ></ProductCard>
        ))} */}
        {console.log(products)}
        {products.map((product) => (
          <ProductCard className="" key={product.id} id={product.id} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} ></ProductCard>
        ))}
      </div>
      {/* <small>Showing all of {products.length} Product Results!</small> */}
    </div>
  );
}

export default ProductListings; 