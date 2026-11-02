import { ImagesEntity, SectionsEntity } from '../../../types/home.interface';
import { cmsMediaUrl } from '../../utils/cms';

interface LicensorsAndPartnersProps {
  licensors: SectionsEntity[] | null;
}

const LicensorsAndPartners = ({ licensors }: LicensorsAndPartnersProps) => {
  return (
    <section className="lg:max-w-4xl xl:max-w-[67.5rem] 2xl:max-w-[67.5rem]  py-9 mx-auto px-4 xl:px-0">
      <div className="grid lg:grid-cols-12 gap-2">
        <div className="col-span-3">
          <h5 className="md:text-lg font-bold text-gray-700 mb-3">{licensors?.[3]?.title}:</h5>
          {licensors && licensors.length > 0 && (
            <>
              <div className="grid grid-flow-col auto-cols-max gap-3 gap-x-20 items-center"></div>
              {Array.isArray(licensors[3]?.images) &&
                licensors[3]?.images.map((image: ImagesEntity) => (
                  <div key={image.id}>
                    <img
                      src={cmsMediaUrl(image.image?.data?.[0]?.attributes?.url)}
                      alt={image.image?.data?.[0]?.attributes?.name || ''}
                      className="w-auto grayscale hover:grayscale-0 cursor-pointer"
                    />
                  </div>
                ))}
            </>
          )}
        </div>

        <div className="col-span-9">
          {/* <div className="grid"> */}
          <h5 className="md:text-lg font-bold text-gray-700 mb-3">{licensors?.[4]?.title}:</h5>
          {licensors && licensors.length > 0 && (
            <>
              <div className="flex flex-row justify-between items-center">
                {Array.isArray(licensors[4]?.images) &&
                  licensors[4]?.images.slice(1, 5).map((image: ImagesEntity, index: number) => (
                    <div key={index} className="inline-block first:ml-0 mx-4 my-6 grow-0 last:mr-0">
                      <img
                        src={cmsMediaUrl(image.image?.data?.[0]?.attributes?.url)}
                        alt={image.image?.data?.[0]?.attributes?.name || ''}
                        className="w-auto grayscale hover:grayscale-0 cursor-pointer"
                      />
                    </div>
                  ))}
              </div>
              <div className="flex flex-row justify-between items-center">
                {Array.isArray(licensors[4]?.images) &&
                  licensors[4]?.images.slice(5).map((image: ImagesEntity, index: number) => (
                    <div key={index} className="inline-block first:ml-0 mx-4 my-6 grow-0 last:mr-0">
                      <img
                        src={cmsMediaUrl(image.image?.data?.[0]?.attributes?.url)}
                        alt={image.image?.data?.[0]?.attributes?.name || ''}
                        className="w-auto grayscale hover:grayscale-0 cursor-pointer"
                      />
                    </div>
                  ))}
              </div>
            </>
          )}
        </div>
      </div>
      {/* </div> */}
    </section>
  );
};

export default LicensorsAndPartners;
