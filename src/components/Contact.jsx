import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <section className="static-page contact-page">
      <div className="contact-top">
        <img
          src="/assets/headshot.jpg"
          alt="Headshot"
          className="contact-headshot"
        />
        <div>
          <h2>Alex Graham</h2>
          <p>Full Stack Developer</p>
          <a
            href="/assets/alex-graham-cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="cv-link"
          >
            <FontAwesomeIcon icon={faFileAlt} /> View My CV
          </a>
        </div>
      </div>

      <h3 className="section-title">Contact Me</h3>
      <div className="contact-links">
      <ul className="contact-info-list">
        <li>
          <FontAwesomeIcon icon={faEnvelope} />{' '}
          <a href="mailto:you@example.com">alexinbristol@outlook.com</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faPhone} />{' '}
          <a href="tel:+1234567890">07909972919</a>
        </li>
        <li>
          <FontAwesomeIcon icon={faGithub} />{' '}
          <a href="https://github.com/ossidion" target="_blank" rel="noopener noreferrer">
            github.com/ossidion
          </a>
        </li>
        <li>
          <FontAwesomeIcon icon={faLinkedin} />{' '}
          <a href="https://linkedin.com/in/alex-graham-7883297a/" target="_blank" rel="noopener noreferrer">
            linkedin.com/in/alex-graham-7883297a/
          </a>
        </li>
      </ul>
      </div>
      <h3 className="contact-projects">Projects</h3>
      <div className="project-links">
        <a
          href="https://nc-news-alex-graham.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-badge"
        >
          NC News App
        </a>
        <a
          href="https://budgee-nc.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-badge"
        >
          Budgee
        </a>
      </div>
    </section>
  );
};

export default Contact;
