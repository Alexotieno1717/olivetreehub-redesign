import { SectionsEntity } from '../../../types/home.interface';
import ProductAboutCard from '../cards/ProductAboutCard';

interface AboutSectionProps {
  data: SectionsEntity[] | null;
}

const AboutSection = ({ data }: AboutSectionProps) => {
  const about = data && data.length > 5 ? data[5] : null;
  const aboutItems = about?.overviewItem ?? about?.features ?? [];

  const keywordString = Array.isArray(about?.keyword)
    ? about?.keyword.map((kw) => kw.label).join(', ')
    : about?.keyword;

  if (!about) {
    // If there's no data or the structure is unexpected, return a fallback or nothing
    return null;
  }
  return (
    <section className="lg:max-w-4xl xl:max-w-[67.5rem] 2xl:max-w-[67.5rem]  mx-auto px-4 md:px-9 lg:px-11 py-4 md:py-8 lg:py-16">
      <div className="grid  lg:grid-cols-12 lg:divide-x-2 lg:divide-primary-lighter">
        <div className=" col-span-5 lg:pr-11 ">
          <div className="lg:max-w-[388px]">
            <h1 className="text-center lg:text-left text-2xl md:text-4xl font-extrabold mb-2 md:mb-6 lg:mb-8">
              {about.titleStart} <span className=" text-primary-light3">{keywordString}</span> {about.titleEnd}
            </h1>
            <p className="text-center lg:text-left font normal md:text-xl text-primary-dark">{about.description}</p>
          </div>
        </div>
        <div className="col-span-7 lg:pl-11">
          <div className="grid md:grid-cols-3 lg:grid-cols-2">
            {aboutItems.map((item) => (
              <div key={item.id}>
                <ProductAboutCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// Speak to one of us
