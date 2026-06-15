import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import ScrollAnimate from './ScrollAnimate';

const Message = () => {
  return (
    <section id="message" className="relative overflow-hidden py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-amber-50" />
      <div className="absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-200/30 blur-3xl" />
      <div className="absolute top-10 right-10 h-64 w-64 rounded-full bg-amber-200/40 blur-3xl" />
      <div className="absolute bottom-10 left-10 h-48 w-48 rounded-full bg-emerald-300/30 blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <ScrollAnimate animation="fade-down" className="mb-10 text-center">
          <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Personal Note
          </span>
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Message from{' '}
            <span className="text-emerald-600">Rizwana Khan</span>
          </h2>
        </ScrollAnimate>

        <ScrollAnimate animation="flip-up" delay={200} className="relative">
          <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/40 p-8 shadow-2xl shadow-emerald-900/10 backdrop-blur-xl sm:p-12 lg:p-16">
            <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 via-transparent to-emerald-50/30" />
            <div className="pointer-events-none absolute -top-px right-8 left-8 h-px bg-gradient-to-r from-transparent via-amber-400/60 to-transparent" />

            <FaQuoteLeft className="absolute top-6 left-6 h-10 w-10 text-emerald-500/20 sm:top-8 sm:left-8 sm:h-14 sm:w-14" />
            <FaQuoteRight className="absolute right-6 bottom-6 h-10 w-10 text-amber-500/20 sm:right-8 sm:bottom-8 sm:h-14 sm:w-14" />

            <div className="relative z-10 text-center">
              <blockquote className="mx-auto max-w-3xl">
                <p className="font-serif text-xl leading-relaxed font-medium text-gray-800 italic sm:text-2xl md:text-3xl md:leading-relaxed lg:text-[1.75rem] lg:leading-relaxed">
                  True progress begins when every member of society is empowered,
                  educated, and given equal opportunities to succeed.
                </p>
              </blockquote>

              <div className="mx-auto my-8 h-px w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent" />

              <footer>
                <p className="text-lg font-bold tracking-wide text-gray-900 sm:text-xl">
                  Rizwana Khan
                </p>
                <p className="mt-1 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm font-medium text-emerald-600 sm:text-base">
                  <span>Social Worker</span>
                  <span className="text-emerald-400" aria-hidden="true">&bull;</span>
                  <span>Community Advocate</span>
                  <span className="text-emerald-400" aria-hidden="true">&bull;</span>
                  <span>Businesswoman</span>
                </p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
                  Mumbai, India
                </p>
              </footer>
            </div>
          </div>

          <div className="absolute -inset-1 -z-10 rounded-3xl bg-gradient-to-br from-emerald-400/20 via-transparent to-amber-400/20 blur-sm" />
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Message;
