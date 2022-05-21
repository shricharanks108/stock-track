import './ProductPage.css';
import React, {useState} from 'react';
import { NutritionLabel } from 'react-fda-nutrition-facts';
import { Breadcrumb, Button } from 'react-bootstrap';
import AddToOrderButton from '../../components/AddToOrderButton/AddToOrderButton';
import Axios from 'axios';
import { useParams } from 'react-router-dom';

// const register = () => {
//   console.log('retreiving nutritional data');
//   // fix backend endpoint name
//   Axios.get('https://stocktrack.shricharanks.com/nutrition/query?', {
//     productName: name, 
//   }).then((res) => {
//     console.log(res);
//     props = res;
//   });
// };

function ProductPage(props) {
  
  const { id } = useParams();

  const [nutritionInfo, setNutritionInfo] = useState({});
  const [product, setProduct] = useState();

  let productReturn = Axios.get('https://stocktrack.shricharanks.com/product/productByID', {
    headers: {
      pantryid: 1,
      productid: Number(id)
    }
  }).then((res) => {
    setProduct(res.data.product);
    console.log(res.data.product)
  });

  let nutrition = Axios.get('https://stocktrack.shricharanks.com/product/productNutritionInfo', {
    headers: {
      pantryid: 1,
      productid: Number(id)
    }
  }).then((res) => {
    setNutritionInfo(res.data.NutritionInfo);
  });

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
          servingsPerContainer={2}
          calories={nutritionInfo.calories}
          totalFat={nutritionInfo.totalfat}
          saturatedFat={nutritionInfo.saturatedfat}
          transFat={nutritionInfo.transfat}
          cholesterol={nutritionInfo.cholesterol}
          sodium={nutritionInfo.sodium}
          totalCarbs={nutritionInfo.carbohydrates}
          dietaryFiber={nutritionInfo.fiber}
          sugars={nutritionInfo.sugar}
          protein={nutritionInfo.protein}
          calcium={nutritionInfo.calcium}
          iron={nutritionInfo.iron}
        />
      </div>
    </div>
  );
}


export default ProductPage;