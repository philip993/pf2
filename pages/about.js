import styles from '../styles/about.module.scss';
import { Button } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronDown,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/Layout/Layout';

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <Layout />
      <div className={styles.aboutFirstContainer}>
        <h1>Full Stack JavaScript Developer</h1>
      </div>
      <div className={styles.aboutSecondContainer}></div>
      <div className={styles.aboutThirdContainer}>
        <h1>About</h1>
        <p>
          Hello and welcome to my Portfolio website. My name is Filip
          Mihajlovski. I'm 27 years old, from Kumanovo, N. Macedonia. I'm
          aspiring Full Stack JavaScript Developer. Been building personal
          projects for more than 2.5 years.
        </p>
        <p>
          Currently working in the financial accounting field, with little over
          3.5 years of experience. I'm responsible for the managing accounting
          and finance for subsidiary of an international groupation.
        </p>
        <p>
          My degree in Management allows me better to understand the working
          processes and dynamics of the team, following rules and strategies, as
          well as implementation of best practises in the work. I always try to
          looks at the bigger picture, find the anomalies and prevent the
          problems before happening.
        </p>
        <p>
          My working process consists of brainstorming ideas, taking quick
          sketches and notes. Then I proceed with creating wireframes, mock-ups
          and prototypes in Figma or Invision. Making detailed plans for
          features in Trello and finally proceed to code. Taking these steps,
          enables me to plan my time and resources and prevents me wasting
          valuable time in unexpected errors and buggs.
        </p>
        <p>
          My fondness for challenging myself and learning new things, allowed me
          to transition from Accounting field to IT field. My desire for more
          knowledge has pushed me onto the path in programming, firstly in
          Front-end development, then continued with Node.js in Back-end
          development and finally becoming a Full Stack Developer.
        </p>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonCv}>
            View CV{' '}
            {/* <FontAwesomeIcon icon={faChevronRight} className={styles.icon} /> */}
          </Button>
          {/* <Button className={styles.buttonDownload}>
            Download{' '}
            <FontAwesomeIcon icon={faChevronDown} className={styles.icon} />
          </Button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
