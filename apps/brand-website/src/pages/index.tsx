import axios, { AxiosResponse } from 'axios';
import dynamic from 'next/dynamic';
import Head from 'next/head';
import Script from 'next/script';
import { HomeCMS, SectionsEntity } from '../../types/home.interface';
import Footer from '../components/Navigation/Footer';
import Header from '../components/Navigation/Header';
import AboutSection from '../components/sections/AboutSection';
import CallToAction from '../components/sections/CallToAction';
import LicensorsAndPartners from '../components/sections/LicensorsAndPartners';
import ProductOverview from '../components/sections/ProductOverview';
import { structuredData } from '../constants';
import { CMS_AUTH_HEADERS, CMS_URL } from '../utils/cms';

const LandingHero = dynamic(() => import('../components/sections/LandingHero'), { ssr: false });
const ProductsBriefSlider = dynamic(() => import('../components/sections/ProductsBriefSlider'), { ssr: false });
const Testimonials = dynamic(() => import('../components/sections/Testimonials'), { ssr: false });

export default function Home({ home }: { home: HomeCMS }) {
  const licensorsAndPatrners: SectionsEntity[] | null = Array.isArray(home.data.attributes.sections)
    ? home.data.attributes.sections
    : null;

  const ctaHero: SectionsEntity[] | null = Array.isArray(home.data.attributes.sections)
    ? home.data.attributes.sections
    : null;

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
        <title>Olive Tree Media Limited</title>
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
      <LandingHero data={ctaHero} />
      <LicensorsAndPartners licensors={licensorsAndPatrners} />
      <CallToAction data={ctaHero} />
      <AboutSection data={ctaHero} />
      <ProductsBriefSlider data={ctaHero} />
      <ProductOverview data={ctaHero} />
      <Testimonials data={ctaHero} />
      <Footer />
    </main>
  );
}

export async function getServerSideProps() {
  const response: AxiosResponse = await axios.get(`${CMS_URL}/api/pages/1?populate=deep`, {
    headers: CMS_AUTH_HEADERS,
  });
  const home = await response.data;

  return {
    props: {
      home,
    },
  };
}
