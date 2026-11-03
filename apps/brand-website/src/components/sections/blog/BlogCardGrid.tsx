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
    <div className="w-full">
        {/* Section header - only render when title is provided */}
        {title && (
          <div className="mb-10 md:mb-14">
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              {title}
            </h3>
            <div className="mt-4 w-12 h-1 bg-primary-light2 rounded-full" />
          </div>
        )}

        {/* Editorial card list */}
        <div className="flex flex-col gap-5">
          {articles.map((article, index) => {
            const imageUrl = cmsMediaUrl(article?.attributes?.image?.data?.attributes?.url);
            const firstCategory = article?.attributes?.categories?.data?.[0];
            const isEven = index % 2 === 0;

            return (
              <Link
                key={article.id}
                href={`/about/blog/${article?.attributes?.slug}`}
                className="group block"
              >
                <article
                  className={`
                    relative flex flex-col md:flex-row
                    rounded-2xl overflow-hidden
                    bg-white/[0.04] border border-white/[0.06]
                    transition-all duration-500
                    hover:bg-white/[0.08] hover:border-primary-light2/30 hover:shadow-[0_0_40px_-8px_rgba(98,184,78,0.15)]
                  `}
                >
                  {/* Accent bar on the left */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary-light2/0 group-hover:bg-primary-light2 transition-colors duration-500 z-10" />

                  {/* Image container */}
                  <div
                    className={`
                      relative overflow-hidden flex-shrink-0
                      ${isEven ? 'md:w-[280px] lg:w-[340px]' : 'md:w-[240px] lg:w-[300px]'}
                      w-full md:aspect-[4/3] lg:aspect-square
                    `}
                  >
                    {imageUrl ? (
                      <Image
                        src={imageUrl}
                        alt={article?.attributes?.title || ''}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        quality={85}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-primary-dark to-primary-dark2" />
                    )}
                    {/* Dark gradient overlay on hover */}
                    <div className="absolute inset-0 bg-primary-dark2/0 group-hover:bg-primary-dark2/20 transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="flex flex-col flex-grow p-5 md:p-7 lg:p-8 justify-center">
                    {/* Meta row: category + date */}
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      {firstCategory && (
                        <span className="inline-flex items-center px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-primary-light2 bg-primary-light2/10 rounded-full">
                          {firstCategory.attributes.name}
                        </span>
                      )}
                      <time className="text-white/40 text-xs font-medium">
                        {formatDate(article?.attributes?.publishedAt)}
                      </time>
                    </div>

                    {/* Title */}
                    <h4 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight mb-3 group-hover:text-primary-light2 transition-colors duration-300 line-clamp-2">
                      {article?.attributes?.title}
                    </h4>

                    {/* Excerpt */}
                    <p className="text-white/50 text-sm md:text-base leading-relaxed line-clamp-2 mb-5">
                      {article?.attributes?.excerpt}
                    </p>

                    {/* Read more indicator */}
                    <div className="flex items-center gap-3 text-primary-light2 text-sm font-semibold mt-auto">
                      <span className="transition-all duration-300">Read article</span>
                      <svg
                        className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
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
  );
};

export default BlogCardGrid;
