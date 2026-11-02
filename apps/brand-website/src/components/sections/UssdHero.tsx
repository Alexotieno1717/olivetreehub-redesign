import { ChevronRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { SectionsEntity } from '../../../types';
import { cmsMediaUrl } from '../../utils/cms';
interface IUssdHeroProps {
  content: SectionsEntity;
}

const UssdHero = ({ content }: IUssdHeroProps) => {
  return (
    <section className="lg:max-w-[1037.92px] mx-auto mb-10 md:mb-16 px-4">
      <div className="md:pl-[61.5px] md:py-[54.21px] relative">
        <img src="/artwork/ussdcard2.svg" alt="ussdcard" className="absolute top-0 left-0 rounded-tl-[20px]" />
        <div className="grid md:grid-cols-2 lg:gap-x-24 xl:gap-x-32">
          <img src={cmsMediaUrl(content.productImage?.data?.attributes.url)} alt={content.productImage?.data?.attributes.name} className="md:absolute bottom-0 z-10 md:left-8 md:w-1/2 lg:left-auto lg:w-auto" />
          <div className="md:col-start-2 relative z-10">
            <h1 className="font-bold text-2xl md:text-4xl text-primary-dark2 mb-3 md:mb-5">{content.productTitle}</h1>
            <p className=" font-normal text-base md:text-lg text-primary-dark2 mb-3  md:mb-5 md:max-w-[360px]">{content.productDescription}</p>
            <div className="inline-flex cursor-pointer">
              <Link
                className="btn-outline-round inline-flex items-center whitespace-nowrap  bg-primary-yellow-dark text-primary-yellow-light"
                href={'/products/ussd'}
              >
                {content.buttonLabel} <ChevronRightIcon className=" text-primary-yellow-light w-5 h-5 ml-8" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="md:pl-8 lg:pl-[61.5px]">
        <div className="grid md:grid-cols-12 lg:gap-x-[4.7rem] xl:gap-x-[5.7rem] py-4 md:py-8 lg:py-16 lg:divide-x-2 lg:divide-primary-yellow-light2">
          <div className="md:col-span-5 mb-3">
            <h1 className="text-primary-dark2 text-base md:text-2xl font-medium mb-4 md:mb-8 md:max-w-[330px]">{content.productSubTitle}</h1>
            <p className="text-primary-dark2 font-normal md:max-w-[294px]">{content.productSubDescription}</p>
          </div>
          <div className="md:col-span-7 md:pl-20">
            {content.productFeatures?.map((item) => (
              <div key={item.id} className="flex items-start mb-8">
                <img src={cmsMediaUrl(item.image.data.attributes.url)} alt={item.image.data.attributes.name} className=" mr-5 w-1/5  md:w-auto" />
                <p className="text-primary-dark2 font-normal text-base md:text-lg md:max-w-[220px]">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UssdHero;
