import styles from '../styles/projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.projectFirstContainer}>
        <span className={styles.spanOne}>
          <h1>
            E-Commerce
            <a href="/ecommerce">E-Commerce</a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            OSM-Maps
            <a href="/">OSM-Maps</a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            Employee Records <a href="/">Employee Records</a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            Accounting <a href="/">Accounting </a>
          </h1>
        </span>
      </div>
    </div>
  );
};

export default Projects;
