import { motion } from 'framer-motion';

const SectionHeading = ({ children, light = false, className = '' }) => {
  const words = typeof children === 'string' ? children.split('\n') : [children];

  return (
    <motion.h2
      className={`section-heading ${light ? 'section-heading--light' : ''} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
    >
      {words.map((word, i) => (
        <span key={i} className="section-heading__line-wrapper">
          <motion.span
            className="section-heading__line"
            variants={{
              hidden: { y: '100%', opacity: 0 },
              visible: {
                y: 0,
                opacity: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                },
              },
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </motion.h2>
  );
};

export default SectionHeading;
