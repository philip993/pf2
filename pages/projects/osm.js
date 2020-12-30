import styles from '../../styles/osm.module.scss';
import ReactLogo from '../../public/react-js.svg';
import SassLogo from '../../public/sass.svg';
import Layout from '../../components/Layout/Layout';
import { Button } from '@material-ui/core';

const OSM = () => {
  return (
    <div className={styles.osmContainer}>
      <Layout />
      <div className={styles.osmFirstContainer}>
        <h1>OSM - Maps</h1>
        <p>Navigation application</p>
      </div>
      <div className={styles.osmSecondContainer}></div>
      <div className={styles.osmThirdContainer}>
        <h1>Overview</h1>
        <p>
          Now is the 21st century and most of the people use smartphones,
          laptops, pc or some other smart device. Here lies the opportunity of
          OSM - Maps. Since most of the phones you some kind of navigation
          application, we can show them why OSM - Maps is the best choice on the
          market. It's built on top of OpenStreetMap. Some of the options
          including are search for any place of Earth, provides ping point to
          the location. Also there is Navigation system, from starting point to
          the point you searched. You can also search for places of interest
          near a specific place.
        </p>
        <h3>Technology Stack</h3>
        <div className={styles.techStackContainer}>
          <img src={ReactLogo} alt="react" />
          <img src={SassLogo} alt="sass" />
        </div>
      </div>
      <div className={styles.osmFourthContainer}>
        <h1>Problem Definitions</h1>
        <p>In this project I defined three main problems.</p>
        <p>First problem defined was to find external Search API.</p>
        <p>
          As second problem I defined Navigation. Since OpenStreetMap API
          doesn't offer routing services, I had to look for external API
          compatible with OpenStreetMap.
        </p>
        <p>
          Final problem defined in this project was application responsiveness
          to all devices, starting with mobile phones to 4K monitors.
        </p>
      </div>
      <div className={styles.osmFifthContainer}>
        <h1>Solution</h1>
        <p>
          As a solution for the first problem, I used Nominatim API. Nominatim
          API allows anything as search input, starting from street, number,
          place, city etc.
        </p>
        <p>
          For Navigation I used OpenRoutingServices API. Compatible with
          OpenStreetMap, allows best navigation from one place to another. In
          this application, using geolocation to get starting point to the
          desired place User has searched for, offering faster route with steps,
          distance and time. Also with OpenRoutingServices API, I created search
          UI for Place of Interest. User can search, filter and select which
          type of amenity he wants.
        </p>
        <p>
          Using Sass, I managed to create full responsiveness, making this
          application suitable for all devices. Thus, increasing User's
          satisfaction with the application style and design.
        </p>
      </div>
      <div className={styles.osmSixthContainer}>
        <h1>Final Product</h1>
        <p>To view the source code, click on the GitHub link bellow.</p>
        <div className={styles.buttonContainer}>
          <Button className={styles.buttonGithub}>
            <a href="https://github.com/philip993/osm-maps">GitHub</a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OSM;
