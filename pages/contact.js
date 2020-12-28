import Layout from '../components/Layout/Layout';
import styles from '../styles/contact.module.scss';

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <Layout />
      <div className={styles.contactFirstContainer}>
        <h1>Feel Free to Contact Me!</h1>
      </div>
      <div className={styles.contactSecondContainer}>
        <h1>Contact</h1>
        <p>
          I'm looking for an opportunity to work with you. You can contact me on
          the following platforms.
        </p>
        <span className={styles.spanOne}>
          <h1>
            filipmihajlovski.me
            <a href="http://filipmihajlovski.me">filipmihajlovski.me</a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            LinkedIn
            <a href="https://linkedin.com/in/filip-mihajlovski-68773116b">
              LinkedIn
            </a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            GitHub{' '}
            <a href="https://github.com/philip993?tab=repositories">GitHub</a>
          </h1>
        </span>
      </div>
    </div>
  );
};

export default Contact;
