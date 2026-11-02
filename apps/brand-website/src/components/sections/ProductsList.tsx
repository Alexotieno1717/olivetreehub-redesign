import { ProductQuatenaryEntity } from '../../../types';
import ProductHero from '../hero/ProductHero';

interface IProductsList {
  products: ProductQuatenaryEntity[];
}

const ProductsList = ({ products }: IProductsList) => {
  return (
    <section id="productsList" className=" max-w-[955.58px] mx-auto">
      {products.map((item,index) => (
        <ProductHero item={item} key={item.id} alternate={index % 2 === 1}/>
      ))}
    </section>
  );
};

export default ProductsList
