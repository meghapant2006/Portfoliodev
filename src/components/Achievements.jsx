import { motion } from 'framer-motion';
import { achievements } from '../data/achievements';
import SectionHeading from './SectionHeading';
import './Achievements.css';

const Achievements = () => {
  return (
    <section className="achievements section" id="achievements">
      <div className="grid-bg" />
      <div className="container">
        <SectionHeading>{'ACHIEVEMENTS'}</SectionHeading>

        <div className="achievements__grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.number}
              className="achievement-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.7,
                ease: [0.16, 1, 0.3, 1],
                delay: index * 0.15,
              }}
            >
              <motion.span
                className="achievement-card__number"
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.2 + index * 0.15,
                }}
              >
                {achievement.number}
              </motion.span>

              <div className="achievement-card__content">
                <span className="achievement-card__award">
                  {achievement.award}
                </span>
                <h3 className="achievement-card__title">
                  {achievement.title}
                </h3>
                <p className="achievement-card__description">
                  {achievement.description}
                </p>
              </div>

              <div className="achievement-card__accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
