import Head from 'next/head';

//import Markdown from 'marked-react';
import Link from 'next/link';
import Script from 'next/script';

const markdownData = `
## OLIVE TREE MEDIA LIMITED 
### PRIVACY POLICY

This is the Privacy Policy of Olive Tree Media Limited  (“OTM”, "we", "us" and/or "our"). At OTM, we aim to do  
privacy the right way, wherever we operate. As a business, we are committed to respecting and protecting the  
privacy of all individuals with whom we interact in accordance with applicable privacy law.  
**1.  Application**  
This privacy policy relates to :  
- How  we handle information received or collected about you as an individual through the Website,  
- How we communicate with you as an individual, and  
- Your rights as an individual in respect to such information and communications  

**2.  About our Services**  
We are a mobile software development company and a licensed bulk messaging solutions and content  
service provider supplying services to our customers through our online self-service platform on our Website  
(the **“Services”**). While providing Services to our customers, we act either as the controller or the processor,  
depending on the situation.  

Our customers are mainly companies that integrate our Services into their business operations through their own  
software applications (via API) or  by using our online self-service platform to send their communications with  
their end-users. We are not in a direct relationship with our customers’ end-users, so we distribute these  
communications through telecom operators and other third party service providers. When we do this, we act as  
the processor on behalf of our customers, and process the relevant data for the sole purpose of providing our  
Services to them. We do that within limits and according to customers’ instructions and in line with the Services  
Terms of Use [ http://www.olivetreehub.com/Terms-of-Use ] or similar agreement concluded with the  
customer.  

We are a controller when we process personal data for our own purposes and do not act on behalf of  
someone else.  

**3.  Definitions**  

In this privacy policy, reference to  :  

- **“Website”** is to www.olivetreehub.com and  any other website owned or operated by us.  
- **“Services”** is to the suite of products and services offered by us on our online self-service platform  
located on the Website including www.bongasms.co.ke .

**4.  Information we collect**  

The information which we collect may include :  
a.   Any personal details about you as an individual which you provide to us through the Website such as  
your name, address, telephone number, job title etc.  
b.  If you are an end-user of one of our customers they may provide us with certain information in order to  
use our Services such as your phone number, email address, company’s name and industry, billing and  
financial details.  
c.  Your IP Address, a string of numbers unique to your computer as well as logs of your activities on our  
online platform that is recorded by our web server when you request any page or component of the  
Website. This information may be used to monitor your usage of the Website.

We do not collect data that includes communications content, message text, voice, video or audio media,  
documents, or images exchanged between the customer and their end-users via our Services.  

**5.  Use of your information**  

a.  Any information about you as an individual which  we collect from the Website or any end-user’s  
information that is supplied to us by a customer will be used in accordance with the Kenya Data  
Protection Act, No.24 of 2019 and other applicable laws.  
b.  The information will be used to deal with you and / or  your company in relation to the provision of the  
specific Services supplied directly by us or on behalf of a customer, including the provision of after sales  
service.  
c.  In certain cases, we may use your email address to send you information about our Services. If so, you  
will be offered the option to opt out of receiving such emails.  
d.  We may need to pass your personal information to a third party for administrative purposes to the extent  
strictly necessary for them to perform specific actions on our behalf. Third parties are not allowed to use  
your personal information for their own purposes.  
e.  We may engage suppliers (also known as vendors or service providers) to help us in the processing of  
your personal data for the activities that we conduct as a controller or a processor, as the case may be.  
f.  Under no circumstances will we hold payment details such as your card number, expiry date and  
security PIN. Where payments to you are handled by our customer through the use of our Service, you  
should visit their website to view their privacy policy.  
g.  In certain circumstances and depending on the Service supplied, it may be necessary to use your  
identification data as part of a due diligence or verification process on behalf of a customer. Such  
verification will be conducted in accordance with contractual agreement with the customer and subject  
to applicable privacy law.  
h.  We may leverage your account or usage data to troubleshoot and detect problems with the network,  
prevent fraud or other illicit activities that contravene applicable laws, and keep our Services secure.  
i.  We may share your personal data with authorised legal authorities due to relevant legislation, such as a  
judicial proceeding, court order, or legal process served on us (e.g. for criminal procedures).  

**6.  Your rights in respect to your personal data**  

Using available channels, you have the right to:  
a.  Withdraw your consent to our processing of your personal data, without affecting the lawfulness of  
processing based on consent before its withdrawal.  
b.  Request a copy of the personal data we hold about you.  
c.  Ask us to rectify or complete your personal data that you think is inaccurate or incomplete.  
d.  Ask us to erase your personal data in certain circumstances.  
e.  Ask us to restrict the processing of your personal data in certain circumstances.  
f.  If we process your personal data by automated means based on your consent or upon a contractual  
relation with you, you can exercise the right of data portability.  
g.  object to the processing of your data for marketing purposes, you can do it at any time by using the  
unsubscribe link provided in our marketing communications.  
h.  If you wish to exercise a certain right or resolve a complaint regarding the processing of your personal  
data, you can contact our Data Protection Officer by sending an email to the following email address.  
Email to : dpo@olivetreemobile.co  

**8.  Changes to our Privacy Policy**  

OTM reserves the right to update or modify this Privacy Policy at any time and from time to time by  
posting a modified version including the effective date on the Website. By continuing to access or use  
the Service after the posting of any modified Terms, you agree to be bound by such modified terms.  

**Dated: 1st October 2023**`;

const PrivacyPolicy = () => {
  const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    headline: 'Privacy Policy : Olive Tree Media Limited',
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
    <main className="h-screen">
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
        <title>Privacy & Policy : Olive Tree Media Limited</title>
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
      <object data="/OTM-PRIVACY-POLICY.pdf" type="application/pdf" width={'100%'} height={'100%'}>
        <p>
          unable to display PDF file. <Link href={'/OTM-PRIVACY-POLICY.pdf'}>Download instead</Link>
        </p>
      </object>
    </main>
  );
};

export default PrivacyPolicy;
