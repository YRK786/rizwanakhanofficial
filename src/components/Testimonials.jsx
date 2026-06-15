import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import ScrollAnimate from './ScrollAnimate';
import SectionHeader from './SectionHeader';

const testimonials = [
  {
    name: 'Dr. Ayesha Malik',
    role: 'Director, Community Health Foundation',
    quote:
      "Rizwana Khan's dedication to healthcare awareness has transformed countless lives. Her leadership and compassion set a benchmark for social workers everywhere.",
    initials: 'AM',
    color: 'from-emerald-500 to-emerald-700',
  },
  {
    name: 'Prof. Hassan Raza',
    role: 'Education Advocate & Author',
    quote:
      'Through her education support initiatives, Rizwana has opened doors for hundreds of students who otherwise would have been left behind. She is a true changemaker.',
    initials: 'HR',
    color: 'from-amber-400 to-amber-600',
  },
  {
    name: 'Sarah Ahmed',
    role: "Women's Rights Activist",
    quote:
      'Working alongside Rizwana has been inspiring. Her women empowerment programs have created real economic independence and confidence among participants.',
    initials: 'SA',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    name: 'Rajesh Mehta',
    role: 'Mumbai Community Leader',
    quote:
      'Rizwana Khan has been a pillar of support for our neighbourhood in Mumbai. Her welfare drives and outreach programs have uplifted countless families.',
    initials: 'RM',
    color: 'from-amber-500 to-orange-600',
  },
  {
    name: 'Fatima Sheikh',
    role: 'NGO Coordinator',
    quote:
      'Her vision for an inclusive society is not just words — it is action. Every initiative she leads is thoughtfully planned and deeply impactful.',
    initials: 'FS',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    name: 'Arun Desai',
    role: 'Youth Mentor & Educator',
    quote:
      'The youth development workshops led by Rizwana have given young people skills, confidence, and a sense of purpose. She is a remarkable leader.',
    initials: 'AD',
    color: 'from-amber-400 to-amber-600',
  },
];

const TestimonialCard = ({ item }) => (
  <article className="relative flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
    <FaQuoteLeft className="mb-4 h-8 w-8 shrink-0 text-emerald-200" />
    <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-600 italic">
      &ldquo;{item.quote}&rdquo;
    </p>
    <div className="flex items-center gap-4">
      <div
        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${item.color} text-sm font-bold text-white shadow-md`}
      >
        {item.initials}
      </div>
      <div>
        <p className="font-bold text-gray-900">{item.name}</p>
        <p className="text-xs text-emerald-600">{item.role}</p>
      </div>
    </div>
    <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden rounded-tr-2xl">
      <div className="absolute top-0 right-0 h-8 w-8 translate-x-4 -translate-y-4 rotate-45 bg-amber-400/20" />
    </div>
  </article>
);

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) setItemsPerView(3);
      else if (window.innerWidth >= 768) setItemsPerView(2);
      else setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - itemsPerView);

  useEffect(() => {
    if (currentIndex > maxIndex) setCurrentIndex(maxIndex);
  }, [currentIndex, maxIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  }, [maxIndex]);

  const goToPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  }, [maxIndex]);

  useEffect(() => {
    const timer = setInterval(goToNext, 5000);
    return () => clearInterval(timer);
  }, [goToNext]);

  const slidePercent = 100 / itemsPerView;

  return (
    <section id="testimonials" className="bg-gray-50 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="What People"
          highlight="Say"
        />

        <ScrollAnimate animation="fade-up" delay={150}>
        <div className="relative">
          <button
            type="button"
            onClick={goToPrev}
            className="absolute top-1/2 -left-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 sm:-left-[50px] sm:h-12 sm:w-12"
            aria-label="Previous testimonial"
          >
            <HiChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute top-1/2 -right-3 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-md transition-all hover:border-emerald-300 hover:bg-emerald-50 hover:text-emerald-600 sm:-right-[50px] sm:h-12 sm:w-12"
            aria-label="Next testimonial"
          >
            <HiChevronRight className="h-6 w-6" />
          </button>

          <div className="overflow-hidden px-2">
            <motion.div
              className="flex"
              animate={{ x: `-${currentIndex * slidePercent}%` }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="shrink-0 px-3"
                  style={{ width: `${slidePercent}%` }}
                >
                  <TestimonialCard item={item} />
                </div>
              ))}
            </motion.div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-2">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  currentIndex === index
                    ? 'w-8 bg-emerald-500'
                    : 'w-2.5 bg-gray-300 hover:bg-emerald-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        </ScrollAnimate>
      </div>
    </section>
  );
};

export default Testimonials;
