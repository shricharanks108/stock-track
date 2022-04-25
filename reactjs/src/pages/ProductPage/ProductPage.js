import './ProductPage.css';
import { NutritionLabel } from 'react-fda-nutrition-facts';
import { Breadcrumb, Button } from 'react-bootstrap';
import AddToOrderButton from '../../components/AddToOrderButton/AddToOrderButton';
import Axios from 'axios';

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

let props = {
  "breadcrumbs": ["DAIRY", "LOWFAT MILK/YOGURT", "Milk, lowfat"],
  "productName": "1% Milk",
  "nutritionalInfo": {
    "calories": "0",
    "totalFat": "0",
    "saturatedFat": "0",
    "transFat": "0",
    "cholesterol": "0",
    "sodium": "0",
    "totalCarbs": "0",
    "dietaryFiber": "0",
    "sugars": "0",
    "protein": "0",
    "vitaminA": "0",
    "vitaminC": "0",
    "calcium": "0",
    "iron": "0"
  },
};

function ProductPage(props) {
  return (
    <div className='background'>
      <Breadcrumb>
        <Breadcrumb.Item href="#">{props.breadcrumbs[0]}</Breadcrumb.Item>
        <Breadcrumb.Item href="#results-by-category ">
          {props.breadcrumbs[1]}
        </Breadcrumb.Item> 
        <Breadcrumb.Item active>{props.breadcrumbs[2]}</Breadcrumb.Item>
        <Breadcrumb.Item active>{props.productName}</Breadcrumb.Item>
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