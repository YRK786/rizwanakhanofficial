import { motion } from 'framer-motion';
import { HiArrowDown, HiOutlineMail } from 'react-icons/hi';
import { FaHandsHelping, FaUsers, FaAward } from 'react-icons/fa';
import { scrollToSection } from '../utils/scrollToSection';
import { aboutImage } from '../data/images';

const stats = [
  { icon: FaHandsHelping, value: '10+', label: 'Years of Service' },
  { icon: FaUsers, value: '50+', label: 'Community Programs' },
  { icon: FaAward, value: '1000+', label: 'Lives Impacted' },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-950 via-emerald-800 to-emerald-900" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,_rgba(245,158,11,0.12)_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,_rgba(16,185,129,0.25)_0%,_transparent_45%)]" />
      <div className="absolute top-0 right-0 h-[600px] w-[600px] rounded-full bg-amber-400/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-emerald-400/10 blur-3xl" />

      {/* Diagonal accent line */}
      <div className="absolute top-0 right-0 h-full w-1/2 skew-x-[-6deg] bg-gradient-to-l from-emerald-700/30 to-transparent" />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-28 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-32">
        {/* Left — Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-400/40 bg-amber-400/10 px-4 py-1.5 text-sm font-medium text-amber-300 backdrop-blur-sm">
            <FaHandsHelping className="h-4 w-4" />
            Serving Mumbai Communities
          </span>

          <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-emerald-300">
            Social Leader & Advocate
          </p>

          <h1 className="mb-4 text-4xl leading-tight font-bold tracking-tight text-white sm:text-5xl md:text-6xl xl:text-7xl">
            Rizwana{' '}
            <span className="bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 bg-clip-text text-transparent">
              Khan
            </span>
          </h1>

          <p className="mb-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-lg font-medium text-emerald-100 sm:text-xl lg:justify-start">
            <span>Social Worker</span>
            <span className="text-emerald-400/70" aria-hidden="true">|</span>
            <span>Community Advocate</span>
            <span className="text-emerald-400/70" aria-hidden="true">|</span>
            <span>Businesswoman</span>
          </p>

          <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm lg:max-w-xl">
            <p className="text-base leading-relaxed text-emerald-50/90 italic sm:text-lg">
              &ldquo;Dedicated to community welfare, women empowerment, and social
              progress.&rdquo;
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <button
              type="button"
              onClick={() => scrollToSection('about')}
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-amber-500/30 transition-all hover:from-amber-500 hover:to-amber-600 hover:shadow-xl sm:w-auto"
            >
              Learn More
              <HiArrowDown className="h-5 w-5 transition-transform group-hover:translate-y-1" />
            </button>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="flex w-full items-center justify-center gap-2 rounded-full border-2 border-white/25 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/15 sm:w-auto"
            >
              <HiOutlineMail className="h-5 w-5" />
              Contact Me
            </button>
          </div>

          {/* Stats row — desktop inline, mobile below image */}
          <div className="mt-10 hidden gap-4 sm:grid sm:grid-cols-3 lg:grid">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 text-center backdrop-blur-sm"
              >
                <stat.icon className="mx-auto mb-1 h-5 w-5 text-amber-400" />
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-xs text-emerald-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right — Portrait */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto w-full max-w-md overflow-hidden lg:max-w-none"
        >
          <div className="relative mx-auto aspect-[4/5] max-w-sm lg:max-w-md">
            {/* Decorative rings */}
            <div className="absolute -inset-3 rounded-[2rem] border border-amber-400/30" />
            <div className="absolute -inset-6 rounded-[2.5rem] border border-emerald-400/20" />

            {/* Gold accent corner */}
            <div className="absolute -top-3 -right-3 z-20 h-20 w-20 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 shadow-lg shadow-amber-500/30" />
            <div className="absolute -bottom-3 -left-3 z-20 flex h-16 w-16 items-center justify-center rounded-full border-4 border-emerald-900 bg-emerald-500 shadow-lg">
              <span className="text-lg font-bold text-white">RK</span>
            </div>

            {/* Photo */}
            <div className="relative h-full overflow-hidden rounded-[1.75rem] shadow-2xl shadow-black/40">
              <img
                src={aboutImage}
                alt="Rizwana Khan - Social Worker and Community Advocate"
                className="h-full w-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full border border-white/20 bg-emerald-900/90 px-6 py-2.5 shadow-xl backdrop-blur-md"
            >
              <p className="whitespace-nowrap text-sm font-semibold text-white">
                Mumbai, India
              </p>
            </motion.div>
          </div>

          {/* Stats — mobile only */}
          <div className="mt-12 grid grid-cols-3 gap-3 sm:hidden">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-center backdrop-blur-sm"
              >
                <p className="text-lg font-bold text-white">{stat.value}</p>
                <p className="text-[10px] leading-tight text-emerald-200">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        type="button"
        onClick={() => scrollToSection('about')}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/50 transition-colors hover:text-white"
        aria-label="Scroll to about section"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <HiArrowDown className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
