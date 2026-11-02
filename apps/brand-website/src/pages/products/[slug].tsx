import Head from 'next/head';
import Script from 'next/script';
import { ProductPage } from '../../../types';
import Footer from '../../components/Navigation/Footer';
import Header from '../../components/Navigation/Header';
import CallToActionProducts from '../../components/sections/CallToActionProducts';
import IntergrationProducts from '../../components/sections/IntergrationProducts';
import FeaturesHero from '../../components/sections/products/FeaturesHero';
import BenefitsHero from '../../components/sections/products/single/BenefitsHero';
import HowItWorksHero from '../../components/sections/products/single/HowItWorksHero';
import SingleProductLandingHero from '../../components/sections/products/single/LandingHero';
import { CMS_AUTH_HEADERS, CMS_URL } from '../../utils/cms';

// Links - socialmedia,sms,smsplus,ussd,olivepay
const Page = ({ product }: { product: ProductPage }) => {
  const sections = product?.attributes?.sections ?? [];
  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Product',
    headline: `${product?.attributes?.title} : Olive Tree Media Limited`,
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

  const colors = {
    bg: sections[0]?.backgroundColor,
    buttonColor: sections[0]?.buttonBackgroundColor,
    dividerColor: sections[0]?.dividerColor,
  };
  return (
    <main>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="title" content={`${product.attributes?.title}: Olive Tree Media Limited`} />
        <meta name="description" content="Your world of more" />
        <meta
          name="keywords"
          content="bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money"
        />
        <meta name="robots" content="index, follow" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <title>{product.attributes?.title}: Olive Tree Media Limited</title>
        <meta name="author" content="Olive Tree Media Limited" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@Olive Tree Media Limited" />
        <meta name="twitter:creator" content="@Olive Tree Media Limited" />
        <meta name="twitter:url" content="https://www.olivetreehub.com/" />
        <meta name="twitter:title" content={`${product.attributes?.title}: Olive Tree Media Limited`} />
        <meta
          name="twitter:description"
          content="Your world of more bulksms, ussd, shortcodes, sms, sender ID, bulk data, kplc, airtime, mobile money. Contact us today"
        />
        <meta name="twitter:image" content="https://olivetreehub.com/artwork/olivetreelogo-light.svg" />
        <meta name="twitter:image:alt" content="Olive Tree Media Limited logo" />
        <meta property="og:title" content={`${product.attributes?.title}: Olive Tree Media Limited`} />
        <meta property="og:url" content="https://olivetreehub.com/" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content={`${product.attributes?.title}: Olive Tree Media Limited`} />
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
      <Header colors={colors} />
      {product.attributes?.slug === 'olivepay' ? (
          <>
            <SingleProductLandingHero item={product.attributes?.sections[0]} />
            <FeaturesHero item={product.attributes?.sections[1]} />
            <IntergrationProducts data={product.attributes?.sections[2]} />
            <section>
              <div className="md:py-7"></div>
            </section>
            <BenefitsHero data={product.attributes?.sections[4]} color={colors.buttonColor} />
            <CallToActionProducts data={product.attributes?.sections[5]} />
            <Footer colors={colors} />
          </>
      ) : (
          <>
            <SingleProductLandingHero item={product.attributes?.sections[0]} />
            <FeaturesHero item={product.attributes?.sections[1]} />
            <IntergrationProducts data={product.attributes?.sections[2]} />
            <HowItWorksHero data={product.attributes?.sections[3]} />
            <BenefitsHero data={product.attributes?.sections[4]} color={colors.buttonColor} />
            <CallToActionProducts data={product.attributes?.sections[5]} />
            <Footer colors={colors} />
          </>
      )}
    </main>
  );
};

export async function getServerSideProps({ params }: { params: { slug: string; id: number } }) {
  let id = '';
  if (params.slug === 'sms') {
    id = '4';
  } else if (params.slug === 'smsplus') {
    id = '5';
  } else if (params.slug === 'ussd') {
    id = '6';
  } else if (params.slug === 'olivepay') {
    id = '7';
  }
  if (!id) {
    throw new Error(`Unsupported product slug: ${params.slug}`);
  }

  let product;
  try {
    const response = await fetch(`${CMS_URL}/api/pages/${id}?populate=deep`, {
      headers: CMS_AUTH_HEADERS,
    });
    if (!response.ok) {
      throw new Error(`CMS responded with ${response.status}`);
    }
    const payload = await response.json();

    product = payload?.data ?? null;
  } catch (error) {
    throw new Error(`Failed to load CMS data for product slug: ${params.slug}`);
  }

  // params contains the slug `slug`.
  // If the route is like /products/payments, then params.slug is payments

  // Pass data to the page via props
  return { 
    props: { 
      product 
    }
  };
}

export default Page;
