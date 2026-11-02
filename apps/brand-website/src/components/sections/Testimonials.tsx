import React from 'react';
import Marquee from 'react-fast-marquee';
import { Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionsEntity } from '../../../types/home.interface';
import TestimonialCard from '../cards/TestimonialCard';
interface ITestimonialProps {
  data: SectionsEntity[] | null;
}

/**
 *
 * @param data: ISectionTestimonial
 * @returns items of type ITestimonial
 */
const Testimonials = ({ data }: ITestimonialProps) => {
  const testimony = data?.[2];

  //before:absolute before:bg-primary-dark before:-right-[50%] before:h-full before:w-full before:-z-10 before:top-0
  return (
    <div className="overflow-hidden">
      <section id="testimonials" className="container xl:max-w-[67.5rem] mx-auto relative mb-11">
        <div className="before:absolute before:bg-primary-dark2 before:-right-[100%] before:h-full before:w-full before:-z-10 before:top-0" />
        <main className=" md:rounded-l-[20px] py-4 md:py-24 bg-primary-dark2 ">
          <div className="px-4 md:px-24">
            <div className="flex flex-col md:flex-row justify-between">
              <div className="basis-2/4 md:mt-4">
                <h5 className="text-primary-light2 text-2xl md:text-4xl font-regular">{testimony?.label1}</h5>
              </div>
              <div className="basis-2/4 z-10">
                <h3 className=" text-white text-4xl md:text-6xl font-black mb-5 max-w-[27rem]">
                  {testimony?.label2}
                  <span className=" text-primary-light2">+</span> {testimony?.label3}
                </h3>
                <div className="max-w-[27rem] z-10">
                  <p className="text-white font-normal md:text-xl">{testimony?.description}</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row mb-5 md:mb-10">
              <div className="basis-2/4 flex items-end z-10">
                <h3 className="text-white text-2xl md:text-3xl font-bold">{testimony?.label4}</h3>
              </div>
            </div>
          </div>
          <div className="hidden md:block absolute w-[790px] h-[790px] -right-24 bottom-[10%] origin-[48%_center]">
            <div className="sphere-variant"></div>
          </div>
          <div className="px-4 md:pr-0 md:pl-24 lg:hidden">
            <Swiper
              spaceBetween={16}
              slidesPerView={'auto'}
              modules={[Autoplay, Keyboard]}
              keyboard={true}
              className="overflow-visible"
            >
              {testimony?.testimonial?.map((item) => (
                <SwiperSlide key={item.id} className="md:min-w-[638px] max-w-[638px] h-auto">
                  <TestimonialCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="px-4 md:pr-0 md:pl-24 hidden lg:flex">
            <Marquee autoFill className="overflow-visible" style={{ overflow: 'visible' }}>
              {testimony?.testimonial?.map((item) => (
                <div key={item.id} className="md:min-w-[638px] max-w-[638px] pr-4 md:h-[320px]">
                  <TestimonialCard item={item} />
                </div>
              ))}
            </Marquee>
          </div>
        </main>
      </section>
    </div>
  );
};

export default Testimonials;
