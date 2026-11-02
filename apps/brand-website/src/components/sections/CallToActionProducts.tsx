import Link from 'next/link';
import { H1, StyledListLink } from '../ui/ComponentsStyled';
import { SectionsEntityProductPage } from '../../../types';


interface callToActionProductProps {
  data?: SectionsEntityProductPage
}

const defaultValues = {
  backgroundColor: '#0B301A',
  keywordColor: '#FFBF1B',
  sphereBottom: {
    color1: '#63a684',
    color2: '#2e5b46',
    color3: '#0b301a'
  },
  sphereFront: {
    color1: '#2E5B46',
    color2: '#67B48D',
    color3: ''
  },
  sphereBack: {
    color1: '#63A684',
    color2: '#2E5B46',
    color3: '#0B301A'
  }
}

const CallToActionProducts = ({data }: callToActionProductProps) => {
  return (
    <section className={`lg:max-w-4xl xl:max-w-[71.25rem] 2xl:max-w-[65.059rem]  mx-4 lg:mx-auto bg-[${data?.backgroundColor || defaultValues.backgroundColor}] p-4 md:p-8 lg:p-14 md:py-20 lg:py-16 lg:px-12 xl:pt-[5.429rem] xl:pb-[4.803rem] xl:pl-28 xl:pr-[5.625rem] relative rounded-3xl mt-4 md:mt-20 mb-4 md:my-20 overflow-hidden`} style={{background: data?.backgroundColor || defaultValues.backgroundColor}}>
      <div>
        <h1 className=" font-bold text-white text-xl md:text-2xl lg:text-5xl relative z-10">Join the</h1>
        <H1 $color={data?.keywordColor || defaultValues.keywordColor} className=" font-bold text-xl md:text-2xl lg:text-5xl mb-3 md:mb-6 relative z-10">world of More!</H1>
        <p className=" font-normal text-white text-base md:text-2xl relative z-10">We exist to bring you more</p>
        <p className=" font-normal text-white text-base md:text-2xl mb-3 md:mb-6 relative z-10">Take your business to the next level</p>
        <div className="flex justify-start lg:justify-start relative z-10">
          <div className="inline-flex">
            <Link
              href={'https://app.bongasms.co.ke/site/login'}
              className="inline-flex items-center whitespace-nowrap btn-shadow bg-white hover:bg-opacity-80 text-gray-700 px-3 py-1 md:px-6 md:py-3 rounded-md text-sm font-semibold mr-2.5"
            >
              Learn more
            </Link>
            <StyledListLink
              $colors={{
                'buttonColor': data?.keywordColor || defaultValues.keywordColor
              }}
              href={'https://app.bongasms.co.ke/site/login'}
              className="inline-flex items-center whitespace-nowrap btn-shadow bg-transparent hover:bg-primary-light3 focus:ring-4 focus:outline-none focus:ring-primary-light  text-white px-3 py-1 md:px-6 md:py-3 rounded-md text-sm font-semibold"
            >
              Get Started
            </StyledListLink>
          </div>
        </div>
        <div className="hidden md:block absolute w-[620.22px] h-[568.44px] -left-48 -bottom-[114.5%]">
          <div className="sphere-2" style={{background: `radial-gradient(82.37% 82.37% at 17.53% 17.96%, ${data?.sphereBottom?.color1 || defaultValues.sphereBottom?.color1} 0%, ${data?.sphereBottom?.color2 || defaultValues.sphereBottom?.color2} 57.81%, ${data?.sphereBottom?.color3 || defaultValues.sphereBottom.color3} 100%)`}} />
        </div>
        <div className="hidden md:block absolute w-[620.22px] h-[568.44px] -right-28 -bottom-[60%]">
          <div className="sphere-variant" style={{background: `radial-gradient(82.37% 82.37% at 17.53% 17.96%, ${data?.sphereBack?.color1 || defaultValues.sphereBack.color1} 0%, ${data?.sphereBack?.color2 || defaultValues.sphereBack.color2} 57.81%, ${data?.sphereBack?.color3 || defaultValues.sphereBack.color3} 100%)`}}/>
        </div>
        <div className="hidden md:block absolute w-[265.991px] h-[266.514px] lg:right-20 md:right-8 md:top-8 lg:top-8 xl:top-10 -rotate-[3.224deg]">
          <div className="sphere-3-variant" style={{background:`radial-gradient(91.18% 91.18% at 19.48% 21.03%, ${data?.sphereFront?.color1 || defaultValues.sphereFront.color1} 0%, ${data?.sphereFront?.color2 || defaultValues.sphereFront.color2} 100%)`}}/>
        </div>
      </div>
    </section>
  );
};

export default CallToActionProducts;
