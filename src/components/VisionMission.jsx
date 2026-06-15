import {
  FaFemale,
  FaBookReader,
  FaHeartbeat,
  FaHandsHelping,
  FaChild,
  FaTools,
} from 'react-icons/fa';
import ScrollAnimate from './ScrollAnimate';
import SectionHeader from './SectionHeader';

const missions = [
  {
    icon: FaFemale,
    title: 'Women Empowerment',
    description:
      'Creating opportunities and platforms for women to lead, thrive, and achieve independence.',
  },
  {
    icon: FaBookReader,
    title: 'Education Support',
    description:
      'Ensuring access to quality education and learning resources for every child and adult.',
  },
  {
    icon: FaHeartbeat,
    title: 'Healthcare Awareness',
    description:
      'Promoting health literacy, preventive care, and accessible healthcare for all communities.',
  },
  {
    icon: FaHandsHelping,
    title: 'Community Welfare',
    description:
      'Building stronger communities through welfare programs, aid, and grassroots support.',
  },
  {
    icon: FaChild,
    title: 'Youth Development',
    description:
      'Nurturing young leaders with mentorship, guidance, and opportunities for growth.',
  },
  {
    icon: FaTools,
    title: 'Skill Development',
    description:
      'Equipping individuals with vocational skills for sustainable livelihoods and careers.',
  },
];

const VisionMission = () => {
  return (
    <section id="vision" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Vision & Mission"
          title="Our Purpose &"
          highlight="Direction"
        />

        <ScrollAnimate animation="zoom-in" className="relative mb-16 overflow-hidden rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-800 p-8 text-center shadow-xl sm:p-12">
          <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-amber-400/10 blur-2xl" />
          <span className="mb-4 inline-block rounded-full bg-amber-400/20 px-4 py-1 text-sm font-semibold text-amber-300">
            Our Vision
          </span>
          <blockquote className="relative text-xl font-medium italic text-white sm:text-2xl lg:text-3xl">
            &ldquo;To build an inclusive, empowered, and progressive society.&rdquo;
          </blockquote>
        </ScrollAnimate>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {missions.map((mission, index) => (
            <ScrollAnimate
              key={mission.title}
              animation="fade-up"
              delay={index * 100}
            >
              <div className="group h-full rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-200 hover:shadow-xl">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-md transition-transform group-hover:scale-110 group-hover:shadow-lg">
                  <mission.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {mission.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {mission.description}
                </p>
                <div className="mt-4 h-0.5 w-0 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 transition-all duration-300 group-hover:w-12" />
              </div>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
