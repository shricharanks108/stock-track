import './ProductPage.css';
import React, {useState, useEffect} from 'react';
import { NutritionLabel } from 'react-fda-nutrition-facts';
import { Breadcrumb, Button } from 'react-bootstrap';
import AddToOrderButton from '../../components/AddToOrderButton/AddToOrderButton';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

function ProductPage(props) {
  const { id } = useParams();

  const [nutritionInfo, setNutritionInfo] = useState({});
  const [product, setProduct] = useState({});

  useEffect(() => {
    if (Number(id) == 8) {
      setProduct({
        name: "Whole Milk",
        MajorCategory: "Dairy",
        Subcategory: "Higher Fat Milk/yogurt"
      })
      setNutritionInfo({
        "fat": {
            "value": 7.99
        },
        "saturatedFat": {
            "value": 4.99
        },
        "transFat": {
            "value": 0.000
        },
        "cholesterol": {
            "value": 36.0
        },
        "sodium": {
            "value": 120
        },
        "carbohydrates": {
            "value": 12.0
        },
        "fiber": {
            "value": 0.000
        },
        "sugars": {
            "value": 11.0
        },
        "protein": {
            "value": 7.99
        },
        "calcium": {
            "value": 300
        },
        "iron": {
            "value": 0.000
        },
        "potassium": {
            "value": 389
        },
        "calories": {
            "value": 149
        }
      });
    }
  }, []); 

  console.log(product);
  console.log(nutritionInfo);

  return (
    <div className='background'>
      <Breadcrumb>
        <Breadcrumb.Item href="#">{product.MajorCategory}</Breadcrumb.Item>
        <Breadcrumb.Item href="#results-by-category ">
          {product.subcategory}
        </Breadcrumb.Item> 
        <Breadcrumb.Item active>{product.ProductName}</Breadcrumb.Item>
      </Breadcrumb>
      <AddToOrderButton cartItems={props.cartItems} setCartItems={props.setCartItems} productID={props.productID}/>
      <h1>Product ID: {id}</h1>
      <h1>Nutritional Information</h1>
      <div className='nutritional-facts'>
        <NutritionLabel
          servingSize={'1 cup (228g)'}
          servingsPerContainer={8}
          calories='149'
          totalFat='7.99'
          saturatedFat='4.99'
          transFat='0.000'
          cholesterol='36.0'
          sodium='120'
          totalCarbs='12.0'
          dietaryFiber='0.000'
          sugars='11.0'
          protein='7.99'
          calcium='300'
          iron='0.000'
        />
      </div>
    </div>
  );
}


export default ProductPage;