import ScrollAnimate from './ScrollAnimate';

const SectionHeader = ({
  label,
  title,
  highlight,
  description,
  className = 'mb-16',
}) => (
  <ScrollAnimate animation="fade-up" className={`text-center ${className}`}>
    {label && (
      <span className="mb-3 inline-block text-sm font-semibold uppercase tracking-widest text-emerald-600">
        {label}
      </span>
    )}
    <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">
      {title}{' '}
      {highlight && <span className="text-emerald-600">{highlight}</span>}
    </h2>
    {description && (
      <p className="mx-auto max-w-2xl text-gray-600">{description}</p>
    )}
    <div
      className={`mx-auto h-1 w-20 rounded-full bg-gradient-to-r from-emerald-500 to-amber-500 ${description ? 'mt-4' : ''}`}
    />
  </ScrollAnimate>
);

export default SectionHeader;
