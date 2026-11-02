import { SectionsEntityProductPage} from '../../../../types';
import {cmsMediaUrl} from "@/utils/cms";
// import { cmsMediaUrl } from '../../utils/cms'

type FeaturesHeroProps = {
  item: SectionsEntityProductPage;
};

const FeaturesHero = ({ item }: FeaturesHeroProps) => {
  const features = item?.features ?? [];

  return (
    <section>
      {features.length > 0 ? (
        <main className="max-w-[1042px] mx-auto px-4 md:px-0">
          <div className="py-4 sm:py-0 sm:p-4 md:p-7 lg:p-14 lg:px-28">
            <div className="mx-auto">
              <h1 className="font-bold text-2xl text-black mb-3 md:mb-6 lg:mb-8">Features</h1>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-y-[72px] md:gap-x-4">
                {features.map((feature) => (
                  <div key={feature.id} className="flex items-start ml-0 m-3 md:m-0 md:space-x-6">
                    {feature?.image?.data?.attributes?.url ? (
                      <img
                        src={cmsMediaUrl(feature.image.data.attributes.url)}
                        alt={feature?.image?.data?.attributes?.name || feature?.description || 'feature icon'}
                      />
                    ) : null}
                    <p className="pt-5 pl-3 md:pt-0 text-black text-sm font-normal ">{feature?.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      ) : (
        <div className='py-4 sm:py-0 sm:p-4 md:p-7 lg:p-7 lg:px-28'/>
      )}
    </section>
  );
};

export default FeaturesHero;
