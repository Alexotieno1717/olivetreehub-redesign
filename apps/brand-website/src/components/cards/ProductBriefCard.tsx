import Image from 'next/image';
import Link from 'next/link';
import { ItemsEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';

type ProductBriefCardProps = {
  item: ItemsEntity;
};

const ProductBriefCard = ({ item }: ProductBriefCardProps) => {
  return (
    <div className="h-[290px] w-auto flex-1  md:max-w-[351px] lg:min-w-[351px] mr-4">
      <div className="py-6 px-10 bg-primary-dark2 rounded-2xl h-full flex flex-col ">
        <Image
          src={cmsMediaUrl(item.image.data.attributes.url)}
          width={42.63}
          height={42.63}
          alt={item.image.data.attributes.name}
          className="mx-auto lg:ml-0 mb-3"
        />
        <h1 className=" font-bold text-xl mb-3 text-white text-center lg:text-left">{item.title}</h1>
        <p className=" font-normal text-sm mb-3 text-white text-center lg:text-left">{item.description}</p>
        <div className="flex justify-center lg:justify-start mt-auto">
          <div className="inline-flex">
            <Link
              href={item.link1 || ''}
              className="inline-flex items-center whitespace-nowrap btn-shadow bg-white hover:bg-opacity-80 text-gray-700 px-3 py-2 rounded-md text-xs font-semibold mr-2.5"
            >
              {item.label1}
            </Link>
            <Link
              href={item.link2 || ''}
              className="inline-flex items-center whitespace-nowrap btn-shadow bg-primary-light2 hover:bg-primary-light3 focus:ring-4 focus:outline-none focus:ring-primary-light  text-white px-3 py-2 rounded-md text-xs font-semibold"
            >
              {item.label2}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductBriefCard;
