import styles from "../styles/osm.module.scss";
import ReactLogo from "../public/react-js.svg";
import SassLogo from "../public/sass.svg";

const OSM = () => {
  return (
    <div className={styles.osmContainer}>
      <div className={styles.osmFirstContainer}>
        <h1>OSM - Maps</h1>
        <p>Navigation application</p>
      </div>
      <div className={styles.osmSecondContainer}></div>
      <div className={styles.osmThirdContainer}>
        <h1>Overview</h1>
        <p>
          OSM - Maps is built on top of OpenStreetMap. Allowing users to Search
          for anyplace on Map and create Navigation Route for it. Also User can
          search for specific Place of Interest.
        </p>
        <p>Technology Stack</p>
        <div className={styles.techStackContainer}>
          <img src={ReactLogo} alt="react" />
          <img src={SassLogo} alt="sass" />
        </div>
      </div>
      <div className={styles.osmFourthContainer}>
        <h1>Problem Definitions</h1>
        <p>In this project I defined two main problem.</p>
        <p>First problem defined was to find external Search API.</p>
        <p>
          As second problem I defined Navigation. Since OpenStreetMap API
          doesn't offer routing services, I had to look for external API
          compatible with OpenStreetMap.
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
      </div>
      <div className={styles.osmSixthContainer}>
        <h1>Final Product</h1>
      </div>
    </div>
  );
};

export default OSM;
