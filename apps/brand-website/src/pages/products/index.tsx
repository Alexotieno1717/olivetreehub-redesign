import axios from 'axios';
import Head from 'next/head';
import { Products } from '../../../types';
import Footer from '../../components/Navigation/Footer';
import Header from '../../components/Navigation/Header';
import BongaSmsHero from '../../components/sections/BongaSmsHero';
import CallToActionProducts from '../../components/sections/CallToActionProducts';
import LandingHeroProducts from '../../components/sections/LandingHeroProducts';
import ProductsList from '../../components/sections/ProductsList';
import UssdHero from '../../components/sections/UssdHero';
import Script from 'next/script';
import { CMS_AUTH_HEADERS, CMS_URL } from '../../utils/cms';

const _Products = ({ item }: { item: Products }) => {

  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Products',
    headline: `Products : Olive Tree Media Limited`,
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
    <main className="overflow-x-hidden">
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
        <title>Products: Olive Tree Media Limited</title>
        <meta name="author" content="Olive Tree Media Limited" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Olive Tree Media Limited" />
        <meta name="twitter:creator" content="@Olive Tree Media Limited" />
        <meta name="twitter:url" content="https://www.olivetreehub.com/" />
        <meta name="twitter:title" content="Products: Olive Tree Media Limited" />
        <meta
          name="twitter:description"
          content="Your world of more bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money. Contact us today"
        />
        <meta name="twitter:image" content="https://olivetreehub.com/artwork/olivetreelogo-light.svg" />
        <meta name="twitter:image:alt" content="Olive Tree Media Limited logo" />
        <meta property="og:title" content="Products: Olive Tree Media Limited" />
        <meta property="og:url" content="https://olivetreehub.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Products: Olive Tree Media Limited" />
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
      <LandingHeroProducts content={item.attributes.sections[0]} />
      <UssdHero content={item.attributes.sections[1]} />
      <BongaSmsHero content={item.attributes.sections[2]} />
      <ProductsList products={item.attributes.sections[3].productQuatenary} />
      <CallToActionProducts data={undefined} />
      <Footer />
    </main>
  );
};

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getServerSideProps() {
  const response = await axios.get(`${CMS_URL}/api/pages/3?populate=deep`, {
    headers: CMS_AUTH_HEADERS,
  });
  const item = await response.data.data;

  return {
    props: {
      item,
    },
  };
}

export default _Products;
