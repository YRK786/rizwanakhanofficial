import { FaAward, FaTrophy, FaMedal, FaStar, FaCertificate } from 'react-icons/fa';
import ScrollAnimate from './ScrollAnimate';
import SectionHeader from './SectionHeader';

const milestones = [
  {
    year: '2018',
    title: 'Community Leadership Award',
    description:
      'Recognized for outstanding contribution to grassroots community development programs.',
    icon: FaAward,
  },
  {
    year: '2019',
    title: 'Women Empowerment Summit',
    description:
      'Organized a landmark summit bringing together 500+ women leaders and entrepreneurs.',
    icon: FaTrophy,
  },
  {
    year: '2020',
    title: 'Education Excellence Initiative',
    description:
      'Launched scholarship program benefiting over 200 students from underprivileged backgrounds.',
    icon: FaMedal,
  },
  {
    year: '2022',
    title: 'Healthcare Outreach Program',
    description:
      'Conducted 50+ free health camps serving thousands of families across rural areas.',
    icon: FaStar,
  },
  {
    year: '2024',
    title: 'Social Impact Recognition',
    description:
      'Honored with the Social Impact Excellence Award for transformative welfare work.',
    icon: FaCertificate,
  },
];

const Achievements = () => {
  return (
    <section id="achievements" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Milestones"
          title="Our"
          highlight="Achievements"
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute top-0 left-6 h-full w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-400 to-amber-500 sm:left-1/2 sm:-translate-x-px" />

          {milestones.map((item, index) => (
            <ScrollAnimate
              key={item.year + item.title}
              animation={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              delay={index * 100}
              className={`relative mb-12 flex items-center gap-6 sm:mb-16 ${
                index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
              }`}
            >
              <div className={`hidden flex-1 sm:block ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <span className="inline-block rounded-full bg-amber-100 px-4 py-1 text-sm font-bold text-amber-700">
                  {item.year}
                </span>
              </div>

              <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 text-white shadow-lg ring-4 ring-white">
                <item.icon className="h-5 w-5" />
              </div>

              <div className="flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
                <span className="mb-2 inline-block rounded-full bg-amber-100 px-3 py-0.5 text-xs font-bold text-amber-700 sm:hidden">
                  {item.year}
                </span>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {item.description}
                </p>
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
