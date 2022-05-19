import './InventoryManagement.css';
import Axios from 'axios';
import { useEffect, useState } from "react";
import { Button, Form } from 'react-bootstrap';

function InventoryManagement() {
  const [ProductUID, setProductUID] = useState('');
  const [ProductID, setProductID] = useState('');
  const [ProductName, setProductName] = useState('');
  const [ProductDescription, setProductDescription] = useState('');
  const [MajorCategory, setMajorCategory] = useState('');
  const [Subcategory, setSubcategory] = useState('');
  const [MerchantID, setMerchantID] = useState('');
  const [Price, setPrice] = useState('');
  const [UPC, setUPC] = useState('');
  const [ExpirationDate, setExpirationDate] = useState('');

  const addProduct = () => {
    console.log("add product woooo");
    Axios.post('https://stocktrack.shricharanks.com/inventory/addProduct', {
      pantryId: 1,
      productID: ProductID,
      name: ProductName,
      description: ProductDescription,
      majorCategory: MajorCategory,
      subcategory: Subcategory,
      merchantID: MerchantID,
      price: Price,
      UPC: UPC,
      expirationDate: ExpirationDate,
    }).then((res) => {
      alert("Product Succesfully Added!")
    });
  }

  const deleteProduct = () => {
    console.log("delete product woooo");
    
  }

  const [isLoadingSubcategories, setLoadingSubcategories] = useState(true);
  const [availableSubcategories, setAvailableSubcategories] = useState();

  useEffect(() => {
    setLoadingSubcategories(true);
    const availableOptions = async () => {
      Axios.get('https://stocktrack.shricharanks.com/wweia/getFoodSubcategoriesFromMajorCategory', {
        headers: {
          majorcategory: MajorCategory
        }
      }).then((res) => {
        if (res.data.subcategories.length > 0) {
          setAvailableSubcategories(res.data.subcategories.map(subcat => (subcat)));
          setLoadingSubcategories(false);
        }
      });
    };
    availableOptions();
  }, [MajorCategory]);

  return (
    <div className='inv-mgmt-row'>
      <div className="sub-main inv-mgmt-col add-products-section">
        <h1>Add Product</h1>
          <input type="text" className="inv-register-form-control" placeholder="Product Name" onChange={(e) => setProductName(e.target.value)}/>
          <input type="text" className="inv-register-form-control" placeholder="Product Description" onChange={(e) => setProductDescription(e.target.value)}/>
          <Form.Select id="prod-major-category" onChange={(e) => setMajorCategory(e.target.value)}>
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
          <Form.Select id="prod-subcategory" onChange={(e) => setSubcategory(e.target.value)}>
            {isLoadingSubcategories? <option value="Loading" disabled>Loading.....</option> :  availableSubcategories.map((option) => (
              <option value={option}>{option}</option>
            ))}
          </Form.Select>
          <input type="text" className="inv-register-form-control" placeholder="Merchant ID" onChange={(e) => setMerchantID(e.target.value)} />
          <input type="text" className="inv-register-form-control" placeholder="Product Price" onChange={(e) => setPrice(e.target.value)} />
          <input type="text" className="inv-register-form-control" placeholder="UPC" onChange={(e) => setUPC(e.target.value)}/>
          <input type="text" className="inv-register-form-control" placeholder="Expiration Date" onChange={(e) => setExpirationDate(e.target.value)}/>
          <Button type="submit" className="submit-button" onClick={addProduct()}>Add Product</Button>
      </div>
      <div className='sub-main inv-mgmt-col delete-products-section'>
        <h1>Delete Product</h1>
        <input type="text" className="inv-register-form-control" placeholder="Product UID" onChange={(e) => setProductUID(e.target.value)}/>
        <Button type="submit" className="submit-button" onClick={deleteProduct()}>Delete Product</Button>
      </div>
    </div>
  );
}

export default InventoryManagement;