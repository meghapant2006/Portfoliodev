import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';
import SectionHeading from './SectionHeading';
import './Projects.css';

const Projects = () => {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e, cardRef) => {
    if (!cardRef) return;
    const rect = cardRef.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  return (
    <section className="projects section" id="work">
      <div className="grid-bg" />
      <div className="container">
        <div className="projects__header">
          <SectionHeading>{'MY\nWORK'}</SectionHeading>
          <motion.p
            className="projects__subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A selection of projects I&apos;ve built and designed.
          </motion.p>
        </div>

        <div className="projects__grid">
          {projects.map((project, index) => {
            let cardRef = null;
            return (
              <motion.article
                key={project.id}
                className={`project-card ${hoveredId === project.id ? 'project-card--hovered' : ''}`}
                ref={(el) => (cardRef = el)}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: index * 0.1,
                }}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => {
                  setHoveredId(null);
                  setMousePos({ x: 0, y: 0 });
                }}
                onMouseMove={(e) => handleMouseMove(e, cardRef)}
                style={
                  hoveredId === project.id
                    ? {
                        transform: `perspective(1000px) rotateY(${mousePos.x * 0.3}deg) rotateX(${-mousePos.y * 0.3}deg)`,
                      }
                    : {}
                }
              >
                <div className="project-card__image-wrapper">
                  <div
                    className="project-card__image"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="project-card__image-overlay" />
                  </div>
                </div>

                <div className="project-card__content">
                  <h3 className="project-card__title">{project.title}</h3>
                  <p className="project-card__description">
                    {project.description}
                  </p>

                  <div className="project-card__tags">
                    {project.tags.map((tag) => (
                      <span key={tag} className="project-card__tag">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-card__link"
                    data-placeholder={project.url === '#' ? 'true' : undefined}
                  >
                    VIEW PROJECT <ArrowUpRight size={16} />
                  </a>
                </div>

                <div className="project-card__accent" />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
