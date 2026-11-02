const Links = [
    {
        id: 'Home',
        label: 'Home',
        href: '/',
        hasDropDown: false,
    },
    {
        id: 'products',
        label: 'Products',
        href: '/products',
        hasDropDown: true,
        dropDownLinks: [
            {
                id: 'bongasms',
                label: 'Bonga SMS',
                href: '/products/sms'
            },
            {
                id: 'bongasmsplus',
                label: 'Bonga SMS Plus',
                href: '/products/smsplus'
            },
            {
                id: 'ussd',
                label: 'USSD',
                href: '/products/ussd'
            },
            {
                id: 'olivepay',
                label: 'Olivepay',
                href: '/products/olivepay'
            }
        ]
    },
    {
        id: 'aboutus',
        label: 'About Us',
        href: '/about',
        hasDropDown: true,
        dropDownLinks: [
            {
                id: 'company',
                label: 'Company',
                href: '/about/'
            },
            {
                id: 'blog',
                label: 'Blog',
                href: '/about/blog'
            }
        ]
    },
    {
        id: 'api',
        label: 'API',
        href: 'https://api.olivetreehub.com',
        hasDropDown: false,
    }
]


const structuredData = {
    '@context': 'http://schema.org',
    '@type': 'Organization',
    headline: 'Olive Tree Media Limited',
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

export { Links, structuredData };

