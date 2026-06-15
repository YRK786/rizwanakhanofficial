import {
  FaSeedling,
  FaHome,
  FaStethoscope,
  FaChalkboardTeacher,
  FaBriefcase,
  FaWater,
} from 'react-icons/fa';
import ScrollAnimate from './ScrollAnimate';
import SectionHeader from './SectionHeader';

const initiatives = [
  {
    icon: FaSeedling,
    title: 'Green Community Drive',
    description:
      'Tree plantation and environmental awareness campaigns to build sustainable neighborhoods.',
    tag: 'Environment',
  },
  {
    icon: FaHome,
    title: 'Shelter Support Program',
    description:
      'Providing housing assistance and rehabilitation support for families in need.',
    tag: 'Welfare',
  },
  {
    icon: FaStethoscope,
    title: 'Health Camp Initiative',
    description:
      'Free medical checkups, health camps, and awareness drives in underserved areas.',
    tag: 'Healthcare',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'Scholarship Foundation',
    description:
      'Financial aid and scholarships for deserving students pursuing higher education.',
    tag: 'Education',
  },
  {
    icon: FaBriefcase,
    title: 'Women Entrepreneurship Hub',
    description:
      'Training and micro-financing programs to help women start and grow businesses.',
    tag: 'Empowerment',
  },
  {
    icon: FaWater,
    title: 'Clean Water Project',
    description:
      'Installing water purification systems and ensuring clean drinking water access.',
    tag: 'Infrastructure',
  },
];

const Initiatives = () => {
  return (
    <section id="initiatives" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Work"
          title="Key"
          highlight="Initiatives"
          description="Transforming lives through targeted programs that address the most pressing needs of our communities."
        />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item, index) => (
            <ScrollAnimate
              key={item.title}
              animation="fade-up"
              delay={index * 100}
            >
              <article className="group relative h-full overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-emerald-200 hover:shadow-2xl">
                <div className="absolute top-0 left-0 h-1 w-full origin-left scale-x-0 bg-gradient-to-r from-emerald-500 to-amber-500 transition-transform duration-300 group-hover:scale-x-100" />

                <div className="p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-600">
                      {item.tag}
                    </span>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-emerald-700">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600">
                    {item.description}
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-emerald-600 opacity-0 transition-opacity group-hover:opacity-100">
                    Learn more
                    <span className="transition-transform group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </div>
                </div>
              </article>
            </ScrollAnimate>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Initiatives;
