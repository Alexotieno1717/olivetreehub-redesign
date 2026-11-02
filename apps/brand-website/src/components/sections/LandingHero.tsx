import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import HeroBottomSliderCard from '../cards/HeroBottomSliderCard';
import HeroTopCard from '../cards/HeroTopCard';

// Import Swiper styles
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { SectionsEntity, SliderEntity } from '../../../types/home.interface';

interface ILandingHeroProps {
  data: SectionsEntity[] | null;
}

/**
 * @param data ILandingHero
 * @returns items of type ILanding
 */

let typed: Typed;
const LandingHero = (props: ILandingHeroProps) => {
  const { data } = props;

  const landing = data?.[0];

  const [index, setIndex] = useState(0);
  const [isShowing, setIsShowing] = useState(false);

  // const handlePrevClick = useCallback(() => {
  //   typed.reset();
  //   if (index === 0) {
  //     return; // Prevent sliding to the left when at the beginning
  //   }

  //   setIndex(index + 1);
  // }, [index]);

  // const handleNextClick = useCallback(() => {
  //   if (isShowing === true) {
  //     setIsShowing(false);
  //   }

  //   if (typed && typed.constructor === Typed) {
  //     typed.destroy();
  //   }
  //   if (data.data.length === index + 1) {
  //     // typed.destroy();

  //     setIndex(0);
  //   } else {
  //     setIndex(index + 1);
  //   }
  //   // typed.destroy();
  // }, [data.data.length, index, isShowing]);

  const handlePrevClick = () => {
    // setIndex((prevIndex) => (prevIndex === 0 ? data?.length - 1 : prevIndex - 1));
    // if (index === 0) {
    //   return; // Prevent sliding to the left when at the beginning
    // } else {
    //   if (isShowing === true) {
    //     setIsShowing(false);
    //     setIndex(index - 1);
    //     setIsShowing(true);
    //   }
    // }
  };

  const handleNextClick = () => {
    if (isShowing === true) {
      setIsShowing(false);
    }
    // setIndex((prevIndex) => (prevIndex === data?.length - 1 ? 0 : prevIndex + 1));

    // if (data.data.length === index + 1) {
    //   setIndex(0);
    //   typed.arrayPos = 0;
    //   typed.destroy();
    //   setIsShowing(true);
    // } else {
    //   setIndex(index + 1);
    //   typed.arrayPos = index + 1;
    //   setIsShowing(true);
    // }
  };

  const handleSlider = (pos: number) => {
    setIndex(pos);
  };

  const el = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!el.current) return;

    typed = new Typed(el.current, {
      strings: Array.isArray(landing?.keyword) ? landing?.keyword?.map((item) => item.label) : [],
      typeSpeed: 100, // Typing speed in milliseconds
      backSpeed: 100, // Backspacing speed in milliseconds
      startDelay: 1000, // Delay before typing starts in milliseconds
      backDelay: 7000, // Delay before backspacing starts in milliseconds
      loop: true,
      showCursor: true,
      onBegin(self) {
        setIsShowing(true);
      },
      preStringTyped: (arrayPos, self) => {
        //if (isShowing === false) {
        setIndex(arrayPos);
        setIsShowing(true);

        //}
      },
      onStringTyped(arrayPos, self) {
        //if (isShowing === true) {
        setTimeout(() => {
          setIsShowing(false);
        }, 7000);
        //}
      },
    });
  }, [landing?.keyword]);

  return (
    <section id="landingHero" className=" relative xl:min-h-screen bg-primary-dark2 md:pb-6">
      <Image
        src={'/artwork/Light-accent.png'}
        width={536.676}
        height={433.404}
        alt={'light-accent'}
        className="absolute animate-pulse"
      />
      <div>
        <div className="px-4 lg:px-0">
          <HeroTopCard item={landing?.slider as SliderEntity[]} el={el} currentIndex={index} />
          <div className="my-8 xl:my-16 2xl:my-24"></div>
        </div>
        <div className=" md:rounded-3xl bg-slider-card lg:max-w-4xl w-full xl:max-w-[67.5rem] 2xl:max-w-[64.87rem] relative lg:mx-auto lg:px-0 overflow-visible">
          <Image
            src={'/artwork/Gradient.svg'}
            alt={'/artwork/Gradient.svg'}
            className="rounded-tl-3xl absolute top-0 left-0"
            width={242}
            height={242}
          />
          <HeroBottomSliderCard
            durationStart={(landing?.slider?.[index]?.keyword1?.length || 0) * 100}
            durationEnd={8000 + (landing?.slider?.[index]?.keyword2?.length || 0) * 100}
            isShowing={isShowing}
            item={landing?.slider as SliderEntity[]}
            currentIndex={index}
          />
          <div
            onClick={() => handlePrevClick()}
            className="md:hidden bg-control-btns w-14 h-14 hidden md:flex items-center justify-center absolute -left-6 rounded-full cursor-pointer hover:bg-primary-amber/75 z-20"
          >
            <ChevronLeftIcon className="h-6 w-6 text-gray-300" />
          </div>
          <div
            onClick={() => handleNextClick()}
            className="md:hidden bg-control-btns w-14 h-14 hidden md:flex items-center justify-center absolute -right-6 rounded-full cursor-pointer hover:bg-primary-amber/75 z-20"
          >
            <ChevronRightIcon className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingHero;
