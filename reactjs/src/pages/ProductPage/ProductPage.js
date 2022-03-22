import './ProductPage.css';
import { NutritionLabel } from 'react-fda-nutrition-facts';
import { Breadcrumb, Button } from 'react-bootstrap';
import AddToOrderButton from '../../components/AddToOrderButton/AddToOrderButton';
import Axios from 'axios';

const register = () => {
  console.log('retreiving nutritional data');
  // fix backend endpoint name
  Axios.get('http://localhost:8080/nutrition/query?', {
    productName: name, 
  }).then((res) => {
    console.log(res);
    props = res;
  });
};

function ProductPage(props) {
  return (
    <div className='background'>
      <Breadcrumb>
        <Breadcrumb.Item href="#">DAIRY</Breadcrumb.Item>
        <Breadcrumb.Item href="#results-by-category ">
          LOWFAT MILK/YOGURT
        </Breadcrumb.Item> 
        <Breadcrumb.Item active>Milk, lowfat</Breadcrumb.Item>
        <Breadcrumb.Item active>[Product Name]</Breadcrumb.Item>
      </Breadcrumb>
      <AddToOrderButton cartItems={props.cartItems} setCartItems={props.setCartItems} productID={props.productID}/>
      <h1>Nutritional Information</h1>
      <div className='nutritional-facts'>
          <NutritionLabel
            servingSize={'1 cup (228g)'}
            servingsPerContainer={2}
            calories={260}
            totalFat={13}
            saturatedFat={5}
            transFat={2}
            cholesterol={30}
            sodium={660}
            totalCarbs={31}
            dietaryFiber={0}
            sugars={5}
            protein={5}
            vitaminA={4}
            vitaminC={2}
            calcium={15}
            iron={4}
        />
      </div>
    </div>
  );
}


export default ProductPage;