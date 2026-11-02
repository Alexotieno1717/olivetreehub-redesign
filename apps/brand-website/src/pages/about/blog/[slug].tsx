import Head from 'next/head';
import Script from 'next/script';
import { ArticleCMS } from '../../../../types';
import Footer from '../../../components/Navigation/Footer';
import Header from '../../../components/Navigation/Header';
import CallToActionProducts from '../../../components/sections/CallToActionProducts';
import ArticleContent from '../../../components/sections/blog/ArticleContent';
import ArticlesContainer from '../../../components/sections/blog/ArticlesContainer';
import LandingHeroBlog from '../../../components/sections/blog/LandingHero';
import { CMS_AUTH_HEADERS, CMS_URL } from '../../../utils/cms';

const Page = ({ article }: { article: ArticleCMS }) => {
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
      <Header />
      <LandingHeroBlog
        id={'Blog.id'}
        title={'Product Updates'}
        description={
          'We’re constantly making Olive Tree better every week. This is where we announce new features and product enhancements!'
        }
      >
        <ArticlesContainer>
          <ArticleContent item={article} />
        </ArticlesContainer>
        <CallToActionProducts />
        <Footer />
      </LandingHeroBlog>
    </main>
  );
};

export async function getServerSideProps({ params }: { params: { slug: string } }) {
  let article = null;
  try {
    const response = await fetch(`${CMS_URL}/api/blogs?filters[slug][$eq]=${encodeURIComponent(params.slug)}&populate=deep`, {
      headers: CMS_AUTH_HEADERS,
    });
    if (!response.ok) {
      throw new Error(`CMS responded with ${response.status}`);
    }
    const payload = await response.json();
    article = payload?.data?.[0] ?? null;
  } catch (error) {
    throw new Error(`Failed to load CMS data for blog slug: ${params.slug}`);
  }

  if (!article) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      article,
    },
  };
}

export default Page;
