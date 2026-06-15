import { useState } from 'react';
import { FaExpand } from 'react-icons/fa';
import { galleryImages } from '../data/images';
import GalleryLightbox from './GalleryLightbox';
import ScrollAnimate from './ScrollAnimate';
import SectionHeader from './SectionHeader';

const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const openLightbox = (index) => setActiveIndex(index);
  const closeLightbox = () => setActiveIndex(null);

  const goToPrev = () => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev - 1 + galleryImages.length) % galleryImages.length,
    );
  };

  const goToNext = () => {
    setActiveIndex((prev) =>
      prev === null ? null : (prev + 1) % galleryImages.length,
    );
  };

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Gallery"
          title="Moments of"
          highlight="Impact"
          description="A glimpse into the programs, events, and community gatherings that define our journey."
        />

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 lg:gap-6">
          {galleryImages.map((item, index) => (
            <ScrollAnimate
              key={item.id}
              animation="zoom-in"
              delay={index * 80}
            >
              <button
                type="button"
                onClick={() => openLightbox(index)}
                className="group relative aspect-square w-full overflow-hidden rounded-2xl shadow-md"
                aria-label={`View ${item.label}`}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/40" />
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                  <FaExpand className="h-6 w-6 text-white opacity-0 transition-all duration-300 group-hover:scale-110 group-hover:opacity-100" />
                  <p className="translate-y-4 text-center text-sm font-semibold text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.label}
                  </p>
                </div>
              </button>
            </ScrollAnimate>
          ))}
        </div>
      </div>

      <GalleryLightbox
        images={galleryImages}
        activeIndex={activeIndex}
        onClose={closeLightbox}
        onPrev={goToPrev}
        onNext={goToNext}
      />
    </section>
  );
};

export default Gallery;
