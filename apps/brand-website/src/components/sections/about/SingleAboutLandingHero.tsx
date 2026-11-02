import Image from 'next/image';
import Link from 'next/link';
import { AboutUsCMS } from '../../../../types';
import AboutIdea from './AboutIdea';
import Journey from './Journey';

type SingleProductLandingHeroProps = {
  item: AboutUsCMS;
};
const SingleAboutLandingHero = ({ item }: SingleProductLandingHeroProps) => {
  return (
    <section id="singleProductLandingHero" className="relative bg-primary-dark2 pt-[104px] pb-14">
      <Image
        src={'/artwork/Light-accent.png'}
        width={536.676}
        height={433.404}
        alt={'light-accent'}
        className="absolute animate-pulse top-0"
      />
      <main className="lg:max-w-4xl xl:max-w-[67.5rem] 2xl:max-w-[67.5rem] mx-auto px-4 md:px-0">
        <div className=" mb-14 max-w-[275px] md:max-w-[577px] mx-auto">
          <div className="text-center text-2xl md:text-5xl lg:text-6xl font-extrabold">
            <h1 className="text-white md:leading-[63.133px] md:tracking-[-1.174px]">
              {item.data.attributes.sections?.[0]?.title}
              <span className="text-primary-amber ml-3 mb-2 md:mb-4 lg:mb-6 ">
                {item.data.attributes.sections?.[0]?.keyword}
              </span>
            </h1>
          </div>
          <p className="text-center text-white text-base md:text-xl font-normal  mb-2.5 md:mb-7 lg:mb-7">
            {item.data.attributes.sections?.[0]?.description}
          </p>
          <div className="flex justify-center">
            <div className="inline-flex">
              <Link
                href={item.data.attributes.sections?.[0]?.buttonLink1 || '/'}
                target="_blank"
                className="inline-flex items-center whitespace-nowrap btn-shadow border stroke-primary-white border-primary-white hover:bg-primary-white bg-primary-white text-black rounded-[6.532px] px-6 py-3  text-sm font-semibold"
              >
                {item.data.attributes.sections?.[0]?.buttonLabel1}
              </Link>
              <div className="mx-2" />
              <Link
                href={item?.data.attributes.sections?.[0]?.buttonLink2 || '/'}
                className="inline-flex items-center whitespace-nowrap btn-shadow bg-primary-light2 hover:bg-primary-light3 hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-light  text-white px-6 py-3 rounded-[6.532px] text-sm font-semibold"
              >
                {item.data.attributes.sections?.[0]?.buttonLabel2}
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto p-8 lg:pt-[58px] lg:px-[94px]  lg:pb-[56px] rounded-2xl bg-[rgba(251,251,251,0.10)]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:divide-x divide-primary-light2">
            {item.data.attributes.sections?.[0].optionColumns?.map((option) => (
              <div key={option.title} className="text-left md:last:pl-8 lg:last:w-full">
                <h2 className="text-primary-white font-bold text-2xl lg:text-3xl">{option.title}</h2>
                {/* {option.features.map((feature, index) => (
                  <div key={feature.id} className={` ${index === 0 ? 'mb-6' : 'md-8'}`}>
                    <p className="lg:w-[394px] text-white font-inter text-base lg:text-xl font-normal pt-8 md:px-0">
                      {feature.description}
                    </p>
                  </div>
                ))} */}
                <p className="lg:w-[394px] text-white font-inter text-base lg:text-xl font-normal pt-8 md:px-0">
                  {option.description}
                </p>
              </div>
            ))}
          </div>
          <hr className="h-[1px] mt-9 mb-9  bg-primary-light2 border-transparent" />
          {/* Idea Of More Content goes here... */}
          <AboutIdea item={item} />

          <hr className="h-[1px] mt-9  bg-primary-light2 border-transparent" />
        </div>
      </main>

      {/* Our Journey Carousel Content Goes here.... */}
      <Journey data={item} />
    </section>
  );
};

export default SingleAboutLandingHero;
