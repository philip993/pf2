import styles from '../../styles/IndexText.module.scss';
const IndexText = () => {
  return (
    <div className={styles.indexContainer}>
      <span className={styles.spanOne}>
        <h1>
          Hello.
          <a href="/about">About</a>
        </h1>
      </span>
      <span className={styles.spanTwo}>
        <h1>
          I am
          <a href="/projects">Projects</a>
        </h1>
      </span>
      <span className={styles.spanThree}>
        <h1>
          Filip <a href="/contact">Contact</a>
        </h1>
      </span>
    </div>
  );
};

export default IndexText;
