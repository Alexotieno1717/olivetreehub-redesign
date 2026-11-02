import Link from 'next/link';
import { SliderEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';
import { AnimatedDiv } from '../ui/ComponentsStyled';

interface HeroBottomSliderCardProps {
  item: SliderEntity[] | null | undefined;
  isShowing: boolean;
  durationStart: number;
  durationEnd: number;
  currentIndex: number;
}

const HeroBottomSliderCard = ({
  item,
  isShowing,
  durationStart,
  durationEnd,
  currentIndex,
}: HeroBottomSliderCardProps) => {
  const currentItem = item?.[currentIndex];
  return (
    <>
      <AnimatedDiv
        $isShowing={isShowing}
        $durationStart={durationStart}
        $durationEnd={durationEnd}
        className="grid lg:grid-cols-2 lg:gap-16 relative overflow-visible"
      >
        <div className="p-4 md:p-8 lg:pt-[75.68px] lg:pb-[78.84px] lg:pl-[95.39px]">
          <div className="grid grid-cols-1 gap-4 md:gap-[22px] md:w-1/2 lg:w-[410px]">
            <h2 className="text-white font-normal text-2xl md:text-3xl text-center md:text-left">
              {currentItem?.title1} <span className="text-primary-amber font-black">{currentItem?.keyword2}</span>
            </h2>
            <div className="flex justify-center md:justify-start">
              <p className="text-white md:text-lg font-normal text-center md:text-left">{currentItem?.description2}</p>
            </div>
            <div className="flex justify-center md:justify-start">
              <div className="inline-flex">
                <Link
                  href={currentItem?.buttonLink1 || ''}
                  className="inline-flex items-center whitespace-nowrap btn-shadow bg-white hover:bg-opacity-80 text-gray-700 px-3 py-2 md:px-6 md:py-3 rounded-md text-sm font-semibold mr-2.5"
                >
                  {currentItem?.buttonLabel1}
                </Link>
                <Link
                  href={currentItem?.buttonLink2 || ''}
                  className="inline-flex items-center whitespace-nowrap btn-shadow bg-primary-light2 hover:bg-primary-light3 focus:ring-4 focus:outline-none focus:ring-primary-light  text-white px-3 py-2 md:px-6 md:py-3 rounded-md text-sm font-semibold"
                >
                  {currentItem?.buttonLabel2}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden md:block  relative">
          <img
            src={cmsMediaUrl(currentItem?.image.data.attributes.url)}
            alt={currentItem?.image.data.attributes.name}
            className="absolute md:right-2 lg:right-12 -bottom-[75px] flex-shrink-0 md:w-1/2 lg:w-full h-auto"
            loading="lazy"
          />
        </div>
      </AnimatedDiv>
    </>
  );
};

export default HeroBottomSliderCard;
