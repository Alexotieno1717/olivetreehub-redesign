import {
  AboutScreen,
  IAbout,
  IBongasmsHero,
  ICallToActionHero,
  IFooter,
  ILandingHero,
  ILandingHeroProducts,
  ILicensors,
  IPartners,
  IProductOverview,
  IProducts,
  IProductsSlider,
  ISectionTestimonial,
  IUssdHero,
  singleProductScreen,
} from '../../types';

const CTAHero: ICallToActionHero = {
  id: 'cta',
  data: {
    id: 'cta',
    title: 'Engage customers with messaging for Support',
    descriptionStart: 'Get',
    keyword: 'customized solutions',
    descriptionEnd: 'for your industry and stand out from the noise with direct communication to customers.',
    buttonLabel1: 'Learn more',
    buttonLabel2: 'Get Started',
    buttonLink1: '/products',
    buttonLink2: '/',
    img: '/artwork/Content.svg',
  },
};

const landingHero: ILandingHero = {
  id: 'landingHero',
  keywords: ['Messaging', 'Premium Messaging', 'USSD', 'Payments', 'Olivepay', 'More'],
  data: [
    {
      top: {
        id: 1,
        title: 'Your world of more',
        keyword: 'Messaging',
        description: 'Empower your vision with messaging solutions. Powering communication solutions across Africa.',
        buttonLabel1: 'Bonga by Olive Tree',
        buttonLabel2: 'Talk to us',
        buttonLink1: 'https://bongasms.co.ke/',
        buttonLink2: 'mailto:info@olivetreehub.com',
      },
      bottom: {
        id: 1,
        title: 'Your world of more',
        keyword: 'SMS',
        description:
          'Our messaging service is a Fast, Reliable and Scalable platform suited for efficient engagement with customers.',
        buttonLabel1: 'Learn more',
        buttonLabel2: 'Get started',
        buttonLink1: '/products/sms',
        buttonLink2: 'https://api.olivetreehub.com/settingup',
        img: '/artwork/product-phone/message-phone.png',
      },
    },
    {
      top: {
        id: 2,
        title: 'Your world of more',
        keyword: 'Premium Messaging',
        description: 'Empower your vision with messaging solutions. Powering communication solutions across Africa.',
        buttonLabel1: 'Bonga by Olive Tree',
        buttonLabel2: 'Talk to us',
        buttonLink1: 'https://bongasms.co.ke/',
        buttonLink2: 'mailto:info@olivetreehub.com',
      },
      bottom: {
        id: 2,
        title: 'Your world of more',
        keyword: 'SMS+',
        description:
          'This premium short code service is built to inform, notify, alert, interact, transact and share information with customers.',
        buttonLabel1: 'Learn more',
        buttonLabel2: 'Get started',
        buttonLink1: '/products/smsplus',
        buttonLink2: 'https://api.olivetreehub.com/settingup',
        img: '/artwork/product-phone/message-plus.png',
      },
    },
    {
      top: {
        id: 3,
        title: 'Your world of more',
        keyword: 'USSD',
        description: 'Empower your vision with messaging solutions. Powering communication solutions across Africa.',
        buttonLabel1: 'Bonga by Olive Tree',
        buttonLabel2: 'Talk to us',
        buttonLink1: 'https://bongasms.co.ke/',
        buttonLink2: 'mailto:info@olivetreehub.com',
      },
      bottom: {
        id: 3,
        title: 'Your world of more',
        keyword: 'USSD',
        description:
          "Utilize our USSD platform for timely and secure business messages to customer's mobile phones, evolving with modern communication.",
        buttonLabel1: 'Learn more',
        buttonLabel2: 'Get started',
        buttonLink1: '/products/ussd',
        buttonLink2: 'https://bongaplus.co.ke/',
        img: '/artwork/product-phone/ussd-phone.png',
      },
    },
    {
      top: {
        id: 4,
        title: 'Your world of more',
        keyword: 'Payments',
        description: 'Empower your vision with USSD solutions. Powering communication solutions across Africa.',
        buttonLabel1: 'Bonga by Olive Tree',
        buttonLabel2: 'Talk to us',
        buttonLink1: 'https://bongasms.co.ke/',
        buttonLink2: 'mailto:info@olivetreehub.com',
      },
      bottom: {
        id: 4,
        title: 'Your world of more',
        keyword: 'Payments',
        description: 'Grow your business with Mpesa (C2B, B2C, B2B), Visa, Mastercard and many more payment gateways.',
        buttonLabel1: 'Learn more',
        buttonLabel2: 'Get started',
        buttonLink1: '/products/olivepay',
        buttonLink2: 'https://api.olivetreehub.com/ussd',
        img: '/artwork/product-phone/payment-phone.png',
      },
    },
    {
      top: {
        id: 5,
        title: 'Your world of',
        keyword: 'Olivepay',
        description: 'Scale your start-up with high impact mobile engagement solutions.',
        buttonLabel1: 'Bonga by Olive Tree',
        buttonLabel2: 'Talk to us',
        buttonLink1: 'https://bongasms.co.ke/',
        buttonLink2: 'mailto:info@olivetreehub.com',
      },
      bottom: {
        id: 5,
        title: 'Your world of',
        keyword: 'Olivepay',
        description:
          'Our solutions create, grow and sustain great businesses. We support Africa’s entrepreneurial ecosystem with customized solutions.',
        buttonLabel1: 'Learn more',
        buttonLabel2: 'Get started',
        buttonLink1: '/products/olivepay',
        buttonLink2: '/signup',
        img: '/artwork/product-phone/olivepay-phone.png',
      },
    },
    {
      top: {
        id: 6,
        title: 'Your world of ',
        keyword: 'More',
        description: 'Scale your start-up with high impact mobile engagement solutions.',
        buttonLabel1: 'Bonga by Olive Tree',
        buttonLabel2: 'Talk to us',
        buttonLink1: 'https://bongasms.co.ke/',
        buttonLink2: 'mailto:info@olivetreehub.com',
      },
      bottom: {
        id: 6,
        title: 'Your world of',
        keyword: 'More',
        description:
          'Our solutions create, grow and sustain great businesses. We support Africa’s entrepreneurial ecosystem with customized solutions.',
        buttonLabel1: 'Learn more',
        buttonLabel2: 'Get started',
        buttonLink1: '/products/socialmedia',
        buttonLink2: '/signup',
        img: '/artwork/product-phone/africa-map.png',
      },
    },
  ],
};

const Licensors: ILicensors = {
  id: 'licensors',
  data: [
    {
      id: 'auth-cca',
      img: '/artwork/auth-cca.png',
      name: 'CCA',
      link: '',
    },
  ],
};

const Partners: IPartners = {
  id: 'partners',
  data: [
    {
      top: [
        {
          id: 'value',
          img: '/artwork/value-8.png',
          name: 'Value 8',
          link: '/',
        },
        {
          id: 'pesa',
          img: '/artwork/Pesaflow.png',
          name: 'Pesa FLow',
          link: '/',
        },
        {
          id: 'Retai',
          img: '/artwork/RetaiPay.png',
          name: 'Retai Pay',
          link: '/',
        },
        {
          id: 'Webmasters',
          img: '/artwork/Webmasters.png',
          name: 'Webmasters',
          link: '/',
        },
      ],
      bottom: [
        {
          id: 'airtel',
          img: '/artwork/auth-airtel.png',
          name: 'airtel',
          link: '/',
        },
        {
          id: 'safaricom',
          img: '/artwork/auth-saf.png',
          name: 'safaricom',
          link: '/',
        },
        {
          id: 'telkom',
          img: '/artwork/auth-tel.png',
          name: 'telkom',
          link: '/',
        },
        {
          id: 'equitel',
          img: '/artwork/auth-equitel.png',
          name: 'equitel',
          link: '/',
        },
        {
          id: 'mtn',
          img: '/artwork/auth-mtn.png',
          name: 'mtn',
          link: '/',
        },
      ],
    },
  ],
};

const ProductOverviewMock: IProductOverview = {
  id: 'productOverview',
  data: {
    title: 'We exist to bring you more. Take your business to the next level.',
    description:
      'Our solutions create, grow and sustain great businesses. We support Africa’s entrepreneurial ecosystem with customised solutions.',
    productImg: '/artwork/bonga-overview.png',
    features: [
      {
        id: 'scalable',
        title: 'Scalable',
        description: 'We evolve and adapt to market trends to empower your business.',
        buttonLabel: 'Learn more',
        buttonLink: '/products',
        logoImg: '/artwork/feature-icon.svg',
      },
      {
        id: 'reliable',
        title: 'Reliable',
        description: 'We are your partners; a pat on your back and an inspirational spark.',
        buttonLabel: 'Learn more',
        buttonLink: '/products',
        logoImg: '/artwork/feature-icon.svg',
      },
      {
        id: 'secure',
        title: 'Secure',
        description: 'Integrity and accuracy uphold the quality of information provided by us.',
        buttonLabel: 'Learn more',
        buttonLink: '/products',
        logoImg: '/artwork/feature-icon.svg',
      },
    ],
  },
};

const ProductSliderContent: IProductsSlider = {
  id: 'productsSlider',
  data: [
    {
      id: 'bonga',
      title: 'Bonga',
      description:
        'BongaSMS enables anyone with great content the opportunity to turn it into cash. Harness the power of SMS to build wealth.',
      buttonLabel1: 'Learn more',
      buttonLabel2: 'Get started',
      buttonLink1: '/products/sms',
      buttonLink2: '/',
      logoImg: '/artwork/bonga-icon.svg',
    },
    {
      id: 'bongasms+',
      title: 'BongaSMS +',
      description:
        'This premium short code service is built to inform, notify, alert, interact, transact and share information with customers.',
      buttonLabel1: 'Learn more',
      buttonLabel2: 'Get started',
      buttonLink1: '/products/smsplus',
      buttonLink2: '/',
      logoImg: '/artwork/bonga-icon.svg',
    },
    {
      id: 'ussd',
      title: 'USSD',
      description:
        'Messaging has evolved. And so have we. Use our USSD platform to conveniently send business messages delivered timely and safely to your customers’ mobile .',
      buttonLabel1: 'Learn more',
      buttonLabel2: 'Get started',
      buttonLink1: '/products/ussd',
      buttonLink2: '/',
      logoImg: '/artwork/bonga-icon.svg',
    },
    {
      id: 'olivepay',
      title: 'OlivePay',
      description:
        'Olive Tree provides integrations to Mpesa through third party collaboration for C2B, B2C, B2B clients. We provide access to common payment gateways such Visa, M-',
      buttonLabel1: 'Learn more',
      buttonLabel2: 'Get started',
      buttonLink1: '/products/payments',
      buttonLink2: '/',
      logoImg: '/artwork/bonga-icon.svg',
    },
    {
      id: 'socialMediaForBusiness',
      title: 'Social Media for Business',
      description:
        'Our suite of messaging solutions is growing. Watch out for Whatsapp and more instant messaging channels.',
      buttonLabel1: 'Learn more',
      buttonLabel2: 'Get started',
      buttonLink1: '/products/socialmedia',
      buttonLink2: '/',
      logoImg: '/artwork/bonga-icon.svg',
    },
  ],
};

const testimonials: ISectionTestimonial = {
  id: 'testimonial',
  label: 'Trusted by',
  label2: '1000',
  label3: 'Businesses',
  label4:
    'We are your partners; a pat on your back and an inspirational spark. We evolve and adapt to market trends to empower your business.',
  label5: 'Our Customer Stories',
  data: [
    {
      id: 'Easy Coach',
      companyName: 'Easy Coach',
      testimonial:
        'In the service industry support is everything. Besides offering quality service Olive tree has been exceptional in the support they offer. This has helped us communicate better to our customers hence gaining customer confidence.',
      representative: 'John Doe',
      image: '/artwork/easycoach-icon.jpeg',
    },
    {
      id: 'Minet',
      companyName: 'Minet',
      testimonial:
        'We find Olive Tree&nbsp;to be very&nbsp;reliable and responsive, especially when exploring opportunities for integration. Their support is exceptional; we would recommend&nbsp;Olive Tree to anyone looking for a reliable communications partner.',
      representative: 'John Doe',
      image: '/artwork/minet-icon.png',
    },
    {
      id: 'Save',
      companyName: 'Save',
      testimonial:
        ' I first integrated my systems with Olive Tree in 2018, and from there we have been growing together, I have no regrets. They have a fast and reliable support team that one can rely on 24 hours.',
      representative: 'John Doe',
      image: '',
    },
  ],
};

const about: IAbout = {
  id: 'about',
  data: {
    titleStart: 'Olive Tree is',
    keyword: "Africa's communications powerhouse",
    titleEnd: 'and your trusted partner',
    description:
      'Our solutions create, grow and sustain great businesses. We support Africa’s entrepreneurial ecosystem with customized solutions.',
    features: [
      {
        id: 'scalable',
        title: 'Scalable',
        description: 'We evolve and adapt to market trends to empower your business.',
        logoImg: '/artwork/feature-icon-green.svg',
      },
      {
        id: 'reliable',
        title: 'Reliable',
        description: 'We are your partners; a pat on your back and an inspirational spark.',
        logoImg: '/artwork/feature-icon-green.svg',
      },
      {
        id: 'secure',
        title: 'Secure',
        description: 'Integrity and accuracy uphold the quality of information provided by us.',
        logoImg: '/artwork/feature-icon-green.svg',
      },
      {
        id: 'intergrate',
        title: 'Integrate',
        description: 'Create a seamless experience between your apps and systems using our range of API’s.',
        logoImg: '/artwork/feature-icon-green.svg',
      },
      {
        id: 'unifiedcommunication',
        title: 'Unified communication',
        description: "Africa's source of unified communication",
        logoImg: '/artwork/feature-icon-green.svg',
      },
    ],
  },
};

const footer: IFooter = {
  id: 'footer',
  data: {
    premise: '4th Floor Riara Corporate Suites, Suite 406 Riara Road',
    address: 'P. O. Box 7334 - 00100',
    location: 'Nairobi, Kenya',
    emailLabel: 'Submit your inquiries to:',
    phone: ['+254 721 473 002', '+254 110 090 038'],
    emails: ['sales@olivetreemobile.co', 'info@olivetreehub.com'],
    phoneLabel: 'Reach us at:',
    socialMedia: [
      {
        id: 'instagram',
        title: 'Intagram',
        iconImg: '/artwork/insta.svg',
        link: 'https://www.instagram.com/otmbulksms/',
      },
      {
        id: 'facebook',
        title: 'Facebook',
        iconImg: '/artwork/facebook-icon.svg',
        link: 'https://www.facebook.com/OliveTreeHub/',
      },
      {
        id: 'linkedin',
        title: 'LinkedIn',
        iconImg: '/artwork/linkedin-icon.svg',
        link: 'https://www.linkedin.com/company/olive-tree-media-limited/',
      },
    ],
    links: [
      {
        id: 'privacyandpolicy',
        title: 'Privacy & Policy',
        link: '/Privacy',
      },
      {
        id: 'termsofuse',
        title: 'Terms Of Use',
        link: '/Terms-of-Use',
      },
    ],
  },
};

const products: IProducts = {
  id: 'products',
  data: [
    {
      id: 'OlivePay',
      img: '/artwork/olivepay.png',
      title: 'OlivePay',
      description:
        'We provide integrations to Mpesa through third party collaboration for C2B, B2C, B2B clients.  We are able to provide access to common payment gateways such a Visa, Mastercard and more.',
      features: [
        {
          id: '',
          title: 'Organize your Mpesa transactions from one single window',
        },
        {
          id: '',
          title: 'Message customers each time they make a payment to your business',
        },
        {
          id: '',
          title: 'Buy and sell electricity tokens',
        },
      ],
      active: true,
    },
    {
      id: 'BulkEmail',
      img: '/artwork/bulkemail.png',
      title: 'Bulk Email',
      description:
        'Olive Tree makes it easier for a business to integrate bulk emails as part of its marketing efforts. Engage with your customers through bulk email and access OTPs.',
      features: [
        {
          id: '',
          title: 'Send bulk emails easily from one sender to multiple recipients and only pay for what you send',
        },
        {
          id: '',
          title: 'Send transactional emails related to account activity or transactions',
        },
        {
          id: '',
          title: 'Monitor the performance of your campaigns',
        },
      ],
      active: true,
    },
    {
      id: 'mswali',
      img: '/artwork/mswali.png',
      title: 'mSwali',
      description:
        'mSwali is a mobile-based knowledge platform where you can access quizzes via Unstructured Supplementary Service Data (USSD).',
      features: [
        {
          id: '',
          title: 'Invest in your knowledge, passed down from generation to generation.',
        },
        {
          id: '',
          title: 'Win HUGE cash prizes if you answer questions correctly.',
        },
        {
          id: '',
          title: 'Spend your free time better by learning something new.',
        },
      ],
      active: true,
    },
    {
      id: 'newske',
      img: '/artwork/newske.png',
      title: 'News KE',
      description:
        "A comprehensive digital platform delivering timely news updates, insightful analyses, and engaging multimedia content, catering to a diverse audience's need for reliable and up-to-date information on various topics.",
      features: [
        {
          id: 'real-time-news',
          title: 'Real-time and Accurate News Updates',
        },
        {
          id: 'diverse-and-informative',
          title: 'Diverse and Informative Article Coverage',
        },
        {
          id: 'engaging-multimedia-content',
          title: 'Engaging Multimedia Content Experience',
        },
      ],
      active: true,
    },
    {
      id: 'SocialMedia',
      img: '/artwork/socialmedia.png',
      title: 'Social Media For Business',
      description:
        'We partner with you to grow your business and make it efficient and profitable. That’s why we are about to introduce WhatsApp for Business… Stay tuned for more details!',
      active: false,
    },
  ],
};

const ussdHero: IUssdHero = {
  id: 'ussdHero',
  img: '/artwork/ussdphone.png',
  title: 'USSD',
  description:
    'Build real time interactive experiences for your users that are accessible on both features and smartphones. Easily integrate our simple and reliable USSD API and start delivering scalable solutions to your users!',
  buttonLabel: 'Explore more',
  buttonLink: '/products/ussd',
  overview: {
    title: 'An easy and highly-effective way to connect with your customers',
    description:
      'Our solutions create, grow and sustain great businesses. We support Africa’s entrepreneurial ecosystem with customized solutions.',
    features: [
      {
        id: '/artwork/ussdfeature1.png',
        description: 'Wider reach to customers on any mobile device',
        logoImg: '/artwork/ussdproductfeature1.png',
      },
      {
        id: '/artwork/ussdfeature2.png',
        description: 'Highly interactive and enables responses in real time',
        logoImg: '/artwork/ussdproductfeature2.png',
      },
      {
        id: '/artwork/ussdfeature3.png',
        description: 'Enables faster two-way communication and extremely cost effective',
        logoImg: '/artwork/ussdproductfeature3.png',
      },
    ],
  },
};

const landingHeroProducts: ILandingHeroProducts = {
  id: '',
  title: '',
  description: '',
  img: '',
  buttonLabel: '',
  buttonLink: '',
  overview: {
    title: 'Harness the power of Bulk SMS communication: ',
    description:
      'Our solutions create, grow and sustain great businesses. We support Africa’s entrepreneurial ecosystem with customized solutions.',
    features: [
      {
        id: '/artwork/bulkfeature1.png',
        description: 'Send customized messages to subscribers according to their needs.',
        logoImg: '/artwork/bulkfeature1.png',
      },
      {
        id: '/artwork/bulkfeature2.png',
        description: 'Deliver your marketing campaigns in a matter of minutes.',
        logoImg: '/artwork/bulkfeature2.png',
      },
      {
        id: '/artwork/bulkfeature3.png',
        description: 'Speak to your clients through transactional bulk sms solutions.',
        logoImg: '/artwork/bulkfeature3.png',
      },
    ],
  },
};

const bongaSmsHero: IBongasmsHero = {
  id: 'bongasmshero',
  img: '/artwork/Content.png',
  title: '',
  titleStart: 'Bonga',
  titleEnd: 'SMS+',
  description:
    'This is a premium messaging solution that enables enterprises to monetize their content. Earn money by sending bulk SMS to your customers in a fast and reliable way.',
  buttonLabel: 'Explore more',
  buttonLink: '/products/bongasms',
  overview: {
    title: 'Earn money by sending bulk SMS to your customers in a fast and reliable way.',
    description:
      'Our solutions create, grow and sustain great businesses. We support Africa’s entrepreneurial ecosystem with customized solutions.',
    features: [
      {
        id: '/artwork/bulksmsfeature1.png',
        description: 'Send targeted messages to people who have opted in to your SMS marketing campaigns.',
        logoImg: '/artwork/bulksmsplusfeature1.png',
      },
      {
        id: '/artwork/bulksmsfeature2.png',
        description: 'Use SMS to promote deals and communicate important company updates.',
        logoImg: '/artwork/bulksmsplusfeature2.png',
      },
      {
        id: '/artwork/bulksmsfeature3.png',
        description: 'Track the success of every text message you send through the analytics dashboard.',
        logoImg: '/artwork/bulksmsplusfeature3.png',
      },
    ],
  },
  callToAction: {
    titleStart: 'Broaden your',
    keyword: 'channels,',
    titleEnd: 'expand your horizons',
    description: 'To simplify your business commmunications and operations, we offer you more...',
  },
};

const AboutUs: AboutScreen = {
  landingHero: {
    title: 'Building Your world of',
    keyword: 'More',
    description: 'Learn about the company and how we achieve more.',
    buttonLabel1: 'Bonga by Olive Tree',
    buttonLabel2: 'Talk to us',
    buttonLink1: 'https://app.bongasms.co.ke/site/login',
    buttonLink2: 'mailto:info@olivetreehub.com',
    options: [
      {
        title: 'About us',
        img: '',
        features: [
          {
            id: '1',
            title: 'About us',
            description:
              'Olive Tree Media is a licensed SMS & Bulk Messaging Solutions and Content Services Provider, we refine business processes via smart technology.',
          },
        ],
      },
      {
        title: 'Our vision of more',
        img: '',
        features: [
          {
            id: '2',
            description:
              'We support Africa’s capacity by positively impacting lives and businesses with more options & opportunities through innovative, technology driven solutions.',
          },
        ],
      },
    ],
    bgColor: '',
    keyWordColor: '',
    buttonColor: '',
    dividerColor: '',
  },
  ideaMore: [
    {
      id: 'MoreInnovation ',
      description: 'More Innovation',
      logoImg: '/about/idea/idea-1.png',
    },
    {
      id: 'MoreDirect',
      description: 'More Direct Approaches',
      logoImg: '/about/idea/idea-2.png',
    },
    {
      id: 'MoreValue',
      description: 'More Value',
      logoImg: '/about/idea/idea-3.png',
    },
    {
      id: 'MoreLasting',
      description: 'More Lasting Relationships',
      logoImg: '/about/idea/idea-4.png',
    },
  ],
  ourJourney: [
    {
      id: 1,
      year: 2012,
      title: 'Founding',
      img: '/journey/thumb-journey-1.png',
      description1:
        'Olive Tree Media Limited was founded in 2012 and the company has grown steadily to become a developer of excellent solutions in Africa. It has worked on a number of challenging projects and come out on top.',
      description2:
        'Among these are SMS, USSD and mobile applications for eCitizen, Kenya Pipeline, Pesa Pata, Magical Kenya, Art Café, Egerton University among others.',
    },
    {
      id: 2,
      year: 2015,
      title: 'Milestone Achieved',
      img: '/journey/journey-2.png',
      description1:
        'Taking root. Begun long term relationship with Art Cafe to build, develop and support develop their enterprise mobility systems. Participation in the Global Enterprise Summit.',
      description2:
        'Runners up in the Sinapis (www.sinapis.com) business plan pitching competition of that year, strengthening of Bulk SMS services, rapid revenue growth and rapid team growth.',
    },
    {
      id: 3,
      year: 2016,
      title: 'Milestone Achieved',
      img: '/journey/journey-3.png',
      description1:
        'We were engaged by Kenya Pipeline Company(KPC) to build USSD and a queuing management system (QMS) -Contracted to provide USSD and SMS  support for e-citizen, Kenya e-government portal -started expansion to Zambia and Malawi',
    },
    {
      id: 4,
      year: 2017,
      title: 'Milestone Achieved',
      img: '/journey/journey-4.png',
      description1: 'awarded “most improved Content Service Provider” award by Safaricom Limited.',
    },
    {
      id: 5,
      year: 2018,
      title: 'Milestone Achieved',
      img: '/journey/journey-5.png',
      description1:
        'Launch of payment solutions-OlivePay -Expanded the Olive Tree Media team -Opened offices in Zambia',
    },
    {
      id: 6,
      year: 2019,
      title: 'Milestone Achieved',
      img: '/journey/journey-6.png',
      description1: 'Doubled revenues from the SMS offering',
    },
  ],
  faceMore: [
    {
      id: 1,
      name: 'James Kabiru',
      title: 'CEO',
      img: 'team/team-ceo.png',
    },
    {
      id: 2,
      name: 'Charles Sewe',
      title: 'CTO',
      img: 'team/team-cto.png',
    },
    {
      id: 3,
      name: 'Judy Kamande',
      title: 'CFO',
      img: 'team/team-cfo.png',
    },
    {
      id: 4,
      name: 'Mike Okongo',
      title: 'Business development',
      img: 'team/team-bd.png',
    },
    {
      id: 5,
      name: 'Titus Mwaniki',
      title: 'Project Manager',
      img: 'team/team-pm.png',
    },
    {
      id: 6,
      name: 'Kepha Okari',
      title: 'Software engineer',
      img: 'team/team-se.png',
    },
    {
      id: 7,
      name: 'Eva Ngari',
      title: 'Operations & Marketing',
      img: 'team/team-om.png',
    },
    {
      id: 8,
      name: 'Effie Muvango',
      title: 'Administrator',
      img: 'team/team-admin.png',
    },
  ],
};

const ProductSMS: singleProductScreen = {
  landingHero: {
    bgColor: '#00698C',
    keyWordColor: 'rgba(66, 181, 222, 1)',
    buttonColor: 'rgba(66, 181, 222, 1)',
    dividerColor: '#1694C8',
    title: 'Do great things with',
    keyword: 'SMS',
    description: 'Inform, notify, alert, interact, transact and share information with clients with Bulk SMS',
    buttonLabel1: 'Request a demo',
    buttonLabel2: 'Talk to an expert',
    buttonLink1: '/demo',
    buttonLink2: 'mailto:info@olivetreehub.com',
    options: [
      {
        title: 'Bulk SMS',
        img: '/artwork/smsoption1.png',
        features: [
          {
            id: 'marketingbulksms',
            title: 'Marketing Bulk SMS',
            description: 'A business can send out bulk marketing material to its customers',
          },
          {
            id: 'transactionalbulksms',
            title: 'Transactional Bulk SMS',
            description:
              'For every interaction a customer has with a business, they receive an SMS to acknowledge the transaction or assist them in completing it.',
          },
        ],
      },
      {
        title: 'Premium SMS',
        img: '/artwork/smsoption2.png',
        features: [
          {
            id: 'marketingbulksms',
            description:
              'This is for companies that want to monetize their content. We will provide a premium SMS shortcode which will enable you to send a premium message to your customers.',
          },
        ],
      },
    ],
  },
  features: [
    {
      id: 'BuySMS ',
      description: 'Buy SMS units using M-pesa and send SMS using your brand name',
      logoImg: '/artwork/bulksmsfeature1.png',
    },
    {
      id: 'Scheduleyour',
      description: 'Schedule your messages to go out on a particular date and time',
      logoImg: '/artwork/bulksmsfeature2.png',
    },
    {
      id: 'Createand',
      description: 'Create and manage templates for quick dissemination of SMSs',
      logoImg: '/artwork/bulksmsfeature3.png',
    },
    {
      id: 'Manageyour',
      description: 'Manage your contacts using a personalized phone book feature',
      logoImg: '/artwork/bulksmsfeature4.png',
    },
    {
      id: 'Senda',
      description: 'Send a custom message to every recipient on your phonebook',
      logoImg: '/artwork/bulksmsfeature5.png',
    },
    {
      id: 'Createand',
      description: 'Create and manage commonly used keywords for your business',
      logoImg: '/artwork/bulksmsfeature6.png',
    },
    {
      id: 'Sendbulk',
      description: 'Send bulk SMSs quickly and get a delivery note once they’re delivered',
      logoImg: '/artwork/bulksmsfeature7.png',
    },
    {
      id: 'Manageincoming',
      description: 'Manage incoming and outgoing SMSs all from one place',
      logoImg: '/artwork/bulksmsfeature8.png',
    },
    {
      id: 'Generatereports',
      description: 'Generate reports in Excel, PDF, CSV, HTML and Text formats',
      logoImg: '/artwork/bulksmsfeature9.png',
    },
  ],
  callToAction: {
    title: 'Intergation with BongaSMS',
    description: `BongaSMS enables you to integrate Mpesa transactions and issue web-based transaction receipts. 

        You can enable USSD (Shared or Dedicated), access API’s, manage account users and get analytics. Use this test account which has 100 SMS credits. `,
    img: '/artwork/phonewaves.png',
    side: 'right',
    color: 'rgba(104, 197, 237, 0.7)',
    sphere1Colors: {
      color1: 'rgba(0, 174, 239, 0.05)',
      color2: '#0d95bc',
      color3: '#1480a8',
    },
    sphere2Colors: {
      color1: 'rgba(0, 174, 239, 0.05)',
      color2: '#0d95bc',
      color3: '#1480a8',
    },
  },
  howItWorks: {
    color: 'rgba(66, 181, 222, 1)',
    items: [
      {
        id: 'We onboard',
        description: 'We onboard you onto BongaSMS either by API or by direct signup',
      },
      {
        id: 'Ifyouuse',
        description: 'If you use API’s, you can integrate it into your existing web applications or ERP',
      },
      {
        id: 'OurApis',
        description: 'Our API’s are in various languages enabling you to plug and play',
      },
      {
        id: 'Createcustomized',
        description: 'Create customized alerts and notifications for your customer',
      },
      {
        id: 'SendSMS',
        description: 'Send SMS to contact lists stored in multiple formats',
      },
    ],
  },
  benefits: {
    color: 'rgba(66, 181, 222, 1)',
    listIcon: '/artwork/listiconsms.png',
    items: [
      {
        id: 'OpenRates',
        description:
          'Open Rates: 98% of all SMS messages are opened and read by the recipient, and on average within five seconds.',
      },
      {
        id: 'Speedand',
        description: 'Speed and Flexibility: Allows businesses to immediately respond to the events of the day.',
      },
      {
        id: 'LowCost',
        description:
          'Low Cost and High ROI: Campaigns can be launched and executed for a tiny fraction of costs associated with the more traditional marketing methods.',
      },
      {
        id: 'Personalisation',
        description:
          'Personalisation: SMS messages can be personalised based on the customer’s previous buying behaviour and demographics.',
      },
      {
        id: 'MinimalEffort',
        description:
          'Minimal Effort Required from Recipients: There is a 160-character length for SMS, forcing marketers to deliver their message in a concise, easy-to-read way.',
      },
    ],
  },
  callToAction2: {
    keywordColor: 'rgba(66, 181, 222, 1)',
    bgColor: '#00698C',
    sphereBottom: {
      color1: 'rgba(0, 174, 239, 0.05)',
      color2: '#0D95BC',
      color3: '#1480A8',
    },
    sphereFront: {
      color1: 'rgba(0, 174, 239, 0.05)',
      color2: '#0D95BC',
      color3: '#1480A8',
    },

    sphereBack: {
      color1: 'rgba(0, 174, 239, 0.05)',
      color2: 'rgba(13, 149, 188, 1)',
      color3: 'rgba(20, 128, 168, 1)'
    },
  },
};

const ProductSMSPlus: singleProductScreen = {
  landingHero: {
    bgColor: '#1E693D',
    keyWordColor: 'rgba(255, 191, 27, 1)',
    buttonColor: 'rgba(98, 184, 78, 1)',
    dividerColor: 'rgba(98, 184, 78, 1)',
    title: 'Do great things with',
    keyword: 'Bonga SMS+',
    description:
      'This is a premium messaging solution that enables enterprises to monetize their content. Earn money by sending bulk SMS to your customers in a fast and reliable way.',
    buttonLabel1: 'Request a demo',
    buttonLabel2: 'Talk to an expert',
    buttonLink1: '/demo',
    buttonLink2: 'mailto:info@olivetreehub.com',
    options: [
      {
        title: 'Shared',
        img: '/artwork/smsplusoption1.png',
        features: [
          {
            id: 'Shared',
            description: 'Optimize content with keywords shared from other businesses.',
          },
        ],
      },
      {
        title: 'Dedicated',
        img: '/artwork/smsplusoption2.png',
        features: [
          {
            id: 'Dedicated',
            description: 'Manage all the traffic going into and out of your shortcode.',
          },
        ],
      },
    ],
  },
  features: [
    {
      id: 'Automated',
      description: 'Automated subscriber management',
      logoImg: '/artwork/smsfeature1.png',
    },
    {
      id: 'Realtime',
      description: 'Realtime transactional information',
      logoImg: '/artwork/smsfeature2.png',
    },
    {
      id: 'Accessto',
      description: 'Access to detailed reports including statistics and audits',
      logoImg: '/artwork/smsfeature3.png',
    },
    {
      id: 'Mobilenumber',
      description: 'Mobile number verification, 2-factor login and OTP',
      logoImg: '/artwork/smsfeature1.png',
    },
  ],
  callToAction: {
    title: 'Intergation with BongaSMS+',
    description: `This premium short code service is built to inform, notify, alert, interact, transact and share information with customers. Great platform for promotional and competitive voting. Monetize your content using shortcodes. `,
    img: '/artwork/ctaSMS.png',
    side: 'right',
    color: 'rgba(34, 171, 70, 0.7)',
    sphere1Colors: {
      color1: '#73e24c',
      color2: '#22ab46',
      color3: '#0d6725',
    },
    sphere2Colors: {
      color1: '#73e24c',
      color2: '#22ab46',
      color3: '#0d6725',
    },
  },
  howItWorks: {
    color: '#17AF26',
    items: [
      {
        id: 'We Subscribe',
        description: 'BongaSMS+ onboards you using API’s or direct signup.',
      },
      {
        id: 'Youwill',
        description: 'API users can integrate existing applications. Plug and play using our multilingual API’s.',
      },
      {
        id: 'OurApis',
        description: 'Customize alerts and notifications for customers.',
      },
      {
        id: 'Youcan',
        description: 'Circulate messages to phonebook contacts.',
      },
    ],
  },
  benefits: {
    color: '#17AF26',
    listIcon: '/artwork/listiconsmsplus.png',
    items: [
      {
        id: 'grow',
        description:
          'Grow Brand Loyalty: Help people to remember your brand each time they see or hear your short code.',
      },
      {
        id: 'Speedand',
        description:
          'Send Personalised Messages: Build a relationship with your customers by adding a personal touch to each message.',
      },
      {
        id: 'Lower',
        description:
          'Lower Operational Costs: Perform tasks that would be done by people and grow business efficiency..',
      },
      {
        id: 'Grow',
        description:
          'Grow Messaging Revenue: Grab the customer’s attention by sending out exclusive offers to increase business revenue.',
      },
      {
        id: 'Track',
        description: 'Track Performance: It is possible to see the results of your campaigns in real-time.',
      },
    ],
  },
  callToAction2: {
    keywordColor: 'rgba(98, 184, 78, 1)',
    bgColor: '#206A3F',
    sphereBottom: {
      color1: '#63A684',
      color2: '#2E5B46',
      color3: '#0B301A',
    },
    sphereFront: {
      color1: '#2E5B46',
      color2: '#67B48D',
      color3: '',
    },
    sphereBack: {
      color1: '#63A684',
      color2: '#2E5B46',
      color3: '#0B301A',
    },
  },
};

const ProductUSSD: singleProductScreen = {
  landingHero: {
    title: 'Do great things with',
    keyword: 'USSD',
    description:
      'USSD is a convenient way to get customers to speak to you because it is unidirectional. The user dials a USSD code to access services from a company.',
    buttonLabel1: 'Request a demo',
    buttonLabel2: 'Talk to an expert',
    buttonLink1: '/demo',
    buttonLink2: 'mailto:info@olivetreehub.com',
    options: [
      {
        title: 'Shared USSD',
        img: '/artwork/ussdoption1.png',
        features: [
          {
            id: 'SharedUSSD',
            description:
              'This is a USSD code shared anonymously by companies and is accessed using a separate extension.',
          },
        ],
      },
      {
        title: 'Dedicated USSD',
        img: '/artwork/ussdoption2.png',
        features: [
          {
            id: 'Dedicated',
            description: 'Owned by one account and used solely by one user for their company or service.',
          },
        ],
      },
    ],
    bgColor: '#022E1F',
    keyWordColor: '#62B84E;',
    buttonColor: '#62B84E',
    dividerColor: '#FFFF',
  },
  features: [
    {
      id: 'Automated',
      description: 'Automated subscriber management',
      logoImg: '/artwork/ussdfeature1.png',
    },
    {
      id: 'Realtime',
      description: 'Realtime transactional information',
      logoImg: '/artwork/ussdfeature2.png',
    },
    {
      id: 'Accessto',
      description: 'Access to detailed reports including statistics and audits',
      logoImg: '/artwork/ussdfeature3.png',
    },
    {
      id: 'Mobilenumber',
      description: 'Mobile number verification, 2-factor login and OTP',
      logoImg: '/artwork/ussdfeature1.png',
    },
  ],
  callToAction: {
    title: 'Why USSD',
    description: `USSD applications run on the network, not on a user's device. As such, they don't have to be installed on the user's phone, which is an advantage for users with feature phones that have limited storage space.

    USSD codes start with an asterisk (*) followed by groups of digits which may be separated by additional asterisks and is terminated with a hash symbol (#).  `,
    img: '/artwork/ussd-phone.png',
    side: 'left',
    color: 'rgba(138, 197, 176, 0.70)',
    sphere1Colors: {
      color1: 'rgba(50, 153, 118, 0.65)',
      color2: '#022E1F',
      color3: '#022E1F',
    },
    sphere2Colors: {
      color1: 'rgba(50, 153, 118, 0.65)',
      color2: '#022E1F',
      color3: '#022E1F',
    },
  },
  howItWorks: {
    color: '#62B84E',
    items: [
      {
        id: 'Auser',
        description: 'A user sends a USSD request ',
      },
      {
        id: 'TheUSSD',
        description:
          "The USSD gateway forwards the request to the user's USSD application which respond to the request",
      },
      {
        id: 'response',
        description:
          "The response goes back to the USSD gateway, which displays the content of that response on the screen of the user's mobile phone.",
      },
    ],
  },
  benefits: {
    color: '#62B84E',
    listIcon: '/artwork/listiconussd.png',
    items: [
      {
        id: 'user',
        description: 'User-friendly',
      },
      {
        id: 'Highly',
        description: 'Highly interactive',
      },
      {
        id: 'works',
        description: 'Works on all GSM handsets.',
      },
      {
        id: 'worksWithout',
        description: 'Works without data connection',
      },
      {
        id: 'Highlycustomisable',
        description: 'Highly customisable',
      },
    ],
  },
  callToAction2: {
    keywordColor: '#62B84E',
    bgColor: '#022E1F',
    sphereBottom: {
      color1: 'rgba(50, 153, 118, 0.65)',
      color2: '#022E1F',
      color3: '#022E1F',
    },
    sphereFront: {
      color1: 'rgba(50, 153, 118, 0.65)',
      color2: '#022E1F',
      color3: '#022E1F',
    },
    sphereBack: {
      color1: 'rgba(50, 153, 118, 0.65)',
      color2: '#022E1F',
      color3: '#022E1F',
    },
  },
};

const ProductOlivepay: singleProductScreen = {
  landingHero: {
    title: 'Do great things with',
    keyword: 'Olivepay',
    description:
      'Olive Tree provides integrations to Mpesa through third party collaboration for C2B, B2C, B2B clients. We give you access to common payment gateways such as Visa, M-Pesa, Mastercard and more.',
    buttonLabel1: 'Request a demo',
    buttonLabel2: 'Talk to an expert',
    buttonLink1: '/demo',
    buttonLink2: 'mailto:info@olivetreehub.com',
    options: [],
    bgColor: '#3F125B',
    keyWordColor: 'rgba(255, 191, 27, 1)',
    buttonColor: 'rgba(176, 93, 217, 1)',
    dividerColor: '#FFFF',
  },
  features: [],
  callToAction: {
    title: 'Why Olivepay',
    description: `Olive Tree provides integrations to Mpesa through third party collaboration for C2B, B2C, B2B clients. We give you access to common payment gateways such as Visa, M-Pesa, Mastercard and more.`,
    img: '/artwork/olivepayment.png',
    side: 'left',
    color: 'rgba(152, 17, 215, 0.37)',
    sphere1Colors: {
      color1: 'rgba(155, 17, 220, 0.65)',
      color2: '#610e95',
      color3: '#320b4a',
    },
    sphere2Colors: {
      color1: 'rgba(155, 17, 220, 0.65)',
      color2: '#610e95',
      color3: '#320b4a',
    },
  },
  benefits: {
    color: 'rgba(152, 17, 215, 0.37)',
    listIcon: '/artwork/listiconolivepay.png',
    items: [
      {
        id: 'payforkplctokane',
        description: 'Pay for KPLC Tokens.',
      },
      {
        id: 'buyairtime',
        description: 'Buy airtime.',
      },
      {
        id: 'messagecustomersoncetheymakeapayment',
        description: 'Message customers once they make a payment to your business.',
      },
      {
        id: 'organizeyourmpesatransactions',
        description: 'Organize your Mpesa transactions from one single dashboard',
      },
    ],
  },
  callToAction2: {
    keywordColor: 'rgba(183, 99, 224, 1)',
    bgColor: '#3F125B',
    sphereBottom: {
      color1: 'rgba(155, 17, 220, 0.65)',
      color2: '#610E95',
      color3: '#320B4A',
    },
    sphereFront: {
      color1: 'rgba(155, 17, 220, 0.65)',
      color2: '#610E95',
      color3: '#320B4A',
    },
    sphereBack: {
      color1: 'rgba(155, 17, 220, 0.65)',
      color2: '#610E95',
      color3: '#320B4A',
    },
  },
};


export {
  AboutUs,
  CTAHero,
  Licensors,
  Partners,
  ProductOlivepay,
  ProductOverviewMock,
  ProductSMS,
  ProductSMSPlus,
  ProductSliderContent,
  ProductUSSD,
  about,
  bongaSmsHero,
  footer,
  landingHero,
  landingHeroProducts,
  products,
  testimonials,
  ussdHero,
};
