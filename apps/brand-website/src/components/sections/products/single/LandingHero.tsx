import Image from 'next/image';
import { SectionsEntityProductPage } from '../../../../../types';
import { cmsMediaUrl } from '@/utils/cms';
import { ColumnWithDivider, H1, H2, StyledLink, StyledLinkOutline, StyledSection } from '../../../ui/ComponentsStyled';


type SingleProductLandingHeroProps = {
  item: SectionsEntityProductPage;
};
const SingleProductLandingHero = ({ item }: SingleProductLandingHeroProps) => {
  const columns = item?.columns ?? [];

  return (
    <StyledSection $colors={{ bg: item?.backgroundColor}} id="singleProductLandingHero" className="relative pb-7 pt-28 md:pb-14">
      <Image
        src={'/artwork/Light-accent.png'}
        width={536.676}
        height={433.404}
        alt={'light-accent'}
        className="absolute animate-pulse top-0"
      />
      <main className=" max-w-[1042px] mx-auto px-4 md:px-0">
        <div className=" mb-16 max-w-[677px] mx-auto">
          <h1 className="text-center text-white text-2xl md:text-4xl lg:text-6xl font-extrabold">{item?.title}</h1>
          <H1 $color={item?.keywordColor} className="text-center text-2xl md:text-4xl lg:text-6xl font-extrabold mb-2 md:mb-4 lg:mb-6 ">
            {item?.keyword}
          </H1>
          <p className="text-center text-white text-base md:text-2xl font-normal  mb-2.5 md:mb-3.5 lg:mb-7">
            {item?.description || item?.option1}
          </p>
          <div className="flex justify-center">
            <div className="inline-flex">
              <StyledLinkOutline
                $colors={{ buttonColor: item?.buttonBackgroundColor}}
                href={item?.buttonLink1 || 'mailto:info@olivetreehub.com'}
                className="inline-flex items-center whitespace-nowrap btn-shadow border-2 bg-transparent text-white px-3 py-1 md:px-6 md:py-3  rounded-full text-sm font-semibold"
                style={{stroke: item?.buttonBackgroundColor, borderColor:item?.buttonBackgroundColor}}
              >
                {item?.buttonLabel1}
              </StyledLinkOutline>
              <div className="mx-2 5" />
              <StyledLink
                $colors={{ buttonColor: item?.buttonBackgroundColor, dividerColor: item?.dividerColor}}
                href={item?.buttonLink2 || 'mailto:info@olivetreehub.com'}
                className="inline-flex items-center whitespace-nowrap btn-shadow hover:bg-opacity-80 focus:ring-4 focus:outline-none text-white px-3 py-1 md:px-6 md:py-3 rounded-full text-sm font-semibold"
                style={{backgroundColor: item?.buttonBackgroundColor}}
              >
                {item?.buttonLabel2}
              </StyledLink>
            </div>
          </div>
        </div>
        {columns.length > 1 ? (
          <div className="bg-primary-card p-8 lg:p-14 rounded-3xl md:mx-4">
            <ColumnWithDivider $color={item?.dividerColor} className="grid md:grid-cols-2 md:divide-x">
              {columns.map((option) => (
                <div key={option?.title}>
                  {option?.image?.data?.attributes?.url ? (
                    <img src={cmsMediaUrl(option.image.data.attributes.url)} alt={option?.image?.data.attributes.name} className="mx-auto mb-8" />
                  ) : null}

                  <H2 $color={item?.keywordColor} className=" font-bold text-2xl md:text-4xl  mb-2 md:mb-6 lg:mb-8 text-center">
                    {option.title}
                  </H2>
                  {(option?.columnLists ?? []).map((feature) => (
                    <div className="flex justify-center" key={feature?.id}>
                      <div className="last:mb-6 max-w-[338px]">
                        <h3 className="text-white font-bold md:text-lg text-center">{feature?.title}</h3>
                        <p className="text-white font-normal md:text-lg text-center">{feature?.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </ColumnWithDivider>
          </div>
        ) : (
          <></>
        )}
      </main>
    </StyledSection>
  );
};

export default SingleProductLandingHero;
