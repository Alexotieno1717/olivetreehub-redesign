import { AboutUsCMS, IdeaofmoreEntity } from '../../../../types';
import { cmsMediaUrl } from '../../../utils/cms';

type FeaturesHeroProps = {
  item: AboutUsCMS | undefined;
};

function AboutIdea({ item }: FeaturesHeroProps) {
  const ideaOfMore: IdeaofmoreEntity[] | null | undefined = item?.data?.attributes?.sections?.[0]?.ideaofmore;

  return (
    <section>
      <main className=" mx-auto">
        <div className="">
          <div className="flex flex-col md:flex-row">
            <div className="basis-[79%]">
              <p className=" text-white font-inter text-xl font-bold md:2xl lg:text-3xl">
                {item?.data.attributes.sections?.[0].title2}
              </p>
            </div>
            <div className="basis-2/5 pt-4 md:pt-0">
              <p className="text-white font-inter text-base lg:text-xl font-normal ml-auto">
                {item?.data.attributes.sections?.[0].description2}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-7 md:grid-cols-4 lg:gap-[120px] pt-8 lg:pt-11">
            {ideaOfMore?.map((feature) => (
              <div key={feature.id} className="w-[143px]">
                <img
                  src={cmsMediaUrl(feature.image.data.attributes.url)}
                  alt={feature.image.data.attributes.name}
                  className="w-[76px]"
                />

                {/* <img src={feature.logoImg} alt={feature.logoImg} className="w-[76px]" /> */}
                <p className="text-primary-lighter2 text-base md:text-lg font-bold pt-5 md:pt-8 first:whitespace-nowrap">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default AboutIdea;
