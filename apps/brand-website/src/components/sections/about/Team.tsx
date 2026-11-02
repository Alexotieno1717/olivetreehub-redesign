import { useEffect, useRef } from 'react';
import { MembersEntity, SectionsEntity } from '../../../../types';
import { cmsMediaUrl } from '../../../utils/cms';

interface ourTeamProps {
  data: SectionsEntity | null;
}

function Team({ data }: ourTeamProps) {
  const members: MembersEntity[] | null = (data?.members || []) as MembersEntity[];
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fadeInUp');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef?.current?.querySelectorAll('.team-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="max-w-[924px] mx-auto py-8 px-4 md:py-14 xl:px-0">
      <div className="col-span-12">
        <h2 className="text-[#00793F] text-2xl font-semibold leading-[1.08571] text-dark pt-6 md:pt-24">
          {data?.title}
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-7 gap-x-20 md:grid-cols-4 pt-8 md:pt-14" ref={sectionRef}>
        {members.map((item: MembersEntity) => (
          <div
            key={item.id}
            className="team-card opacity-0 group cursor-pointer"
          >
            <div className="overflow-hidden rounded-xl shadow-sm transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-lg">
              <div className="aspect-square overflow-hidden rounded-xl bg-gray-100">
                <img
                  src={cmsMediaUrl(item.image.data.attributes.url)}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="pt-4 text-center">
              <p className="text-[#00793F] text-base font-bold leading-tight">
                {item.name}
              </p>
              <span className="my-1 inline-block h-px w-8 bg-[#11DC62]" />
              <p className="text-[#11DC62] text-sm font-normal leading-tight">{item.title}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Team;
