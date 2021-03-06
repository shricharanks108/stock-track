import './ProductListings.css';
import { useState, useEffect } from 'react';
import ProductCard from '../../components/ProductCard/ProductCard';
import { Form, Button } from 'react-bootstrap';
import Axios from 'axios';

function ProductListings(props) {

  const [allProducts, setAllProducts] = useState([]);
  const [products, setProducts] = useState([]);

  const [majorCategory, setMajorCategory] = useState('Dairy');
  const [subcategory, setSubcategory] = useState('Lowfat Milk/yogurt');
  const [isLoadingSubcategories, setLoadingSubcategories] = useState(true);
  const [availableSubcategories, setAvailableSubcategories] = useState();

  useEffect(() => {
    Axios.get('https://stocktrack.shricharanks.com/inventory/productsFromPantryID', {
        headers: {
          pantryid: 1
        }
      }).then((res) => {
        setProducts(res.data.products);
        setAllProducts(res.data.products);
        console.log(allProducts);
    }, () => {
      console.log("error");
    });
  }, []);

  const filterProducts = () => {
    var temp_products = [];    
    for (let i = 0; i < allProducts.length; i++) {
      console.log(allProducts[i].majorCategory);
      console.log(allProducts[i].Subcategory);
      if (allProducts[i].MajorCategory == majorCategory && allProducts[i].Subcategory == subcategory) {
        temp_products.push(allProducts[i]);
      }
    }
    console.log(temp_products);
    setProducts(temp_products);
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
          setSubcategory(res.data.subcategories[0]);
          setLoadingSubcategories(false);
        }
      });
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
            </Form.Group>
            <Button className='filter-button' onClick={filterProducts}>Filter</Button>
          </Form>
        </div>
      </div>
      <div className="products-row">
        {products.map((product) => (
          <ProductCard className="" key={product.ProductID} id={product.ProductID} product={product} cartItems={props.cartItems} setCartItems={props.setCartItems} ></ProductCard>
        ))}
      </div>
      <small>Showing all of {products.length} Product Results!</small>
    </div>
  );
}

export default ProductListings; 