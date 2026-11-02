import Link from 'next/link';
import type { RefObject } from 'react';
import { SliderEntity } from '../../../types/home.interface';

interface HeroTopCardProps {
  item: SliderEntity[] | null | undefined;
  el: RefObject<HTMLDivElement>;
  currentIndex: number;
}

const HeroTopCard = ({ item, el, currentIndex }: HeroTopCardProps) => {
  const currentItem = item?.[currentIndex];

  return (
    <div className=" max-w-[626px] mx-auto pt-20 px-4 md:px-0">
      <h1 className="text-center text-white text-2xl md:text-4xl lg:text-6xl font-extrabold">{item?.[0]?.title1}</h1>
      <h1 className="text-center text-primary-amber text-2xl md:text-4xl lg:text-6xl font-extrabold mb-2 md:mb-4 lg:mb-6 ">
        <span ref={el}></span>
      </h1>
      <p className="hidden md:block text-center text-white text-base md:text-2xl leading-8 font-normal  mb-2.5 md:mb-3.5 lg:mb-7">
        {currentItem?.description1}
      </p>
      <div className="flex justify-center">
        <div className="inline-flex">
          <Link
            href={currentItem?.buttonLink1 || ''}
            className="inline-flex items-center whitespace-nowrap btn-shadow bg-white hover:bg-opacity-80 text-gray-700 px-3 py-2 md:px-6 md:py-3 rounded-md text-sm font-semibold"
          >
            {currentItem?.buttonLabel1}
          </Link>
          <div className="mx-2 5" />
          <Link
            href={currentItem?.buttonLink2 || ''}
            className="inline-flex items-center whitespace-nowrap btn-shadow bg-primary-light2 hover:bg-primary-light3 hover:bg-opacity-80 focus:ring-4 focus:outline-none focus:ring-primary-light  text-white px-3 py-2 md:px-6 md:py-3 rounded-md text-sm font-semibold"
          >
            {currentItem?.buttonLabel2}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroTopCard;
