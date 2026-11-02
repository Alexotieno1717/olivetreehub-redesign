import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { SectionsEntity } from '../../../types';
import { cmsMediaUrl } from '../../utils/cms';

interface BongaSmsHeroProps {
  content: SectionsEntity;
}

const BongaSmsHero = ({ content }: BongaSmsHeroProps) => {
  return (
    <section className="lg:max-w-4xl xl:max-w-[1037.924px]  mx-4 lg:mx-auto bg-primary-bonga2 p-4 md:p-8 lg:p-14 md:py-20 lg:py-16 lg:px-16 lg:pt-28 xl:px-20 xl:pr-0 lg:pr-0 lg:pb-0 relative rounded-tl-3xl rounded-bl-3xl">
      <div className="before:absolute before:bg-primary-bonga2 before:-right-[100%] before:h-full before:w-full before:-z-10 before:top-0" />
      <div className="md:pl-[30px] md:py-[54.21px] relative border-b border-primary-bonga3">
        <img src="/artwork/ussdcard.svg" alt="ussdcard" className="absolute top-0 left-0" />
        <div className="grid md:grid-cols-2 md:gap-x-24">
          <div>
            <h1 className="font-bold text-2xl md:text-4xl text-primary-bonga4-light mb-5">
              {content.productTitleStart} <span className=" text-white">{content.productTitleEnd}</span>
            </h1>
            <p className=" font-normal text-base md:text-lg text-white mb-5 md:max-w-[330px]">{content.productDescription}</p>
            <div className="inline-flex cursor-pointer">
              <Link
                className="inline-flex items-center whitespace-nowrap btn-outline-round bg-primary-bonga4-dark text-primary-bonga4-light relative z-10"
                href={'/products/smsplus'}
              >
                Explore more <ChevronRightIcon className=" text-primary-bonga4-light w-5 h-5 ml-8" />
              </Link>
            </div>
          </div>
          <img
            src={cmsMediaUrl(content.productImage?.data?.attributes.url)}
            alt={content.productImage?.data?.attributes.name}
            className="md:absolute bottom-0 -right-16 z-10 md:w-1/2 lg:w-auto"
          />
          <div className="hidden md:block absolute w-[850px] h-[850px] -right-96 -bottom-[124%]">
            <div className="sphere"></div>
          </div>
        </div>
      </div>
      <div className="md:pl-[30px] py-8 md:py-[54.21px] relative border-b border-primary-bonga3">
        <div className="grid md:grid-cols-12 md:gap-x-16 lg:gap-x-20 xl:gap-x-24">
          <div className="md:col-span-5 mb-4 md:mb-0">
            <h1 className="text-white text-lg md:text-2xl font-medium mb-4 md:mb-8 max-w-[362px]">
              {content.productSubtitle}
            </h1>
            <p className="text-white font-normal md:max-w-[294px]">{content.productSubDescription}</p>
          </div>
          <div className="md:col-span-7 relative">
            {content.productFeatures?.map((item) => (
              <div key={item.id} className="flex items-start mb-4 md:mb-8 last:mb-0">
                <img src={cmsMediaUrl(item.image.data.attributes.url)} alt={item.image.data.attributes.name} className=" mr-5 w-1/5 md:w-auto" />
                <p className="text-white font-normal text-base md:text-lg max-w-[276px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="md:pl-[30px] md:py-[54.21px] relative overflow-hidden">
        <div className="grid grid-flow-col xl:auto-cols-max gap-x-11">
          <div className="hidden md:block absolute w-[573.688px] h-[584.112px] right-4 -bottom-[55%]">
            <div className="sphere"></div>
          </div>
          <div className="flex flex-col my-auto  relative z-10 mt-5 md:mt-0 lg:mt-auto">
            <h1 className="font-bold text-primary-bonga4-light text-xl md:text-2xl lg:text-5xl max-w-[553px] mb-3 md:mb-6">
              {'Broaden your'} <span className=" text-white">{'channels,'}</span>{' '}
              {'expand your horizons'}
            </h1>
            <p className=" font-normal text-white text-base md:text-xl lg:text-2xl max-w-[508px]">
              {'To simplify your business commmunications and operations, we offer you more...'}
            </p>
          </div>
          <div className=" mx-auto">
            <div className="hidden md:block  w-[316.57px] h-[316.57px]  -rotate-[3.224deg]">
              <div className="sphere-3"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BongaSmsHero;
