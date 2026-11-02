import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';
import { useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { Autoplay, Controller, Keyboard, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { AboutUsCMS, SlidesEntity } from '../../../../types';
import JourneyCard from '../../cards/JourneyCard';

interface AboutJourneyProps {
  data: AboutUsCMS;
}

function Journey({ data }: AboutJourneyProps) {
  const slides: SlidesEntity[] | null | undefined = data.data.attributes.sections?.[1].slides;
  const swiperRef = useRef<SwiperType | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideClick = (index: number) => {
    if (index === activeIndex) {
      return; // Clicked on the active slide, do nothing
    }

    setActiveIndex(index);
    swiperRef.current?.slideTo(index); // Slide to the clicked year index
  };

  const handlePrevClick = () => {
    if (activeIndex === 0) {
      return; // Prevent sliding to the left when at the beginning
    }

    setActiveIndex(activeIndex - 1);
    swiperRef.current?.slidePrev();
  };

  const handleNextClick = () => {
    const slides = data.data.attributes.sections?.[1]?.slides;

    if (slides && activeIndex < slides.length - 1) {
      setActiveIndex(activeIndex + 1);
      swiperRef.current?.slideNext();
    }
  };

  return (
    <section className="lg:max-w-4xl xl:max-w-[67.5rem] 2xl:max-w-[67.5rem] mx-auto px-4 md:px-0">
      <div className="w-1031 rounded-2xl relative mt-20">
        <div className="text-primary-white text-4xl font-normal leading-[1.08571] md:ml-20 lg:ml-36 mb-10">
          {data.data.attributes.sections?.[1].title}
        </div>
        <div className="max-w-[924px] mx-auto bg-white rounded-2xl overflow-visible px-4 md:px-20 md:pb-14 mb-16">
          <Swiper
            navigation
            modules={[Autoplay, Navigation, Keyboard, Controller]}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => (swiperRef.current = swiper)}
            loop
            controller={{ control: swiperRef.current }}
            // className="swiper-img"
            className="overflow-y-visible"
            style={{overflowY: 'visible'}}
          >
            {slides?.map((item) => (
              <SwiperSlide key={item.id} className="h-auto relative">
                <JourneyCard
                  item={item}
                  handleNext={() => handleNextClick()}
                  handlePrevious={() => handlePrevClick()}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="years-carousel max-w-[924px] mx-auto flex space-x-12 md:space-x-32 pl-4 md:pl-24 md:pb-28">
          {slides?.map((item, index) => (
            <div key={index} className="z-10">
              <button
                key={index}
                onClick={() => handleSlideClick(index)} // Use handleSlideClick to update activeIndex and slide to the clicked year
                className={`rounded-full ${
                  index === activeIndex
                    ? 'bg-primary-white border border-[#11DC62] w-5 h-5  transition duration-300 ease-in-out'
                    : 'bg-primary-light w-3 h-3 '
                }`}
              >
                <div>
                  <p
                    className={`mt-8 transition-all ${
                      index === activeIndex ? 'text-primary-light2' : 'text-[#DCD411]'
                    }`}
                  >
                    {item.year}
                  </p>
                  <span
                    className={`hidden md:block text-center font-inter text-18 font-normal font-inter font-500 leading-211/100 ${
                      index === activeIndex ? 'text-primary-white' : 'text-primary-light2'
                    }`}
                  >
                    {item.caption}
                  </span>
                </div>
              </button>
            </div>
          ))}
        </div>
        <div
          onClick={() => handlePrevClick()}
          className={`w-14 h-14 hidden md:flex items-center justify-center absolute top-[39%] -left-[1%] rounded-full ${
            activeIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-[#65DB9F66]/10'
          }`}
        >
          <ChevronLeftIcon className="h-24 w-24 text-primary-light" />
        </div>
        <div
          onClick={() => handleNextClick()}
          // className={`w-14 h-14 hidden md:flex items-center justify-center absolute top-[39%] -right-[1%] rounded-full ${
          //   activeIndex === data.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer hover:bg-[#65DB9F66]/10'
          // }`}
          className={`w-14 h-14 hidden md:flex items-center justify-center absolute top-[39%] -right-[1%] rounded-full ${
            Array.isArray(data) && activeIndex === data.length - 1
              ? 'cursor-not-allowed'
              : 'cursor-pointer hover:bg-[#65DB9F66]/10'
          }`}
        >
          <ChevronRightIcon className="h-24 w-24 text-primary-light" />
        </div>
      </div>
    </section>
  );
}

export default Journey;
