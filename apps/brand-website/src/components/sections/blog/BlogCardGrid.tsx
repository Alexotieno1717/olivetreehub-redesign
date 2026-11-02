import Image from 'next/image';
import Link from 'next/link';
import { ArticleCMS } from '../../../../types';
import { cmsMediaUrl } from '../../../utils/cms';
import { formatDate } from '../../../utils/helpers';

interface BlogCardGridProps {
  articles: ArticleCMS[];
  title?: string;
}

const BlogCardGrid = ({ articles, title }: BlogCardGridProps) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="w-full bg-primary-dark2 py-12 md:py-16 lg:py-20">
      <div className="max-w-[90rem] mx-auto">
        {/* Section header - only render when title is provided */}
        {title && (
          <div className="mb-10 md:mb-14 px-2">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h3>
            <div className="mt-4 w-12 h-1 bg-primary-light2 rounded-full" />
          </div>
        )}

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {articles.map((article) => {
            const imageUrl = cmsMediaUrl(article?.attributes?.image?.data?.attributes?.url);
            const firstCategory = article?.attributes?.categories?.data?.[0];

            return (
              <Link
                key={article.id}
                href={`/about/blog/${article?.attributes?.slug}`}
                className="group block"
              >
                <article className="flex flex-col h-full rounded-xl overflow-hidden bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/10">
                  {/* Image container */}
                  <div className="relative w-full aspect-[3/2] overflow-hidden">
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={article?.attributes?.title || ''}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        quality={85}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300" />
                    )}
                    {/* Category badge */}
                    {article?.attributes?.categories?.data && firstCategory && (
                      <div className="absolute top-3 left-3">
                        <span className="inline-block px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white bg-primary-light2 rounded-md shadow-md">
                          {firstCategory.attributes.name}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5">
                    {/* Date */}
                    <time className="text-gray-400 text-xs font-medium mb-2">
                      {formatDate(article?.attributes?.publishedAt)}
                    </time>

                    {/* Title */}
                    <h4 className="text-lg font-bold text-gray-900 leading-snug mb-2 group-hover:text-primary-light2 transition-colors duration-300 line-clamp-2">
                      {article?.attributes?.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed line-clamp-2 flex-grow mb-4">
                      {article?.attributes?.excerpt}
                    </p>

                    {/* Read more indicator */}
                    <div className="flex items-center gap-2 text-primary-light2 text-xs font-bold uppercase tracking-wider mt-auto">
                      <span>Read more</span>
                      <svg
                        className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2.5}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BlogCardGrid;
