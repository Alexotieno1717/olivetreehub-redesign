import { useEffect, useRef } from 'react';
import { MembersEntity, SectionsEntity } from '../../../../types';
import { cmsMediaUrl } from '../../../utils/cms';

interface ourTeamProps {
  data: SectionsEntity | null;
}

// Unified brand gradient for all team cards
const cardGradient = 'linear-gradient(135deg, #0D652D, #11DC62)';
const cardColor = '#0D652D';

function Team({ data }: ourTeamProps) {
  const members: MembersEntity[] | null = (data?.members || []) as MembersEntity[];
  const sectionRef = useRef<HTMLDivElement>(null);

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
    <section className="relative max-w-[1120px] mx-auto py-20 px-6 md:py-28 xl:px-0">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#11DC62]/[0.03] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#0D652D]/[0.03] rounded-full blur-3xl" />
      </div>

      <div className="col-span-12 text-center max-w-2xl mx-auto">
        {/* Decorative olive branch accent */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#11DC62" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="opacity-80">
            <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20c4 0 8-2 12-7a2.5 2.5 0 0 0 0-3.5 2.5 2.5 0 0 0-3.5 0c-1 1-2.5 1.5-4.5 1.5"/>
            <path d="M12 3c-4 2-7 6-7 10a5 5 0 0 0 5 5c4 0 8-3 10-7"/>
          </svg>
        </div>
        <h2 className="text-[#00793F] text-4xl font-bold leading-tight text-dark tracking-tight">
          {data?.title}
        </h2>
        <div className="mt-5 flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#11DC62]/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-[#11DC62] shadow-[0_0_14px_rgba(17,220,98,0.6)]" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#11DC62]/70" />
        </div>
        <p className="mt-5 text-[15px] font-light text-gray-500 leading-relaxed">
          Meet the people behind Olive Tree Media — the team driving innovation in mass messaging.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-5 gap-x-6 md:grid-cols-4 pt-16 md:pt-24" ref={sectionRef}>
        {members.map((item: MembersEntity) => (
          <div
            key={item.id}
            className="team-card opacity-0 group"
          >
            {/* Card wrapper with accent bar */}
            <div className="relative overflow-hidden rounded-xl bg-white border border-gray-100/50 shadow-[0_2px_6px_rgba(0,0,0,0.04)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-2 group-hover:shadow-[0_16px_32px_rgba(0,121,63,0.12)] group-hover:border-[#11DC62]/25">
              {/* Top gradient accent bar - visible on hover only */}
              <div
                className="h-0 w-full overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:h-[2.5px]"
                style={{ background: cardGradient }}
              />

              {/* Image container */}
              <div className="relative aspect-square overflow-hidden bg-gradient-to-b from-gray-50 to-gray-100/30 rounded-t-xl">
                <img
                  src={cmsMediaUrl(item.image.data.attributes.url)}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                />
                {/* Green overlay on hover - covers entire image including top corners */}
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 rounded-t-xl"
                  style={{ background: `linear-gradient(to top, ${cardColor}60 0%, ${cardColor}25 40%, transparent 70%)` }}
                />
              </div>

              {/* Info section */}
              <div className="px-3.5 pt-3 pb-3.5 text-center">
                <p
                  className="text-[13px] font-semibold leading-snug tracking-tight"
                  style={{ color: '#0D652D' }}
                >
                  {item.name}
                </p>
                {/* Gradient divider */}
                <div className="mx-auto my-1.5 h-[1px] w-0 overflow-hidden rounded-full transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-6" style={{ background: cardGradient }} />
                <p
                  className="text-[10px] font-medium leading-tight uppercase tracking-[0.16em]"
                  style={{ color: '#11DC62' }}
                >
                  {item.title}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}

export default Team;
