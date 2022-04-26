import './ProductPage.css';
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

  let product = {
    name: "Milk",
    calories: 345,
    majorCategory: "Dairy",
    subcategory: "Lowfat, Milk"
  }

  const { id } = useParams();

  // Axios.get('https://stocktrack.shricharanks.com/getProduct', {
  //   productID: id,
  // }).then((res) => {
  //   product = res.subcategories;
  // });

  return (
    <div className='background'>
      <Breadcrumb>
        <Breadcrumb.Item href="#">{product.majorCategory}</Breadcrumb.Item>
        <Breadcrumb.Item href="#results-by-category ">
          {product.subcategory}
        </Breadcrumb.Item> 
        <Breadcrumb.Item active>{props.name}</Breadcrumb.Item>
      </Breadcrumb>
      <AddToOrderButton cartItems={props.cartItems} setCartItems={props.setCartItems} productID={props.productID}/>
      <h1>Product ID: {id}</h1>
      <h1>Nutritional Information</h1>
      <div className='nutritional-facts'>
          <NutritionLabel
            servingSize={'1 cup (228g)'}
            servingsPerContainer={2}
            calories={product.calories}
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