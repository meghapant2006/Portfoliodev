import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Mail, Home, Briefcase, User, Code, BookOpen, Trophy, MessageSquare } from 'lucide-react';
import './Hero.css';

const GithubIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const navLinks = [
  { label: 'Home', href: '#hero', icon: Home },
  { label: 'Work', href: '#work', icon: Briefcase },
  { label: 'About', href: '#about', icon: User },
  { label: 'Skills', href: '#skills', icon: Code },
  { label: 'Experience', href: '#experience', icon: BookOpen },
  { label: 'Achievements', href: '#achievements', icon: Trophy },
  { label: 'Contact', href: '#contact', icon: MessageSquare },
];

const heroLines = ['I BUILD', 'DIGITAL', 'EXPERIENCES'];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.5,
    },
  },
};

const lineVariants = {
  hidden: { y: 120, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const fadeUpVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: (delay) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
      delay,
    },
  }),
};

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState('hero');

  const [roleIndex, setRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const roles = ['Full Stack Developer', 'MERN Stack & Python Developer'];
    const typingSpeed = 100;
    const deletingSpeed = 50;
    const delayBetweenRoles = 2000;

    const handleTyping = () => {
      const fullText = roles[roleIndex];
      
      if (!isDeleting) {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length + 1));
        if (currentRoleText.length === fullText.length) {
          setTimeout(() => setIsDeleting(true), delayBetweenRoles);
          return; // Wait before deleting
        }
      } else {
        setCurrentRoleText(fullText.substring(0, currentRoleText.length - 1));
        if (currentRoleText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          return; // Switch to next role
        }
      }
    };

    const timer = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timer);
  }, [currentRoleText, isDeleting, roleIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = ['hero', 'work', 'about', 'skills', 'experience', 'achievements', 'contact'];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMousePos({ x, y });
    };

    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero" id="hero">
      <div className="grid-bg" />

      {/* Animated red glow */}
      <motion.div
        className="hero__glow"
        animate={{
          x: mousePos.x * 40,
          y: mousePos.y * 40,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />
      <div className="hero__glow hero__glow--secondary" />

      <div className="container hero__container">
        <div className="hero__top-bar">
          <a
            href="#"
            className="hero__logo"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            &lt; Megha pant dev /&gt;
          </a>
          <div className="hero__social-horizontal">
            <a href="https://github.com/meghapant2006" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><GithubIcon size={20} /></a>
            <a href="https://www.linkedin.com/in/meghapantdev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedinIcon size={20} /></a>
            <a href="mailto:pantmegha195@gmail.com" aria-label="Email"><Mail size={20} /></a>
          </div>
        </div>

        <div className="hero__row">
          <div className="hero__content">
            {/* Main heading */}
            <motion.h1
              className="hero__title"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {heroLines.map((line, i) => (
                <span key={i} className="hero__title-line-wrapper">
                  <motion.span
                    className="hero__title-line"
                    variants={lineVariants}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </motion.h1>

            {/* Info row */}
            <div className="hero__info">
              <motion.div
                className="hero__identity"
                custom={1.2}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <span className="hero__name">Megha Pant</span>
                <span className="hero__divider">—</span>
                <span className="hero__role">{currentRoleText}<span className="hero__cursor">|</span></span>
              </motion.div>

              <motion.p
                className="hero__intro"
                custom={1.4}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                I&apos;m a Full Stack Web Developer and BCA student at CCS University,
                focused on building modern, responsive and user-focused web
                applications.
              </motion.p>

              <motion.div
                className="hero__actions"
                custom={1.6}
                variants={fadeUpVariants}
                initial="hidden"
                animate="visible"
              >
                <button
                  className="btn btn--primary"
                  onClick={() => scrollTo('work')}
                >
                  View My Work
                </button>
                <a
                  href="/Megha-Pant-Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--outline"
                >
                  Download Resume
                </a>
                <button
                  className="btn btn--ghost"
                  onClick={() => scrollTo('contact')}
                >
                  Let&apos;s Talk →
                </button>
              </motion.div>
            </div>
          </div>

          {/* Profile Photo */}
          <motion.div
            className="hero__photo-wrapper"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.8 }}
          >
            <div className="hero__photo-ring" />
            <div className="hero__photo-ring hero__photo-ring--outer" />
            <img
              src="/images/profile.jpg"
              alt="Megha Pant — Full Stack Web Developer"
              className="hero__photo"
            />
            <div className="hero__photo-glow" />

            <div className="hero__nav-vertical">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  className={`hero__nav-item ${activeSection === link.href.substring(1) ? 'hero__nav-item--active' : ''}`}
                  onClick={() => scrollTo(link.href.substring(1))}
                  aria-label={link.label}
                >
                  <link.icon size={20} />
                  <span className="hero__tooltip">{link.label}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="hero__scroll"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          onClick={() => scrollTo('work')}
        >
          <span className="hero__scroll-text">Scroll</span>
          <ChevronDown className="hero__scroll-icon" size={20} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
