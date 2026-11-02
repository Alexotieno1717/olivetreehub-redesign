import { SectionsEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';
import ProductFeatureCard from '../cards/ProductFeatureCard';

interface ProductOverviewProps {
  data: SectionsEntity[] | null;
}

const ProductOverview = ({ data }: ProductOverviewProps) => {
  const product = data?.[6];
  const productItems = product?.BongaOverviewItems ?? product?.features ?? [];

  return (
    <section
      id="productOverview"
      className="lg:max-w-4xl xl:max-w-[67.5rem] 2xl:max-w-[67.5rem] bg-primary-white lg:rounded-3xl px-4 lg:px-0 mx-auto md:mb-20 md:px-7 pb-5 md:pb-7 lg:pb-12"
    >
      <img
        src={cmsMediaUrl(product?.media?.data.attributes.url)}
        width={1046}
        height={511.067}
        className="mx-auto"
        alt={product?.media?.data.attributes.name}
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 -mt-10 md:-mt-20 ">
        {productItems.map((item) => (
          <div key={item.id}>
            <ProductFeatureCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductOverview;
