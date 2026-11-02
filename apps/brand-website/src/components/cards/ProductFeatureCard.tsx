import { ArrowRightIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { BongaOverviewItemsEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';

interface ProductFeatureCardProps {
  item: BongaOverviewItemsEntity;
}
const ProductFeatureCard = ({ item }: ProductFeatureCardProps) => {
  const logoUrl = item.logo?.data?.attributes?.url;
  const logoName = item.logo?.data?.attributes?.name || item.title;
  const hasLink = Boolean(item.btnLabel && item.btnLink);

  return (
    <div>
      {logoUrl ? (
        <Image
          src={cmsMediaUrl(logoUrl)}
          width={79.974}
          height={79.974}
          alt={logoName}
          className="mx-auto"
        />
      ) : null}
      <h1 className=" font-semibold text-lg mb-1 text-gray-900 text-center">{item.title}</h1>
      <div className="max-w-[17rem] mx-auto">
        <p className=" font-normal text-sm mb-3 text-gray-600 text-center">{item.description}</p>
      </div>
      {hasLink ? (
        <div className="flex justify-center items-center">
          <Link href={item.btnLink || ''} className="text-primary-bonga font-normal hover:font-semibold mr-2">
            {item.btnLabel}
          </Link>
          <ArrowRightIcon className=" w-4 h-4 text-primary-bonga font-normal hover:font-semibold" />
        </div>
      ) : null}
    </div>
  );
};

export default ProductFeatureCard;
