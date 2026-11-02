import Image from 'next/image';
import { OverviewItemEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';

interface ProductAboutCardProps {
  item: OverviewItemEntity;
}
const ProductAboutCard = ({ item }: ProductAboutCardProps) => {
  const logoUrl = item.logo?.data?.attributes?.url;
  const logoName = item.logo?.data?.attributes?.name || item.title;

  return (
    <div>
      {logoUrl ? (
        <Image
          src={cmsMediaUrl(logoUrl)}
          width={79.974}
          height={79.974}
          alt={logoName}
          className="mx-auto lg:ml-0 "
          unoptimized
        />
      ) : null}
      <h1 className=" font-semibold text-lg mb-1 text-gray-900 text-center lg:text-left">{item.title}</h1>
      <div className="max-w-[15.75rem] mx-auto lg:ml-0">
        <p className=" font-normal text-sm mb-3 text-gray-600 text-center lg:text-left">{item.description}</p>
      </div>
    </div>
  );
};

export default ProductAboutCard;
