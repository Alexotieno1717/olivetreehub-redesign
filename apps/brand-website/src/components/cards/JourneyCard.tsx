import { SlidesEntity } from '../../../types';
import { cmsMediaUrl } from '../../utils/cms';

interface JourneyCardProps {
  item: SlidesEntity;
  handlePrevious: () => void;
  handleNext: () => void;
}

const JourneyCard = (props: JourneyCardProps) => {
  const { item } = props;
  return (
    <div className="">
      <div className="grid md:grid-cols-12 gap-x-14 pt-4">
        <div className="col-span-5">
          <p className="pt-4 md:pt-24">{item.year}</p>
          <h2 className="text-primary-light2 text-2xl font-bold leading-tight md:text-4xl md:font-extrabold pt-3.5">
            {item.caption}
          </h2>
        </div>
        <div className="col-span-7 pt-4 md:pt-0">
          <img
            src={cmsMediaUrl(item.image.data.attributes.url)}
            alt={'union'}
            className="w-full h-auto -mt-24"
          />
        </div>
      </div>
      <div className="relative grid md:grid-cols-2 gap-x-9 text-black font-inter text-sm font-normal leading-[142.523%] sm:text-base lg:text-md pb-4 md:pb-0 md:pt-14">
        <p className="pt-7 md:pt-0">{item.description1}</p>
        <p className="pt-7 md:pt-0">{item.description2}</p>
      </div>
    </div>
  );
};

export default JourneyCard;
