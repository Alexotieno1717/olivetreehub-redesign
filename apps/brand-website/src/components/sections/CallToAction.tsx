import Link from 'next/link';
import { SectionsEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';

interface CallToActionProps {
  data: SectionsEntity[] | null;
}

const CallToAction = ({ data }: CallToActionProps) => {
  // If data is an array and has items, use the specific item at index 7; otherwise, set it to null
  const ctaItem = data && data.length > 7 ? data[7] : null;

  if (!ctaItem) {
    // If there's no data or the structure is unexpected, return a fallback or nothing
    return null;
  }

  return (
    <section className="lg:max-w-4xl xl:max-w-[67.5rem] 2xl:max-w-[67.5rem]  mx-4 lg:mx-auto bg-primary-dark2 p-8 md:p-14 md:py-20 relative rounded-3xl mt-0 md:mt-20">
      <div className="grid md:grid-cols-2">
        <div>
          <div className="lg:max-w-[350px]">
            <h1 className=" font-semibold text-white text-2xl md:text-3xl mb-2 md:mb-4 text-center md:text-left">
              {ctaItem.title}
            </h1>
            <p className=" font-normal text-primary-lighter2 md:text-lg mb-3 md:mb-6 lg:mb-8 text-center md:text-left">
              {ctaItem.description}
            </p>
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex">
                <Link
                  href={ctaItem.buttonLink1 || ''}
                  className="inline-flex items-center whitespace-nowrap btn-shadow bg-white hover:bg-opacity-80 text-gray-700 px-3 py-2 md:px-6 md:py-3 rounded-md text-sm font-semibold mr-2.5"
                >
                  {ctaItem.buttonLabel1}
                </Link>
                <Link
                  href={ctaItem.buttonLink2 || ''}
                  className="inline-flex items-center whitespace-nowrap btn-shadow bg-primary-light2 hover:bg-primary-light3 focus:ring-4 focus:outline-none focus:ring-primary-light  text-white px-3 py-2 md:px-6 md:py-3 rounded-md text-sm font-semibold"
                >
                  {ctaItem.buttonLabel2}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block">
          <img
            src={cmsMediaUrl(ctaItem.media?.data?.attributes?.url)}
            alt={ctaItem.media?.data?.attributes?.name || ''}
            className="absolute md:w-1/2 lg:-top-11 lg:w-[510px]"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
