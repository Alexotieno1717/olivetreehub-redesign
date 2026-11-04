import Head from 'next/head';
import Script from 'next/script';
import Link from 'next/link';
import Image from 'next/image';
import { marked } from 'marked';
import { useEffect, useState } from 'react';
import { ArticleCMS } from '../../../../types';
import Footer from '../../../components/Navigation/Footer';
import Header from '../../../components/Navigation/Header';
import CallToActionProducts from '../../../components/sections/CallToActionProducts';
import BlogCardGrid from '../../../components/sections/blog/BlogCardGrid';
import { CMS_AUTH_HEADERS, CMS_URL, cmsMediaUrl } from '../../../utils/cms';
import { formatDate, findArticlesWithSameTag } from '../../../utils/helpers';

// Olive leaf decorative SVG
function OliveLeaf({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M60 110C60 110 20 80 20 50C20 30 35 15 50 15C55 15 58 17 60 20C62 17 65 15 70 15C85 15 100 30 100 50C100 80 60 110 60 110Z" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0.3"/>
      <path d="M60 110V30" stroke="currentColor" strokeWidth="1" opacity="0.2"/>
      <path d="M60 70C50 65 40 60 35 55" stroke="currentColor" strokeWidth="0.75" opacity="0.15"/>
      <path d="M60 80C70 75 80 68 85 62" stroke="currentColor" strokeWidth="0.75" opacity="0.15"/>
      <path d="M60 55C52 50 44 45 40 40" stroke="currentColor" strokeWidth="0.75" opacity="0.15"/>
      <path d="M60 65C68 60 76 55 80 50" stroke="currentColor" strokeWidth="0.75" opacity="0.15"/>
    </svg>
  );
}

const Page = ({ article, relatedArticles, articleIndex }: { article: ArticleCMS; relatedArticles: ArticleCMS[]; articleIndex: number }) => {
  const imageUrl = cmsMediaUrl(article.attributes?.image?.data?.attributes?.url);
  const firstCategory = article.attributes?.categories?.data?.[0];
  const content = article.attributes?.content || '';
  // Estimate reading time: ~225 words per minute
  const wordCount = content.replace(/<[^>]*>/g, '').split(/\s+/).filter(Boolean).length;
  const readingTime = Math.max(1, Math.ceil(wordCount / 225));

  // Reading progress bar
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingShare, setShowFloatingShare] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const articleEl = document.getElementById('article-body');
      if (articleEl) {
        const rect = articleEl.getBoundingClientRect();
        const totalHeight = articleEl.scrollHeight - window.innerHeight;
        const scrolled = -rect.top + (window.innerHeight * 0.3);
        const progress = Math.min(Math.max(scrolled / totalHeight, 0), 1);
        setScrollProgress(progress);
      }
      // Show floating share after scrolling past hero
      setShowFloatingShare(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    headline: `${article.attributes?.title} : Olive Tree Media Limited`,
    description: 'Your world of more bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money',
    url: 'https://olivetreehub.com/',
    logo: 'https://olivetreehub.com/artwork/olivetreelogo-light.svg',
    sameAs: [
      'https://www.facebook.com/OliveTreeHub/',
      '',
      '',
      'https://www.instagram.com/otmbulksms/?hl=en',
      '',
      'https://www.linkedin.com/company/olive-tree-media-limited/mycompany/',
      '',
    ],
  };

  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content="Olive Tree Media Limited" />
        <meta name="description" content="Your world of more" />
        <meta
          name="keywords"
          content="bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>{article.attributes?.title} : Olive Tree Media Limited</title>
        <meta name="author" content="Olive Tree Media Limited" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Olive Tree Media Limited" />
        <meta name="twitter:creator" content="@Olive Tree Media Limited" />
        <meta name="twitter:url" content="https://www.olivetreehub.com/" />
        <meta name="twitter:title" content={`${article.attributes?.title}: Olive Tree Media Limited `} />
        <meta
          name="twitter:description"
          content="Your world of more bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money. Contact us today"
        />
        <meta name="twitter:image" content="https://olivetreehub.com/artwork/olivetreelogo-light.svg" />
        <meta name="twitter:image:alt" content="Olive Tree Media Limited logo" />
        <meta property="og:title" content={`${article.attributes?.title}: Olive Tree Media Limited `} />
        <meta property="og:url" content="https://olivetreehub.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={`${article.attributes?.title}: Olive Tree Media Limited `} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://olivetreehub.com/artwork/olivetreelogo-light.svg" />
        <meta
          property="og:description"
          content="Your world of more bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money. Contact us today"
        />
        <script
          key={'structured-data'}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-V086GTGM81" />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-V086GTGM81');`}
      </Script>
      {/* Reading progress bar — fixed at top */}
      <div className="fixed top-0 left-0 right-0 z-50 h-0.5 bg-transparent">
        <div
          className="h-full bg-primary-light2 transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Floating share button */}
      <div
        className={`
          fixed right-10 bottom-24 z-40
          transition-all duration-500 ease-out
          ${showFloatingShare ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        `}
      >
        <div className="flex flex-col items-center gap-2">
          <a
            href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.attributes?.title || '')}&url=${encodeURIComponent(`https://olivetreehub.com/about/blog/${article.attributes?.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-primary-light2/10 border border-primary-light2/20 text-primary-light2 hover:bg-primary-light2/20 transition-all duration-300"
            aria-label="Share on Twitter"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
            </svg>
          </a>
          <a
            href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://olivetreehub.com/about/blog/${article.attributes?.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-primary-light2/10 border border-primary-light2/20 text-primary-light2 hover:bg-primary-light2/20 transition-all duration-300"
            aria-label="Share on Facebook"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(`https://olivetreehub.com/about/blog/${article.attributes?.slug}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 flex items-center justify-center rounded-full bg-primary-light2/10 border border-primary-light2/20 text-primary-light2 hover:bg-primary-light2/20 transition-all duration-300"
            aria-label="Share on LinkedIn"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </a>
        </div>
      </div>

      <Header />

      {/* ===== EDITORIAL HERO — Asymmetric split layout ===== */}
      <section className="relative bg-primary-dark2 overflow-hidden">
        {/* Decorative olive leaf — top right */}
        <OliveLeaf className="absolute -top-16 -right-16 w-56 h-56 text-primary-light2 rotate-12 opacity-20" />

        <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-6">
          {/* Top bar: back nav + meta */}
          <div className="flex items-center justify-between pt-24 pb-4">
            <Link
              href="/about/blog"
              className="inline-flex items-center gap-2 text-white/70 hover:text-primary-light2 transition-colors duration-300 text-xs font-medium uppercase tracking-widest group"
            >
              <svg
                className="w-3.5 h-3.5 transition-transform duration-300 group-hover:-translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>All articles</span>
            </Link>
          </div>

          {/* Split hero: image + title */}
          <div className="flex flex-col lg:flex-row lg:gap-0 gap-0">
            {/* Image side — full width on mobile, half on desktop */}
            <div className="relative w-full lg:w-1/2 lg:min-h-[400px] xl:min-h-[480px]">
              {imageUrl ? (
                <>
                  <Image
                    src={imageUrl}
                    alt={article.attributes?.title || ''}
                    fill
                    className="object-cover"
                    quality={90}
                    priority
                  />
                  {/* Gradient overlay — fades to dark on the right edge on desktop */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark2 via-transparent to-transparent opacity-60" />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-primary-dark2 lg:via-primary-dark2/20 hidden lg:block" />
                </>
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary-dark to-primary-dark2 min-h-[300px] lg:min-h-[500px]" />
              )}
            </div>

            {/* Title side — overlays image on desktop */}
            <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 lg:w-1/2 lg:pl-10 xl:pl-14 lg:pr-6">
              <div className="px-6 py-10 lg:py-16 lg:bg-primary-dark2 lg:rounded-l-2xl lg:border lg:border-white/[0.06] lg:shadow-2xl">
                {/* Decorative accent line — top */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-gradient-to-r from-primary-light2 to-transparent" />
                  <span className="text-[9px] uppercase tracking-[0.3em] text-primary-light2/40 font-medium">Article</span>
                </div>

                {/* Category badge */}
                {firstCategory && (
                  <Link
                    href={`/about/blog?category=${firstCategory.attributes.slug}`}
                    className="inline-flex items-center gap-2.5 px-4 py-2 mb-5 text-[10px] font-bold uppercase tracking-[0.25em] text-primary-light2 bg-primary-light2/10 border border-primary-light2/25 rounded-md hover:bg-primary-light2/20 hover:border-primary-light2/40 transition-all duration-300 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-light2 group-hover:scale-125 transition-transform duration-300" />
                    {firstCategory.attributes.name}
                  </Link>
                )}

                {/* Title — large editorial type */}
                <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-4xl font-extrabold text-white leading-[1.1] tracking-tight mb-4">
                  {article.attributes?.title}
                </h1>

                {/* Subtitle */}
                {article.attributes?.subtitle && (
                  <p className="text-sm md:text-base text-white/50 leading-relaxed font-light mb-7 max-w-md">
                    {article.attributes.subtitle}
                  </p>
                )}

                {/* Divider */}
                <div className="w-12 h-px bg-gradient-to-r from-primary-light2/60 to-primary-light2/10 mb-5" />

                {/* Meta row with decorative elements */}
                <div className="flex items-center gap-4">
                  {/* Reading time icon */}
                  <div className="flex items-center gap-2 px-3 py-1.5 bg-white/[0.03] rounded-md border border-white/[0.05]">
                    <svg className="w-3.5 h-3.5 text-primary-light2/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" />
                      <circle cx="12" cy="12" r="10" />
                    </svg>
                    <span className="text-white/50 text-[11px] font-medium">
                      {readingTime} min read
                    </span>
                  </div>
                  <span className="text-white/10">•</span>
                  <time className="text-white/35 text-[11px] font-medium md:hidden flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 text-primary-light2/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    {formatDate(article.attributes?.publishedAt)}
                  </time>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLE BODY ===== */}
      <article id="article-body" className="relative bg-primary-dark2">
        {/* Decorative olive leaf — left side */}
        <OliveLeaf className="absolute top-24 -left-12 w-40 h-40 text-primary-light2 -rotate-45 opacity-10 hidden lg:block" />

        <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:gap-8 xl:gap-12">
            {/* Sidebar — sticky on desktop */}
            <aside className="hidden lg:block lg:w-36 xl:w-44 flex-shrink-0">
              <div className="sticky top-32">
                {/* Article number or decorative element */}
                <div className="mb-8">
                  <div className="text-5xl font-extrabold text-primary-light2/10 leading-none">
                    {String(articleIndex).padStart(2, '0')}
                  </div>
                </div>

                {/* Table of contents hint */}
                <div className="border-l border-white/[0.06] pl-3">
                  <p className="text-[9px] uppercase tracking-[0.2em] text-white/20 font-medium mb-2">
                    In this article
                  </p>
                  <p className="text-white/40 text-[11px] leading-relaxed">
                    {article.attributes?.subtitle?.substring(0, 100)}
                    {article.attributes?.subtitle?.length > 100 ? '...' : ''}
                  </p>
                </div>
              </div>
            </aside>

            {/* Main content — narrow reading column */}
            <div className="flex-1 lg:pr-4 xl:pr-8 py-20 md:py-28 lg:py-0 md:mt-4">
              {/* Mobile category + meta */}
              <div className="hidden md:block flex items-center gap-3 mb-16 md:mb-24">
                {firstCategory && (
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-primary-light2 border border-primary-light2/30 rounded-sm">
                    <span className="w-1 h-1 rounded-full bg-primary-light2" />
                    {firstCategory.attributes.name}
                  </span>
                )}
                <span className="text-white/15">•</span>
                <time className="text-white/30 text-xs font-medium">
                  {formatDate(article.attributes?.publishedAt)}
                </time>
              </div>

              {/* Markdown content with enhanced prose */}
              <div className="article-prose">
                <div
                  className="
                    prose-p:text-white/70
                    prose-p:leading-[1.85]
                    prose-p:font-light
                    prose-p:text-base
                    md:prose-p:text-lg
                    prose-p:mb-6
                    prose-headings:text-white
                    prose-headings:font-bold
                    prose-headings:leading-tight
                    prose-headings:mt-10
                    prose-headings:mb-4
                    prose-h2:text-2xl
                    prose-h2:md:text-3xl
                    prose-h3:text-xl
                    prose-h3:md:text-2xl
                    prose-a:text-primary-light2
                    prose-a:no-underline
                    prose-a:border-b
                    prose-a:border-primary-light2/30
                    hover:prose-a:border-primary-light2
                    prose-strong:text-white
                    prose-em:text-white/80
                    prose-em:italic
                    prose-li:text-white/70
                    prose-li:leading-relaxed
                    prose-ul:my-6
                    prose-ol:my-6
                    prose-code:text-primary-light2
                    prose-code:bg-primary-light2/10
                    prose-code:px-1.5
                    prose-code:py-0.5
                    prose-code:rounded
                    prose-code:text-sm
                    prose-code:font-mono
                    prose-blockquote:border-l-2
                    prose-blockquote:border-primary-light2
                    prose-blockquote:pl-6
                    prose-blockquote:py-4
                    prose-blockquote:my-8
                    prose-blockquote:text-white/60
                    prose-blockquote:italic
                    prose-blockquote:text-lg
                    prose-hr:border-white/10
                    prose-hr:my-12
                    prose-img:rounded-xl
                    prose-img:my-10
                    prose-pre:bg-white/[0.04]
                    prose-pre:border
                    prose-pre:border-white/[0.06]
                    prose-pre:rounded-xl
                    prose-pre:p-6
                    prose-table:w-full
                    prose-table:my-8
                    prose-th:text-white
                    prose-th:font-semibold
                    prose-th:text-sm
                    prose-th:uppercase
                    prose-th:tracking-wider
                    prose-th:py-3
                    prose-th:px-4
                    prose-th:border-b
                    prose-th:border-white/10
                    prose-td:text-white/70
                    prose-td:py-3
                    prose-td:px-4
                    prose-td:border-b
                    prose-td:border-white/5
                    prose-u:underline
                  "
                  dangerouslySetInnerHTML={{ __html: marked.parse(content) }}
                />
              </div>

              {/* Article ending — decorative close */}
              <div className="mt-20 md:mt-28 md:mb-4">
                <div className="flex items-center gap-5">
                  <div className="flex-1 h-px bg-gradient-to-r from-primary-light2/30 to-transparent" />
                  <OliveLeaf className="w-7 h-7 text-primary-light2/40 flex-shrink-0" />
                  <div className="flex-1 h-px bg-gradient-to-l from-primary-light2/30 to-transparent" />
                </div>
                <p className="text-center text-white/20 text-[11px] mt-5 font-medium uppercase tracking-[0.2em]">
                  End of article
                </p>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* ===== RELATED ARTICLES ===== */}
      {relatedArticles.length > 0 && (
        <section className="relative bg-primary-dark2 overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-20 bg-gradient-to-b from-primary-light2/20 to-transparent" />

          <div className="lg:max-w-4xl xl:max-w-[1031px] mx-auto px-6 py-16 md:py-24">
            {/* Section header */}
            <div className="mb-10 md:mb-14">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-px bg-primary-light2/30" />
                <span className="text-[10px] uppercase tracking-[0.25em] text-primary-light2/60 font-bold">
                  Continue reading
                </span>
              </div>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
                Related articles
              </h2>
            </div>

            <BlogCardGrid articles={relatedArticles.slice(0, 3)} />
          </div>
        </section>
      )}

      <CallToActionProducts />
      <Footer />
    </main>
  );
};

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  let article = null;
  let allArticles: ArticleCMS[] = [];
  try {
    const response = await fetch(`${CMS_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(params.slug)}&populate=deep`, {
      headers: CMS_AUTH_HEADERS,
    });
    if (!response.ok) {
      throw new Error(`CMS responded with ${response.status}`);
    }
    const payload = await response.json();
    article = payload?.data?.[0] ?? null;

    // Fetch all articles for related posts
    const allResponse = await fetch(`${CMS_URL}/api/blogs?populate=deep`, {
      headers: CMS_AUTH_HEADERS,
    });
    if (allResponse.ok) {
      const allPayload = await allResponse.json();
      allArticles = allPayload?.data || [];
    }
  } catch (error) {
    throw new Error(`Failed to load CMS data for blog slug: ${params.slug}`);
  }

  if (!article) {
    return {
      notFound: true,
    };
  }

  // Find related articles by category, excluding the current article
  const relatedArticles = findArticlesWithSameTag(article, allArticles)
    .filter((a) => a.id !== article.id)
    .slice(0, 3);

  // Calculate article index based on published date (newest first)
  const sortedArticles = [...allArticles].sort((a, b) => {
    const dateA = new Date(a.attributes?.publishedAt || a.attributes?.createdAt || 0).getTime();
    const dateB = new Date(b.attributes?.publishedAt || b.attributes?.createdAt || 0).getTime();
    return dateB - dateA;
  });
  const articleIndex = sortedArticles.findIndex((a) => a.id === article.id) + 1 || 1;

  return {
    props: {
      article,
      relatedArticles,
      articleIndex,
    },
  };
}

export default Page;
