import styles from '../../styles/IndexPage.module.scss';
import { useState } from 'react';

const IndexPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [isActiveToo, setIsActiveToo] = useState(false);
  const handleTouch = () => {
    setIsActive(true);
    setIsActiveToo(true);
    console.log(isActive);
  };
  return (
    <div className={styles.indexContainer}>
      <div
        className={!isActive ? styles.indexCover : styles.indexCoverOff}
        onClick={handleTouch}
      ></div>
      <div className={styles.indexFirstContainer}>
        <span className={styles.spanOne}>
          <h1 className={isActive ? styles.mobile : styles.mobileNot}>
            Hello.
            <a
              href="/about"
              className={
                isActiveToo ? styles.mobileActive : styles.mobileNotActive
              }
            >
              About
            </a>
          </h1>
        </span>
        <span className={styles.spanTwo}>
          <h1 className={isActive ? styles.mobile : styles.mobileNot}>
            I am
            <a
              href="/projects"
              className={
                isActiveToo ? styles.mobileActive : styles.mobileNotActive
              }
            >
              Projects
            </a>
          </h1>
        </span>
        <span className={styles.spanThree}>
          <h1 className={isActive ? styles.mobile : styles.mobileNot}>
            Filip{' '}
            <a
              href="/contact"
              className={
                isActiveToo ? styles.mobileActive : styles.mobileNotActive
              }
            >
              Contact
            </a>
          </h1>
        </span>
      </div>
      <div className={styles.indexSecondContainer}>
        <img src={require('../../public/pf.png')} alt="fm" />
      </div>
      <div
        className={
          !isActive ? styles.indexThirdContainer : styles.indexThirdContainerOff
        }
      >
        <h4>Tap anywhere</h4>
      </div>
    </div>
  );
};

export default IndexPage;
