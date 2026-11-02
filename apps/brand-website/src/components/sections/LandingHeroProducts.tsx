import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { SectionsEntity } from '../../../types';
import { cmsMediaUrl } from '../../utils/cms';

interface LandingHeroProductsProps {
  content: SectionsEntity;
}
const LandingHeroProducts = ({ content }: LandingHeroProductsProps) => {
  return (
    <section id="landingHeroProducts" className="relative bg-primary-dark2 pb-6 pt-20 mb-10 md:mb-44">
      <Image
        src={'/artwork/Light-accent.png'}
        width={536.676}
        height={433.404}
        alt={'light-accent'}
        className="top-0 absolute animate-pulse"
      />
      <main className="lg:max-w-[1037.92px] mx-auto px-4 relative">
        <div className="hidden md:block absolute w-[735px] h-[735px] top-44 right-0 ">
          <div className="sphere-4"/>
        </div>
      <img src="/artwork/sphere-image.svg" alt="/artwork/sphere-image.svg" className="hidden absolute bottom-0" />

        <h1 className="text-left md:text-center text-white text-2xl md:text-4xl lg:text-6xl font-extrabold mt-2 md:mt-20 relative z-10">
          {content.Title}
        </h1>
        <h1 className="text-left md:text-center text-primary-amber text-2xl md:text-4xl lg:text-6xl font-extrabold mb-2 md:mb-4 lg:mb-6 relative z-10">
          {content.keyword}
        </h1>
        <div className="flex justify-center relative z-10 mb-2 md:mb-16">
          <p className="text-left md:text-center text-white text-base md:text-2xl font-normal  mb-2.5 md:mb-3.5 lg:mb-36 max-w-[636px]">
            {content.description}
          </p>
        </div>

        <div className="md:pl-[61.5px] md:py-[54.21px] relative">
          <img src="/artwork/ussdcard.svg" alt="ussdcard" className="absolute top-0 left-0" />
          <div className="grid md:grid-cols-2 lg:gap-x-24 xl:gap-x-32">
            <img
              src={cmsMediaUrl(content.productImage?.data?.attributes.url)}
              alt={content.productImage?.data?.attributes.name}
              className="md:absolute bottom-0 z-10 md:left-8 md:w-1/2 lg:left-auto lg:w-auto"
            />
            <div className="md:col-start-2 relative z-10">
              <h1 className=" font-bold text-2xl md:text-4xl text-primary-light4 mb-3 md:mb-5">
                {content.productTitleStart} <span className=" text-white">{content.productTitleEnd}</span>
              </h1>
              <p className=" font-normal text-base md:text-lg text-white mb-3 md:mb-5 md:max-w-[360px]">
                {content.productDescription}
              </p>
              <div className="inline-flex cursor-pointer mb-3 md:mb-0">
                <Link
                  className="whitespace-nowrap btn-outline-round bg-primary-light4-dark text-primary-light4 inline-flex items-center"
                  href={'/products/sms'}
                >
                  {content.buttonLabel} <ChevronRightIcon className=" text-primary-light4 w-5 h-5 ml-8" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="relative md:pl-8 lg:pl-[61.5px] grid md:grid-cols-12 lg:gap-x-[4.7rem] xl:gap-x-[5.7rem] md:pt-8 lg:pt-16 lg:divide-x-2 lg:divide-primary-light5-dark">
          <div className="md:col-span-5 mb-3 md:mb-0">
            <h1 className="text-white text-lg md:text-2xl font-medium mb-4 md:mb-8 md:max-w-[362px]">
              {content.productSubtitle}
            </h1>
            <p className="text-white font-normal md:max-w-[294px]">{content.productSubDescription}</p>
          </div>
          <div className="md:col-span-7 md:pl-20">
            {content.productFeatures?.map((item) => (
              <div key={item.id} className="flex items-start mb-4 md:mb-8">
                <img src={cmsMediaUrl(item.image.data.attributes.url)} alt={item.image.data.attributes.name} className=" mr-5 w-1/5 md:w-auto" />
                <p className="text-white font-normal text-base md:text-lg md:max-w-[220px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
};

export default LandingHeroProducts;
