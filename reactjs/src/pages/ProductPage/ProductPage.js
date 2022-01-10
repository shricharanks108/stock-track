import './ProductPage.css';
import { Header } from '../../components/Header';
import { NutritionLabel } from 'react-fda-nutrition-facts';


function ProductPage() {
  return (
    <div className="background">
      <Header />
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
          Library
        </Breadcrumb.Item> 
        <Breadcrumb.Item active>Data</Breadcrumb.Item>
      </Breadcrumb>

      <div className='nutritional-info'>
        <h1>Nutritional Information</h1>
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