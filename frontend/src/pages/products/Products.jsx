import SEO from '../../components/SEO';
import ProductHero from './components/ProductHero';
import SignatureProducts from './components/signatureproducts';
import Ingredients from './components/ingredients';


const Products = () => {
  return (
    <div className="flex flex-col w-full relative">
      <SEO 
        title="Our Products | Greenbae" 
        description="Explore Greenbae's natural product line including Veggie Vitals and Nutri Mix. Wholesome nutrition for the whole family." 
        url="https://www.greenbae.in/products" 
      />
      <ProductHero />
      <SignatureProducts />
      <Ingredients />
    
    </div>
  );
};

export default Products;
