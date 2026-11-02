import { useRef } from 'react';
import Marquee from 'react-fast-marquee';
import swipercore from 'swiper';
import { Autoplay, Keyboard } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SectionsEntity } from '../../../types/home.interface';
import ProductBriefCard from '../cards/ProductBriefCard';

interface IProductsBriefSliderProps {
  data: SectionsEntity[] | null;
}

swipercore.use([Autoplay]);

/**
 * @param data IProductsSlider
 * @returns items of type IProductsSlider
 */
const ProductsBriefSlider = ({ data }: IProductsBriefSliderProps) => {
  const product = data?.[1]?.items;

  const swiperref = useRef<swipercore>();

  return (
    <section className="container xl:max-w-[67.5rem] my-5 md:my-11 mx-auto">
      <main className="px-4 md:pr-0 md:pl-0 overflow-visible hidden lg:flex">
        <Marquee autoFill className="overflow-x-visible flex" style={{ overflowX: 'visible' }}>
          {product && product.map((item) => <ProductBriefCard key={item.id} item={item} />)}
        </Marquee>
      </main>
      <main className="px-4 md:pr-0 md:pl-0 lg:hidden">
        <Swiper
          spaceBetween={14}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 14,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
            1536: {
              slidesPerView: 3,
              spaceBetween: 14,
            },
          }}
          modules={[Autoplay, Keyboard]}
          keyboard={true}
          speed={3000}
          onSwiper={(swiper) => {
            swiper.wrapperEl.style.transitionTimingFunction = 'linear';
          }}
          className="overflow-visible"
        >
          {product &&
            product.map((item) => (
              <SwiperSlide key={item.id} className="h-auto w-auto  md:max-w-[351px] lg:min-w-[351px]">
                <ProductBriefCard item={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </main>
    </section>
  );
};

export default ProductsBriefSlider;
