import { motion } from 'framer-motion';
import {
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiGithub,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import {
  TbBinaryTree,
  TbCpu,
  TbHierarchy3,
  TbDatabase,
  TbTerminal2,
} from 'react-icons/tb';
import { skillCategories } from '../data/skills';
import SectionHeading from './SectionHeading';
import './Skills.css';

const iconMap = {
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiHtml5,
  SiCss,
  SiNextdotjs,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  VscVscode,
  SiGit,
  SiGithub,
  TbBinaryTree,
  TbCpu,
  TbHierarchy3,
  TbDatabase,
  TbTerminal2,
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <div className="grid-bg" />
      <div className="skills__bg-text" aria-hidden="true">
        SKILLS
      </div>

      <div className="container">
        <SectionHeading>{'MY\nSKILLS'}</SectionHeading>

        <div className="skills__grid">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              className="skills__category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
                delay: catIndex * 0.08,
              }}
            >
              <div className="skills__category-header">
                <span className="skills__category-number">
                  {category.number || `0${catIndex + 1}`}
                </span>
                <h3 className="skills__category-title">{category.title}</h3>
              </div>

              <div className="skills__tags">
                {category.skills.map((skill, skillIndex) => {
                  const IconComponent = iconMap[skill.icon];
                  return (
                    <motion.div
                      key={skill.name}
                      className="skills__tag"
                      style={{ '--skill-color': skill.color }}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: catIndex * 0.05 + skillIndex * 0.04,
                      }}
                      whileHover={{
                        y: -3,
                        scale: 1.04,
                      }}
                    >
                      {IconComponent && (
                        <span
                          className="skills__tag-icon"
                          style={{ color: skill.color }}
                        >
                          <IconComponent />
                        </span>
                      )}
                      <span className="skills__tag-name">{skill.name}</span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
