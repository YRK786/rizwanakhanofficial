import { motion } from 'framer-motion';

const animations = {
  'fade-up': {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-down': {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0 },
  },
  'fade-left': {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-right': {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  },
  'fade-in': {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  'zoom-in': {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 },
  },
  'flip-up': {
    hidden: { opacity: 0, rotateX: 30, y: 40 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
};

const ScrollAnimate = ({
  children,
  animation = 'fade-up',
  delay = 0,
  duration = 700,
  once = true,
  className = '',
  as = 'div',
}) => {
  const Component = motion[as] ?? motion.div;
  const variants = animations[animation] ?? animations['fade-up'];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px', amount: 0.15 }}
      variants={variants}
      transition={{
        duration: duration / 1000,
        delay: delay / 1000,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
    >
      {children}
    </Component>
  );
};

export default ScrollAnimate;
