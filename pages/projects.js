import Layout from '../components/Layout/Layout';
import styles from '../styles/projects.module.scss';

const Projects = () => {
  return (
    <div className={styles.projectContainer}>
      <Layout />
      <div className={styles.projectFirstContainer}>
        <span className={styles.spanOne}>
          <h1>
            E-Commerce
            <a href="/projects/ecommerce">E-Commerce</a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            OSM-Maps
            <a href="/projects/osm">OSM-Maps</a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            Employee Records <a href="/projects/records">Employee Records</a>
          </h1>
        </span>
        <span className={styles.spanOne}>
          <h1>
            Accounting <a href="/projects/accounting">Accounting </a>
          </h1>
        </span>
      </div>
    </div>
  );
};

export default Projects;
