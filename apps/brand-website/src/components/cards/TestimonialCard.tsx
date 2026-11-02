import Image from 'next/image';
import Markdown from 'react-markdown';
import { TestimonialEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';
interface TestimonialCardProps {
  item: TestimonialEntity;
}

const TestimonialCard = (props: TestimonialCardProps) => {
  const { item } = props;
  const logoData = item.logo?.data;
  const logoUrl = logoData?.attributes?.url;
  const logoName = logoData?.attributes?.name;

  return (
    <div className="rounded-[20px] py-8 px-5 md:py-16 mg:pt-[52.14px] md:pb-[35.86px] md:pl-[70px] md:pr-[57.68px] bg-primary-light3 h-full flex flex-col">
      <div className="slide-content relative">
        <Image
          src={'/artwork/Union.svg'}
          alt={'union'}
          className="absolute -top-2 right-0"
          width={137.32}
          height={100.76}
        />
        <Markdown className="font-regular text-sm md:text-base text-white mb-4 md:mb-4 w-4/5 mt-auto">
          {item.description}
        </Markdown>
        <div className="flex mt-auto">
          {!logoUrl ? (
            <>
              <p className=" my-auto font-bold text-sm md:text-base text-primary-dark">- {item.organizationName}</p>
            </>
          ) : (
            <>
              <img
                src={cmsMediaUrl(logoUrl)}
                alt={logoName || item.organizationName}
                className="w-16 h-auto rounded-full mr-2 grayscale hover:grayscale-0 cursor-pointer"
              />
              <p className=" my-auto font-bold text-sm md:text-base text-primary-dark">- {item.organizationName}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
