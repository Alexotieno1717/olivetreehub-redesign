import { SectionsEntityProductPage } from '../../../types';
import { cmsMediaUrl } from '../../utils/cms';

interface IntergrationFeature {
  data?: SectionsEntityProductPage;
}

function IntergrationProducts({ data }: IntergrationFeature) {
  const sphereOne = data?.sphereColors?.[0];
  const sphereTwo = data?.sphereColors?.[1];
  const imageUrl = data?.image?.data?.attributes?.url;
  const imageAlt = data?.image?.data?.attributes?.name || data?.title || 'integration image';
  const descriptionParts = (data?.description ?? '').split('\n\n');
  const firstParagraph = descriptionParts[0] ?? '';
  const secondParagraph = descriptionParts[1] ?? '';

  return (
    <section className="p-4 lg:p-0">
      <main
        className="max-w-[1042px] mx-auto  rounded-3xl shrink-0 relative overflow-hidden"
        style={{ background: data?.backgroundColor }}
      >
        {data?.sideRight === true ? (
          <div className="p-4 md:p-14 lg:px-28 lg:py-5">
            <div>
              <div className="grid md:grid-cols-2 gap-x-[72.1px]">
                <div className="relative">
                  <div className="hidden lg:block absolute w-[338px] h-[339px] bottom-6">
                    <div
                      id="intergrationImg"
                      style={{
                        background: sphereOne
                          ? `radial-gradient(82.37% 82.37% at 17.53% 17.96%, ${sphereOne.color1} 0%, ${sphereOne.color2} 57.81%, ${sphereOne.color3} 100%)`
                          : undefined,
                      }}
                    />
                  </div>
                  {imageUrl ? (
                    <img
                      className="relative md:w-full h-auto w-1/2 mx-auto"
                      src={cmsMediaUrl(imageUrl)}
                      alt={imageAlt}
                    />
                  ) : null}
                </div>

                <div className="my-auto relative z-10">
                  <div className="relative md:max-w-[308px] text-primary-white my-auto">
                    <h1 className="font-inter text-2xl md:text-4xl font-bold leading-9 text-center md:text-left mb-2 md:mb-4">
                      {data?.title}
                    </h1>
                    <p className=" font-inter md:text-lg font-normal leading-6 text-center md:text-left mb-3 md:mb-6">
                      {firstParagraph}
                    </p>
                    <p className=" font-inter md:text-lg font-normal leading-6 text-center md:text-left">
                      {secondParagraph}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute w-[570px] h-[572px] right-9 bottom-0">
                  <div
                    id="intergrationSphere2"
                    style={{
                      background: sphereTwo
                        ? `radial-gradient(82.37% 82.37% at 17.53% 17.96%,  ${sphereTwo.color1} 0%,  ${sphereTwo.color2} 57.81%,  ${sphereTwo.color3} 100%)`
                        : undefined,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="p-4 md:p-14 lg:px-28 lg:py-5">
            <div>
              <div className="grid md:grid-cols-2 gap-x-[99.1px]">
                <div className="relative">
                  <div className="hidden lg:block absolute w-[390px] h-[390px] bottom-6">
                    <div
                      id="intergrationImg"
                      style={{
                        background: sphereOne
                          ? `radial-gradient(82.37% 82.37% at 17.53% 17.96%, ${sphereOne.color1} 0%, ${sphereOne.color2} 57.81%, ${sphereOne.color3} 100%)`
                          : undefined,
                      }}
                    />
                  </div>
                  {imageUrl ? (
                    <img
                      className="relative md:w-full h-auto w-1/2 ml-auto"
                      src={cmsMediaUrl(imageUrl)}
                      alt={imageAlt}
                    />
                  ) : null}
                </div>

                <div className="my-auto relative z-10">
                  <div className="relative md:max-w-[308px] text-primary-white my-auto">
                    <h1 className="font-inter text-2xl md:text-4xl font-bold leading-9 text-center md:text-left mb-2 md:mb-4">
                      {data?.title}
                    </h1>
                    <p className=" font-inter md:text-lg font-normal leading-6 text-center md:text-left mb-3 md:mb-6">
                      {firstParagraph}
                    </p>
                    <p className=" font-inter md:text-lg font-normal leading-6 text-center md:text-left">
                      {secondParagraph}
                    </p>
                  </div>
                </div>
                <div className="hidden lg:block absolute w-[570px] h-[572px] right-9 bottom-0">
                  <div
                    id="intergrationSphere2"
                    style={{
                      background: sphereTwo
                        ? `radial-gradient(82.37% 82.37% at 17.53% 17.96%,  ${sphereTwo.color1} 0%,  ${sphereTwo.color2} 57.81%,  ${sphereTwo.color3} 100%)`
                        : undefined,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </section>
  );
}

export default IntergrationProducts;
