import styles from '../styles/IndexText.module.scss';
const IndexText = () => {
  return (
    <div className={styles.indexContainer}>
      <h1>
        Hello.
        <a href="/about">About</a>
      </h1>
      <h1>
        I am
        <a href="/projects">Projects</a>
      </h1>
      <h1>
        Filip <a href="/contact">Contact</a>
      </h1>
    </div>
  );
};

export default IndexText;
