import { FaHeart, FaUsers, FaGraduationCap, FaHandshake } from 'react-icons/fa';
import { aboutImage } from '../data/images';
import ScrollAnimate from './ScrollAnimate';
import SectionHeader from './SectionHeader';

const highlights = [
  { icon: FaHeart, label: 'Community Welfare', color: 'text-emerald-600 bg-emerald-50' },
  { icon: FaUsers, label: 'Women Empowerment', color: 'text-amber-600 bg-amber-50' },
  { icon: FaGraduationCap, label: 'Education Support', color: 'text-emerald-600 bg-emerald-50' },
  { icon: FaHandshake, label: 'Public Welfare', color: 'text-amber-600 bg-amber-50' },
];

const About = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="About Me"
          title="A Voice for"
          highlight="Positive Change"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollAnimate animation="fade-right" className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                src={aboutImage}
                alt="Rizwana Khan - Social Worker and Community Advocate"
                className="h-full w-full object-cover object-top"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 via-transparent to-transparent" />
              <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                <p className="text-lg font-semibold">Rizwana Khan</p>
                <p className="text-sm text-emerald-100">Social Worker & Businesswoman</p>
              </div>
              <div className="absolute -right-4 -bottom-4 h-24 w-24 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-500 shadow-lg" />
              <div className="absolute -top-4 -left-4 h-16 w-16 rounded-full border-4 border-white bg-emerald-500 shadow-lg" />
            </div>
          </ScrollAnimate>

          <ScrollAnimate animation="fade-left" delay={150}>
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              Rizwana Khan is a social worker and businesswoman dedicated to
              community development, education support, women empowerment, and
              public welfare initiatives.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              With a deep commitment to uplifting underserved communities, she
              works tirelessly to create opportunities, foster equality, and
              drive meaningful social progress across every initiative she leads.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <ScrollAnimate
                  key={item.label}
                  animation="zoom-in"
                  delay={index * 100}
                >
                  <div className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 p-4 transition-shadow hover:shadow-md">
                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${item.color}`}
                    >
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-semibold text-gray-800">
                      {item.label}
                    </span>
                  </div>
                </ScrollAnimate>
              ))}
            </div>
          </ScrollAnimate>
        </div>
      </div>
    </section>
  );
};

export default About;
