import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState, useCallback, useRef } from 'react';
import { ArticleCMS } from '../../../../types';
import { cmsMediaUrl } from '../../../utils/cms';
import { formatDate } from '../../../utils/helpers';

interface BlogCarouselProps {
  articles: ArticleCMS[];
  autoAdvanceMs?: number;
}

const BlogCarousel = ({ articles, autoAdvanceMs = 10000 }: BlogCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const progressRef = useRef<NodeJS.Timeout | null>(null);
  const totalSlides = articles.length;

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    setProgress(0);
  }, []);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    setProgress(0);
  }, [totalSlides]);

  // Progress bar timer
  useEffect(() => {
    if (totalSlides <= 1) {
      if (progressRef.current) clearInterval(progressRef.current);
      return;
    }
    const interval = 100; // update every 100ms
    const step = (interval / autoAdvanceMs) * 100;
    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          return 100;
        }
        return prev + step;
      });
    }, interval);
    return () => {
      if (progressRef.current) clearInterval(progressRef.current);
    };
  }, [autoAdvanceMs, totalSlides, currentIndex]);

  // Auto-advance timer
  useEffect(() => {
    if (totalSlides <= 1) return;
    timerRef.current = setInterval(goNext, autoAdvanceMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext, autoAdvanceMs, totalSlides]);

  if (!articles || articles.length === 0) return null;

  const currentArticle = articles[currentIndex];
  const imageUrl = cmsMediaUrl(currentArticle?.attributes?.image?.data?.attributes?.url);

  return (
    <section
      className="relative w-full overflow-hidden bg-primary-dark2"
      aria-label="Featured articles carousel"
    >
      {/* Full-width hero slide - increased height */}
      <div className="relative w-full h-[85vh] min-h-[600px] max-h-[900px]">
        {/* Background image with overlay */}
        <div className="absolute inset-0">
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={currentArticle?.attributes?.title || ''}
              fill
              className="object-cover transition-opacity duration-700 ease-out"
              priority={currentIndex === 0}
              quality={90}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-primary-dark2 to-primary-light3" />
          )}
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary-dark2/95 via-primary-dark2/60 to-primary-dark2/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark2/80 via-transparent to-primary-dark2/20" />
        </div>

        {/* Content overlay with slide-in animation */}
        <div className="relative z-10 flex flex-col justify-end h-full px-6 md:px-12 lg:px-24 pb-16 md:pb-24 lg:pb-32">
          <div
            key={currentIndex}
            className="max-w-4xl animate-carousel-slide-in"
            style={{
              animation: 'carouselSlideIn 0.6s ease-out forwards',
            }}
          >
            {/* Category tags */}
            {currentArticle?.attributes?.categories?.data && (
              <div className="flex flex-wrap gap-2 mb-4">
                {currentArticle.attributes.categories.data.map((category) => (
                  <Link
                    key={category.id}
                    href={`/about/blog?category=${category.attributes.slug}`}
                    className="inline-block px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary-dark2 bg-primary-light2 rounded-full hover:bg-primary-light transition-colors"
                  >
                    {category.attributes.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Title */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              <Link
                href={`/about/blog/${currentArticle?.attributes?.slug}`}
                className="hover:text-primary-light transition-colors"
              >
                {currentArticle?.attributes?.title}
              </Link>
            </h2>

            {/* Excerpt */}
            <p className="text-base md:text-lg text-white/80 max-w-2xl mb-6 line-clamp-2">
              {currentArticle?.attributes?.excerpt}
            </p>

            {/* Meta and CTA */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <Link
                href={`/about/blog/${currentArticle?.attributes?.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-light2 text-primary-dark2 font-bold text-sm uppercase tracking-wider rounded-full hover:bg-primary-light transition-colors"
              >
                Read more
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <span className="text-white/60 text-sm">
                {formatDate(currentArticle?.attributes?.publishedAt)}
              </span>
            </div>
          </div>
        </div>


        {/* Dot indicators with progress bar - RedBull style */}
        {totalSlides > 1 && (
          <div className="absolute bottom-6 left-6 md:left-12 lg:left-24 z-20 flex items-center gap-2">
            {articles.map((_, index) => (
              <button
                key={index}
                onClick={() => goTo(index)}
                className={`relative rounded-full transition-colors duration-300 ease-out ${
                  index === currentIndex
                    ? 'w-10 h-2.5 bg-white/20 overflow-hidden'
                    : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === currentIndex ? 'true' : 'false'}
              >
                {index === currentIndex && (
                  <div
                    className="h-full bg-primary-light2 rounded-full transition-none"
                    style={{ width: `${progress}%` }}
                  />
                )}
              </button>
            ))}
          </div>
        )}

        {/* Slide counter */}
        {totalSlides > 1 && (
          <div className="absolute top-6 right-6 z-20 text-white/60 text-sm font-medium">
            <span className="text-white font-bold">{currentIndex + 1}</span>
            <span className="mx-1">/</span>
            <span>{totalSlides}</span>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogCarousel;
