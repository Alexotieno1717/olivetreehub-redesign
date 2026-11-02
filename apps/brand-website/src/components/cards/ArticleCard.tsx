import Markdown from 'marked-react';
import Link from 'next/link';
import { Attributes } from '../../../types';
import { cmsMediaUrl } from '../../utils/cms';
import { formatDate, truncate } from '../../utils/helpers';

interface ArticleCardProps {
  item: { id: number; attributes: Attributes };
}

const ArticleCard = ({ item }: ArticleCardProps) => {
  return (
    <div className="mb-4 md:mb-8 lg:mb-12 last:mb-0">
      <ul className="flex flex-row items-center mt-0 mr-6 space-x-1">
        {item?.attributes?.categories?.data?.map((category) => (
          <li key={category.id}  className=" text-primary-light2 font-bold text-xs">
            <Link href={`/about/blog?category=${category.attributes.slug}`}>
              {category.attributes.name} |
            </Link>
          </li>
        ))}
        <li className=" text-white font-medium text-xs">{formatDate(item?.attributes?.publishedAt)}</li>
      </ul>
      <hr className="bg-primary-light2 text-primary-light2 h-[0.867px] border-none w-full my-4 mb-6" />
      <Link href={`/about/blog/${item?.attributes?.slug}`}>
        <div className="grid sm:grid-cols-12 gap-x-12">
          <div className=" order-2 md:order-1 sm:col-span-7">
            <h1 className=" font-bold text-2xl lg:text-3xl text-primary-light2 my-3 md:mb-6 lg:mb-9">
              {item?.attributes?.title}
            </h1>
            <div className=" prose prose-p:font-light prose-p:text-base prose-p:text-white">
              <Markdown value={truncate(item?.attributes?.excerpt, 40)} />
            </div>
          </div>
          <div className="order-1 md:order-2 sm:col-span-5">
            <img
              src={cmsMediaUrl(item?.attributes.image.data?.attributes.url)}
              alt={item?.attributes.image.data?.attributes.url}
              className=" rounded-3xl w-full h-auto"
            />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ArticleCard;
