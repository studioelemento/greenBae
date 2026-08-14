import ProductHero from './components/ProductHero';
import SignatureProducts from './components/signatureproducts';
import Ingredients from './components/ingredients';


const Products = () => {
  return (
    <div className="flex flex-col w-full relative">
      <ProductHero />
      <SignatureProducts />
      <Ingredients />
    
    </div>
  );
};

export default Products;
