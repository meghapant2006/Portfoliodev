import { motion } from 'framer-motion';
import { MapPin, Calendar, Briefcase } from 'lucide-react';
import { experience } from '../data/experience';
import SectionHeading from './SectionHeading';
import './Experience.css';

const Experience = () => {
  const exp = experience[0];

  return (
    <section className="experience section" id="experience">
      <div className="grid-bg" />
      <div className="container">
        <SectionHeading>{'EXPERIENCE'}</SectionHeading>

        <motion.div
          className="experience__card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <div className="experience__timeline">
            <div className="experience__timeline-line" />
            <div className="experience__timeline-dot" />
          </div>

          <div className="experience__content">
            <div className="experience__header">
              <h3 className="experience__role">{exp.role}</h3>
              <div className="experience__meta">
                <span className="experience__meta-item">
                  <Briefcase size={14} />
                  {exp.company}
                </span>
                <span className="experience__meta-item">
                  <MapPin size={14} />
                  {exp.location}
                </span>
                <span className="experience__meta-item experience__meta-item--accent">
                  <Calendar size={14} />
                  {exp.date}
                </span>
              </div>
            </div>

            <ul className="experience__points">
              {exp.points.map((point, i) => (
                <motion.li
                  key={i}
                  className="experience__point"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.3 + i * 0.08,
                  }}
                >
                  <span className="experience__point-bullet" />
                  {point}
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
