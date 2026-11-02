import Markdown from 'marked-react';
import { ProductQuatenaryEntity } from '../../../types';
import { cmsMediaUrl } from '../../utils/cms';

interface IProductHero {
  item: ProductQuatenaryEntity;
  alternate: boolean;
}

const ProductHero = ({ item, alternate }: IProductHero) => {
  return (
    <>
      {alternate === true ? (
        <div className="grid md:grid-cols-2 px-4 md:p-8 md:py-8 lg:p-[82.98px] lg:py-[36.4px] my-7 lg:my-28 bg-primary-white2 rounded-2xl relative md:mx-4">
          <div className="order-last md:order-first flex flex-col my-auto">
            {item.active === false && (
              <button className="bg-primary-light rounded-2xl px-3 py-[6px] font-bold text-primary-dark2 text-xs mb-3 md:mb-5 w-fit">
                Coming Soon
              </button>
            )}
            <h1 className="font-bold text-2xl md:text-3xl mt-3 md:mt-0 mb-3 md:mb-5 text-primary-dark2 md:max-w-[240px]">
              {item.productTitle}
            </h1>
            <p className="font-normal mb-4 md:mb-12 text-primary-dark2 md:max-w-[324px] text-left text-base">
              {item.productDescription}
            </p>
            <div className="prose prose-ul:pl-0 prose-li:bg-[url(/artwork/listicon.png)] prose-li:bg-no-repeat prose-li:pl-11 prose-li:font-normal prose-li:text-base prose-li:text-primary-gray prose-li:mb-2 prose-li:md:mb-4 prose-li:lg:mb-8 md:max-w-[275px] prose-li:first:line-clamp-4 prose-li:last:line-clamp-3">
              <Markdown value={item.productFeatures} />
            </div>
            {/* {item.features && (
              <ul className=" list-none">
                {item.features?.map((feature) => (
                  <li className="bg-[url(/artwork/listicon.png)] bg-no-repeat pl-11 font-normal text-base text-primary-gray mb-4 md:mb-8 md:max-w-[262px] last:mb-0 first:line-clamp-4 last:line-clamp-2" key={feature.id}>
                    {feature.title}
                  </li>
                ))}
              </ul>
            )} */}
          </div>
          <img
            src={cmsMediaUrl(item.productImage.data.attributes.url)}
            alt={item.productImage.data.attributes.name}
            loading="lazy"
            className="w-full h-auto rounded-2xl md:-mt-24 my-3 md:my-3"
          />
        </div>
      ) : (
        <div className="grid md:grid-cols-2 px-4 md:gap-x-20 md:p-8 md:py-8 lg:p-[82.98px] lg:py-9 md:my-28 bg-primary-white2 rounded-2xl md:mx-4">
          <img
            src={cmsMediaUrl(item.productImage.data.attributes.url)}
            alt={item.productImage.data.attributes.name}
            loading="lazy"
            className="w-full h-auto rounded-2xl md:-mt-24 my-3 md:my-3 order-first"
          />

          <div className="flex flex-col my-auto">
            {item.active === false && (
              <button className="bg-primary-light rounded-2xl px-3 py-[6px] font-bold text-primary-dark2 text-xs mb-3 md:mb-5 w-fit">
                Coming Soon
              </button>
            )}
            <h1 className="font-bold text-2xl md:text-3xl mt-3 md:mt-0 mb-3 md:mb-5 text-primary-dark2 md:max-w-[240px]">
              {item.productTitle}
            </h1>
            <p className="font-normal mb-4 md:mb-8 lg:mb-12 text-primary-dark2 md:max-w-[325px]">
              {item.productDescription}
            </p>

            <div className="prose prose-ul:pl-0 prose-li:bg-[url(/artwork/listicon.png)] prose-li:bg-no-repeat prose-li:pl-11 prose-li:font-normal prose-li:text-base prose-li:text-primary-gray prose-li:mb-2 prose-li:md:mb-4 prose-li:lg:mb-8 md:max-w-[275px] prose-li:first:line-clamp-4 prose-li:last:line-clamp-3">
              <Markdown value={item.productFeatures} />
            </div>
            {/* {item.features && (
              <ul className=" list-none">
                {item.features?.map((feature) => (
                  <li className="bg-[url(/artwork/listicon.png)] bg-no-repeat pl-11 font-normal text-base text-primary-gray mb-2 md:mb-4 lg:mb-8 md:max-w-[275px] first:line-clamp-4 last:line-clamp-2" key={feature.id}>
                    {feature.title}
                  </li>
                ))}
              </ul>
            )} */}
          </div>
        </div>
      )}
    </>
  );
};

export default ProductHero;
