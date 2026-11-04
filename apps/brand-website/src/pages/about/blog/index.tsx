import axios from 'axios';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect, useState, useMemo } from 'react';
import { ArticleCMS } from '../../../../types';
import Footer from '../../../components/Navigation/Footer';
import Header from '../../../components/Navigation/Header';
import HeaderCategories from '../../../components/Navigation/HeaderCategories';
import CallToActionProducts from '../../../components/sections/CallToActionProducts';
import BlogCarousel from '../../../components/sections/blog/BlogCarousel';
import BlogCardGrid from '../../../components/sections/blog/BlogCardGrid';
import { CMS_AUTH_HEADERS, CMS_URL } from '../../../utils/cms';

const FEATURED_COUNT = 3;

const Page = ({ articles }: { articles: Array<ArticleCMS> }) => {
  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Blog',
    headline: `Blog : Olive Tree Media Limited`,
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

  const router = useRouter();
  const [filteredArticles, setFilteredArticles] = useState<ArticleCMS[]>(articles);

  useEffect(() => {
    if (router.isReady) {
      const categoryQuery = router.query.category;
      if (!categoryQuery || categoryQuery === 'all') {
        // No category selected, or "All" is selected — show all articles
        setFilteredArticles(articles);
      } else {
        // Filter articles by selected category
        const _filteredArticles = articles.filter((article) => {
          return article.attributes.categories.data?.some(
            (category) => category.attributes.slug === categoryQuery,
          );
        });
        setFilteredArticles(_filteredArticles);
      }
    }
  }, [articles, router.isReady, router.query.category]);

  // Split all articles into featured (for carousel) - always based on full list
  const featured = useMemo(() => {
    const sorted = [...articles].sort(
      (a, b) =>
        new Date(b.attributes.publishedAt).getTime() -
        new Date(a.attributes.publishedAt).getTime()
    );
    return sorted.slice(0, FEATURED_COUNT);
  }, [articles]);

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
        <title>Blog: Olive Tree Media Limited</title>
        <meta name="author" content="Olive Tree Media Limited" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Olive Tree Media Limited" />
        <meta name="twitter:creator" content="@Olive Tree Media Limited" />
        <meta name="twitter:url" content="https://www.olivetreehub.com/" />
        <meta name="twitter:title" content="Blog: Olive Tree Media Limited" />
        <meta
          name="twitter:description"
          content="Your world of more bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money. Contact us today"
        />
        <meta name="twitter:image" content="https://olivetreehub.com/artwork/olivetreelogo-light.svg" />
        <meta name="twitter:image:alt" content="Olive Tree Media Limited logo" />
        <meta property="og:title" content="Blog: Olive Tree Media Limited" />
        <meta property="og:url" content="https://olivetreehub.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Blog: Olive Tree Media Limited" />
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
      <Header />

      {/* Featured carousel - always shows latest 3 articles */}
      {featured.length > 0 && (
        <BlogCarousel articles={featured} autoAdvanceMs={10000} />
      )}

      {/* Product Updates - hero, categories, and articles all in one section */}
      <section className="relative bg-primary-dark2 pt-12 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
          {/* Hero text */}
          <div className="max-w-3xl mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
              Product Updates
            </h1>
            <p className="text-base md:text-lg text-white/70 max-w-2xl">
              We're constantly making Olive Tree better every week. This is where we announce new
              features and product enhancements!
            </p>
          </div>

          {/* Category navigation */}
          <div className="border-t border-white/10 pt-4 mb-10">
            <HeaderCategories />
          </div>

          {/* Articles grid - always show all filtered articles (including carousel featured) */}
          {filteredArticles.length > 0 && (
            <BlogCardGrid articles={filteredArticles} />
          )}

          {/* Fallback when no articles */}
          {filteredArticles.length === 0 && (
            <div className="py-12 text-center">
              <p className="text-white/60 text-lg">No articles found.</p>
            </div>
          )}
        </div>
      </section>

      <CallToActionProducts />
      <Footer />
    </main>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps() {
  const response = await axios.get(`${CMS_URL}/api/blogs?sort=publishedAt:DESC&populate=deep,2`, {
    headers: CMS_AUTH_HEADERS,
  });
  let articles = await response.data.data;

  // Ensure articles are sorted by latest publish date as a fallback
  articles = articles.sort(
    (a, b) =>
      new Date(b.attributes.publishedAt).getTime() -
      new Date(a.attributes.publishedAt).getTime()
  );

  return {
    props: {
      articles,
    },
  };
}

export default Page;
