import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Send } from 'lucide-react';
import SectionHeading from './SectionHeading';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFocus = (field) => {
    setFocused({ ...focused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!formData[field]) {
      setFocused({ ...focused, [field]: false });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio Contact: ${formData.name}`
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    window.open(
      `mailto:pantmegha195@gmail.com?subject=${subject}&body=${body}`,
      '_self'
    );
  };

  return (
    <section className="contact section" id="contact">
      <div className="grid-bg" />
      <div className="contact__bg-text" aria-hidden="true">
        CONNECT
      </div>

      <div className="container">
        <div className="contact__grid">
          <div className="contact__info">
            <SectionHeading>{"LET'S\nBUILD\nSOMETHING"}</SectionHeading>

            <motion.p
              className="contact__subtitle"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Have a project, idea or opportunity? Let&apos;s talk.
            </motion.p>

            <motion.div
              className="contact__links"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="mailto:pantmegha195@gmail.com"
                className="btn btn--primary"
              >
                Email Me <ArrowUpRight size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/meghapantdev/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                LinkedIn <ArrowUpRight size={16} />
              </a>
              <a
                href="https://github.com/meghapant2006"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--outline"
              >
                GitHub <ArrowUpRight size={16} />
              </a>
            </motion.div>
          </div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="form-group">
              <input
                type="text"
                id="contact-name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                onFocus={() => handleFocus('name')}
                onBlur={() => handleBlur('name')}
                required
                autoComplete="name"
                aria-label="Your name"
              />
              <label
                htmlFor="contact-name"
                className={focused.name || formData.name ? 'form-label--active' : ''}
              >
                Name
              </label>
              <div className="form-line" />
            </div>

            <div className="form-group">
              <input
                type="email"
                id="contact-email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                onFocus={() => handleFocus('email')}
                onBlur={() => handleBlur('email')}
                required
                autoComplete="email"
                aria-label="Your email"
              />
              <label
                htmlFor="contact-email"
                className={focused.email || formData.email ? 'form-label--active' : ''}
              >
                Email
              </label>
              <div className="form-line" />
            </div>

            <div className="form-group">
              <textarea
                id="contact-message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                onFocus={() => handleFocus('message')}
                onBlur={() => handleBlur('message')}
                required
                aria-label="Your message"
              />
              <label
                htmlFor="contact-message"
                className={focused.message || formData.message ? 'form-label--active' : ''}
              >
                Message
              </label>
              <div className="form-line" />
            </div>

            <button type="submit" className="btn btn--primary contact__submit">
              SEND MESSAGE <Send size={16} />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
