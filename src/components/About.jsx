import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import './About.css';

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="grid-bg" />

      {/* Large faded background text */}
      <div className="about__bg-text" aria-hidden="true">
        ABOUT
      </div>

      <div className="container">
        <div className="about__grid">
          <div className="about__heading-col">
            <SectionHeading>{'ABOUT\nME'}</SectionHeading>

            {/* Decorative element */}
            <motion.div
              className="about__decoration"
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              <div className="about__circle" />
              <div className="about__grid-pattern">
                {Array.from({ length: 25 }).map((_, i) => (
                  <div key={i} className="about__grid-dot" />
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            className="about__content"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <p className="about__text">
              I&apos;m a <span className="accent-text">Full Stack Web Developer</span> and
              BCA student at CCS University with hands-on experience building
              modern, responsive web applications.
            </p>
            <p className="about__text">
              I specialize in JavaScript and the{' '}
              <span className="accent-text">MERN stack</span>, including
              MongoDB, Express.js, React.js and Node.js, with additional
              experience in Next.js and Python.
            </p>
            <p className="about__text">
              I have a strong foundation in frontend development, backend API
              integration, database management and software development
              fundamentals.
            </p>
            <p className="about__text">
              I focus on building practical, user-focused solutions through
              real-world projects and continuous technical development.
            </p>

            <div className="about__details">
              <div className="about__detail">
                <span className="about__detail-label">Location</span>
                <span className="about__detail-value">Delhi, India</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Education</span>
                <span className="about__detail-value">BCA, CCS University</span>
              </div>
              <div className="about__detail">
                <span className="about__detail-label">Focus</span>
                <span className="about__detail-value">MERN Stack</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
